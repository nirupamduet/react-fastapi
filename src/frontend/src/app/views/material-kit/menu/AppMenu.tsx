import { Stack } from "@mui/material";
import { Box, styled } from "@mui/material";
//  TS(2307): Cannot find module 'app/components' or its corresp... Remove this comment to see the full error message
import { Breadcrumb, SimpleCard } from "app/components";
//  TS(6142): Module './SimpleMenu' was resolved to 'C:/Users/ni... Remove this comment to see the full error message
import SimpleMenu from "./SimpleMenu";
//  TS(6142): Module './SelectedMenu' was resolved to 'C:/Users/... Remove this comment to see the full error message
import SelectedMenu from "./SelectedMenu";
//  TS(6142): Module './MaxHeightMenu' was resolved to 'C:/Users... Remove this comment to see the full error message
import MaxHeightMenu from "./MaxHeightMenu";
//  TS(6142): Module './CustomizedMenu' was resolved to 'C:/User... Remove this comment to see the full error message
import CustomizedMenu from "./CustomizedMenu";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: 16 },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: 16 }
  }
}));

export default function AppMenu() {
  return (

    <Container>

      <Box className="breadcrumb">

        <Breadcrumb routeSegments={[{ name: "Material", path: "/material" }, { name: "Menu" }]} />
      </Box>


      <Stack spacing={3}>

        <SimpleCard title="simple menu">

          <SimpleMenu />
        </SimpleCard>


        <SimpleCard title="selected menu">

          <SelectedMenu />
        </SimpleCard>


        <SimpleCard title="customized menu">

          <CustomizedMenu />
        </SimpleCard>


        <SimpleCard title="max height menu">

          <MaxHeightMenu />
        </SimpleCard>
      </Stack>
    </Container>
  );
}
