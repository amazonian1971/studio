"use client"

import { CreatePromiseButton } from "@/components/promises/create-promise-button";
import { PromiseFeed } from "@/components/promises/promise-feed";

export default function FeedPage() {
  return (
    <div className="container max-w-3xl py-8">
      <PromiseFeed />
      <CreatePromiseButton />
    </div>
  );
}
