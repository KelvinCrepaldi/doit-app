import Button from "@/components/Button/Button";
import Link from "next/link";
import { SignupForm } from "./components/signupForm";
import signupImage from "public/signup.svg";
import Image from "next/image";
import BlackFrame from "./components/BlackFrame";

export default function Signup() {
  return (
    <main className="flex lg:content-cente min-h-screen overflow-hidden">
      <BlackFrame />
      <div className="w-full lg:w-1/2  flex flex-col items-center justify-center">
        <SignupForm></SignupForm>
      </div>
    </main>
  );
}
