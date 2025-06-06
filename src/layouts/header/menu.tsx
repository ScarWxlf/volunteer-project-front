import Image from "next/image";
import Link from "next/link";

import logo from "/public/logo.svg";
import { Button } from "@/components/Button";
import { SignOut } from "@/lib/api/auth";

export default function Menu({
  pathname,
  mobileMenuOpen,
  setMobileMenuOpen,
  isAuth,
  userPhoto,
}: {
  pathname: string;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (mobileMenuOpen: boolean) => void;
  isAuth: boolean;
  userPhoto: string;
}) {
  return (
    <>
      <Link
        className="flex text-center gap-1 text-xl font-bold justify-end md:px-0 px-10"
        href="/"
      >
        <Image src={logo} alt="beb" />
        <h1 className="mt-0.5">CHARITY</h1>
      </Link>
      <div className="w-2/5 md:block hidden lg:w-2/6 xl:w-1/4">
        <div className="flex justify-around w-full">
          <Link
            className={`border-green-500 ${
              pathname === "/" ? "border-b-[3px] text-green-500" : "link"
            }`}
            href="/"
          >
            Home
          </Link>
          <Link
            className={`border-green-500 ${
              pathname === "/causes" ? "border-b-[3px] text-green-500" : "link"
            }`}
            href="/causes"
          >
            Causes
          </Link>
          <Link
            className={`border-green-500 ${
              pathname === "/about" ? "border-b-[3px] text-green-500" : "link"
            }`}
            href="/about"
          >
            About us
          </Link>
          <Link
            className={`border-green-500 ${
              pathname === "/contacts"
                ? "border-b-[3px] text-green-500"
                : "link"
            }`}
            href="/contacts"
          >
            Contact us
          </Link>
        </div>
      </div>
      <div className="flex justify-end md:hidden w-1/6 px-10">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`focus:outline-none transform transition-transform duration-300 ${
            mobileMenuOpen ? "rotate-90" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                mobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16m-7 6h7"
              }
            />
          </svg>
        </button>
      </div>
      <div className="md:block hidden">
        {isAuth ? (
          <div className="flex gap-12">
            <Link href="/profile">
              <Image
                src={userPhoto || "/profile/avatar.png"}
                alt="avatar"
                width={32}
                height={32}
                className="rounded-full border-2 border-green-500 hover:scale-105"
              />
            </Link>
            <Button
              variant="cancel"
              className="text-sm px-3 py-1 font-medium"
              onClick={SignOut}
            >
              Sign out
            </Button>
          </div>
        ) : (
          <div className="flex gap-12">
            <Link className="link" href="/signin">
              Sign in
            </Link>
            <Link className="link" href="/signup">
              Sign up
            </Link>
          </div>
        )}
      </div>
      {mobileMenuOpen && (
        <div className="w-full top-20 flex gap-32 justify-center absolute bg-black border-t border-white z-20 py-8 sm:px-20 px-4">
          <div className="flex flex-col items-center gap-4 sm:text-xl text-md">
            <Link
              className={`border-green-500 ${
                pathname === "/" ? "border-b-[3px] text-green-500" : "link"
              }`}
              href="/"
            >
              Home
            </Link>
            <Link
              className={`border-green-500 ${
                pathname === "/causes"
                  ? "border-b-[3px] text-green-500"
                  : "link"
              }`}
              href="/causes"
            >
              Causes
            </Link>
            <Link
              className={`border-green-500 ${
                pathname === "/about" ? "border-b-[3px] text-green-500" : "link"
              }`}
              href="/about"
            >
              About us
            </Link>
            <Link
              className={`border-green-500 ${
                pathname === "/contacts"
                  ? "border-b-[3px] text-green-500"
                  : "link"
              }`}
              href="/contacts"
            >
              Contact us
            </Link>
          </div>
          {isAuth ? (
            <div className="flex flex-col gap-6 sm:text-xl text-md justify-center items-center">
              <Link href="/profile">
                <Image
                  src={userPhoto || "/profile/avatar.png"}
                  alt="avatar"
                  width={32}
                  height={32}
                  className="rounded-full border-2 border-green-500 hover:scale-105"
                />
              </Link>
              <Button
                variant="cancel"
                className="text-sm px-3 py-1 font-medium"
                onClick={SignOut}
              >
                Sign out
              </Button>
            </div>
          ) : (
            <div className="flex flex-col gap-6 sm:text-xl text-md justify-center items-center">
              <Link className="link" href="/signin">
                Sign in
              </Link>
              <Link className="link" href="/signup">
                Sign up
              </Link>
            </div>
          )}
        </div>
      )}
    </>
  );
}
