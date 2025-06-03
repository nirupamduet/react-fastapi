import CssBaseline from "@mui/material/CssBaseline";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
//  TS(2307): Cannot find module 'app/hooks/useSettings' or its ... Remove this comment to see the full error message
import useSettings from "app/hooks/useSettings";

export default function MatxTheme({
  children
}: any) {
  const { settings } = useSettings();
  let activeTheme = { ...settings.themes[settings.activeTheme] };

  return (

    <ThemeProvider theme={activeTheme}>

      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
