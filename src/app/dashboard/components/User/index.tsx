"use client";
import { UserContext } from "@/context/UserContext";
import { useContext } from "react";
import { IoMdLogOut } from "react-icons/io";

const User = (): JSX.Element => {
  const { user, logout } = useContext(UserContext);

  return (
    <div className="text-white flex items-center space-x-4 text-xl md:text-2xl">
      <p className="">{user && user.name}</p>
      <button onClick={logout} className="hover:text-doit-orange-text">
        <IoMdLogOut />
      </button>
    </div>
  );
};

export default User;
