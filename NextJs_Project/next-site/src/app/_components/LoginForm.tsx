
import React from "react";
import { deflate } from "zlib";

const LoginForm = () => {
  return (
    <form className="w-full max-w-md space-y-6 rounded-2xl bg-white p-8 shadow-xl ring-1 gry-100">
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-gray-700"
        >
          Email
        </label>

        <input
          id="email"
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/20"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="password"
          className="block text-sm font-semibold text-gray-700"
        >
          Password
        </label>

        <input
          id="password"
          type="password"
          name="password"
          placeholder="Enter your password"
          required
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/20"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-indigo-600 px-4 py-3 font-semibold text-white shadow-md transition duration-200 hover:bg-indigo-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:scale-[0.98]"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;