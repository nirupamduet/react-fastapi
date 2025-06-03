import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
//  TS(2307): Cannot find module 'app/components' or its corresp... Remove this comment to see the full error message
import { Breadcrumb, SimpleCard } from "app/components";
//  TS(6142): Module './SimpleCheckbox' was resolved to 'C:/User... Remove this comment to see the full error message
import SimpleCheckbox from "./SimpleCheckbox";
//  TS(6142): Module './LabelledCheckbox' was resolved to 'C:/Us... Remove this comment to see the full error message
import LabelledCheckbox from "./LabelledCheckbox";
//  TS(6142): Module './FormGroupCheckbox' was resolved to 'C:/U... Remove this comment to see the full error message
import FormGroupCheckbox from "./FormGroupCheckbox";
//  TS(6142): Module './PlacingCheckboxLabel' was resolved to 'C... Remove this comment to see the full error message
import PlacingCheckboxLabel from "./PlacingCheckboxLabel";

// STYLED COMPONENTS
const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" }
  }
}));

export default function AppCheckbox() {
  return (

    <Container>

      <Box className="breadcrumb">

        <Breadcrumb
          routeSegments={[{ name: "Material", path: "/material" }, { name: "Chckbox" }]}
        />
      </Box>


      <SimpleCard title="simple checkbox">

        <SimpleCheckbox />
      </SimpleCard>


      <Box py="12px" />


      <SimpleCard title="Checkbox with Label">

        <LabelledCheckbox />
      </SimpleCard>


      <Box py="12px" />


      <SimpleCard title="Checkbox with Form Group">

        <FormGroupCheckbox />
      </SimpleCard>


      <Box py="12px" />


      <SimpleCard title="Checkbox with Different Label Placement">

        <PlacingCheckboxLabel />
      </SimpleCard>
    </Container>
  );
}
