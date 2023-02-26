import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import DetailsDialog from "../components/DetailsDialog";
import AddVehicleDialog from "../components/AddVehicleDialog";
import axios from "axios";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [addVehicleOpen, setAddOpenVehicle] = useState(false);
  const [cars, setCars] = useState([]);
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data: response } = await axios.get("http://localhost:8000/cars");
      setCars(response);
    } catch (error) {
      console.error(error.message);
    }
    setLoading(false);
  };

  const handleAddVehicle = () => {
    setAddOpenVehicle(true);
  };

  const handleClickOpen = (car) => {
    let vehicle = cars.find((item) => item._id === car);
    setCar(vehicle);
    setOpen(true);
  };

  return (
    <div data-testid="home">
      <Grid container justifyContent="center">
        <Grid container justifyContent="center" style={{ margin: "2em" }}>
          <Grid item>
            <Button
              size="medium"
              variant="contained"
              onClick={handleAddVehicle}
              style={{ backgroundColor: "#EE7125", color: "black" }}
            >
              Add Vehicle
            </Button>
          </Grid>
        </Grid>
        {loading ? (
          <Grid container justifyContent="center">
            <Grid item>
              <CircularProgress size="5rem" />
            </Grid>
          </Grid>
        ) : (
          <Grid
            container
            justifyContent="space-evenly"
            style={{ margin: "3em", gap: "3em" }}
          >
            {cars.map((car, id) => {
              return (
                <Grid item key={id} xs={12} sm={6} md={3}>
                  <Card sx={{ maxWidth: 380 }}>
                    <CardMedia
                      sx={{ height: 240 }}
                      image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/camaro-new-1632838232.jpg?crop=0.876xw:0.779xh;0.0725xw,0.111xh&resize=980:*"
                      title="vehicle"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {car.year} {car.make} {car.model}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {car.category}
                      </Typography>
                      <Typography variant="h3">
                        ${car.price.toLocaleString()}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        size="small"
                        onClick={() => handleClickOpen(car._id)}
                      >
                        Learn More
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        )}
        {addVehicleOpen && (
          <AddVehicleDialog
            open={addVehicleOpen}
            setOpen={setAddOpenVehicle}
            fetchData={fetchData}
          />
        )}
        {open && (
          <DetailsDialog
            key={car.id}
            car={car}
            open={open}
            setOpen={setOpen}
            setCar={setCar}
          />
        )}
      </Grid>
    </div>
  );
};

export default Home;
