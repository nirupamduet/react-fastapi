import { lazy, ReactNode } from "react";
//  TS(2307): Cannot find module 'app/components/Loadable' or it... Remove this comment to see the full error message
import Loadable from "app/components/Loadable";

// Lazy-loaded components
//  TS(6142): Module './forms/AppForm' was resolved to 'C:/Users... Remove this comment to see the full error message
const AppForm = Loadable(lazy(() => import("./forms/AppForm")));
//  TS(6142): Module './menu/AppMenu' was resolved to 'C:/Users/... Remove this comment to see the full error message
const AppMenu = Loadable(lazy(() => import("./menu/AppMenu")));
//  TS(6142): Module './icons/AppIcon' was resolved to 'C:/Users... Remove this comment to see the full error message
const AppIcon = Loadable(lazy(() => import("./icons/AppIcon")));
//  TS(6142): Module './AppProgress' was resolved to 'C:/Users/n... Remove this comment to see the full error message
const AppProgress = Loadable(lazy(() => import("./AppProgress")));
//  TS(6142): Module './radio/AppRadio' was resolved to 'C:/User... Remove this comment to see the full error message
const AppRadio = Loadable(lazy(() => import("./radio/AppRadio")));
//  TS(6142): Module './tables/AppTable' was resolved to 'C:/Use... Remove this comment to see the full error message
const AppTable = Loadable(lazy(() => import("./tables/AppTable")));
//  TS(6142): Module './switch/AppSwitch' was resolved to 'C:/Us... Remove this comment to see the full error message
const AppSwitch = Loadable(lazy(() => import("./switch/AppSwitch")));
//  TS(6142): Module './slider/AppSlider' was resolved to 'C:/Us... Remove this comment to see the full error message
const AppSlider = Loadable(lazy(() => import("./slider/AppSlider")));
//  TS(6142): Module './dialog/AppDialog' was resolved to 'C:/Us... Remove this comment to see the full error message
const AppDialog = Loadable(lazy(() => import("./dialog/AppDialog")));
//  TS(6142): Module './buttons/AppButton' was resolved to 'C:/U... Remove this comment to see the full error message
const AppButton = Loadable(lazy(() => import("./buttons/AppButton")));
//  TS(6142): Module './checkbox/AppCheckbox' was resolved to 'C... Remove this comment to see the full error message
const AppCheckbox = Loadable(lazy(() => import("./checkbox/AppCheckbox")));
//  TS(6142): Module './snackbar/AppSnackbar' was resolved to 'C... Remove this comment to see the full error message
const AppSnackbar = Loadable(lazy(() => import("./snackbar/AppSnackbar")));
//  TS(6142): Module './auto-complete/AppAutoComplete' was resol... Remove this comment to see the full error message
const AppAutoComplete = Loadable(lazy(() => import("./auto-complete/AppAutoComplete")));
//  TS(6142): Module './expansion-panel/AppExpansionPanel' was r... Remove this comment to see the full error message
const AppExpansionPanel = Loadable(lazy(() => import("./expansion-panel/AppExpansionPanel")));

// Route type
interface RouteType {
  path: string;
  element: ReactNode;
}

// Material UI routes
const materialRoutes: RouteType[] = [

  { path: "/material/table", element: <AppTable /> },

  { path: "/material/form", element: <AppForm /> },

  { path: "/material/buttons", element: <AppButton /> },

  { path: "/material/icons", element: <AppIcon /> },

  { path: "/material/progress", element: <AppProgress /> },

  { path: "/material/menu", element: <AppMenu /> },

  { path: "/material/checkbox", element: <AppCheckbox /> },

  { path: "/material/switch", element: <AppSwitch /> },

  { path: "/material/radio", element: <AppRadio /> },

  { path: "/material/slider", element: <AppSlider /> },

  { path: "/material/autocomplete", element: <AppAutoComplete /> },

  { path: "/material/expansion-panel", element: <AppExpansionPanel /> },

  { path: "/material/dialog", element: <AppDialog /> },

  { path: "/material/snackbar", element: <AppSnackbar /> }
];

export default materialRoutes;
