import { useRoutes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { FC } from "react";

// ROOT THEME PROVIDER
import { MatxTheme } from "./components";

// ALL CONTEXTS
import SettingsProvider from "./contexts/SettingsContext";
import { AuthProvider } from "./contexts/FirebaseAuthContext";

// ROUTES
import routes from "./routes";

// FAKE SERVER
import "../__api__";

const App: FC = () => {
  const content = useRoutes(routes);

  return (
    <SettingsProvider>
      <AuthProvider>
        <MatxTheme>
          <CssBaseline />
          {content}
        </MatxTheme>
      </AuthProvider>
    </SettingsProvider>
  );
};

export default App;
