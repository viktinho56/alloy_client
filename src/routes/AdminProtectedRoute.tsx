import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

//import UserContext from "../context/userContext";
interface Props {
  children?: ReactNode;
}
const AdminProtectedRoute = ({ children }: Props) => {
  let { GetCurrentUser } = useAuth();
  //const { user } = useContext(UserContext);
  if (!GetCurrentUser()) {
    return <Navigate to="/" replace />;
  }
  //  else if (GetCurrentUser()) {
  //   return <Navigate to="/" replace />;
  // }
  return <div>{children}</div>;
};
export default AdminProtectedRoute;
