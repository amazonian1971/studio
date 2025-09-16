"use client";

import { UserNav } from "@/components/layout/user-nav"
import { Bell, Handshake, Loader2, Users } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"
import { useAuth } from "@/hooks/use-auth";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { mockNotifications } from "@/lib/placeholder-data";
import { Badge } from "../ui/badge";
import { useState, useEffect } from "react";

export function Header() {
  const { user, loading } = useAuth();
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    // This logic is client-side only to prevent SSR issues.
    setUnreadCount(mockNotifications.filter(n => !n.isRead).length);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Handshake className="h-6 w-6 text-primary" />
            <span className="font-bold sm:inline-block">
              PromiseWeb
            </span>
          </Link>
          { user && (
            <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/feed" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Feed
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/groups" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <Users className="mr-2 h-4 w-4" />
                    Groups
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          )}
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          { loading ? (
            <Loader2 className="h-6 w-6 animate-spin" />
          ) : user ? (
            <>
            <Button variant="ghost" size="icon" asChild>
                <Link href="/notifications">
                    <Bell className="h-5 w-5" />
                    {unreadCount > 0 && (
                       <Badge className="absolute top-1 right-1 h-5 w-5 justify-center p-0">{unreadCount}</Badge>
                    )}
                    <span className="sr-only">Notifications</span>
                </Link>
            </Button>
            <UserNav />
            </>
          ) : (
            <div className="flex items-center gap-2">
               <Button asChild variant="ghost">
                <Link href="/login">Sign In</Link>
              </Button>
              <Button asChild>
                <Link href="/signup">Sign Up</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
