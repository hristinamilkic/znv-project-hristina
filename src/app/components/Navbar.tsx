"use client";

import { Button } from "@/app/ui/button";
import { Separator } from "@/app/ui/separator";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-gray-800 shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <a className="text-gray-50" href="/home">
          <img
            src={`/src/app/public/logo.svg`}
            alt={`logo`}
            className="w-16 h-16 rounded-full mr-5"
          />
        </a>
        <div className="flex items-center space-x-4">
          <SignedOut>
            <SignInButton>
              <Button variant="outline">Prijavi se</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>
      <Separator />
    </header>
  );
}
