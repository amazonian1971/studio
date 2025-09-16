
import { SuggestionList } from "@/components/suggestions/suggestion-list";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function SuggestionsPage() {
  return (
    <div className="container max-w-4xl py-8">
        <div className="mb-6">
            <Button asChild variant="ghost" className="mb-4">
                <Link href="/feed">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Feed
                </Link>
            </Button>
        </div>
        <Card className="mb-8">
            <CardHeader>
                <CardTitle className="text-3xl font-bold">People You May Know</CardTitle>
                <CardDescription>
                    Suggestions based on shared groups, similar promises, and more.
                </CardDescription>
            </CardHeader>
        </Card>
        <SuggestionList />
    </div>
  );
}
