import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
const DetailsDialog = ({ open, setOpen, car, setCar }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickClose = () => {
    setCar(null);
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClickClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {`${car.year} ${car.make} ${car.model} Details`}
        </DialogTitle>
        <DialogContent>
          <ul style={{ listStyle: "none" }}>
            <li>
              <b>Year: </b>
              {car.year}
            </li>
            <li>
              <b>Color: </b> {car.color}
            </li>
            <li>
              <b>Price (cents): </b> ${car.price.toLocaleString()}
            </li>
            <li>
              <b>Miles (mi): </b> {car.miles.toLocaleString()}
            </li>
            <li>
              <b>Package: </b>
              {car.package}
            </li>
            <li>
              <b>Category: </b> {car.category}
            </li>
          </ul>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DetailsDialog;
