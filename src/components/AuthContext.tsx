'use client'
import { createContext, useContext} from "react";
import checkCookie from "@/lib/subFunc/isAuth";

export const AuthContext = createContext(false);

export default function AuthProvider ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
    const isAuth = checkCookie();
  return (
    <AuthContext.Provider value={isAuth}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
