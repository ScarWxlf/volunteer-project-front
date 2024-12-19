"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useSectionObserver } from "@/hooks/useSectionObserver ";
import ProfileCard from "./ProfileInputCard";
import { GetUser } from "@/lib/api/user";
import { redirect } from "next/navigation";
import { useAuth } from "@/components/AuthContext";

export default function Profile() {
  interface User {
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    photo?: string;
    description?: string;
  }
  const [currentHash, setCurrentHash] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<User>({});

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

  useSectionObserver(sections, setCurrentHash);

  const handleClick = (hash: string) => {
    setIsOpen(false);
    setCurrentHash(hash);
  }

  const isAuth = useAuth();
  useEffect(() => {
    async function fetchUser() {
      if(!isAuth) {
        redirect("/signin");
      } else{
        setLoading(false);
        const data = await GetUser()
        console.log(data)
      }
    }
    fetchUser();
  }, [isAuth]);

  if(loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="flex flex-col lg:flex-row w-full xl:px-32 lg:px-16 max-[530px]:px-2 max-[530px]:py-4 px-10 py-9 bg-gray-100 gap-5 lg:items-start">
      <div className={`bg-white rounded-xl shadow-lg lg:w-[25%] sticky top-4 lg:left-12 left-10 z-20 ${isOpen ? "" : "p-0"}`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`min-[380px]:hidden bg-green-500 text-white w-full py-2 px-4 rounded-md font-medium`}
        >{
          currentHash === "#about-me" ? "About me" : currentHash === "#account-name" ? "Account Name" : currentHash === "#edit-profile" ? "Edit Profile" : "Change Password"
        }</button>
        <div className={`m-5 max-[530px]:grid-cols-2 max-[380px]:grid-cols-1 sm:flex-row lg:flex-col flex-row justify-between gap-5 flex ${isOpen ? "max-[530px]:grid" : "max-[380px]:hidden"}`}>
          <a
            onClick={() => handleClick("#about-me")}
            href="#about-me"
            className="flex gap-2 hover:text-green-600 text-md md:text-lg items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill={`${
                currentHash === "#about-me" ? "#16a34a" : "currentColor"
              }`}
              className="bi bi-file-earmark-person-fill"
              viewBox="0 0 16 16"
            >
              <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0m2 5.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-.245S4 12 8 12s5 1.755 5 1.755" />
            </svg>
            About me
          </a>
          <a
            onClick={() => handleClick("#account-name")}
            href="#account-name"
            className="flex gap-2 hover:text-green-600 text-md md:text-lg items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill={`${
                currentHash === "#account-name" ? "#16a34a" : "currentColor"
              }`}
              className="bi bi-person-bounding-box"
              viewBox="0 0 16 16"
            >
              <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5M.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5" />
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
            </svg>
            Account Name
          </a>
          <a
            onClick={() => handleClick("#edit-profile")}
            href="#edit-profile"
            className="flex gap-2 hover:text-green-600 text-md md:text-lg items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill={`${
                currentHash === "#edit-profile" ? "#16a34a" : "currentColor"
              }`}
              className="bi bi-person-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
            </svg>
            Edit Profile
          </a>
          <a
            onClick={() => handleClick("#change-password")}
            href="#change-password"
            className="flex gap-2 hover:text-green-600 text-md md:text-lg items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill={`${
                currentHash === "#change-password" ? "#16a34a" : "currentColor"
              }`}
              className="bi bi-key-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2M2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
            </svg>
            Change Password
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-10 lg:w-4/5 w-full">
        <div
          id="about-me"
          ref={aboutMeRef}
          className="w-full shadow-lg rounded-lg bg-white max-[530px]:p-5 p-10 pt-20 max-[800px]:pt-10 md:pt-10"
        >
          <div className="flex max-[800px]:flex-col gap-8 w-full items-center justify-between">
            <div className="flex-none relative">
              <Image
                src="/home.jpg"
                alt="profile"
                width={400}
                height={400}
                className="max-[800px]:h-64 max-[800px]:w-64 max-[600px]:h-44 max-[600px]:w-44 rounded-full object-cover h-44 w-44 border-4 border-green-500"
              />
              <button className="absolute bottom-3 right-3 bg-green-500 rounded-full p-2 hover:scale-105">
                <Image
                  src="/profile/camera.svg"
                  alt="edit"
                  width={30}
                  height={30}
                  className=""
                />
                <span className="absolute  bottom-6 right-7 font-bold text-2xl text-white">
                  +
                </span>
              </button>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-4 sm:gap-8 max-[800px]:px-5">
              <div className="flex flex-col gap-2 sm:gap-5 my-auto text-center sm:text-start">
                <h1 className="max-[380px]:text-2xl text-3xl lg:text-2xl xl:text-3xl">FirstName LastName</h1>
                <p className="max-[380px]:text-xl text-2xl lg:text-xl xl:text-2xl">email@gmail.com</p>
              </div>
              <button className="bg-green-500 hover:bg-green-600 hover:scale-105 py-3 px-4 lg:px-4 xl:px-8 text-white rounded-xl font-medium text-lg max-[600px]:text-sm">
                My causes
              </button>
            </div>
          </div>
          <div className="my-5">
            <h1 className="text-3xl">About me</h1>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              eget libero sit amet quam tincidunt vehicula. Sed sit amet mi sed
              nunc tincidunt ultricies. Nullam nec nunc nec nunc ultricies
              ultricies. Nullam nec nunc nec nunc ultricies ultricies. Nullam
              nec nunc nec nunc ultricies ultricies. Nullam nec nunc nec nunc
              ultricies ultricies. Nullam nec nunc nec nunc ultricies ultricies.
              Nullam nec nunc nec nunc ultricies ultricies. Nullam nec nunc nec
              nunc ultricies ultricies.
            </p>
          </div>
        </div>
        <ProfileCard
          id="account-name"
          accountNameRef={accountNameRef}
          title="Account name"
          description="Update your first and last name to help people recognize you."
          inputs={[
            {
              title: "First Name",
              type: "text",
              name: "first-name",
              placeholder: "First Name",
            },
            {
              title: "Last Name",
              type: "text",
              name: "last-name",
              placeholder: "Last Name",
            },
          ]}
        />
        <ProfileCard
          id="edit-profile"
          accountNameRef={editProfileRef}
          title="Edit profile"
          description="Update your email and phone number to help secure your account."
          inputs={[
            {
              title: "Email",
              type: "email",
              name: "email",
              placeholder: "Email",
            },
            {
              title: "Phone",
              type: "text",
              name: "phone",
              placeholder: "Phone",
            },
          ]}
        />
        <ProfileCard
          id="change-password"
          accountNameRef={changePasswordRef}
          title="Change password"
          description="We recommend that you periodically update your password to help prevent unauthorized access to your account."
          inputs={[
            {
              title: "Previous password",
              type: "password",
              name: "previous-password",
              placeholder: "Previous password",
            },
            {
              title: "New password",
              type: "password",
              name: "new-password",
              placeholder: "New password",
            },
          ]}
        />
      </div>
    </div>
  );
}
