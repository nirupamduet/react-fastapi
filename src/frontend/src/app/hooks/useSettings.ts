import { useContext } from "react";
//  TS(2307): Cannot find module 'app/contexts/SettingsContext' ... Remove this comment to see the full error message
import { SettingsContext } from "app/contexts/SettingsContext";

export default function useSettings() {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error("useSettings must be used within an SettingsProvider");
  }
  return context;
}
