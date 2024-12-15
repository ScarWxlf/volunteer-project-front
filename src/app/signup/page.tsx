"use client";
import { useState } from "react";
import Link from "next/link";
import { Register } from "@/lib/auth/auth";
import { useValidation } from "@/hooks/useValidation";

export default function SignUpPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [termsOfUse, setTermsOfUse] = useState(false);

  const { validateFields } = useValidation();

  const [errorResponseMessage, setErrorResponseMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const clearMessages = () => {
    setErrorResponseMessage("");
    setResponseMessage("");
    setEmailError("");
    setPasswordError("");
    setFirstNameError("");
    setLastNameError("");
  };

  const handleSubmit = () => {
    clearMessages();
    const { errors, isValid } = validateFields({
      firstName,
      lastName,
      email,
      password,
    });
      if (isValid) {
        Register({email, password, firstName, lastName, setResponseMessage, setErrorResponseMessage})
      } else {
        errors!.forEach((err) => {
          const key = Object.keys(err)[0];
          const value = Object.values(err)[0];
          switch (key) {
            case "firstName":
              setFirstNameError(value);
              break;
            case "lastName":
              setLastNameError(value);
              break;
            case "email":
              setEmailError(value);
              break;
            case "password":
              setPasswordError(value);
              break;
            default:
              console.log(`Unexpected validation error: ${value}`);
          }
      });
    }
  };

  return (
    <div
      className="relative flex flex-grow items-center justify-center bg-cover bg-no-repeat py-5 sm:px-0 px-5"
      style={{
        backgroundImage: "url('home.jpg')",
        backgroundPosition: "50% 50%",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 bg-white p-8 sm:p-6 rounded-3xl border border-black shadow-2xl w-full max-w-lg text-black">
        <div className="flex mb-6">
          <Link className="text-green-500 hover:underline" href="/">
            Home
          </Link>
          <span className="mx-2">{">"}</span>
          <div>Sign Up</div>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
          Create Your Account
        </h1>
        <p className="mt-4 mb-8 text-center">
          Already have an Account?{" "}
          <a
            href="/signin"
            className="text-green-500 font-medium hover:underline"
          >
            Sign In
          </a>
        </p>
        <div>
          <div className="mb-4 relative">
            <p className="mb-1">
              {firstNameError && (
                <span className="text-red-500">{firstNameError}</span>
              )}
            </p>
            <input
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              type="text"
              name="first-name"
              placeholder="First Name"
              className="w-full py-2 px-4 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div className="mb-4 relative">
            <p className="mb-1">
              {lastNameError && (
                <span className="text-red-500">{lastNameError}</span>
              )}
            </p>
            <input
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              type="text"
              name="last-name"
              placeholder="Last Name"
              className="w-full py-2 px-4 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div className="mb-4 relative">
            <p className="mb-1">
              {emailError && <span className="text-red-500">{emailError}</span>}
            </p>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full py-2 px-4 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <div className="mb-4 relative">
            <p className="mb-1">
              {passwordError && (
                <span className="text-red-500">{passwordError}</span>
              )}
            </p>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              name="password"
              placeholder="Password"
              className="w-full py-2 px-4 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <p
            className={`${
              responseMessage ? "" : "collapse"
            } text-center text-green-500 mb-2`}
          >
            {responseMessage || " "}
          </p>
          <p
            className={`${
              errorResponseMessage ? "" : "collapse"
            } text-center text-red-500 mb-2 font-bold`}
          >
            {errorResponseMessage || " "}
          </p>
          <div className="w-full flex  justify-center mb-4 gap-2 items-center">
            <label className="inline-flex items-center relative">
              <input
                type="checkbox"
                className="form-radio peer appearance-none h-5 w-5 text-green-600"
                name="terms"
                onChange={() => setTermsOfUse(!termsOfUse)}
              />
              <span className="absolute h-5 w-5 rounded-xl border transition-all duration-500 border-black peer-checked:bg-green-500 peer-checked:border-none"></span>
              <span className="absolute h-2.5 w-2.5 rounded-xl left-[5px] transition-all duration-500 peer-checked:bg-white"></span>
              <p className="text-center sm:text-left ml-2">
                I agree with{" "}
                <button className="hover:underline m-0 text-green-500">
                  terms of use
                </button>
              </p>
            </label>
          </div>
          <div className="w-full flex justify-center">
            <button
              onClick={handleSubmit}
              disabled={!termsOfUse}
              className="w-2/3 bg-green-500 text-white py-2 px-4 rounded-md text-lg font-medium hover:bg-green-600 transition-transform transform hover:scale-105 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:hover:bg-gray-300 disabled:hover:scale-100"
            >
              Sign Up
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col items-center sm:mt-6 mt-3">
          <div className="flex items-center justify-center w-full my-4">
            <div className="border-t border-black flex-grow"></div>
            <span className="px-4 text-black text-sm">Or Sign Up with</span>
            <div className="border-t border-black flex-grow"></div>
          </div>
          <button className="bg-white p-1 rounded-xl shadow-md border-r border-b border-gray-400 hover:scale-105">
            <img src="/google.svg" alt="google-icon" />
          </button>
        </div>
      </div>
    </div>
  );
}
