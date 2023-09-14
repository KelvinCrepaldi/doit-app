"use client";
import { Button, Input, LoadingSpinner } from "@/components";
import { UserContext } from "@/context/UserContext";
import { ILoginRequest } from "@/interfaces/login.interfaces";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import signupSchema from "./schema";
import { ISinupRequest } from "@/interfaces/signup.interfaces";
import api from "@/services";
import { motion } from "framer-motion";
import Link from "next/link";
import { SignupContext } from "@/context/SignupContext";

export const SignupForm = () => {
  const router = useRouter();
  const { token } = useContext(UserContext);
  const { loading, error, signup } = useContext(SignupContext);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ISinupRequest>({ resolver: yupResolver(signupSchema) });

  useEffect(() => {
    if (token) {
      router.push("/dashboard");
    }
  }, [token, router]);

  const handleLogin = async (data: ILoginRequest) => {
    signup(data);
  };

  return (
    <motion.form
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "tween", duration: 0.3 }}
      onSubmit={handleSubmit(handleLogin)}
      className="flex flex-col min-w-[300px] items-center"
    >
      <h1 className="text-5xl mb-10 ">Cadastro</h1>
      <Input
        control={control}
        label="Name:"
        error={errors.email?.message}
        name="name"
      ></Input>
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
      <Input
        control={control}
        label="Confirmar senha:"
        error={errors.confirmPassword?.message}
        name="confirmPassword"
        type="password"
      ></Input>
      <div className="mt-10 flex flex-col items-center">
        {<div className=" max-w-[300px] text-center text-red-700">{}</div>}
        {error && (
          <div className=" max-w-[300px] text-center text-red-700">{error}</div>
        )}
        {loading ? (
          <LoadingSpinner />
        ) : (
          <Button customStyle="secondary" type="submit">
            Cadastrar
          </Button>
        )}
      </div>
      <p className="mt-3">
        Já tem uma conta? Faça seu{" "}
        <Link href={"/login"} className="text-doit-orange-text font-bold">
          login
        </Link>
      </p>
    </motion.form>
  );
};
