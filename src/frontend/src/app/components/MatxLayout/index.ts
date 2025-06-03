import { lazy } from "react";

//  TS(6142): Module './Layout1/Layout1' was resolved to 'C:/Use... Remove this comment to see the full error message
export const MatxLayouts = { layout1: lazy(() => import("./Layout1/Layout1")) };
