"use client"

import { mockPromises } from "@/lib/placeholder-data"
import { PromiseCard } from "./promise-card"
import { useEffect, useState } from "react";
import type { Promise } from "@/lib/types";

// Function to shuffle an array
const shuffle = (array: Promise[]) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}


export function PromiseFeed() {
  const [shuffledPromises, setShuffledPromises] = useState<Promise[]>([]);
  
  useEffect(() => {
    // We shuffle the promises on the client-side to ensure a different order on each visit
    // without causing a server-client mismatch.
    setShuffledPromises(shuffle(mockPromises));
  }, []);

  if (shuffledPromises.length === 0) {
    // Render nothing on the server and during the initial client-side render
    // to prevent hydration mismatch. The shuffled list will appear after the effect runs.
    return null;
  }

  return (
    <div className="space-y-6">
      {shuffledPromises.map((promise) => (
        <PromiseCard key={promise.id} promise={promise} />
      ))}
    </div>
  )
}
