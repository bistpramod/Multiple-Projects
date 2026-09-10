"use server";

import axios from "axios";
import { redirect } from "next/navigation";
import { UserType } from "../_types/user";

const API_URL = "http://localhost:3000";

export const loginAction = async (formData: FormData) => {
  // server functions are always async
  const email = formData.get("email");
  const password = formData.get("password");

  let user: UserType | undefined;

  try {
    const response = await axios.get(
      `${API_URL}/users?email=${encodeURIComponent(
        email as string
      )}&password=${encodeURIComponent(password as string)}`
    );

    user = response.data[0];
  } catch (error) {
    console.error("Login request failed:", error);
    redirect("/contact");
  }

  if (!user) {
    throw new Error("Invalid credentials");
  }

  // TODO: set user in cookies / session here

  redirect("/dashboard");
};

export const logout = async () => {
  redirect("/login");
};