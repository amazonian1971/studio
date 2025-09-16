
"use client"

import type { Promise } from "@/lib/types"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Calendar, MessageSquare, Share2, Copy, MessageCircle } from "lucide-react"
import { format, formatDistanceToNow } from "date-fns"
import { useToast } from "@/hooks/use-toast"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface PromiseCardProps {
  promise: Promise
}

export function PromiseCard({ promise }: PromiseCardProps) {
  const { toast } = useToast()

  const promiseUrl = typeof window !== 'undefined' ? `${window.location.origin}/promise/${promise.id}` : '';
  const shareText = encodeURIComponent(`Check out this promise on TrusTNet: "${promise.title}" 👇\n${promiseUrl}`);
  const whatsappLink = `https://wa.me/?text=${shareText}`;
  const smsLink = `sms:?&body=${shareText}`;


  const handleCopy = () => {
    navigator.clipboard.writeText(promiseUrl)
    toast({
      title: "Link Copied!",
      description: "Promise link copied to your clipboard.",
    })
  }
  
  const handleReply = () => {
    toast({
        title: "Coming Soon!",
        description: "The ability to reply and comment on promises is on its way."
    })
  }

  const authorInitials = promise.author.name.split(" ").map((n) => n[0]).join("")

  return (
    <Card className="w-full transition-shadow duration-300 hover:shadow-lg">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src={promise.author.avatarUrl} alt={promise.author.name} data-ai-hint="person portrait"/>
            <AvatarFallback>{authorInitials}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">{promise.author.name}</p>
            <p className="text-sm text-muted-foreground">
              {formatDistanceToNow(promise.createdAt, { addSuffix: true })}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {promise.imageURLs && promise.imageURLs.length > 0 && (
          <Carousel className="w-full rounded-lg overflow-hidden">
            <CarouselContent>
              {promise.imageURLs.map((url, index) => (
                <CarouselItem key={index}>
                  <div className="relative aspect-video">
                    <Image
                      src={url}
                      alt={`Promise image ${index + 1}`}
                      fill
                      className="object-cover"
                      data-ai-hint="promise image"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {promise.imageURLs.length > 1 && (
              <>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </>
            )}
          </Carousel>
        )}
        <CardTitle className="text-xl font-headline">{promise.title}</CardTitle>
        <CardDescription>{promise.description}</CardDescription>
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="mr-2 h-4 w-4" />
          <span>Deadline: {format(promise.deadline, "PPP")}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {promise.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              #{tag}
            </Badge>
          ))}
           <Badge variant="outline">{promise.category}</Badge>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-start gap-2">
        <Button variant="ghost" size="sm" onClick={handleReply}>
            <MessageSquare className="mr-2 h-4 w-4" />
            Reply
        </Button>
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
                 <DropdownMenuItem onClick={handleCopy}>
                    <Copy className="mr-2 h-4 w-4" />
                    <span>Copy Link</span>
                </DropdownMenuItem>
                 <DropdownMenuItem asChild>
                     <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <svg className="mr-2 h-4 w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5c-.1 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>
                        <span>WhatsApp</span>
                    </a>
                </DropdownMenuItem>
                 <DropdownMenuItem asChild>
                    <a href={smsLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <MessageCircle className="mr-2 h-4 w-4" />
                       <span>SMS</span>
                    </a>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
      </CardFooter>
    </Card>
  )
}
