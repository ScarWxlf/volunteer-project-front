'use client'
import { useState, useRef } from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import { User } from "@/lib/types";

export default function ProfileComp({user}: {user: User}) {
  const [currentHash, setCurrentHash] = useState<string>("#about-me");
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const aboutMeRef = useRef<HTMLFormElement>(null);
  const accountNameRef = useRef<HTMLFormElement>(null);
  const editProfileRef = useRef<HTMLFormElement>(null);
  const changePasswordRef = useRef<HTMLFormElement>(null);

  const sections = [
    { ref: aboutMeRef, id: "#about-me" },
    { ref: accountNameRef, id: "#account-name" },
    { ref: editProfileRef, id: "#edit-profile" },
    { ref: changePasswordRef, id: "#change-password" },
  ];

  const [userData, setUserData] = useState(user);
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const handleInputChange = (name: string, value: string) => {
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

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
        user={userData}
        aboutMeRef={aboutMeRef}
        accountNameRef={accountNameRef}
        editProfileRef={editProfileRef}
        changePasswordRef={changePasswordRef}
        onChange={handleInputChange}
        errors={errors}
        setErrors={setErrors}
      />
    </div>
  );
}
