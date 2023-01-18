import { useAppSelector } from "@/apps";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
  const { token } = useAppSelector(({ auth }) => auth);

  return token ? <Outlet /> : <Navigate to="/login" />;
};
