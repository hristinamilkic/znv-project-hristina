"use client";
import { useUser } from "@clerk/clerk-react";
import React from "react";

const Admin = () => {
  const { user } = useUser();

  if (user && user.publicMetadata.role === "admin") {
    return (
      <div className="flex justify-center">
        Dobrodosao {user?.username}, ovo je Admin panel!
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      Nisi admin i nemas pristupa ovom panelu.
    </div>
  );
};

export default Admin;
