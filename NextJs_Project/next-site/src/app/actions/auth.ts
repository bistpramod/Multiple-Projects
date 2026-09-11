"use server";

import axios from "axios";
import { redirect } from "next/navigation";
import { UserType } from "../_types/user";
import { deleteSession, setSession } from "../_lib/session";

const API_URL = "http://localhost:3000";

export const loginAction = async (formData: FormData) => {
  // server functions are always async
  const email = formData.get("email");
  const password = formData.get("password");

  let user: UserType | undefined;

  try {
    const response = await axios.get(
      `${API_URL}/users?email=${encodeURIComponent(
        email as string,
      )}&password=${encodeURIComponent(password as string)}`,
    );

    user = response.data[0];
    if (!user) {
      throw new Error("Invalid credentials");
    }
    // TODO: set user in cookies / session here
    await setSession({ name: user.name, email: user.email, id: user.id });
    redirect("/dashboard");
  } catch (error) {
    console.error("Login request failed:", error);
  }
  redirect("/contact");
};

export const logoutAction = async () => {
  await deleteSession();

  redirect("/login");
};
