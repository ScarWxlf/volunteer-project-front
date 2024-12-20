"use client";
import { useSectionObserver } from "@/hooks/useSectionObserver ";
import { cn } from "@/lib/utils";

interface Section {
    ref: React.RefObject<HTMLElement>;
    id: string;
  }

interface SidebarProps {
  sections: Section[];
  currentHash: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  setCurrentHash: (hash: string) => void;
}

export default function Sidebar({
    sections,
  currentHash,
  isOpen,
  setIsOpen,
  setCurrentHash,
}: SidebarProps) {
  useSectionObserver(sections, setCurrentHash);
  return (
    <div className={cn('bg-white rounded-xl shadow-lg lg:w-[25%] sticky top-4 lg:left-12 left-10 z-20', isOpen ? "" : "p-0")}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`min-[380px]:hidden bg-green-500 text-white w-full py-2 px-4 rounded-md font-medium`}
        >{
          currentHash === "#about-me" ? "About me" : currentHash === "#account-name" ? "Account Name" : currentHash === "#edit-profile" ? "Edit Profile" : "Change Password"
        }</button>
        <div className={`m-5 max-[530px]:grid-cols-2 max-[380px]:grid-cols-1 sm:flex-row lg:flex-col flex-row justify-between gap-5 flex ${isOpen ? "max-[530px]:grid" : "max-[380px]:hidden"}`}>
          <a
            onClick={() => {
                setCurrentHash("#about-me")
                setIsOpen(false)
            }}
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
            onClick={() => {
                setCurrentHash("#account-name")
                setIsOpen(false)
            }}
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
            onClick={() => {
                setCurrentHash("#edit-profile")
                setIsOpen(false)
            }}
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
            onClick={() => {
                setCurrentHash("#change-password")
                setIsOpen(false)
            }}
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
  );
}
