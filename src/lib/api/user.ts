'use server';
import { cookies } from "next/headers";

export async function GetUser() {
        // {
    //     "email": "my1234@gmail.com",
    //     "password": "123QWe"
    //  }
  const cookieStore = await cookies()
  const token = cookieStore.get('token')
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token?.value}`,
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function PatchUser() {
  // const token = Cookies.get("token");

}