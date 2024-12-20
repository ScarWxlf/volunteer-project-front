// 'use client'
// import { createContext, useContext, useEffect, useState} from "react";
// import checkCookie from "@/lib/subFunc/isAuth";

// export const AuthContext = createContext(false);

// export default function AuthProvider ({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>){
//   const [isAuth, setIsAuth] = useState(false);
//   useEffect(() => {
//     const check = async () => {
//         const resp = await checkCookie();
//         setIsAuth(resp);
//       }
//       check();
//     }, []);
//   return (
//     <AuthContext.Provider value={isAuth}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
