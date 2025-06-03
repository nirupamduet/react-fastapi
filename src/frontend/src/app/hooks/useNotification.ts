import { useContext } from "react";
//  TS(2307): Cannot find module 'app/contexts/NotificationConte... Remove this comment to see the full error message
import NotificationContext from "app/contexts/NotificationContext";

export default function useNotification() {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error("useNotification must be used within an NotificationProvider");
  }
  return context;
}
