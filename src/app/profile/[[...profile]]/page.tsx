import { UserProfile } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

export async function Profile() {
  const { userId } = auth();
  const isAuth = !!userId;
  const user = await currentUser();
  if(!isAuth){
      redirect("/"); 
  }
  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <h1 className="text-2xl font-bold tracking-wider">{user?.username}</h1>
      <UserProfile />
    </div>
  );
}
