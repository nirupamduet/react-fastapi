import { Stack } from "@mui/material";
import { Box, styled } from "@mui/material";
//  TS(2307): Cannot find module 'app/components' or its corresp... Remove this comment to see the full error message
import { Breadcrumb, SimpleCard } from "app/components";
//  TS(6142): Module './ContinuousSlider' was resolved to 'C:/Us... Remove this comment to see the full error message
import ContinuousSlider from "./ContinuousSlider";
//  TS(6142): Module './DiscreteSlider' was resolved to 'C:/User... Remove this comment to see the full error message
import DiscreteSlider from "./DiscreteSlider";
//  TS(6142): Module './InputSlider' was resolved to 'C:/Users/n... Remove this comment to see the full error message
import InputSlider from "./InputSlider";
//  TS(6142): Module './RangeSlider' was resolved to 'C:/Users/n... Remove this comment to see the full error message
import RangeSlider from "./RangeSlider";
//  TS(6142): Module './VerticalSlider' was resolved to 'C:/User... Remove this comment to see the full error message
import VerticalSlider from "./VerticalSlider";

// STYLED COMPONENTS
const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" }
  }
}));

export default function AppSlider() {
  return (

    <Container>

      <Box className="breadcrumb">

        <Breadcrumb routeSegments={[{ name: "Material", path: "/material" }, { name: "Slider" }]} />
      </Box>


      <Stack spacing={3}>

        <SimpleCard title="Continuous Slider">

          <ContinuousSlider />
        </SimpleCard>


        <SimpleCard title="Discrete Slider">

          <DiscreteSlider />
        </SimpleCard>


        <SimpleCard title="Range Slider">

          <RangeSlider />
        </SimpleCard>


        <SimpleCard title="Slider with Input">

          <InputSlider />
        </SimpleCard>


        <SimpleCard title="Vertical Slider">

          <VerticalSlider />
        </SimpleCard>
      </Stack>
    </Container>
  );
}
