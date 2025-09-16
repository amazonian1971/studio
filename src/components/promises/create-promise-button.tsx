"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "../ui/button"
import { Plus } from "lucide-react"
import { CreatePromiseForm } from "./create-promise-form"
import { useState } from "react"

export function CreatePromiseButton() {
  const [open, setOpen] = useState(false)
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
          <CreatePromiseForm setOpen={setOpen} />
        </div>
      </DialogContent>
    </Dialog>
  )
}
