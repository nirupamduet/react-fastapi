import Box from "@mui/material/Box";
import styled from "@mui/material/styles/styled";

//  TS(6142): Module './Typography' was resolved to 'C:/Users/ni... Remove this comment to see the full error message
import { Span } from "./Typography";
//  TS(2307): Cannot find module 'app/components' or its corresp... Remove this comment to see the full error message
import { MatxLogo } from "app/components";
//  TS(2307): Cannot find module 'app/hooks/useSettings' or its ... Remove this comment to see the full error message
import useSettings from "app/hooks/useSettings";

// STYLED COMPONENTS
const BrandRoot = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "20px 18px 20px 29px"
}));

const StyledSpan = styled(Span)(({ mode }) => ({
  fontSize: 18,
  marginLeft: ".5rem",
  display: mode === "compact" ? "none" : "block"
}));

export default function Brand({
  children
}: any) {
  const { settings } = useSettings();
  const leftSidebar = settings.layout1Settings.leftSidebar;
  const { mode } = leftSidebar;

  return (

    <BrandRoot>

      <Box display="flex" alignItems="center">

        <MatxLogo />

        <StyledSpan mode={mode} className="sidenavHoverShow">
          Matx
        </StyledSpan>
      </Box>


      <Box className="sidenavHoverShow" sx={{ display: mode === "compact" ? "none" : "block" }}>
        {children || null}
      </Box>
    </BrandRoot>
  );
}
