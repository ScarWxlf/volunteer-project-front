import Cookies from 'js-cookie'

interface Auth {
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  setResponseMessage: (message: string) => void;
  setErrorResponseMessage: (message: string) => void;
}

export async function Login({
  email,
  password,
  setResponseMessage,
  setErrorResponseMessage,
}: Auth) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );
    const token = response.headers.get("Authorization");
    if (token) {
      Cookies.set("token", token, {
        path: "/",
        secure: true,
        sameSite: "Strict",
        expires: 7,
      });
    }

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    } else {
      setResponseMessage(data.message);
    }
  } catch (error) {
    setErrorResponseMessage(
      (error as Error).message || "Something went wrong."
    );
  }
}

export async function Register({
  firstName,
  lastName,
  email,
  password,
  setResponseMessage,
  setErrorResponseMessage
}: Auth) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
        }),
      }
    );

    const token = response.headers.get("Authorization");
    if (token) {
      Cookies.set("token", token, {
        path: "/",
        secure: true,
        sameSite: "Strict",
        expires: 7,
      });
    }

    const data = await response.json();

    if (!response.ok) {
      console.log(data);
      throw new Error(data.message);
    } else {
      setResponseMessage(data.message);
    }
  } catch (error) {
    setErrorResponseMessage(
      (error as Error).message || "Something went wrong."
    );
  }
}
