import { Box, styled, Stack } from "@mui/material";
//  TS(2307): Cannot find module 'app/components' or its corresp... Remove this comment to see the full error message
import { Breadcrumb, SimpleCard } from "app/components";
//  TS(6142): Module './SijmpleSwitch' was resolved to 'C:/Users... Remove this comment to see the full error message
import SimpleSwitch from "./SijmpleSwitch";
//  TS(6142): Module './LabelledSwitch' was resolved to 'C:/User... Remove this comment to see the full error message
import LabelledSwitch from "./LabelledSwitch";
//  TS(6142): Module './FormGroupSwitch' was resolved to 'C:/Use... Remove this comment to see the full error message
import FormGroupSwitch from "./FormGroupSwitch";
//  TS(6142): Module './CustomizedSwitch' was resolved to 'C:/Us... Remove this comment to see the full error message
import CustomizedSwitch from "./CustomizedSwitch";
//  TS(6142): Module './PlacingSwitchLabel' was resolved to 'C:/... Remove this comment to see the full error message
import PlacingSwitchLabel from "./PlacingSwitchLabel";

// STYLED COMPONENTS
const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" }
  }
}));

export default function AppSwitch() {
  return (

    <Container>

      <Box className="mb-sm-30">

        <Breadcrumb routeSegments={[{ name: "Material", path: "/material" }, { name: "Switch" }]} />
      </Box>


      <Stack spacing={3}>

        <SimpleCard title="Simple Switch">

          <SimpleSwitch />
        </SimpleCard>


        <SimpleCard title="Switch with Label">

          <LabelledSwitch />
        </SimpleCard>


        <SimpleCard title="Switch with Form Group">

          <FormGroupSwitch />
        </SimpleCard>


        <SimpleCard title="Customized Switch">

          <CustomizedSwitch />
        </SimpleCard>


        <SimpleCard title="Switch with Different Label Placement">

          <PlacingSwitchLabel />
        </SimpleCard>
      </Stack>
    </Container>
  );
}
