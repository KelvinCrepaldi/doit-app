import Link from "next/link";
import { LoginForm } from "./components/loginForm";
import loginImage from "public/login.svg";
import Image from "next/image";
import BlackFrame from "./components/BlackFrame";

export default function Login() {
  return (
    <main className="flex lg:content-cente min-h-screen overflow-hidden">
      <div className="w-full lg:w-1/2  flex flex-col items-center justify-center">
        <LoginForm />
      </div>

      <BlackFrame />
    </main>
  );
}
