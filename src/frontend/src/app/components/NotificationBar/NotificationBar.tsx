import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import styled from "@mui/material/styles/styled";
import IconButton from "@mui/material/IconButton";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import Notifications from "@mui/icons-material/Notifications";
import Clear from "@mui/icons-material/Clear";

//  TS(2307): Cannot find module 'app/hooks/useSettings' or its ... Remove this comment to see the full error message
import useSettings from "app/hooks/useSettings";
//  TS(2307): Cannot find module 'app/hooks/useNotification' or ... Remove this comment to see the full error message
import useNotification from "app/hooks/useNotification";
//  TS(2307): Cannot find module 'app/utils/utils.js' or its cor... Remove this comment to see the full error message
import { getTimeDifference } from "app/utils/utils.js";
//  TS(2307): Cannot find module 'app/utils/constant' or its cor... Remove this comment to see the full error message
import { sideNavWidth, topBarHeight } from "app/utils/constant";
import { themeShadows } from "../MatxTheme/themeColors";
//  TS(6142): Module '../Typography' was resolved to 'C:/Users/n... Remove this comment to see the full error message
import { Paragraph, Small } from "../Typography";

const Notification = styled("div")(() => ({
  padding: "16px",
  marginBottom: "16px",
  display: "flex",
  alignItems: "center",
  height: topBarHeight,
  boxShadow: themeShadows[6],
  "& h5": {
    marginLeft: "8px",
    marginTop: 0,
    marginBottom: 0,
    fontWeight: "500"
  }
}));

const NotificationCard = styled(Box)(({ theme }) => ({
  position: "relative",
  "&:hover": {
    "& .messageTime": { display: "none" },
    "& .deleteButton": { opacity: "1" }
  },
  "& .messageTime": { color: theme.palette.text.secondary },
  "& .icon": { fontSize: "1.25rem" }
}));

const DeleteButton = styled(IconButton)(() => ({
  opacity: "0",
  position: "absolute",
  right: 5,
  marginTop: 9,
  marginRight: "24px",
  background: "rgba(0, 0, 0, 0.01)"
}));

const CardLeftContent = styled("div")(({ theme }) => ({
  padding: "12px 8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: "rgba(0, 0, 0, 0.01)",
  "& small": {
    fontWeight: "500",
    marginLeft: "16px",
    color: theme.palette.text.secondary
  }
}));

const Heading = styled("span")(({ theme }) => ({
  fontWeight: "500",
  marginLeft: "16px",
  color: theme.palette.text.secondary
}));

export default function NotificationBar({
  container
}: any) {
  const { settings } = useSettings();
  const [panelOpen, setPanelOpen] = useState(false);
  const { deleteNotification, clearNotifications, notifications } = useNotification();

  const handleDrawerToggle = () => setPanelOpen(!panelOpen);

  return (

    <Fragment>

      <IconButton onClick={handleDrawerToggle}>

        <Badge color="secondary" badgeContent={notifications?.length}>

          <Notifications sx={{ color: "text.primary" }} />
        </Badge>
      </IconButton>


      <ThemeProvider theme={settings.themes[settings.activeTheme]}>

        <Drawer
          //  TS(2322): Type '{ children: Element; width: string; containe... Remove this comment to see the full error message
          width={"100px"}
          container={container}
          variant="temporary"
          anchor={"right"}
          open={panelOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}>

          <Box sx={{ width: sideNavWidth }}>

            <Notification>

              <Notifications color="primary" />

              <h5>Notifications</h5>
            </Notification>


            {notifications?.map((notification: any) => <NotificationCard key={notification.id}>

              <DeleteButton
                size="small"
                className="deleteButton"
                onClick={() => deleteNotification(notification.id)}>

                <Clear className="icon" />
              </DeleteButton>


              <Link
                to={`/${notification.path}`}
                onClick={handleDrawerToggle}
                style={{ textDecoration: "none" }}>

                <Card sx={{ mx: 2, mb: 3 }} elevation={3}>

                  <CardLeftContent>

                    <Box display="flex">

                      <Icon className="icon" color={notification.icon.color}>
                        {notification.icon.name}
                      </Icon>

                      <Heading>{notification.heading}</Heading>
                    </Box>


                    <Small className="messageTime">
                      {getTimeDifference(new Date(notification.timestamp))}
                      ago
                    </Small>
                  </CardLeftContent>


                  <Box px={2} pt={1} pb={2}>

                    <Paragraph m={0}>{notification.title}</Paragraph>

                    <Small color="text.secondary">{notification.subtitle}</Small>
                  </Box>
                </Card>
              </Link>
            </NotificationCard>)}

            {!!notifications?.length && (

              <Button fullWidth onClick={clearNotifications}>
                Clear Notifications
              </Button>
            )}
          </Box>
        </Drawer>
      </ThemeProvider>
    </Fragment>
  );
}
