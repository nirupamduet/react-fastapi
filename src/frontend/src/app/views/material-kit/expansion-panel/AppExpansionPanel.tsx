import { Box, Stack, styled } from "@mui/material";
//  TS(2307): Cannot find module 'app/components' or its corresp... Remove this comment to see the full error message
import { Breadcrumb, SimpleCard } from "app/components";
//  TS(6142): Module './ControlledAccordion' was resolved to 'C:... Remove this comment to see the full error message
import ControlledExpansionPanels from "./ControlledAccordion";
//  TS(6142): Module './CustomizedExpansionPanel' was resolved t... Remove this comment to see the full error message
import CustomizedExpansionPanels from "./CustomizedExpansionPanel";
//  TS(6142): Module './DetailedExpansionPanel' was resolved to ... Remove this comment to see the full error message
import DetailedExpansionPanel from "./DetailedExpansionPanel";
//  TS(6142): Module './SimpleExpansionPanel' was resolved to 'C... Remove this comment to see the full error message
import SimpleExpansionPanel from "./SimpleExpansionPanel";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const AppExpansionPanel = () => {
  return (

    <Container>

      <Box className="breadcrumb">

        <Breadcrumb
          routeSegments={[{ name: "Material", path: "/material" }, { name: "Expansion Panel" }]}
        />
      </Box>


      <Stack spacing={3}>

        <SimpleCard title="simple expansion panel">

          <SimpleExpansionPanel />
        </SimpleCard>


        <SimpleCard title="Controlled Accordion">

          <ControlledExpansionPanels />
        </SimpleCard>


        <SimpleCard title="Secondary heading and Columns">

          <DetailedExpansionPanel />
        </SimpleCard>


        <SimpleCard title="Customized expansion panels">

          <CustomizedExpansionPanels />
        </SimpleCard>
      </Stack>
    </Container>
  );
};

export default AppExpansionPanel;
