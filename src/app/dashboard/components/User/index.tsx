"use client";
import { UserContext } from "@/context/UserContext";
import { useContext, useEffect, useState } from "react";
import { IoMdLogOut } from "react-icons/io";

const User = (): JSX.Element => {
  const { user, logout } = useContext(UserContext);
  const [userEmail, setUserEmail] = useState<string>("");

  useEffect(() => {
    if (user.email) {
      setUserEmail(user.email);
    }
  }, []);

  return (
    <div className="text-white flex items-center space-x-4 text-2xl">
      <p className="">{userEmail && userEmail}</p>
      <button onClick={logout} className="hover:text-doit-orange-text">
        <IoMdLogOut />
      </button>
    </div>
  );
};

export default User;
