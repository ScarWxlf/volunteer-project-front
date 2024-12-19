'use server';
import Cookies from "js-cookie";

export async function GetUser() {
        // {
    //     "email": "my1234@gmail.com",
    //     "password": "123QWe"
    //  }
  const token = Cookies.get("token");
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
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