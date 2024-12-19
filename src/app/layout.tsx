import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import AuthProvider from '../components/AuthContext'
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
      <body className="flex flex-col flex-grow h-screen">
        <AuthProvider>
          <Header />
          {children}
          <Footer/>
        </AuthProvider>
      </body>
    </html>
  );
}
