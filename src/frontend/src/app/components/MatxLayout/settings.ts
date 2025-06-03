import { themes } from "../MatxTheme/initThemes";
import layout1Settings from "./Layout1/Layout1Settings";

// Define a type for layout settings
export interface LayoutSettings {
  activeLayout: "layout1" | "layout2";
  activeTheme: string;
  perfectScrollbar: boolean;
  themes: typeof themes;
  layout1Settings: typeof layout1Settings;
  secondarySidebar: {
    show: boolean;
    open: boolean;
    theme: string;
  };
  footer: {
    show: boolean;
    fixed: boolean;
    theme: string;
  };
}

export const MatxLayoutSettings: LayoutSettings = {
  activeLayout: "layout1",
  activeTheme: "blue",
  perfectScrollbar: false,

  themes,
  layout1Settings,

  secondarySidebar: {
    show: true,
    open: false,
    theme: "slateDark1"
  },

  footer: {
    show: true,
    fixed: false,
    theme: "slateDark1"
  }
};
