import { lazy } from "react";

//  TS(6142): Module './NotFound' was resolved to 'C:/Users/niru... Remove this comment to see the full error message
const NotFound = lazy(() => import("./NotFound"));
//  TS(6142): Module './ForgotPassword' was resolved to 'C:/User... Remove this comment to see the full error message
const ForgotPassword = lazy(() => import("./ForgotPassword"));

//  TS(6142): Module './login/FirebaseLogin' was resolved to 'C:... Remove this comment to see the full error message
const FirebaseLogin = lazy(() => import("./login/FirebaseLogin"));
//  TS(6142): Module './register/FirebaseRegister' was resolved ... Remove this comment to see the full error message
const FirebaseRegister = lazy(() => import("./register/FirebaseRegister"));

// const JwtLogin = Loadable(lazy(() => import("./login/JwtLogin")));
// const JwtRegister = Loadable(lazy(() => import("./register/JwtRegister")));
// const Auth0Login = Loadable(lazy(() => import("./login/Auth0Login")));

const sessionRoutes = [

  { path: "/session/signup", element: <FirebaseRegister /> },

  { path: "/session/signin", element: <FirebaseLogin /> },

  { path: "/session/forgot-password", element: <ForgotPassword /> },

  { path: "*", element: <NotFound /> }
];

export default sessionRoutes;
