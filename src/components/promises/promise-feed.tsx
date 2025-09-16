import { mockPromises } from "@/lib/placeholder-data"
import { PromiseCard } from "./promise-card"

export function PromiseFeed() {
  const promises = mockPromises
  return (
    <div className="space-y-6">
      {promises.map((promise) => (
        <PromiseCard key={promise.id} promise={promise} />
      ))}
    </div>
  )
}
