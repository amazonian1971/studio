import { PromiseCard } from "@/components/promises/promise-card";
import { mockPromises } from "@/lib/placeholder-data";
import { notFound } from "next/navigation";

export default function SinglePromisePage({ params }: { params: { id: string } }) {
  const promise = mockPromises.find(p => p.id === params.id);

  if (!promise) {
    notFound();
  }

  return (
    <div className="container max-w-3xl py-8">
      <PromiseCard promise={promise} />
    </div>
  );
}
