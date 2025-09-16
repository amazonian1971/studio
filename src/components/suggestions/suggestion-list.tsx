
"use client"

import { useEffect, useState } from "react";
import { getSuggestionsAction } from "@/app/actions";
import { SuggestionCard } from "./suggestion-card";
import type { UserSuggestion } from "@/lib/types";
import { Skeleton } from "../ui/skeleton";

export function SuggestionList() {
    const [suggestions, setSuggestions] = useState<UserSuggestion[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSuggestions = async () => {
            setLoading(true);
            const result = await getSuggestionsAction();
            setSuggestions(result);
            setLoading(false);
        };
        fetchSuggestions();
    }, []);

    if (loading) {
        return (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[...Array(3)].map((_, i) => (
                    <div key={i} className="flex flex-col space-y-3">
                        <Skeleton className="h-48 w-full rounded-xl" />
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-3/4" />
                            <Skeleton className="h-4 w-1/2" />
                        </div>
                    </div>
                ))}
            </div>
        );
    }
    
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {suggestions.map((suggestion) => (
        <SuggestionCard key={suggestion.user.id} suggestion={suggestion} />
      ))}
    </div>
  )
}
