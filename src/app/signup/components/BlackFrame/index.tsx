"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import signupImage from "public/signup.svg";

export const BlackFrame = () => {
  return (
    <motion.div
      initial={{ x: -50, opacity: 0.5 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "tween", duration: 0.3 }}
      className="w-1/2  bg-black lg:flex hidden p-16"
    >
      <div className="max-w-[600px] flex">
        <Image src={signupImage} alt="login"></Image>
      </div>
    </motion.div>
  );
};

export default BlackFrame;
