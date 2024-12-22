import Image from "next/image";
import { RefObject } from "react";
import { useState } from "react";

import { Button } from "../Button";

export default function AboutMeSection({
  ref,
  firstName,
  lastName,
  email,
  description,
  photo,
  onChange,
  saveChanges,
}: {
  ref: RefObject<HTMLDivElement>;
  firstName: string;
  lastName: string;
  email: string;
  description: string;
  photo: string;
  onChange: (name: string, value: string) => void;
  saveChanges: () => void;
}) {
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    saveChanges();
    setIsEditing(!isEditing);
  };

  return (
    <div
      id="about-me"
      ref={ref}
      className="w-full shadow-lg rounded-lg bg-white max-[530px]:p-5 p-10 pt-20 max-[800px]:pt-10 md:pt-10"
    >
      <div className="flex max-[800px]:flex-col gap-8 w-full items-center justify-between">
        <div className="flex-none relative">
          <Image
            src={photo ? photo : "/profile/avatar.png"}
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
              className="h-7 w-7"
            />
            <span className="absolute  bottom-6 right-7 font-bold text-2xl text-white">
              +
            </span>
          </button>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-4 sm:gap-8 max-[800px]:px-5">
          <div className="flex flex-col gap-2 sm:gap-5 my-auto text-center sm:text-start">
            <h1 className="max-[380px]:text-2xl text-3xl lg:text-2xl xl:text-3xl">
              {firstName} {lastName}
            </h1>
            <p className="max-[380px]:text-xl text-2xl lg:text-xl xl:text-2xl">
              {email}
            </p>
          </div>
          <button className="bg-green-500 hover:bg-green-600 hover:scale-105 py-3 px-4 lg:px-4 xl:px-8 text-white rounded-xl font-medium text-lg max-[600px]:text-sm">
            My causes
          </button>
        </div>
      </div>
      <div className="flex flex-col my-5">
        <h1 className="text-3xl">About me</h1>
        <p className="mt-2 break-words">
          {isEditing ? (
            <textarea
              name="description"
              id="description"
              value={description || ""}
              onChange={(e) => {
                onChange("description", e.target.value);
              }}
              className="w-full max-h-60 py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
            />
          ) : description ? (
            description
          ) : (
            <span className="text-xl">
              No description provided. Click the edit button to add a
              description.
            </span>
          )}
        </p>
      </div>
      <div className="w-full flex justify-end">
        {isEditing ? (
          <div className="flex max-[320px]:flex-col gap-3">
            <Button variant="cancel" onClick={() => setIsEditing(!isEditing)}>
              Cancel
            </Button>
            <Button onClick={handleSave}>Save</Button>
          </div>
        ) : (
          <Button onClick={() => setIsEditing(!isEditing)}>Edit</Button>
        )}
      </div>
    </div>
  );
}
