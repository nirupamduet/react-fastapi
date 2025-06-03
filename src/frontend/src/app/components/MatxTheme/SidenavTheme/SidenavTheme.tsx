import { ThemeProvider, useTheme } from "@mui/material/styles";
//  TS(2307): Cannot find module 'app/hooks/useSettings' or its ... Remove this comment to see the full error message
import useSettings from "app/hooks/useSettings";

export default function SidenavTheme({
  children
}: any) {
  const theme = useTheme();
  const { settings } = useSettings();
  const sidenavTheme = settings.themes[settings.layout1Settings.leftSidebar.theme] || theme;


  return <ThemeProvider theme={sidenavTheme}>{children}</ThemeProvider>;
}
