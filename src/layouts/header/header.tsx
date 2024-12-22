"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Menu from "./menu";
import { User } from "@/lib/types";

export default function Header({ isAuth, userPhoto }: { isAuth: boolean, userPhoto: string }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (pathname === "/signin" || pathname === "/signup") return null;
  return (
    <div className="flex items-center flex-none md:justify-around justify-between h-20 bg-black text-white relative z-50">
      <Menu
        pathname={pathname}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        isAuth={isAuth}
        userPhoto={userPhoto}
      />
    </div>
  );
}
