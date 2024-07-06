import React from "react";
import { Box, Typography, Paper } from "@mui/material";

const Widget = ({ icon, title, total, successful, terminated }) => {
  return (
    <Paper
      elevation={3}
      sx={{ p: 2, display: "flex", alignItems: "center", mb: 2, justifyContent: "space-between" }}
    >
      <Box sx={{ mr: 2 }}>
        <img src={icon} alt={title} style={{ width: 100, height: 100 }} />
      </Box>
      <Box>
        <Typography variant="h6" gutterBottom sx={{fontWeight: "bold"}}>
          {title.toUpperCase()}
        </Typography>
        <Typography variant="body1" fontWeight={"bold"}>
          Total: {total}
        </Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Typography variant="body2" color="success.main">
            Successful: {successful}
          </Typography> ||
          <Typography variant="body2" color="error.main">
            Terminated: {terminated}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default Widget;
