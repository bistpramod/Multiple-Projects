// this is a server component
import Link from "next/link";
import LoginForm from "@/app/_components/LoginForm";

const LoginPage = () => {
  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Login</h1>
      <LoginForm />
      <p>
        Dont have an account?{" "}
        <Link href="/register">Register</Link>
      </p>
    </div>
  );
};

export default LoginPage;