import { Fragment, useState, Children } from "react";
import Menu from "@mui/material/Menu";
import { ThemeProvider, styled } from "@mui/material/styles";

//  TS(2307): Cannot find module 'app/hooks/useSettings' or its ... Remove this comment to see the full error message
import useSettings from "app/hooks/useSettings";

// STYLED COMPONENT
const MenuButton = styled("div")(({ theme }) => ({
  display: "inline-block",
  color: theme.palette.text.primary,
  "& div:hover": { backgroundColor: theme.palette.action.hover }
}));

export default function MatxMenu(props: any) {
  const { settings } = useSettings();
  const [anchorEl, setAnchorEl] = useState(null);

  const children = Children.toArray(props.children);
  let { shouldCloseOnItemClick = true, horizontalPosition = "left" } = props;

  const handleClose = () => setAnchorEl(null);
  const handleClick = (event: any) => setAnchorEl(event.currentTarget);

  return (

    <Fragment>

      <MenuButton onClick={handleClick}>{props.menuButton}</MenuButton>

      <ThemeProvider theme={settings.themes[settings.activeTheme]}>

        <Menu
          elevation={8}
          open={!!anchorEl}
          anchorEl={anchorEl}
          onClose={handleClose}
          //  TS(2322): Type '{ children: Element[]; elevation: number; op... Remove this comment to see the full error message
          getContentAnchorEl={null}
          anchorOrigin={{ vertical: "bottom", horizontal: horizontalPosition }}
          transformOrigin={{ vertical: "top", horizontal: horizontalPosition }}>
          {children.map((child, index) => (

            <div onClick={shouldCloseOnItemClick ? handleClose : () => { }} key={index}>
              {child}
            </div>
          ))}
        </Menu>
      </ThemeProvider>
    </Fragment>
  );
}
