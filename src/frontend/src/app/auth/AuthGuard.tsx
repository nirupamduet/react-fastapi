import { Navigate, useLocation } from "react-router-dom";
// HOOK
//  TS(2307): Cannot find module 'app/hooks/useAuth' or its corr... Remove this comment to see the full error message
import useAuth from "app/hooks/useAuth";

export default function AuthGuard({
  children
}: any) {
  const { isAuthenticated } = useAuth();
  const { pathname } = useLocation();


  if (isAuthenticated) return <>{children}</>;


  return <Navigate replace to="/session/signin" state={{ from: pathname }} />;
}
