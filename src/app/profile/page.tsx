
"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/hooks/use-auth";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProfilePage() {
    const { user, userData, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.push('/login');
        }
    }, [user, loading, router]);
    
    if (loading || !user) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <Loader2 className="h-16 w-16 animate-spin" />
            </div>
        );
    }
    
    // This can happen if the user doc hasn't been created yet
    if (!userData) {
      return (
        <div className="flex min-h-screen items-center justify-center">
          <p>Could not load user data. Please try again later.</p>
        </div>
      );
    }

    const userInitials = userData.name?.split(" ").map((n:string) => n[0]).join("") || "";
    // Mock promise data for now
    const promisesMade = 12;
    const promisesKept = 9;

    const successRate = promisesMade > 0 ? Math.round((promisesKept / promisesMade) * 100) : 0;

    return (
        <div className="container max-w-4xl py-8">
            <Card>
                <CardHeader className="flex flex-col items-center text-center space-y-4">
                    <Avatar className="h-24 w-24 border-4 border-primary">
                        <AvatarImage src={userData.avatarUrl || `https://avatar.vercel.sh/${userData.email}.png`} alt={userData.name || ""} data-ai-hint="person laughing"/>
                        <AvatarFallback className="text-4xl">{userInitials}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                        <CardTitle className="text-3xl">{userData.name}</CardTitle>
                        <p className="text-muted-foreground">{userData.email}</p>
                        {userData.createdAt && <p className="text-sm text-muted-foreground">Joined on {new Date(userData.createdAt.seconds * 1000).toLocaleDateString()}</p>}
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                        <div className="p-4 bg-secondary rounded-lg">
                            <p className="text-2xl font-bold">{promisesMade}</p>
                            <p className="text-muted-foreground">Promises Made</p>
                        </div>
                        <div className="p-4 bg-secondary rounded-lg">
                            <p className="text-2xl font-bold">{promisesKept}</p>
                            <p className="text-muted-foreground">Promises Kept</p>
                        </div>
                        <div className="p-4 bg-secondary rounded-lg">
                            <p className="text-2xl font-bold">{successRate}%</p>
                            <p className="text-muted-foreground">Success Rate</p>
                        </div>
                    </div>
                    <div className="mt-8">
                        <h3 className="text-xl font-semibold mb-4 text-center">Recent Activity</h3>
                        <p className="text-muted-foreground text-center">User's recent promises will be displayed here.</p>
                        {/* Placeholder for promise list */}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

