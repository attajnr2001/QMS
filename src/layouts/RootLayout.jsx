import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Container } from "@mui/material";
import Navbar from "../components/Navbar";

const RootLayout = () => {
  return (
    <Box>
      <Navbar />
      <Container maxWidth>
        <Outlet />
      </Container>
    </Box>
  );
};

export default RootLayout;
