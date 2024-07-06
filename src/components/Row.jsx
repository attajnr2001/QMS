import React from "react";
import { Avatar, Box, Typography, Paper } from "@mui/material";

const Row = ({ avatar, name, date, time, waitTime }) => {
  return (
    <Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1,
            gap: 3,
            boxShadow: "0 0 3px gray",
            padding: ".5rem 1.5rem",
            borderRadius: ".3rem",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar src={avatar} sx={{ mr: 1 }} />
            <Box>
              <Typography variant="subtitle1">{name}</Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontWeight: "bold" }}
              >{`${date} ${time}`}</Typography>
            </Box>
          </Box>
          <Typography variant="body2">{waitTime} min</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Row;
