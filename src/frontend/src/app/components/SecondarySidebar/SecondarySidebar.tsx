//  TS(2307): Cannot find module 'app/hooks/useSettings' or its ... Remove this comment to see the full error message
import useSettings from "app/hooks/useSettings";
//  TS(6142): Module './SecondarySidebarToggle' was resolved to ... Remove this comment to see the full error message
import SecondarySidebarToggle from "./SecondarySidebarToggle";
//  TS(6142): Module './SecondarySidebarContent' was resolved to... Remove this comment to see the full error message
import SecondarySidebarContent from "./SecondarySidebarContent";
import { SecondarySidenavTheme } from "../MatxTheme/SecondarySidenavTheme";

export default function SecondarySidebar() {
  const { settings } = useSettings();
  const secondarySidebarTheme = settings.themes[settings.secondarySidebar.theme];

  return (

    <SecondarySidenavTheme theme={secondarySidebarTheme}>

      {settings.secondarySidebar.open && <SecondarySidebarContent />}

      <SecondarySidebarToggle />
    </SecondarySidenavTheme>
  );
}
