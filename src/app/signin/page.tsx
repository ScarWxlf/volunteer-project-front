"use client";
import Link from "next/link";
import { useState } from "react";
import { Login } from "@/lib/api/auth";
import { useValidation } from "@/hooks/useValidation";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const { validateFields } = useValidation();

  const [errorResponseMessage, setErrorResponseMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const clearMessages = () => {
    setErrorResponseMessage("");
    setResponseMessage("");
    setErrors({});
  };

  const handleSubmit = () => {
    clearMessages();
    const { errors, isValid } = validateFields({
      email,
      password,
    });
      if (isValid) {
        Login({email, password, setResponseMessage, setErrorResponseMessage})
      } else if(errors) {
        setErrors(errors)
    }
  };

  return (
    <div
      className="relative flex items-center justify-center h-screen bg-cover bg-no-repeat overflow-hidden py-5 sm:px-0 px-5"
      style={{
        backgroundImage: "url('home.jpg')",
        backgroundPosition: "50% 50%",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 bg-white p-8 rounded-3xl border border-black shadow-2xl w-full max-w-lg pt-8 pb-10 text-black">
        <div className="flex mb-6">
          <Link className="text-green-500 hover:underline" href="/">
            Home
          </Link>
          <span className="mx-2">{">"}</span>
          <div>Sign In</div>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-center">Welcome Back</h1>
        <p className="mt-4 mb-8 text-center">
          Don’t have an account?{" "}
          <a
            href="/signup"
            className="text-green-500 font-medium hover:underline"
          >
            Sign Up
          </a>
        </p>
        <div>
        <div className="mb-4">
            <p className="mb-1">
              {errors.email && <span className="text-red-500">{errors.email}</span>}
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
          <div className="mb-4">
            <p className="mb-1">
              {errors.password && (
                <span className="text-red-500">{errors.password}</span>
              )}
            </p>
            <input
              onChange={(e) => setPassword(e.target.value)}
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
          <div className="w-full flex justify-center">
            <button
              onClick={handleSubmit}
              className="w-2/3 bg-green-500 text-white py-2 px-4 rounded-md text-lg font-medium hover:bg-green-600 transition-transform transform hover:scale-105"
            >
              Sign In
            </button>
          </div>
        </div>
        <p className="mt-4 text-center">
          Forgot your password?{" "}
          <a
            href="/reset-password"
            className="text-green-500 font-medium hover:underline"
          >
            Reset it here
          </a>
        </p>
        <div className="w-full flex flex-col items-center mt-6">
          <div className="flex items-center justify-center w-full my-4">
            <div className="border-t border-black flex-grow"></div>
            <span className="px-4 text-black text-sm">Or Sign In with</span>
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
