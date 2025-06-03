import React, { createContext, useState, ReactNode } from "react";
// @ts-expect-error TS(7016): Could not find a declaration file for module 'loda... Remove this comment to see the full error message
import merge from "lodash/merge";
import { MatxLayoutSettings } from "app/components/MatxLayout/settings";

// Define the shape of settings using the imported default
type SettingsType = typeof MatxLayoutSettings;

interface SettingsContextType {
  settings: SettingsType;
  updateSettings: (update: Partial<SettingsType>) => void;
}

export const SettingsContext = createContext < SettingsContextType > ({
  settings: MatxLayoutSettings,
  updateSettings: () => { },
});

interface SettingsProviderProps {
  settings?: SettingsType;
  children: ReactNode;
}

export default function SettingsProvider({
  settings,
  children,
}: SettingsProviderProps): JSX.Element {
  const [currentSettings, setCurrentSettings] = useState < SettingsType > (
    settings || MatxLayoutSettings
  );

  const handleUpdateSettings = (update: Partial<SettingsType> = {}) => {
    const merged = merge({}, currentSettings, update);
    setCurrentSettings(merged);
  };

  return (
    <SettingsContext.Provider
      value={{ settings: currentSettings, updateSettings: handleUpdateSettings }}
    >
      {children}
    </SettingsContext.Provider>
  );
}
