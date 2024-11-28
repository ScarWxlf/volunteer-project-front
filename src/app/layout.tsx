import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Volounteer",
  description: "Created by David Shefer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col flex-grow">
        {children}
      </body>
    </html>
  );
}
