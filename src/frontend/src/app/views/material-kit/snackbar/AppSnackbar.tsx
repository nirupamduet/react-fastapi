import { Box, Stack, styled } from "@mui/material";
//  TS(2307): Cannot find module 'app/components' or its corresp... Remove this comment to see the full error message
import { Breadcrumb, SimpleCard } from "app/components";
//  TS(6142): Module './ConsecutiveSnackbar' was resolved to 'C:... Remove this comment to see the full error message
import ConsecutiveSnackbar from "./ConsecutiveSnackbar";
//  TS(6142): Module './CustomizedSnackbar' was resolved to 'C:/... Remove this comment to see the full error message
import CustomizedSnackbars from "./CustomizedSnackbar";
//  TS(6142): Module './DirectionSnackbar' was resolved to 'C:/U... Remove this comment to see the full error message
import DirectionSnackbar from "./DirectionSnackbar";
//  TS(6142): Module './LongLengthSnackbar' was resolved to 'C:/... Remove this comment to see the full error message
import LongTextSnackbar from "./LongLengthSnackbar";
//  TS(6142): Module './PositionedSnackbar' was resolved to 'C:/... Remove this comment to see the full error message
import PositionedSnackbar from "./PositionedSnackbar";
//  TS(6142): Module './SimpleSnackbar' was resolved to 'C:/User... Remove this comment to see the full error message
import SimpleSnackbar from "./SimpleSnackbar";
//  TS(6142): Module './StackedSnackbar' was resolved to 'C:/Use... Remove this comment to see the full error message
import IntegrationNotistack from "./StackedSnackbar";
//  TS(6142): Module './TransitionSnackbar' was resolved to 'C:/... Remove this comment to see the full error message
import TransitionsSnackbar from "./TransitionSnackbar";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const AppSnackbar = () => {
  return (

    <Container>

      <Box className="breadcrumb">

        <Breadcrumb
          routeSegments={[{ name: "Material", path: "/material" }, { name: "Snackbar" }]}
        />
      </Box>


      <Stack spacing={3}>

        <SimpleCard title="simple snackbar">

          <SimpleSnackbar />
        </SimpleCard>


        <SimpleCard title="customized snackbar">

          <CustomizedSnackbars />
        </SimpleCard>


        <SimpleCard title="positioned snackbar">

          <PositionedSnackbar />
        </SimpleCard>


        <SimpleCard title="message length">

          <LongTextSnackbar />
        </SimpleCard>


        <SimpleCard title="transition">

          <TransitionsSnackbar />
        </SimpleCard>


        <SimpleCard title="consecutive snackbar">

          <ConsecutiveSnackbar />
        </SimpleCard>


        <SimpleCard title="Control Slide direction">

          <DirectionSnackbar />
        </SimpleCard>


        <SimpleCard title="complementary project">

          <IntegrationNotistack />
        </SimpleCard>
      </Stack>
    </Container>
  );
};

export default AppSnackbar;
