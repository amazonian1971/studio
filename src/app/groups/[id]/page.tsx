
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PromiseCard } from "@/components/promises/promise-card";
import { mockGroups, mockPromises, mockUsers } from "@/lib/placeholder-data";
import { Lock, Settings, UserPlus, Users } from "lucide-react";
import { notFound } from "next/navigation";

export default function SingleGroupPage({ params }: { params: { id: string } }) {
  const group = mockGroups.find(g => g.id === params.id);
  
  if (!group) {
    notFound();
  }

  const groupPromises = mockPromises.filter(p => p.groupId === group.id);

  return (
    <div className="container max-w-4xl py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
           <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2 mb-2">
                {group.isPublic ? <Users className="h-6 w-6 text-muted-foreground" /> : <Lock className="h-6 w-6 text-muted-foreground" />}
                <h1 className="text-3xl font-bold">{group.name}</h1>
              </div>
              <p className="text-muted-foreground">{group.description}</p>
            </div>
            <Button variant="outline" size="icon">
              <Settings className="h-4 w-4" />
              <span className="sr-only">Group Settings</span>
            </Button>
          </div>
          <h2 className="text-2xl font-semibold">Promises</h2>
          {groupPromises.length > 0 ? (
            <div className="space-y-6">
              {groupPromises.map(promise => (
                <PromiseCard key={promise.id} promise={promise} />
              ))}
            </div>
          ) : (
             <Card className="flex flex-col items-center justify-center p-8 border-dashed">
                <p className="text-muted-foreground">No promises have been made in this group yet.</p>
                <Button variant="link">Be the first to make one!</Button>
            </Card>
          )}
        </div>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Members ({group.members.length})</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {group.members.map(member => (
                <div key={member.id} className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={member.avatarUrl} alt={member.name} />
                    <AvatarFallback>{member.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                  </Avatar>
                  <span className="font-medium">{member.name}</span>
                </div>
              ))}
            </CardContent>
            <CardFooter>
                 <Button variant="outline" className="w-full">
                    <UserPlus className="mr-2 h-4 w-4" />
                    Invite Members
                </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
