import { Fragment } from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid2";
import { styled, useTheme } from "@mui/material/styles";

//  TS(6142): Module './shared/RowCards' was resolved to 'C:/Use... Remove this comment to see the full error message
import RowCards from "./shared/RowCards";
//  TS(6142): Module './shared/StatCards' was resolved to 'C:/Us... Remove this comment to see the full error message
import StatCards from "./shared/StatCards";
//  TS(6142): Module './shared/Campaigns' was resolved to 'C:/Us... Remove this comment to see the full error message
import Campaigns from "./shared/Campaigns";
//  TS(6142): Module './shared/StatCards2' was resolved to 'C:/U... Remove this comment to see the full error message
import StatCards2 from "./shared/StatCards2";
//  TS(6142): Module './shared/Doughnut' was resolved to 'C:/Use... Remove this comment to see the full error message
import DoughnutChart from "./shared/Doughnut";
//  TS(6142): Module './shared/UpgradeCard' was resolved to 'C:/... Remove this comment to see the full error message
import UpgradeCard from "./shared/UpgradeCard";
//  TS(6142): Module './shared/TopSellingTable' was resolved to ... Remove this comment to see the full error message
import TopSellingTable from "./shared/TopSellingTable";

// STYLED COMPONENTS
const ContentBox = styled("div")(({ theme }) => ({
  margin: "2rem",
  [theme.breakpoints.down("sm")]: { margin: "1rem" }
}));

const Title = styled("span")(() => ({
  fontSize: "1rem",
  fontWeight: "500",
  marginRight: ".5rem",
  textTransform: "capitalize"
}));

const SubTitle = styled("span")(({ theme }) => ({
  fontSize: "0.875rem",
  color: theme.palette.text.secondary
}));

const H4 = styled("h4")(({ theme }) => ({
  fontSize: "1rem",
  fontWeight: "500",
  marginBottom: "1rem",
  textTransform: "capitalize",
  color: theme.palette.text.secondary
}));

export default function Analytics() {
  const { palette } = useTheme();

  return (

    <Fragment>

      <ContentBox className="analytics">

        <Grid container spacing={3}>

          <Grid size={{ md: 8, xs: 12 }}>

            <StatCards />

            <TopSellingTable />

            <StatCards2 />


            <H4>Ongoing Projects</H4>

            <RowCards />
          </Grid>


          <Grid size={{ md: 4, xs: 12 }}>

            <Card sx={{ px: 3, py: 2, mb: 3 }}>

              <Title>Traffic Sources</Title>

              <SubTitle>Last 30 days</SubTitle>


              <DoughnutChart
                height="300px"
                color={[palette.primary.dark, palette.primary.main, palette.primary.light]}
              />
            </Card>


            <UpgradeCard />

            <Campaigns />
          </Grid>
        </Grid>
      </ContentBox>
    </Fragment>
  );
}
