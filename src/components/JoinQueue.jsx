import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
} from "@mui/material";
import PaystackPop from "@paystack/inline-js";


const JoinQueue = ({ open, onClose }) => {

  const handlePayment = () => {

    const payStack = new PaystackPop();
    payStack.newTransaction({
      key: "pk_test_d4b6c98243be230237ed12ed6e514a092ab2f77b",
      amount: 100,
      email: "attajnr731@gmail.com",
    //   onSuccess: () => handlePaymentSuccess(studentData),
      onCancel: () => {
        setMessage("Payment cancelled");
        setOpen(true);
      },
    });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Join Queue</DialogTitle>
      <DialogContent>
        <TextField
          label="Phone"
          fullWidth
          margin="normal"
          required
          size="small"
        />
        <TextField
          label="Type"
          fullWidth
          select
          margin="normal"
          required
          size="small"
          value={"Deposit"}
          onChange={""}
        >
          {["Deposit", "Withdraw", "Special"].map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handlePayment} variant="contained">
          Join
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default JoinQueue;
