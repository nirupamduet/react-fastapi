// Define all themes as const arrays for literal types
export const mainThemes = [
  "purple1",
  "purple2",
  "blue",
  "purpleDark1",
  "purpleDark2",
  "blueDark"
] as const;

export const mainSidebarThemes = [
  "whitePurple",
  "whiteBlue",
  "slateDark1",
  "slateDark2",
  "purpleDark1",
  "purpleDark2",
  "blueDark"
] as const;

export const topbarThemes = [
  "whitePurple",
  "whiteBlue",
  "slateDark1",
  "slateDark2",
  "purpleDark1",
  "purpleDark2",
  "blueDark"
] as const;

// Create types from the arrays
export type MainTheme = typeof mainThemes[number];
export type SidebarTheme = typeof mainSidebarThemes[number];
export type TopbarTheme = typeof topbarThemes[number];

// Optional: create a union of all themes if needed
export type AnyTheme = MainTheme | SidebarTheme | TopbarTheme;

// Optional: export a unified object for easy access
export const allThemes = {
  main: mainThemes,
  sidebar: mainSidebarThemes,
  topbar: topbarThemes,
} as const;
