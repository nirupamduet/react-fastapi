import IconButton from "@mui/material/IconButton";
import styled from "@mui/material/styles/styled";
import Comment from "@mui/icons-material/Comment";

//  TS(2307): Cannot find module 'app/components' or its corresp... Remove this comment to see the full error message
import { Chatbox, ChatHead } from "app/components";
//  TS(6142): Module '../Typography' was resolved to 'C:/Users/n... Remove this comment to see the full error message
import { Span } from "../Typography";
//  TS(6142): Module '../ShoppingCart' was resolved to 'C:/Users... Remove this comment to see the full error message
import ShoppingCart from "../ShoppingCart";
//  TS(6142): Module '../MatxCustomizer/MatxCustomizer' was reso... Remove this comment to see the full error message
import MatxCustomizer from "../MatxCustomizer/MatxCustomizer";

// STYLED COMPONENTS
//  TS(2339): Property 'width' does not exist on type 'MUIStyled... Remove this comment to see the full error message
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
