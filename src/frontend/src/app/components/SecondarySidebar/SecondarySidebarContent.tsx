import IconButton from "@mui/material/IconButton";
import styled from "@mui/material/styles/styled";
import Comment from "@mui/icons-material/Comment";

import { Chatbox, ChatHead } from "app/components";
import { Span } from "../Typography";
import ShoppingCart from "../ShoppingCart";
import MatxCustomizer from "../MatxCustomizer/MatxCustomizer";

// STYLED COMPONENTS
// @ts-expect-error TS(2339): Property 'width' does not exist on type 'MUIStyled... Remove this comment to see the full error message
const SidebarRoot = styled("div")(({ theme, width }) => ({
  position: "fixed",
  height: "100vh",
  width: width,
  right: 0,
  bottom: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: theme.shadows[8],
  backgroundColor: theme.palette.primary.main,
  zIndex: 98,
  transition: "all 0.15s ease",
  color: theme.palette.text.primary,
  "@global": {
    "@media screen and (min-width: 767px)": {
      ".content-wrap, .layout2.layout-contained, .layout2.layout-full": {
        marginRight: (props: any) => props.width
      },
      ".matx-customizer": {
        right: (props: any) => props.width
      }
    },
    "@media screen and (max-width: 959px)": {
      ".toolbar-menu-wrap .menu-area": {
        width: (props: any) => `calc(100% - ${props.width})`
      }
    }
  }
}));

export default function SecondarySidebarContent() {
  return (
    // @ts-expect-error TS(2322): Type '{ children: Element[]; width: string; classN... Remove this comment to see the full error message
    <SidebarRoot width={"50px"} className="secondary-sidebar">
      <Span m="auto" />
      <MatxCustomizer />
      <ShoppingCart />

      <ChatHead
        icon={
          <IconButton size="small" sx={{ my: "12px", color: "primary.contrastText" }}>
            <Comment />
          </IconButton>
        }>
        <Chatbox />
      </ChatHead>

      <Span m="auto" />
    </SidebarRoot>
  );
}
