"use client";
import { LoadingSpinner } from "@/components";
import { UserContext } from "@/context/UserContext";
import { ReactNode, useContext } from "react";

interface MainProps {
  children: ReactNode;
}

const Main = ({ children }: MainProps) => {
  const { user, token } = useContext(UserContext);

  if (!user && !token) {
    return (
      <div className="w-full h-[50vh] flex items-center">
        <LoadingSpinner />
      </div>
    );
  }
  return <main className="m-5 md:mx-20 md:my-10">{children}</main>;
};

export default Main;
