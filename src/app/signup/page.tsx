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
      <div className="w-full md:w-1/2  flex flex-col items-center justify-center ">
        <h1 className="text-5xl mb-10 ">Cadastro</h1>
        <SignupForm></SignupForm>
        <p className="mt-3">
          Já tem uma conta? Faça seu{" "}
          <Link href={"/login"} className="text-doit-orange-text font-bold">
            login
          </Link>
        </p>
      </div>
    </main>
  );
}
