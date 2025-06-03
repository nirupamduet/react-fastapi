import { Box, styled } from "@mui/material";
//  TS(6142): Module './SimpleTable' was resolved to 'C:/Users/n... Remove this comment to see the full error message
import SimpleTable from "./SimpleTable";
//  TS(6142): Module './PaginationTable' was resolved to 'C:/Use... Remove this comment to see the full error message
import PaginationTable from "./PaginationTable";
//  TS(2307): Cannot find module 'app/components' or its corresp... Remove this comment to see the full error message
import { Breadcrumb, SimpleCard } from "app/components";

// STYLED COMPONENTS
const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" }
  }
}));

export default function AppTable() {
  return (

    <Container>

      <Box className="breadcrumb">

        <Breadcrumb routeSegments={[{ name: "Material", path: "/material" }, { name: "Table" }]} />
      </Box>


      <SimpleCard title="Simple Table">

        <SimpleTable />
      </SimpleCard>


      <SimpleCard title="Pagination Table">

        <PaginationTable />
      </SimpleCard>
    </Container>
  );
}
