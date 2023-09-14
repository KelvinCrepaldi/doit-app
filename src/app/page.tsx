import Button from "@/components/Button/Button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen p-10">
      <h1 className="text-[64px] font-bold [text-shadow:_0px_4px_4px_rgb(0_0_0_/_30%)]">
        do<span className="text-green-700">.</span>it
      </h1>
      <p className="text-[36px] text-center">
        Organize-se de forma fácil e efetiva
      </p>
      <div className="flex">
        <Link href="/signup">
          <Button>Cadastre-se</Button>
        </Link>
        <Link href="/login">
          <Button customStyle="secondary">Login</Button>
        </Link>
      </div>
    </main>
  );
}
