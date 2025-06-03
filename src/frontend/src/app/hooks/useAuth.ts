import { useContext } from "react";
//  TS(2307): Cannot find module 'app/contexts/FirebaseAuthConte... Remove this comment to see the full error message
import AuthContext from "app/contexts/FirebaseAuthContext";

export default function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
