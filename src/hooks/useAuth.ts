import jwtDecode from "jwt-decode";
import { TokenKey, ExtendedLoginTime, DefaultLoginTime } from "../constants";
import { User } from "../types/user-type";
import { setWithExpiry } from "../utils/token";

const useAuth = () => {
  const AuthLogin = (jwtToken: string, keep_logged: boolean) => {
    keep_logged
      ? setWithExpiry(TokenKey, jwtToken, ExtendedLoginTime)
      : setWithExpiry(TokenKey, jwtToken, DefaultLoginTime);
  };
  const AuthLogout = () => {
    try {
      localStorage.removeItem(TokenKey);
      window.location.href = "/";
    } catch (ex) {
      return null;
    }
  };
  const GetCurrentUser = () => {
    try {
      const jwtToken = localStorage.getItem(TokenKey);
      return jwtDecode<User>(jwtToken ? jwtToken : "");
    } catch (ex) {
      return null;
    }
  };

  const DecodeToken = (TokenKey: string) => {
    try {
      const jwtToken = TokenKey;
      return jwtDecode<User>(jwtToken ? jwtToken : "");
    } catch (ex) {
      return null;
    }
  };
  return { AuthLogin, AuthLogout, DecodeToken, GetCurrentUser };
};

export default useAuth;
