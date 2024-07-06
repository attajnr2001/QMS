import React, { useState } from "react";
import Queue from "../components/Queue";
import { Box, Grid, Button } from "@mui/material";
import Widget from "../components/Widget";
import totalAmount from "/amount.png";
import totalQueues from "/total.png";
import Chart from "../components/Chart";
import JoinQueue from "../components/JoinQueue";

const Dashboard = () => {
  const [openJoinQueue, setOpenJoinQueue] = useState(false);

  const handleOpenJoinQueue = () => {
    setOpenJoinQueue(true);
  };

  const handleCloseJoinQueue = () => {
    setOpenJoinQueue(false);
  };
  return (
    <Box
      sx={{
        marginTop: "6rem",
        height: "calc(100vh - 6rem)", // Adjust this if you have a footer
        overflow: "hidden", // Prevent scrolling on the main container
      }}
    >
      <Button variant="contained" onClick={handleOpenJoinQueue}>
        Join Queue
      </Button>
      <Grid container spacing={2} sx={{ height: "100%" }} mt={1}>
        <Grid item xs={12} md={8} sx={{ overflow: "auto", p: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6}>
              <Widget
                icon={totalQueues}
                title="Queues"
                total={50}
                successful={40}
                terminated={10}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Widget
                icon={totalAmount}
                title="Amount"
                total="$10,000"
                successful="$8,000"
                terminated="$2,000"
              />
            </Grid>
            <Grid item xs={12}>
              <Chart />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4} sx={{ height: "100%", overflow: "hidden" }}>
          <Queue />
        </Grid>
      </Grid>
      <JoinQueue open={openJoinQueue} onClose={handleCloseJoinQueue} />
    </Box>
  );
};

export default Dashboard;
