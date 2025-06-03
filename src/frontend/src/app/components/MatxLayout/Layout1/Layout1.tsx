import { useEffect, useRef, memo } from "react";
import { Outlet } from "react-router-dom";
import Scrollbar from "react-perfect-scrollbar";
import Box from "@mui/material/Box";
import styled from "@mui/material/styles/styled";
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";
import ThemeProvider from "@mui/material/styles/ThemeProvider";

import Layout1Topbar from "./Layout1Topbar";
import Layout1Sidenav from "./Layout1Sidenav";
import Footer from "app/components/Footer";
import { MatxSuspense } from "app/components";
import useSettings from "app/hooks/useSettings";
import { SecondarySidebar } from "app/components/SecondarySidebar";
import SidenavTheme from "app/components/MatxTheme/SidenavTheme/SidenavTheme";
import { sidenavCompactWidth, sideNavWidth } from "app/utils/constant";
import { TopbarTheme } from "app/components/MatxCustomizer/customizerOptions";

// STYLED COMPONENTS (same as before)
const Layout1Root = styled("div")(({ theme }) => ({
  display: "flex",
  background: theme.palette.background.default
}));

const ContentBox = styled("div")(() => ({
  height: "100%",
  display: "flex",
  overflowY: "auto",
  overflowX: "hidden",
  flexDirection: "column",
  justifyContent: "space-between"
}));

const StyledScrollBar = styled(Scrollbar)(() => ({
  height: "100%",
  position: "relative",
  display: "flex",
  flexGrow: "1",
  flexDirection: "column"
}));

const LayoutContainer = styled("div", {
  shouldForwardProp: (prop) => prop !== "open" && prop !== "width"
})(() => ({
  height: "100vh",
  display: "flex",
  flexGrow: "1",
  flexDirection: "column",
  verticalAlign: "top",
  position: "relative",
  overflow: "hidden",
  transition: "all 0.3s ease"
}));

const Layout1 = () => {
  const { settings, updateSettings } = useSettings();
  const { layout1Settings, secondarySidebar } = settings;

  // ✅ Add static typing for topbar theme key
  const topbarThemeKey: TopbarTheme = layout1Settings.topbar.theme;
  const topbarTheme = settings.themes;

  const {
    leftSidebar: { mode: sidenavMode, show: showSidenav }
  } = layout1Settings;

  const getSidenavWidth = () => {
    switch (sidenavMode) {
      case "full":
        return sideNavWidth;
      case "compact":
        return sidenavCompactWidth;
      default:
        return "0px";
    }
  };

  const sidenavWidth = getSidenavWidth();
  const theme = useTheme();
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));

  const ref = useRef({ isMdScreen, settings });
  const layoutClasses = `theme-${theme.palette.mode}`; // Updated from `type` to `mode` for MUI v5+

  useEffect(() => {
    let { settings } = ref.current;
    let sidebarMode = settings.layout1Settings.leftSidebar.mode;
    if (settings.layout1Settings.leftSidebar.show) {
      let mode = isMdScreen ? "close" : sidebarMode;
      //updateSettings({ layout1Settings: { leftSidebar: { mode } } });
    }
  }, [isMdScreen]);

  return (
    <Layout1Root className={layoutClasses}>
      {showSidenav && sidenavMode !== "close" && (
        <SidenavTheme>
          <Layout1Sidenav />
        </SidenavTheme>
      )}

      <LayoutContainer>
        {layout1Settings.topbar.show && layout1Settings.topbar.fixed && (
          <ThemeProvider theme={topbarTheme}>
            <Layout1Topbar />
          </ThemeProvider>
        )}

        {settings.perfectScrollbar ? (
          <StyledScrollBar>
            {layout1Settings.topbar.show && !layout1Settings.topbar.fixed && (
              <ThemeProvider theme={topbarTheme}>
                <Layout1Topbar />
              </ThemeProvider>
            )}
            <Box flexGrow={1} position="relative">
              <MatxSuspense>
                <Outlet />
              </MatxSuspense>
            </Box>
            {settings.footer.show && !settings.footer.fixed && <Footer />}
          </StyledScrollBar>
        ) : (
          <ContentBox>
            {layout1Settings.topbar.show && !layout1Settings.topbar.fixed && (
              <ThemeProvider theme={topbarTheme}>
                <Layout1Topbar />
              </ThemeProvider>
            )}
            <Box flexGrow={1} position="relative">
              <MatxSuspense>
                <Outlet />
              </MatxSuspense>
            </Box>
            {settings.footer.show && !settings.footer.fixed && <Footer />}
          </ContentBox>
        )}

        {settings.footer.show && settings.footer.fixed && <Footer />}
      </LayoutContainer>

      {secondarySidebar.show && <SecondarySidebar />}
    </Layout1Root>
  );
};

export default memo(Layout1);
