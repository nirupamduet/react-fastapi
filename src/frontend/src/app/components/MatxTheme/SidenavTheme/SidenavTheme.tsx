import { ThemeProvider, useTheme } from "@mui/material/styles";
import useSettings from "app/hooks/useSettings";

export default function SidenavTheme({
  children
}: any) {
  const theme = useTheme();
  const { settings } = useSettings();
  // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
  const sidenavTheme = settings.themes[settings.layout1Settings.leftSidebar.theme] || theme;

  return <ThemeProvider theme={sidenavTheme}>{children}</ThemeProvider>;
}
