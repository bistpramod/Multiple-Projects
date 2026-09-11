"use client";

import React from "react";
import { logoutAction } from "../actions/auth";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logoutAction();
      // redirect happens in the server action
      // this client side redirect is a fallback
      router.push("/login");
      router.refresh();
    } catch (error) {
      console.log("something went wrong ", error);
    }
  };

  return (
    <div>
      <button
        onClick={handleLogout}
        className="px-4 py-5 bg-white-500 text-white rounded-md hover:bg-gray-500 transition-colors cursor-pointer "
      >
        Logout
      </button>
    </div>
  );
};

export default LogoutButton;