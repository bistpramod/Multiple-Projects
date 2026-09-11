"use client";

import React from "react";
import { logoutAction } from "../actions/auth"; 
const LogoutButton = () => {
  const handleLogout = async () => {
   try{

     await logoutAction();
     // redirect  happens in the server action 
     // this  client side redirect is a fallback
   }
   catch(error){
    
    
   }
  };

  return (
    <div>
      <button onClick={handleLogout}  className="px-4 py-5 bg-red-500 text-white rounded-md hover:bg-red-500 transition-colors cursor-pointer ">Logout</button>
    </div>
  );
};

export default LogoutButton;