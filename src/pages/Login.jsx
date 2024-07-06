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
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import login from "/login.jpg";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/client/dashboard");
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
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper elevation={3}>
          <Grid
            container
            sx={{ height: "70vh", width: "80vw", maxWidth: "1000px" }}
          >
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                backgroundImage: `url(${login})`,
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
              <Typography variant="h5" gutterBottom fontWeight={"bold"}>
                Login
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
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleLogin}
                sx={{ mt: 2 }}
              >
                Login
              </Button>
              <Link
                component={RouterLink}
                to="/signup"
                variant="body2"
                sx={{ mt: 2, textAlign: "center" }}
              >
                I don't have an account
              </Link>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </motion.div>
  );
};

export default Login;
