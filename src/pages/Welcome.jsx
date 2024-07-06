import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { styled } from "@mui/system";
import bg from "/bg.jpg";
import { useNavigate } from "react-router-dom";

const BlurredBackground = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${bg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  textAlign: "center",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backdropFilter: "blur(5px)",
  },
}));

const ContentWrapper = styled(Container)(({ theme }) => ({
  position: "relative",
  zIndex: 1,
}));

const Welcome = () => {
  const navigate = useNavigate();

  const handleAuth = () => {
    navigate("/login");
  };

  return (
    <BlurredBackground>
      <ContentWrapper maxWidth="md">
        <Typography variant="h2" component="h2" gutterBottom>
          Welcome to Barclays Virtual Queue
        </Typography>
        <Typography variant="h5" paragraph>
          Skip the line, save your time
        </Typography>
        <Button
          variant="contained"
          size="large"
          color="primary"
          onClick={handleAuth}
        >
          Join the Queue
        </Button>
      </ContentWrapper>
    </BlurredBackground>
  );
};

export default Welcome;
