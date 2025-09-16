
import { mockGroups } from "@/lib/placeholder-data";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Lock, Users } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function GroupsPage() {
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
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Groups</h1>
        <Button>Create Group</Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {mockGroups.map((group) => (
          <Card key={group.id}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {group.isPublic ? <Users className="h-5 w-5 text-muted-foreground" /> : <Lock className="h-5 w-5 text-muted-foreground" />}
                {group.name}
              </CardTitle>
              <CardDescription>{group.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center -space-x-2">
                {group.members.map(member => (
                  <Avatar key={member.id} className="border-2 border-card">
                    <AvatarImage src={member.avatarUrl} alt={member.name} />
                    <AvatarFallback>{member.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                  </Avatar>
                ))}
                 {group.members.length > 5 && (
                  <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-xs font-semibold z-10">
                    +{group.members.length - 5}
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="secondary" className="w-full">
                <Link href={`/groups/${group.id}`}>View Group</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
