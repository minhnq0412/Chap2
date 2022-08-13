import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
const AuthProvider = (props) => {
  const [user, setUser] = useState({
    userId: 1,
    fullName: "minhnq",
    email: "minhnq@gmail.com",
    avatar:"https://images.unsplash.com/photo-1660213373362-116aba8aee51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60"
  });
  const value = { user, setUser };
  return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>;
};
const useAuth = () => {
  const context = useContext(AuthContext);
  if (typeof context === "undefined")
    throw new Error("useCount must be used within a AuthProvider");
  return context;
};

export { AuthProvider, useAuth };
