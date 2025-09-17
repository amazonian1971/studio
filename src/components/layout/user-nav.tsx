
"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useAuth } from "@/hooks/use-auth"
import { logOut } from "@/lib/firebase/client"
import { LogOut, Settings, User as UserIcon, Loader2, BookOpen } from "lucide-react"
import { ThemeToggle } from "../theme-toggle"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Tour } from "../tour/tour"

export function UserNav() {
  const { user, userData, loading } = useAuth();
  const router = useRouter();
  const [isTourOpen, setTourOpen] = useState(false);

  const handleLogout = async () => {
    await logOut();
    router.push('/login');
  };

  if (loading) {
    return <Loader2 className="h-8 w-8 animate-spin" />;
  }
  
  if (!user) {
    return null;
  }

  const userInitials = userData?.name
    ?.split(" ")
    .map((n: string) => n[0])
    .join("") || "";

  return (
    <>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-9 w-9">
            {userData?.avatarUrl && <AvatarImage src={userData.avatarUrl} alt={userData.name || ''} data-ai-hint="person portrait"/>}
            <AvatarFallback>{userInitials}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{userData?.name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user?.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href="/profile" legacyBehavior passHref>
             <DropdownMenuItem>
              <UserIcon className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
          </Link>
          <Link href="/settings" legacyBehavior passHref>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
          </Link>
           <DropdownMenuItem onClick={() => setTourOpen(true)}>
              <BookOpen className="mr-2 h-4 w-4" />
              <span>Take a Tour</span>
            </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
            <ThemeToggle />
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    <Tour isOpen={isTourOpen} onOpenChange={setTourOpen} />
    </>
  )
}
