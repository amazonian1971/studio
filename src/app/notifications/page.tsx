
"use client"

import { mockNotifications } from "@/lib/placeholder-data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell, User, Calendar, CheckCircle } from "lucide-react";
import type { Notification } from "@/lib/types";
import { formatDistanceToNow } from "date-fns";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function NotificationIcon({ type }: { type: Notification['type'] }) {
    switch (type) {
        case 'NEW_PROMISE': return <Bell className="h-5 w-5 text-primary" />;
        case 'DEADLINE_REMINDER': return <Calendar className="h-5 w-5 text-yellow-500" />;
        case 'PROMISE_COMPLETED': return <CheckCircle className="h-5 w-5 text-green-500" />;
        case 'FOLLOW': return <User className="h-5 w-5 text-blue-500" />;
        default: return <Bell className="h-5 w-5 text-muted-foreground" />;
    }
}

function NotificationMessage({ notification }: { notification: Notification }) {
    const { type, user, promise } = notification;

    switch (type) {
        case 'NEW_PROMISE':
            return (
                <p>
                    <span className="font-semibold">{user?.name}</span> made a new promise: {' '}
                    <Link href={`/promise/${promise?.id}`} className="text-primary hover:underline">"{promise?.title}"</Link>
                </p>
            );
        case 'DEADLINE_REMINDER':
            return (
                <p>
                    Deadline approaching for promise: {' '}
                    <Link href={`/promise/${promise?.id}`} className="text-primary hover:underline">"{promise?.title}"</Link>
                </p>
            );
        case 'PROMISE_COMPLETED':
            return (
                <p>
                    <span className="font-semibold">{user?.name}</span> completed a promise: {' '}
                    <Link href={`/promise/${promise?.id}`} className="text-primary hover:underline">"{promise?.title}"</Link>
                </p>
            );
        case 'FOLLOW':
            return (
                <p>
                    <span className="font-semibold">{user?.name}</span> started following you.
                </p>
            );
        default:
            return <p>You have a new notification.</p>;
    }
}

export default function NotificationsPage() {
    return (
        <div className="container max-w-3xl py-8">
            <Card>
                <CardHeader>
                    <CardTitle className="text-3xl font-bold">Notifications</CardTitle>
                    <CardDescription>Your recent activity and updates.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {mockNotifications.sort((a,b) => b.createdAt.getTime() - a.createdAt.getTime()).map(notification => (
                             <div key={notification.id} className={cn(
                                "flex items-start gap-4 p-4 rounded-lg border",
                                !notification.isRead && "bg-secondary"
                            )}>
                                <div className="flex-shrink-0">
                                   {notification.user ? (
                                        <Avatar className="h-8 w-8">
                                            <AvatarImage src={notification.user.avatarUrl} alt={notification.user.name} />
                                            <AvatarFallback>{notification.user.name.split(" ").map(n=>n[0]).join("")}</AvatarFallback>
                                        </Avatar>
                                   ) : (
                                    <NotificationIcon type={notification.type} />
                                   )}
                                </div>
                                <div className="flex-grow">
                                    <NotificationMessage notification={notification} />
                                    <p className="text-xs text-muted-foreground mt-1">
                                        {formatDistanceToNow(notification.createdAt, { addSuffix: true })}
                                    </p>
                                </div>
                                {!notification.isRead && (
                                    <div className="h-2.5 w-2.5 rounded-full bg-primary flex-shrink-0 self-center" />
                                )}
                            </div>
                        ))}
                    </div>
                    {mockNotifications.length === 0 && (
                        <div className="text-center text-muted-foreground py-12">
                            <Bell className="mx-auto h-12 w-12" />
                            <p className="mt-4">You have no notifications yet.</p>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}
