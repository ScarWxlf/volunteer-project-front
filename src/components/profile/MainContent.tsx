import { User } from "@/lib/types";
import AboutMeSection from "./AboutMeSection";
import ProfileCard from "./ProfileInputCard";
import { RefObject } from "react";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import { redirect } from "next/navigation";

export default function MainContent({
  aboutMeRef,
  accountNameRef,
  editProfileRef,
  changePasswordRef,
  user,
  updatedUser,
  onChange,
}: {
  aboutMeRef: RefObject<HTMLDivElement>;
  accountNameRef: RefObject<HTMLDivElement>;
  editProfileRef: RefObject<HTMLDivElement>;
  changePasswordRef: RefObject<HTMLDivElement>;
  user: User;
  updatedUser: Partial<User>;
  onChange: (name: string, value: string) => void;
}) {
  const notify = (message: string) =>
    toast.success(message, {
      position: "bottom-right",
    });

  const notifyError = (message: string) =>
    toast.error(message, {
      position: "bottom-right",
    });

  async function updateUserProfile() {
    const token = Cookies.get("token");
    if (!token) {
      redirect("/signin");
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(updatedUser),
        }
      );

      const result = await response.json();
      if (!response.ok) {
        notifyError(result.message);
        return;
      }

      notify(result.message);
      return result;
    } catch (error) {
      notifyError((error as Error).message);
    }
  }

  return (
    <div className="flex flex-col gap-10 lg:w-4/5 w-full">
      <AboutMeSection
        ref={aboutMeRef}
        firstName={user.firstName}
        lastName={user.lastName}
        email={user.email}
        description={user.description}
        photo={user.photo}
        onChange={onChange}
        saveChanges={updateUserProfile}
      />
      <ProfileCard
        id="account-name"
        accountNameRef={accountNameRef}
        title="Account name"
        description="Update your first and last name to help people recognize you."
        inputs={[
          {
            title: "First Name",
            type: "text",
            name: "firstName",
            placeholder: "First Name",
            value: user.firstName,
          },
          {
            title: "Last Name",
            type: "text",
            name: "lastName",
            placeholder: "Last Name",
            value: user.lastName,
          },
        ]}
        onChange={onChange}
        saveChanges={updateUserProfile}
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
            value: user.phone || "",
          },
        ]}
        onChange={onChange}
        saveChanges={updateUserProfile}
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
            name: "password",
            placeholder: "New password",
          },
        ]}
        onChange={onChange}
        saveChanges={updateUserProfile}
      />
      <ToastContainer autoClose={3000} />
    </div>
  );
}
