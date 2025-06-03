import { lazy, ReactNode } from "react";
import { Navigate } from "react-router-dom";

//  TS(6142): Module './auth/AuthGuard' was resolved to 'C:/User... Remove this comment to see the full error message
import AuthGuard from "./auth/AuthGuard";
import { authRoles } from "./auth/authRoles";

//  TS(6142): Module './components/Loadable' was resolved to 'C:... Remove this comment to see the full error message
import Loadable from "./components/Loadable";
//  TS(6142): Module './components/MatxLayout/MatxLayout' was re... Remove this comment to see the full error message
import MatxLayout from "./components/MatxLayout/MatxLayout";
//  TS(6142): Module './views/sessions/session-routes' was resol... Remove this comment to see the full error message
import sessionRoutes from "./views/sessions/session-routes";
//  TS(2307): Cannot find module 'app/views/material-kit/Materia... Remove this comment to see the full error message
import materialRoutes from "app/views/material-kit/MaterialRoutes";

// Lazy-loaded pages
//  TS(2307): Cannot find module 'app/views/charts/echarts/AppEc... Remove this comment to see the full error message
const AppEchart = Loadable(lazy(() => import("app/views/charts/echarts/AppEchart")));
//  TS(2307): Cannot find module 'app/views/dashboard/Analytics'... Remove this comment to see the full error message
const Analytics = Loadable(lazy(() => import("app/views/dashboard/Analytics")));

// Route type
interface RouteType {
  path?: string;
  element?: ReactNode;
  children?: RouteType[];
  auth?: string[];
}

// Routes array
const routes: RouteType[] = [

  { path: "/", element: <Navigate to="dashboard/default" /> },
  {
    element: (
      <AuthGuard>
        <MatxLayout />
      </AuthGuard>
    ),
    children: [
      ...materialRoutes,

      { path: "/dashboard/default", element: <Analytics />, auth: authRoles.admin },

      { path: "/charts/echarts", element: <AppEchart />, auth: authRoles.editor }
    ]
  },
  ...sessionRoutes
];

export default routes;
