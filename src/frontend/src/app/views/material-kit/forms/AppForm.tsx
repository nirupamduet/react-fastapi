import { Stack } from "@mui/material";
import { Box, styled } from "@mui/material";
//  TS(2307): Cannot find module 'app/components' or its corresp... Remove this comment to see the full error message
import { Breadcrumb, SimpleCard } from "app/components";
//  TS(6142): Module './SimpleForm' was resolved to 'C:/Users/ni... Remove this comment to see the full error message
import SimpleForm from "./SimpleForm";
//  TS(6142): Module './StepperForm' was resolved to 'C:/Users/n... Remove this comment to see the full error message
import StepperForm from "./StepperForm";

// STYLED COMPONENTS
const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" }
  }
}));

export default function AppForm() {
  return (

    <Container>

      <Box className="breadcrumb">

        <Breadcrumb routeSegments={[{ name: "Material", path: "/material" }, { name: "Form" }]} />
      </Box>


      <Stack spacing={3}>

        <SimpleCard title="Simple Form">

          <SimpleForm />
        </SimpleCard>


        <SimpleCard title="stepper form">

          <StepperForm />
        </SimpleCard>
      </Stack>
    </Container>
  );
}
