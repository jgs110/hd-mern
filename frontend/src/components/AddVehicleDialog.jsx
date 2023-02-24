import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { TextField } from "@mui/material";
import axios from "axios";

const AddVehicleDialog = ({ open, setOpen, fetchData }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [model, setModel] = useState("");
  const [make, setMake] = useState("");
  const [carPackage, setCarPackage] = useState("");
  const [category, setCategory] = useState("");
  const [year, setYear] = useState("");
  const [color, setColor] = useState("");
  const [miles, setMiles] = useState(0);
  const [price, setPrice] = useState(0);

  const handleClickClose = () => {
    setOpen(false);
  };

  const handleMake = (e) => {
    setMake(e.target.value);
  };

  const handleModel = (e) => {
    setModel(e.target.value);
  };

  const handleCarPackage = (e) => {
    setCarPackage(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleYear = (e) => {
    setYear(e.target.value);
  };

  const handleColor = (e) => {
    setColor(e.target.value);
  };

  const handleMiles = (e) => {
    setMiles(e.target.value);
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      make: make,
      model: model,
      package: carPackage,
      category: category,
      year: year,
      color: color,
      miles: miles,
      price: price,
    };
    console.log(data);
    try {
      const response = await axios.post("http://localhost:8000/cars", data);
      if (response) {
        setMake("");
        setModel("");
        setCarPackage("");
        setCategory("");
        setYear("");
        setColor("");
        setMiles(0);
        setPrice(0);
        setOpen(false);
      }
      fetchData();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClickClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle>Add Vehicle</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add a vehicle, please enter your vehicle information below.
          </DialogContentText>
          <form>
            <TextField
              autoFocus
              onChange={handleMake}
              value={make}
              margin="dense"
              id="make"
              label="Make"
              type="text"
              fullWidth
              variant="standard"
              required
            />
            <TextField
              autoFocus
              onChange={handleModel}
              vaule={model}
              margin="dense"
              id="model"
              label="Model"
              type="text"
              fullWidth
              variant="standard"
              required
            />
            <TextField
              autoFocus
              onChange={handleCarPackage}
              value={carPackage}
              margin="dense"
              id="carPackage"
              label="Car Package"
              type="text"
              fullWidth
              variant="standard"
              required
            />
            <TextField
              autoFocus
              onChange={handleCategory}
              value={category}
              margin="dense"
              id="category"
              label="Category"
              type="text"
              fullWidth
              variant="standard"
              required
            />
            <TextField
              autoFocus
              onChange={handleYear}
              value={year}
              margin="dense"
              id="year"
              label="Year"
              type="text"
              fullWidth
              variant="standard"
              required
            />
            <TextField
              autoFocus
              onChange={handleColor}
              value={color}
              margin="dense"
              id="color"
              label="Color"
              type="text"
              fullWidth
              variant="standard"
              required
            />
            <TextField
              autoFocus
              onChange={handleMiles}
              value={miles}
              margin="dense"
              id="miles"
              label="Miles (mi)"
              type="number"
              fullWidth
              variant="standard"
              required
            />
            <TextField
              autoFocus
              onChange={handlePrice}
              value={price}
              margin="dense"
              id="price"
              label="Price (cents)"
              type="number"
              fullWidth
              variant="standard"
              required
            />
            <DialogActions>
              <Button onClick={handleClickClose}>Cancel</Button>
              <Button
                type="submit"
                value="submit"
                disabled={
                  !make.length > 0 ||
                  !carPackage.length > 0 ||
                  !category.length > 0 ||
                  !year.length > 0 ||
                  !color.length > 0 ||
                  !miles.length > 0 ||
                  !price.length > 0
                }
                onClick={handleSubmit}
              >
                Add Vehicle
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddVehicleDialog;
