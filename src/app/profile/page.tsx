import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProfilePage() {
    // Mock user data
    const user = {
        name: "User",
        email: "user@example.com",
        avatar: "https://picsum.photos/seed/5/200/200",
        joined: new Date('2024-01-01'),
        promisesMade: 12,
        promisesKept: 9,
    };
    const userInitials = user.name.split(" ").map((n) => n[0]).join("");

    return (
        <div className="container max-w-4xl py-8">
            <Card>
                <CardHeader className="flex flex-col items-center text-center space-y-4">
                    <Avatar className="h-24 w-24 border-4 border-primary">
                        <AvatarImage src={user.avatar} alt={user.name} data-ai-hint="person laughing"/>
                        <AvatarFallback className="text-4xl">{userInitials}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                        <CardTitle className="text-3xl">{user.name}</CardTitle>
                        <p className="text-muted-foreground">{user.email}</p>
                        <p className="text-sm text-muted-foreground">Joined on {user.joined.toLocaleDateString()}</p>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                        <div className="p-4 bg-secondary rounded-lg">
                            <p className="text-2xl font-bold">{user.promisesMade}</p>
                            <p className="text-muted-foreground">Promises Made</p>
                        </div>
                        <div className="p-4 bg-secondary rounded-lg">
                            <p className="text-2xl font-bold">{user.promisesKept}</p>
                            <p className="text-muted-foreground">Promises Kept</p>
                        </div>
                        <div className="p-4 bg-secondary rounded-lg">
                            <p className="text-2xl font-bold">{Math.round((user.promisesKept / user.promisesMade) * 100)}%</p>
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
