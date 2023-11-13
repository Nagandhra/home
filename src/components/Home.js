import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Header from "./Header";
import Doughnut from "./Doughnut";
import LineChart from "./LineChart";
import AppVersion from "./AppVersion";
import QuickSettings from "./QuickSettings";
import Grid from "@mui/material/Grid";

const Home = ({ drawerWidth }) => {
  return (
    <Box sx={{ width: '100%'}}>
      <Box>
        <Header />
      </Box>
      <Box>
        <Paper >
        <LineChart drawerWidth={drawerWidth} />
        </Paper>
      </Box>
      <Box>
  <Grid container spacing={2} direction="row" columns={12} sx={{ paddingTop: "20px" }}>
    {/* Card Box 1 */}
    <Grid item md={4} sx={{ paddingLeft: 1 }}>
      <Paper elevation={3}>
        <AppVersion drawerWidth={drawerWidth} />
      </Paper>
    </Grid>

    {/* Card Box 2 */}
    <Grid item md={4} sx={{ paddingLeft: 1 }}>
      <Paper elevation={3}>
        <Doughnut drawerWidth={drawerWidth} />
      </Paper>
    </Grid>

    {/* Card Box 3 */}
    <Grid item md={4} sx={{ paddingLeft: 1 }}>
      <Paper elevation={3}>
        <QuickSettings drawerWidth={drawerWidth} />
      </Paper>
    </Grid>
  </Grid>
</Box>

    
    </Box>
  );
};

export default Home;