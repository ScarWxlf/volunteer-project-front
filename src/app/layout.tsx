import Header from "../layouts/header/header";
import Footer from "../layouts/footer";
import checkCookie from "@/lib/subFunc/isAuth";
import type { Metadata } from "next";
import "./globals.css";
import { GetUser } from "@/lib/api/user";

export const metadata: Metadata = {
  title: "Volounteer",
  description: "Created by David Shefer",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isAuth = await checkCookie();
  const user = await GetUser();
  return (
    <html lang="en">
      <body className="flex flex-col flex-grow h-screen">
        <Header isAuth={isAuth} userPhoto={user?.photo} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
