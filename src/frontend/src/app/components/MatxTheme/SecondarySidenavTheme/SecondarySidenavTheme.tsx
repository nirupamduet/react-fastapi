import { ThemeProvider } from "@mui/material/styles";

export default function SecondarySidenavTheme({
  theme,
  children
}: any) {

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
