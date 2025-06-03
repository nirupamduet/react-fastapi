import useSettings from "app/hooks/useSettings";
import SecondarySidebarToggle from "./SecondarySidebarToggle";
import SecondarySidebarContent from "./SecondarySidebarContent";
import { SecondarySidenavTheme } from "../MatxTheme/SecondarySidenavTheme";

export default function SecondarySidebar() {
  const { settings } = useSettings();
  // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
  const secondarySidebarTheme = settings.themes[settings.secondarySidebar.theme];

  return (
    <SecondarySidenavTheme theme={secondarySidebarTheme}>
      {settings.secondarySidebar.open && <SecondarySidebarContent />}
      <SecondarySidebarToggle />
    </SecondarySidenavTheme>
  );
}
