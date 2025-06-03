import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
//  TS(2307): Cannot find module 'app/components' or its corresp... Remove this comment to see the full error message
import { Breadcrumb, SimpleCard } from "app/components";
//  TS(6142): Module './FormDialog' was resolved to 'C:/Users/ni... Remove this comment to see the full error message
import FormDialog from "./FormDialog";
//  TS(6142): Module './SimpleAlerts' was resolved to 'C:/Users/... Remove this comment to see the full error message
import AlertDialog from "./SimpleAlerts";
//  TS(6142): Module './SimpleDialog' was resolved to 'C:/Users/... Remove this comment to see the full error message
import SimpleDialogDemo from "./SimpleDialog";
//  TS(6142): Module './OptimalSizeDialog' was resolved to 'C:/U... Remove this comment to see the full error message
import MaxWidthDialog from "./OptimalSizeDialog";
//  TS(6142): Module './FullScreenDialog' was resolved to 'C:/Us... Remove this comment to see the full error message
import FullScreenDialog from "./FullScreenDialog";
//  TS(6142): Module './DialogTransition' was resolved to 'C:/Us... Remove this comment to see the full error message
import AlertDialogSlide from "./DialogTransition";
//  TS(6142): Module './ResponsiveDialog' was resolved to 'C:/Us... Remove this comment to see the full error message
import ResponsiveDialog from "./ResponsiveDialog";
//  TS(6142): Module './CustomizedDialog' was resolved to 'C:/Us... Remove this comment to see the full error message
import CustomizedDialogs from "./CustomizedDialog";
//  TS(6142): Module './ConfirmationDialog' was resolved to 'C:/... Remove this comment to see the full error message
import ConfirmationDialog from "./ConfirmationDialog";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" }
  }
}));

export default function AppDialog() {
  return (

    <Container>

      <Box className="breadcrumb">

        <Breadcrumb routeSegments={[{ name: "Material", path: "/material" }, { name: "Dialog" }]} />
      </Box>


      <Stack spacing={3}>

        <SimpleCard title="simple Dialog">

          <SimpleDialogDemo />
        </SimpleCard>


        <SimpleCard title="alert dialog">

          <AlertDialog />
        </SimpleCard>


        <SimpleCard title="transition">

          <AlertDialogSlide />
        </SimpleCard>


        <SimpleCard title="form dialog">

          <FormDialog />
        </SimpleCard>


        <SimpleCard title="customized dialog">

          <CustomizedDialogs />
        </SimpleCard>


        <SimpleCard title="full-screen dialog">

          <FullScreenDialog />
        </SimpleCard>


        <SimpleCard title="optimized size dialog">

          <MaxWidthDialog />
        </SimpleCard>


        <SimpleCard title="responsive dialog">

          <ResponsiveDialog />
        </SimpleCard>


        <SimpleCard title="confirmation dialog">

          <ConfirmationDialog />
        </SimpleCard>
      </Stack>
    </Container>
  );
}
