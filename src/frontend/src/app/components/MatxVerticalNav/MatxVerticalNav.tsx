import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Icon from "@mui/material/Icon";
import ButtonBase from "@mui/material/ButtonBase";
import styled from "@mui/material/styles/styled";

//  TS(2307): Cannot find module 'app/hooks/useSettings' or its ... Remove this comment to see the full error message
import useSettings from "app/hooks/useSettings";
//  TS(6142): Module '../Typography' was resolved to 'C:/Users/n... Remove this comment to see the full error message
import { Paragraph, Span } from "../Typography";
//  TS(6142): Module './MatxVerticalNavExpansionPanel' was resol... Remove this comment to see the full error message
import MatxVerticalNavExpansionPanel from "./MatxVerticalNavExpansionPanel";

// STYLED COMPONENTS
//  TS(2769): No overload matches this call.
const ListLabel = styled(Paragraph)(({ theme, mode }) => ({
  fontSize: "12px",
  marginTop: "20px",
  marginLeft: "15px",
  marginBottom: "10px",
  textTransform: "uppercase",
  display: mode === "compact" && "none",
  color: theme.palette.text.secondary
}));

const ExtAndIntCommon = {
  display: "flex",
  overflow: "hidden",
  borderRadius: "4px",
  height: 44,
  whiteSpace: "pre",
  marginBottom: "8px",
  textDecoration: "none",
  justifyContent: "space-between",
  transition: "all 150ms ease-in",
  "&:hover": { background: "rgba(255, 255, 255, 0.08)" },
  "&.compactNavItem": {
    overflow: "hidden",
    justifyContent: "center !important"
  },
  "& .icon": {
    fontSize: "18px",
    paddingLeft: "16px",
    paddingRight: "16px",
    verticalAlign: "middle"
  }
};

const ExternalLink = styled("a")(({ theme }) => ({
  ...ExtAndIntCommon,
  color: theme.palette.text.primary
}));

const InternalLink = styled(Box)(({ theme }) => ({
  "& a": {
    ...ExtAndIntCommon,
    color: theme.palette.text.primary
  },
  "& .navItemActive": {
    backgroundColor: "rgba(255, 255, 255, 0.16)"
  }
}));

//  TS(2769): No overload matches this call.
const StyledText = styled(Span)(({ mode }) => ({
  fontSize: "0.875rem",
  paddingLeft: "0.8rem",
  display: mode === "compact" && "none"
}));

const BulletIcon = styled("div")(({ theme }) => ({
  padding: "2px",
  marginLeft: "24px",
  marginRight: "8px",
  overflow: "hidden",
  borderRadius: "300px",
  background: theme.palette.text.primary
}));

const BadgeValue = styled("div")(() => ({
  padding: "1px 8px",
  overflow: "hidden",
  borderRadius: "300px"
}));

export default function MatxVerticalNav({
  items
}: any) {
  const { settings } = useSettings();
  const { mode } = settings.layout1Settings.leftSidebar;

  const renderLevels = (data: any) => {
    return data.map((item: any, index: any) => {
      if (item.type === "label")
        return (

          <ListLabel key={index} mode={mode} className="sidenavHoverShow">
            {item.label}
          </ListLabel>
        );

      if (item.children) {
        return (

          <MatxVerticalNavExpansionPanel mode={mode} item={item} key={index}>
            {renderLevels(item.children)}
          </MatxVerticalNavExpansionPanel>
        );
      } else if (item.type === "extLink") {
        return (

          <ExternalLink
            key={index}
            href={item.path}
            className={`${mode === "compact" && "compactNavItem"}`}
            rel="noopener noreferrer"
            target="_blank">

            <ButtonBase key={item.name} name="child" sx={{ width: "100%" }}>
              {(() => {
                if (item.icon) {

                  return <Icon className="icon">{item.icon}</Icon>;
                } else {

                  return <span className="item-icon icon-text">{item.iconText}</span>;
                }
              })()}

              <StyledText mode={mode} className="sidenavHoverShow">
                {item.name}
              </StyledText>

              <Box mx="auto"></Box>

              {item.badge && <BadgeValue>{item.badge.value}</BadgeValue>}
            </ButtonBase>
          </ExternalLink>
        );
      } else {
        return (

          <InternalLink key={index}>

            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? `navItemActive ${mode === "compact" && "compactNavItem"}`
                  : `${mode === "compact" && "compactNavItem"}`
              }>

              <ButtonBase key={item.name} name="child" sx={{ width: "100%" }}>
                {item?.icon ? (

                  <Icon className="icon" sx={{ width: 36 }}>
                    {item.icon}
                  </Icon>
                ) : (

                  <Fragment>

                    <BulletIcon
                      className={`nav-bullet`}
                      //  TS(2322): Type '{ display: false | "none"; }' is not assigna... Remove this comment to see the full error message
                      sx={{ display: mode === "compact" && "none" }}
                    />

                    <Box
                      className="nav-bullet-text"
                      //  TS(2769): No overload matches this call.
                      sx={{
                        ml: "20px",
                        fontSize: "11px",
                        display: mode !== "compact" && "none"
                      }}>
                      {item.iconText}
                    </Box>
                  </Fragment>
                )}

                <StyledText mode={mode} className="sidenavHoverShow">
                  {item.name}
                </StyledText>


                <Box mx="auto" />

                {item.badge && (

                  <BadgeValue className="sidenavHoverShow">{item.badge.value}</BadgeValue>
                )}
              </ButtonBase>
            </NavLink>
          </InternalLink>
        );
      }
    });
  };


  return <div className="navigation">{renderLevels(items)}</div>;
}
