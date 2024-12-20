"use server";
import { GetUser } from "@/lib/api/user";
import { redirect } from "next/navigation";
import checkCookie from "@/lib/subFunc/isAuth";
import ProfileComp from "@/components/profile/Profile";
import { User } from "@/lib/types";

export default async function Profile() {
  
  const data = await checkCookie();
  if(!data){
    redirect("/signin");
  }
  
  const user: User = await GetUser();
  console.log(user);

  return (
    <ProfileComp user={user}/>
  );
}
