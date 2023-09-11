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

export const SignupForm = () => {
  const router = useRouter();
  const { token } = useContext(UserContext);

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

  const handleLogin = async (e: ILoginRequest) => {
    try {
      const res = await api.post("/auth/signup/", e);
      const data = res.data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      onSubmit={handleSubmit(handleLogin)}
      className="flex flex-col min-w-[300px] items-center"
    >
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
      ></Input>
      <Input
        control={control}
        label="Confirmar senha:"
        error={errors.confirmPassword?.message}
        name="confirmPassword"
      ></Input>

      <div className="mt-10 flex flex-col items-center">
        {<div className=" max-w-[300px] text-center text-red-700">{}</div>}
        {false ? (
          <LoadingSpinner />
        ) : (
          <Button customStyle="secondary" type="submit">
            Login
          </Button>
        )}
      </div>
    </motion.form>
  );
};
