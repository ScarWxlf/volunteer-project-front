interface Auth {
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  clearMessages: () => void;
  setResponseMessage: (message: string) => void;
  setErrorResponseMessage: (message: string) => void;
  validateFields?: () => boolean;
}

export async function Login({
  email,
  password,
  clearMessages,
  setResponseMessage,
  setErrorResponseMessage,
}: Auth) {
  clearMessages();
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
      const clearToken = token.replace("Bearer ", "");
      console.log("Token:", clearToken);
    }

    document.cookie = `token=${token}; path=/;`;
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
  clearMessages,
  setResponseMessage,
  setErrorResponseMessage,
  validateFields,
}: Auth) {
  clearMessages();

  if (validateFields && !validateFields()) return;
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
      const clearToken = token.replace("Bearer ", "");
      console.log("Token:", clearToken);
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
