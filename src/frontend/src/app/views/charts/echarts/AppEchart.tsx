import { Box, styled, useTheme } from "@mui/material";

//  TS(2307): Cannot find module 'app/components/Breadcrumb' or ... Remove this comment to see the full error message
import Breadcrumb from "app/components/Breadcrumb";
//  TS(2307): Cannot find module 'app/components/SimpleCard' or ... Remove this comment to see the full error message
import SimpleCard from "app/components/SimpleCard";

//  TS(6142): Module './AreaChart' was resolved to 'C:/Users/nir... Remove this comment to see the full error message
import AreaChart from "./AreaChart";
//  TS(6142): Module './LineChart' was resolved to 'C:/Users/nir... Remove this comment to see the full error message
import LineChart from "./LineChart";
//  TS(6142): Module './Doughnut' was resolved to 'C:/Users/niru... Remove this comment to see the full error message
import DoughnutChart from "./Doughnut";
//  TS(6142): Module './ComparisonChart' was resolved to 'C:/Use... Remove this comment to see the full error message
import ComparisonChart from "./ComparisonChart";

// STYLED COMPONENT
const Container = styled("div")(({ theme }) => ({
  margin: 30,
  [theme.breakpoints.down("sm")]: { margin: 16 },
  "& .breadcrumb": { marginBottom: 30, [theme.breakpoints.down("sm")]: { marginBottom: 16 } }
}));

export default function AppEchart() {
  const theme = useTheme();

  return (

    <Container>

      <Box className="breadcrumb">

        <Breadcrumb routeSegments={[{ name: "Charts", path: "/charts" }, { name: "Echarts" }]} />
      </Box>


      <SimpleCard title="Doughnut Chart">

        <DoughnutChart
          height="350px"
          color={[
            theme.palette.primary.dark,
            theme.palette.primary.main,
            theme.palette.primary.light
          ]}
        />
      </SimpleCard>


      <Box sx={{ py: "12px" }} />


      <SimpleCard title="Line Chart">

        <LineChart
          height="350px"
          color={[theme.palette.primary.main, theme.palette.primary.light]}
        />
      </SimpleCard>


      <Box sx={{ py: "12px" }} />


      <SimpleCard title="Comparison Chart">

        <ComparisonChart
          height="350px"
          color={[theme.palette.primary.dark, theme.palette.primary.light]}
        />
      </SimpleCard>


      <Box sx={{ py: "12px" }} />


      <SimpleCard title="Area Chart">

        <AreaChart height="350px" color={[theme.palette.primary.main]} />
      </SimpleCard>
    </Container>
  );
}
