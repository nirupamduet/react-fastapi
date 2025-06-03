import { Stack } from "@mui/material";
import { Box, styled } from "@mui/material";
//  TS(2307): Cannot find module 'app/components' or its corresp... Remove this comment to see the full error message
import { Breadcrumb, SimpleCard } from "app/components";
//  TS(6142): Module './SimpleRadio' was resolved to 'C:/Users/n... Remove this comment to see the full error message
import SimpleRadio from "./SimpleRadio";
//  TS(6142): Module './StandaloneRadio' was resolved to 'C:/Use... Remove this comment to see the full error message
import StandaloneRadio from "./StandaloneRadio";
//  TS(6142): Module './PlacingRadioLabel' was resolved to 'C:/U... Remove this comment to see the full error message
import PlacingRadioLabel from "./PlacingRadioLabel";

// STYLED COMPONENT
const Container = styled("div")(({ theme }) => ({
  margin: 30,
  [theme.breakpoints.down("sm")]: { margin: 16 },
  "& .breadcrumb": { marginBottom: 30, [theme.breakpoints.down("sm")]: { marginBottom: 16 } }
}));

export default function AppRadio() {
  return (

    <Container>

      <Box className="breadcrumb">

        <Breadcrumb routeSegments={[{ name: "Material", path: "/material" }, { name: "Radio" }]} />
      </Box>


      <Stack spacing={3}>

        <SimpleCard title="Simple Radio Button">

          <SimpleRadio />
        </SimpleCard>


        <SimpleCard title="Standalone Radio Button">

          <StandaloneRadio />
        </SimpleCard>


        <SimpleCard title="Label Placement">

          <PlacingRadioLabel />
        </SimpleCard>
      </Stack>
    </Container>
  );
}
