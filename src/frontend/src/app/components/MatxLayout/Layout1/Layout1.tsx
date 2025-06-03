import { useEffect, useRef, memo } from "react";
import { Outlet } from "react-router-dom";
import Scrollbar from "react-perfect-scrollbar";
import Box from "@mui/material/Box";
import styled from "@mui/material/styles/styled";
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";
import ThemeProvider from "@mui/material/styles/ThemeProvider";

//  TS(6142): Module './Layout1Topbar' was resolved to 'C:/Users... Remove this comment to see the full error message
import Layout1Topbar from "./Layout1Topbar";
//  TS(6142): Module './Layout1Sidenav' was resolved to 'C:/User... Remove this comment to see the full error message
import Layout1Sidenav from "./Layout1Sidenav";
//  TS(2307): Cannot find module 'app/components/Footer' or its ... Remove this comment to see the full error message
import Footer from "app/components/Footer";
//  TS(2307): Cannot find module 'app/components' or its corresp... Remove this comment to see the full error message
import { MatxSuspense } from "app/components";
//  TS(2307): Cannot find module 'app/hooks/useSettings' or its ... Remove this comment to see the full error message
import useSettings from "app/hooks/useSettings";
//  TS(2307): Cannot find module 'app/components/SecondarySideba... Remove this comment to see the full error message
import { SecondarySidebar } from "app/components/SecondarySidebar";
//  TS(2307): Cannot find module 'app/components/MatxTheme/Siden... Remove this comment to see the full error message
import SidenavTheme from "app/components/MatxTheme/SidenavTheme/SidenavTheme";
//  TS(2307): Cannot find module 'app/utils/constant' or its cor... Remove this comment to see the full error message
import { sidenavCompactWidth, sideNavWidth } from "app/utils/constant";

// STYLED COMPONENTS
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
  //  TS(2339): Property 'width' does not exist on type 'MUIStyled... Remove this comment to see the full error message
})(({ width, open }) => ({
  height: "100vh",
  display: "flex",
  flexGrow: "1",
  flexDirection: "column",
  verticalAlign: "top",
  marginLeft: width,
  position: "relative",
  overflow: "hidden",
  transition: "all 0.3s ease",
  marginRight: open ? 50 : 0
}));

const Layout1 = () => {
  const { settings, updateSettings } = useSettings();
  const { layout1Settings, secondarySidebar } = settings;
  const topbarTheme = settings.themes[layout1Settings.topbar.theme];
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
  //  TS(2339): Property 'type' does not exist on type 'Palette'.
  const layoutClasses = `theme-${theme.palette.type}`;

  useEffect(() => {
    let { settings } = ref.current;
    let sidebarMode = settings.layout1Settings.leftSidebar.mode;
    if (settings.layout1Settings.leftSidebar.show) {
      let mode = isMdScreen ? "close" : sidebarMode;
      updateSettings({ layout1Settings: { leftSidebar: { mode } } });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMdScreen]);

  return (

    <Layout1Root className={layoutClasses}>
      {showSidenav && sidenavMode !== "close" && (

        <SidenavTheme>

          <Layout1Sidenav />
        </SidenavTheme>
      )}


      <LayoutContainer width={sidenavWidth} open={secondarySidebar.open}>
        {layout1Settings.topbar.show && layout1Settings.topbar.fixed && (

          <ThemeProvider theme={topbarTheme}>

            <Layout1Topbar fixed={true} className="elevation-z8" />
          </ThemeProvider>
        )}

        {settings.perfectScrollbar && (

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
        )}

        {!settings.perfectScrollbar && (

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


      {settings.secondarySidebar.show && <SecondarySidebar />}
    </Layout1Root>
  );
};

export default memo(Layout1);
