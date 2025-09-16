"use client";

import { UserNav } from "@/components/layout/user-nav"
import { Handshake, Loader2 } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"
import { useAuth } from "@/hooks/use-auth";

export function Header() {
  const { user, loading } = useAuth();

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
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          { loading ? (
            <Loader2 className="h-6 w-6 animate-spin" />
          ) : user ? (
            <UserNav />
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
