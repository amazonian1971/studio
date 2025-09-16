
"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { Copy, Facebook, Share2, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function InviteFriends() {
  const { user } = useAuth();
  const { toast } = useToast();

  if (!user) {
    return null;
  }

  const inviteLink =
    typeof window !== "undefined"
      ? `${window.location.origin}/signup?ref=${user.uid}`
      : "";
      
  const shareText = "Join me on TrusTNet! 🤝 Let’s keep promises together.";
  const encodedShareText = encodeURIComponent(`${shareText} 👉 ${inviteLink}`);

  const whatsappLink = `https://wa.me/?text=${encodedShareText}`;
  const smsLink = `sms:?&body=${encodedShareText}`;
  const twitterLink = `https://twitter.com/intent/tweet?text=${encodedShareText}`;
  const facebookLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(inviteLink)}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(inviteLink);
    toast({
      title: "Link Copied!",
      description: "Invite link copied to your clipboard.",
    });
  };

  const handleWebShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Join me on TrusTNet",
          text: shareText,
          url: inviteLink,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      handleCopy();
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Invite Friends, Earn Rewards</CardTitle>
        <CardDescription>
          You and your friends can keep each other accountable. Invite them and
          earn points when they join and keep promises!
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col sm:flex-row gap-4">
        <Button asChild className="w-full">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <svg
              className="mr-2 h-4 w-4"
              aria-hidden="true"
              focusable="false"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5c-.1 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
              ></path>
            </svg>
            Invite via WhatsApp
          </a>
        </Button>
        <Button asChild variant="outline" className="w-full">
          <a href={smsLink} target="_blank" rel="noopener noreferrer">
            <svg
              className="mr-2 h-4 w-4"
              aria-hidden="true"
              focusable="false"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6l-119.4-49.7-64.8 79.7c-7.1 8.8-18.3 13.7-29.9 13.7-5.1 0-10.2-.9-15.1-2.9-12.2-5.1-22.1-15-26.5-27.2l-27.2-75.9-104.5-43.2c-11.4-4.7-19.8-14.8-22.3-27.1s-1.2-25.1 6.5-34.9l421.2-320.1c9.4-7.2 21.9-8.4 32.2-2.9zM76.9 214.3l94.4 39 27.2 75.9 53.4-65.8-218.1-178-1.9 1.4zM479.1 32l-218.1 178 53.4 65.8 27.2-75.9 94.4-39-1.9-1.4z"
              ></path>
            </svg>
            Invite via SMS
          </a>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" className="w-full">
              <Share2 className="mr-2 h-4 w-4" />
              More Options
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuItem asChild>
              <a
                href={twitterLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Twitter className="mr-2 h-4 w-4" />
                <span>Share on Twitter</span>
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a
                href={facebookLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Facebook className="mr-2 h-4 w-4" />
                <span>Share on Facebook</span>
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleCopy}>
              <Copy className="mr-2 h-4 w-4" />
              <span>Copy Link</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleWebShare}>
              <Share2 className="mr-2 h-4 w-4" />
              <span>More...</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardContent>
    </Card>
  );
}
