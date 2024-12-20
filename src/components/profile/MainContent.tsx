import { User } from "@/lib/types";
import AboutMeSection from "./AboutMeSection";
import ProfileCard from "./ProfileInputCard";
import { RefObject } from "react";

export default function MainContent({
  aboutMeRef,
  accountNameRef,
  editProfileRef,
  changePasswordRef,
  user,
}: {
  aboutMeRef: RefObject<HTMLDivElement>;
  accountNameRef: RefObject<HTMLDivElement>;
  editProfileRef: RefObject<HTMLDivElement>;
  changePasswordRef: RefObject<HTMLDivElement>;
  user: User;
}) {
  return (
    <div className="flex flex-col gap-10 lg:w-4/5 w-full">
      <AboutMeSection ref={aboutMeRef} firstName={user.firstName} lastName={user.lastName} email={user.email} description={user.description} photo={user.photo}/>
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
            value: user.firstName,
          },
          {
            title: "Last Name",
            type: "text",
            name: "last-name",
            placeholder: "Last Name",
            value: user.lastName,
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
            value: user.email,
          },
          {
            title: "Phone",
            type: "text",
            name: "phone",
            placeholder: "Phone",
            value: user.phone,
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
  );
}
