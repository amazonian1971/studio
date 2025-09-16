
"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "../ui/button"
import { Plus } from "lucide-react"
import { CreatePromiseForm } from "./create-promise-form"
import { useState, useEffect } from "react"
import { useIsMobile } from "@/hooks/use-mobile"

export function CreatePromiseButton() {
  const [open, setOpen] = useState(false)
  const isMobile = useIsMobile()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])


  const form = <CreatePromiseForm setOpen={setOpen} />;

  if (!isClient) {
    // Render a disabled placeholder on the server to avoid hydration errors
    // and prevent a 404 on the root page.
    return (
       <Button
        size="icon"
        className="fixed bottom-8 right-8 h-16 w-16 rounded-full shadow-2xl"
        disabled
      >
        <Plus className="h-8 w-8" />
        <span className="sr-only">Create a new promise</span>
      </Button>
    )
  }

  if (isMobile) {
    return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            size="icon"
            className="fixed bottom-8 right-8 h-16 w-16 rounded-full shadow-2xl"
          >
            <Plus className="h-8 w-8" />
            <span className="sr-only">Create a new promise</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="overflow-y-auto">
          <SheetHeader>
            <SheetTitle className="text-2xl">Make a New Promise</SheetTitle>
            <SheetDescription>
              What will you commit to? Share your goal with the world.
            </SheetDescription>
          </SheetHeader>
          <div className="py-4">
            {form}
          </div>
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size="icon"
          className="fixed bottom-8 right-8 h-16 w-16 rounded-full shadow-2xl"
        >
          <Plus className="h-8 w-8" />
          <span className="sr-only">Create a new promise</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Make a New Promise</DialogTitle>
          <DialogDescription>
            What will you commit to? Share your goal with the world.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          {form}
        </div>
      </DialogContent>
    </Dialog>
  )
}
