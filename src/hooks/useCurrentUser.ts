import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useLocalStorage } from "./useLocalStorage";
import { User } from "../types/user-type";

// NOTE: optimally move this into a separate file

export const useCurrentUser = () => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const { setItem } = useLocalStorage();

  const addUser = (user: User) => {
    setCurrentUser(user);
    setItem("user", JSON.stringify(user));
  };

  const removeUser = () => {
    setCurrentUser(null);
    setItem("user", "");
  };

  return { currentUser, addUser, removeUser };
};
