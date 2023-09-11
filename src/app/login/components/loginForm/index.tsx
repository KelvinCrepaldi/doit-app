"use client";
import { Button, Input, LoadingSpinner } from "@/components";
import { UserContext } from "@/context/UserContext";
import { ILoginRequest } from "@/interfaces/login.interfaces";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import loginSchema from "./schema";
import { motion } from "framer-motion";
import Link from "next/link";

export const LoginForm = () => {
  const router = useRouter();
  const { login, token, loading, error } = useContext(UserContext);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ILoginRequest>({
    resolver: yupResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  useEffect(() => {
    if (token) {
      router.push("/dashboard");
    }
  }, [token, router]);

  const handleLogin = (e: ILoginRequest) => {
    login(e);
  };
  return (
    <motion.form
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      onSubmit={handleSubmit(handleLogin)}
      className="flex flex-col min-w-[300px] items-center"
    >
      <h1 className="text-5xl mb-10">Login</h1>
      <Input
        control={control}
        label="Email:"
        error={errors.email?.message}
        name="email"
      ></Input>

      <Input
        control={control}
        label="Senha:"
        error={errors.password?.message}
        name="password"
        type="password"
      ></Input>

      <div className="mt-10 flex flex-col items-center">
        {error && (
          <div className=" max-w-[300px] text-center text-red-700">{error}</div>
        )}
        {loading ? (
          <LoadingSpinner />
        ) : (
          <Button customStyle="secondary" type="submit">
            Login
          </Button>
        )}
        <p className="mt-3">
          Não tem uma conta? Faça seu{" "}
          <Link href={"/signup"} className="text-doit-orange-text font-bold">
            cadastro
          </Link>
        </p>
      </div>
    </motion.form>
  );
};
