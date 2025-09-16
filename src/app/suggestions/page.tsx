
import { SuggestionList } from "@/components/suggestions/suggestion-list";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function SuggestionsPage() {
  return (
    <div className="container max-w-4xl py-8">
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
