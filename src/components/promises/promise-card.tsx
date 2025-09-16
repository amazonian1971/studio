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
import { Badge } from "@/components/ui/badge"
import { Calendar, Share2 } from "lucide-react"
import { format, formatDistanceToNow } from "date-fns"
import { useToast } from "@/hooks/use-toast"

interface PromiseCardProps {
  promise: Promise
}

export function PromiseCard({ promise }: PromiseCardProps) {
  const { toast } = useToast()

  const handleShare = () => {
    const url = `${window.location.origin}/promise/${promise.id}`
    navigator.clipboard.writeText(url)
    toast({
      title: "Link Copied!",
      description: "Promise link copied to your clipboard.",
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
        <CardTitle className="text-xl font-headline">{promise.title}</CardTitle>
        <CardDescription>{promise.description}</CardDescription>
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="mr-2 h-4 w-4" />
          <span>Deadline: {format(promise.deadline, "PPP")}</span>
        </div>
      </CardContent>
      <CardFooter className="flex-col items-start gap-4">
        <div className="flex flex-wrap gap-2">
          {promise.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              #{tag}
            </Badge>
          ))}
           <Badge variant="outline">{promise.category}</Badge>
        </div>
        <Button variant="ghost" size="sm" onClick={handleShare}>
          <Share2 className="mr-2 h-4 w-4" />
          Share
        </Button>
      </CardFooter>
    </Card>
  )
}
