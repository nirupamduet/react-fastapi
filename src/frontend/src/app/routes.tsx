import { lazy, ReactNode } from "react";
import { Navigate } from "react-router-dom";

import AuthGuard from "./auth/AuthGuard";
import { authRoles } from "./auth/authRoles";

import Loadable from "./components/Loadable";
import MatxLayout from "./components/MatxLayout/MatxLayout";
import sessionRoutes from "./views/sessions/session-routes";
import materialRoutes from "app/views/material-kit/MaterialRoutes";

// Lazy-loaded pages
const AppEchart = Loadable(lazy(() => import("app/views/charts/echarts/AppEchart")));
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
