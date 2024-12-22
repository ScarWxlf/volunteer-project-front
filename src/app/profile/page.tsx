"use server";
import { redirect } from "next/navigation";

import checkCookie from "@/lib/subFunc/isAuth";
import ProfileComp from "@/components/profile/Profile";
import { GetUser } from "@/lib/api/user";
import { User } from "@/lib/types";

export default async function Profile() {
  
  const data = await checkCookie();
  if(!data){
    redirect("/signin");
  }
  
  const user: User = await GetUser() || {firstName: "Name", lastName: "lastName", email: "email@gmail.com", description: "some description", photo: "", phone: "+380665334163"};

  return (
    <ProfileComp user={user}/>
  );
}
