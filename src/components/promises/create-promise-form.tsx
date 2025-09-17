
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { CalendarIcon, Loader2, Image as ImageIcon, X } from "lucide-react"
import { format } from "date-fns"
import { createPromiseAction } from "@/app/actions"
import { useTransition, useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { Badge } from "../ui/badge"
import { SmartTagger } from "./smart-tagger"
import { categories } from "@/lib/categories"
import Image from "next/image"

const formSchema = z.object({
  title: z.string().min(5, {
    message: "Title must be at least 5 characters.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  deadline: z.date({
    required_error: "A deadline is required.",
  }),
  category: z.string({
    required_error: "Please select a category.",
  }),
  tags: z.array(z.string()).optional(),
  images: z.custom<File[]>().optional(),
})

export function CreatePromiseForm({ setOpen }: { setOpen: (open: boolean) => void }) {
  const [isPending, startTransition] = useTransition()
  const { toast } = useToast()
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      tags: [],
      images: [],
    },
  })

  const watchTitle = form.watch("title");
  const watchDescription = form.watch("description");

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newFiles = Array.from(files);
      form.setValue("images", [...(form.getValues("images") || []), ...newFiles]);

      const newPreviews = newFiles.map(file => URL.createObjectURL(file));
      setImagePreviews(prev => [...prev, ...newPreviews]);
    }
  };

  const removeImage = (index: number) => {
    const currentImages = form.getValues("images") || [];
    const updatedImages = currentImages.filter((_, i) => i !== index);
    form.setValue("images", updatedImages);

    const updatedPreviews = imagePreviews.filter((_, i) => i !== index);
    setImagePreviews(updatedPreviews);
  };


  function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = new FormData()
    formData.append("title", values.title)
    formData.append("description", values.description)
    formData.append("deadline", values.deadline.toISOString())
    formData.append("category", values.category)
    formData.append("tags", (values.tags ?? []).join(","))
    // NOTE: In a real app, you'd upload images to a service like Firebase Storage
    // and then pass the URLs. For now, we're not uploading.
    console.log("Images to upload: ", values.images);

    startTransition(async () => {
      const result = await createPromiseAction(formData)
      if (result.success) {
        toast({ title: "Success!", description: "Your promise has been created." })
        setOpen(false)
        // In a real app, you would likely trigger a re-fetch of the promises list
      } else {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: result.error || "There was a problem with your request.",
        })
      }
    })
  }
  
  const handleTagsChange = (newTags: string[]) => {
    const currentTags = form.getValues("tags") || [];
    const updatedTags = [...new Set([...currentTags, ...newTags])];
    form.setValue("tags", updatedTags, { shouldValidate: true });
  }

  const removeTag = (tagToRemove: string) => {
    const currentTags = form.getValues("tags") || [];
    form.setValue("tags", currentTags.filter(tag => tag !== tagToRemove));
  }


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-headline">Promise Title</FormLabel>
              <FormControl>
                <Input placeholder="e.g., Run a 5k marathon by December" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-headline">Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us more about your promise..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FormField
            control={form.control}
            name="deadline"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="font-headline">Deadline</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date < new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-headline">Category</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {Object.keys(categories).map((category) => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="images"
          render={() => (
            <FormItem>
                <FormLabel className="font-headline">Add Images</FormLabel>
                <FormControl>
                   <Input type="file" multiple onChange={handleImageChange} accept="image/*" className="cursor-pointer"/>
                </FormControl>
                 {imagePreviews.length > 0 && (
                  <div className="mt-4 grid grid-cols-3 gap-4">
                    {imagePreviews.map((src, index) => (
                      <div key={index} className="relative">
                        <Image
                          src={src}
                          alt={`Preview ${index + 1}`}
                          width={150}
                          height={150}
                          className="rounded-md object-cover w-full aspect-square"
                        />
                        <Button
                          type="button"
                          variant="destructive"
                          size="icon"
                          className="absolute top-1 right-1 h-6 w-6"
                          onClick={() => removeImage(index)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
                <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-headline">Tags</FormLabel>
              <FormControl>
                <div>
                  <SmartTagger 
                    title={watchTitle} 
                    description={watchDescription} 
                    onTagsAdded={handleTagsChange} 
                  />
                  <div className="flex flex-wrap gap-2 mt-2">
                    {field.value?.map(tag => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                        <button type="button" onClick={() => removeTag(tag)} className="ml-1.5 text-muted-foreground hover:text-foreground">
                          &times;
                        </button>
                      </Badge>
                    ))}
                  </div>
                 </div>
              </FormControl>
              <FormDescription>
                AI can suggest tags based on your title and description. You can also add your own.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending} className="w-full bg-gradient-to-r from-primary via-primary/80 to-yellow-600">
          {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Make Promise
        </Button>
      </form>
    </Form>
  )
}
