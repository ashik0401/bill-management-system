import { createContext } from "react";

export const AuthContext = createContext(null);


if (!localStorage.getItem("balance")) {
    localStorage.setItem("balance", "10000");
  }