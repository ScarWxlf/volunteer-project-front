import { User } from "@/lib/types";
import AboutMeSection from "./AboutMeSection";
import ProfileCard from "./ProfileInputCard";
import { LegacyRef } from "react";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import { redirect } from "next/navigation";
import { useValidation } from "@/hooks/useValidation";

export default function MainContent({
  aboutMeRef,
  accountNameRef,
  editProfileRef,
  changePasswordRef,
  user,
  onChange,
  errors, 
  setErrors
}: {
  aboutMeRef: LegacyRef<HTMLFormElement>;
  accountNameRef: LegacyRef<HTMLFormElement>;
  editProfileRef: LegacyRef<HTMLFormElement>;
  changePasswordRef: LegacyRef<HTMLFormElement>;
  user: User;
  onChange: (name: string, value: string) => void;
  errors: { [key: string]: string };
  setErrors: (errors: { [key: string]: string }) => void;
}) {
  const notify = (message: string) =>
    toast.success(message, {
      position: "bottom-right",
    });

  const notifyError = (message: string) =>
    toast.error(message, {
      position: "bottom-right",
    });

  const {validateFields} = useValidation();

  async function updateUserProfile(requestBody: Partial<User>) {
    const token = Cookies.get("token");
    if (!token) {
      redirect("/signin");
    }

    const {errors, isValid} = validateFields(requestBody);
    if (!isValid) {
      return errors;
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
          body: JSON.stringify(requestBody),
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
        errors={errors}
        setErrors={setErrors}
      />
      <ProfileCard
        id="account-name"
        ref={accountNameRef}
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
        errors={errors}
        setErrors={setErrors}
      />
      <ProfileCard
        id="edit-profile"
        ref={editProfileRef}
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
        errors={errors}
        setErrors={setErrors}
      />
      <ProfileCard
        id="change-password"
        ref={changePasswordRef}
        title="Change password"
        description="We recommend that you periodically update your password to help prevent unauthorized access to your account."
        inputs={[
          {
            title: "Previous password",
            type: "password",
            name: "previousPassword",
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
        errors={errors}
        setErrors={setErrors}
      />
      <ToastContainer autoClose={3000} />
    </div>
  );
}
