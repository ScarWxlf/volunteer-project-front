'use client'
import { useState, useRef } from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import { User } from "@/lib/types";

export default function ProfileComp({user}: {user: User}) {
  const [currentHash, setCurrentHash] = useState<string>("#about-me");
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const aboutMeRef = useRef<HTMLDivElement>(null);
  const accountNameRef = useRef<HTMLDivElement>(null);
  const editProfileRef = useRef<HTMLDivElement>(null);
  const changePasswordRef = useRef<HTMLDivElement>(null);

  const sections = [
    { ref: aboutMeRef, id: "#about-me" },
    { ref: accountNameRef, id: "#account-name" },
    { ref: editProfileRef, id: "#edit-profile" },
    { ref: changePasswordRef, id: "#change-password" },
  ];


  return (
    <div className="flex flex-col lg:flex-row w-full xl:px-32 lg:px-16 max-[530px]:px-2 max-[530px]:py-4 px-10 py-9 bg-gray-100 gap-5 lg:items-start">
      <Sidebar
        sections={sections}
        currentHash={currentHash}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setCurrentHash={setCurrentHash}
      />
      <MainContent 
        user={user}
        aboutMeRef={aboutMeRef}
        accountNameRef={accountNameRef}
        editProfileRef={editProfileRef}
        changePasswordRef={changePasswordRef}
      />
    </div>
  );
}
