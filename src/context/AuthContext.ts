import { createContext } from "react";
import { User } from "../types/user-type";

interface AuthContext {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
}

export const AuthContext = createContext<AuthContext>({
  currentUser: null,
  setCurrentUser: () => {},
});
