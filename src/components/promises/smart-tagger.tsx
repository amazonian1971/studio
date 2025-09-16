"use client"

import { suggestTagsAction } from "@/app/actions"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Sparkles, Plus } from "lucide-react"
import { useState, useTransition } from "react"

interface SmartTaggerProps {
  title: string
  description: string
  onTagsAdded: (tags: string[]) => void
}

export function SmartTagger({
  title,
  description,
  onTagsAdded,
}: SmartTaggerProps) {
  const [isPending, startTransition] = useTransition()
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [usedSuggestions, setUsedSuggestions] = useState<string[]>([])

  const handleSuggestTags = () => {
    startTransition(async () => {
      const result = await suggestTagsAction(title, description)
      setSuggestions(result.relevantTags)
      setUsedSuggestions([])
    })
  }

  const handleAddTag = (tag: string) => {
    onTagsAdded([tag])
    setUsedSuggestions((prev) => [...prev, tag])
  }

  const availableSuggestions = suggestions.filter(s => !usedSuggestions.includes(s));

  return (
    <div className="space-y-4 rounded-lg border bg-card p-4">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-sm">Smart Tagging</h4>
        <Button
          type="button"
          size="sm"
          onClick={handleSuggestTags}
          disabled={isPending || !title || !description}
        >
          <Sparkles className="mr-2 h-4 w-4" />
          {isPending ? "Analyzing..." : "Suggest Tags"}
        </Button>
      </div>
      {isPending && (
         <div className="text-sm text-muted-foreground">AI is thinking...</div>
      )}
      {!isPending && availableSuggestions.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {availableSuggestions.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="cursor-pointer transition-colors hover:bg-accent hover:text-accent-foreground"
              onClick={() => handleAddTag(tag)}
            >
              <Plus className="mr-1 h-3 w-3" />
              {tag}
            </Badge>
          ))}
        </div>
      )}
      {!isPending && suggestions.length === 0 && (
        <p className="text-sm text-muted-foreground">
          Enter a title and description, then click "Suggest Tags" for AI-powered recommendations.
        </p>
      )}
    </div>
  )
}
