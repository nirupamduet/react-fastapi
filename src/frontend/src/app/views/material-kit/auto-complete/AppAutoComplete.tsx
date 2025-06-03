import Box from "@mui/material/Box";
import styled from "@mui/material/styles/styled";
//  TS(2307): Cannot find module 'app/components' or its corresp... Remove this comment to see the full error message
import { Breadcrumb, SimpleCard } from "app/components";
//  TS(6142): Module './AsyncAutocomplete' was resolved to 'C:/U... Remove this comment to see the full error message
import AsyncAutocomplete from "./AsyncAutocomplete";
//  TS(6142): Module './AutocompleteCombo' was resolved to 'C:/U... Remove this comment to see the full error message
import AutocompleteCombo from "./AutocompleteCombo";
//  TS(6142): Module './BadgeAutocomplete' was resolved to 'C:/U... Remove this comment to see the full error message
import BadgeAutocomplete from "./BadgeAutocomplete";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" }
  }
}));

export default function AppAutoComplete() {
  return (

    <Container>

      <Box className="breadcrumb">

        <Breadcrumb
          routeSegments={[{ name: "Material", path: "/material" }, { name: "Autocomplete" }]}
        />
      </Box>


      <SimpleCard title="autocomplete combo">

        <AutocompleteCombo />
      </SimpleCard>


      <Box py="12px" />


      <SimpleCard title="Asyncronous Autocomplete">

        <AsyncAutocomplete />
      </SimpleCard>


      <Box py="12px" />


      <SimpleCard title="Asyncronous Autocomplete">

        <BadgeAutocomplete />
      </SimpleCard>
    </Container>
  );
}
