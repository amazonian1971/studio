
"use client"

import { CreatePromiseButton } from "@/components/promises/create-promise-button";
import { PromiseFeed } from "@/components/promises/promise-feed";
import { InviteFriends } from "@/components/invites/invite-friends";

export default function FeedPage() {
  return (
    <div className="container max-w-4xl py-8 space-y-8">
      <InviteFriends />
      <PromiseFeed />
      <CreatePromiseButton />
    </div>
  );
}
