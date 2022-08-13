import React from "react";
import { useAuth } from "./contexts/authContext";

const HeaderMain = () => {
  const { user, setUser } = useAuth();
  return (
    <div className="p-4 bg-white shadow-md flex items-center justify-center">
      {user ? (
        <div className="flex items-center gap-x-3">
          <img
            alt=""
            className="w-10 h-10 rounded-full object-cover"
            src={user?.avatar}
          ></img>
          <span className="text-sm font-medium">
            Welcome Back <strong>{user?.fullName}</strong>
          </span>
        </div>
      ) : (
        <span>Welcome</span>
      )}
      <button
        className="p-2 rounded-lg bg-slate-300 ml-auto"
        onClick={() => setUser(null)}
      >
        Sign Out
      </button>
    </div>
  );
};

export default HeaderMain;
