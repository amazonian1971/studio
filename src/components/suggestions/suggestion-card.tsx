
"use client"

import type { UserSuggestion } from "@/lib/types"
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
import { UserPlus } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

interface SuggestionCardProps {
  suggestion: UserSuggestion
}

export function SuggestionCard({ suggestion }: SuggestionCardProps) {
  const { toast } = useToast()
  const [requested, setRequested] = useState(false);

  const handleAddFriend = () => {
    // Here we would normally call a server action to send a friend request.
    // For now, we'll just simulate it.
    setRequested(true);
    toast({
        title: "Friend Request Sent",
        description: `A friend request has been sent to ${suggestion.user.name}.`,
    })
  }

  const userInitials = suggestion.user.name.split(" ").map((n) => n[0]).join("")

  return (
    <Card className="w-full transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] hover:scale-105 hover:border-primary/50 flex flex-col">
      <CardHeader className="items-center text-center">
        <Avatar className="h-20 w-20 mb-2 border-2 border-primary/50">
          <AvatarImage src={suggestion.user.avatarUrl} alt={suggestion.user.name} data-ai-hint="person portrait"/>
          <AvatarFallback className="text-3xl">{userInitials}</AvatarFallback>
        </Avatar>
        <CardTitle>{suggestion.user.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-center">
          {suggestion.reason}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button 
            className="w-full" 
            onClick={handleAddFriend}
            disabled={requested}
        >
          <UserPlus className="mr-2 h-4 w-4" />
          {requested ? "Request Sent" : "Add Friend"}
        </Button>
      </CardFooter>
    </Card>
  )
}
