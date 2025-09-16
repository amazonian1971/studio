
"use client"

import { mockUserSuggestions } from "@/lib/placeholder-data"
import { SuggestionCard } from "./suggestion-card";

export function SuggestionList() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {mockUserSuggestions.map((suggestion) => (
        <SuggestionCard key={suggestion.user.id} suggestion={suggestion} />
      ))}
    </div>
  )
}
