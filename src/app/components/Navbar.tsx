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
            src={`/logo.svg`}
            alt={`logo`}
            className="w-16 h-16 rounded-full mr-5"
          />
        </a>
        <div className="flex items-center space-x-4">
          <SignedOut>
            <SignInButton>
              <Button className="bg-orange-500 font-semibold transition-all duration-300">
                PRIJAVI SE
              </Button>
            </SignInButton>
            <a href="/korisnici">
              <Button className="bg-orange-500 font-semibold transition-all duration-300">
                LISTA KORISNIKA{" "}
              </Button>
            </a>
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
