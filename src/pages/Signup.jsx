import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Link,
} from "@mui/material";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import signup from "/signup.jpg";

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/login");
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
    >
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper elevation={3}>
          <Grid
            container
            sx={{ minHeight: "70vh", width: "85vw", maxWidth: "100%" }}
          >
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                backgroundImage: `url(${signup})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                p: 4,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography variant="h4" gutterBottom>
                Signup
              </Typography>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                label="Name"
                type="text"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                label="Contact"
                type="text"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
                onClick={handleSignup}
              >
                Signup
              </Button>
              <Link
                component={RouterLink}
                to="/login"
                variant="body2"
                sx={{ mt: 2, textAlign: "center" }}
              >
                I have an account
              </Link>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </motion.div>
  );
};

export default Signup;
