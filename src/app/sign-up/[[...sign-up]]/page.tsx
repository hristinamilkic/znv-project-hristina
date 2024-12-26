import { SignUp } from "@clerk/nextjs";
import React from "react";

export default function Page() {
  return (
    <div className="bg-white">
      <div className="flex justify-center items-center">
        <SignUp />
      </div>
    </div>
  );
}
