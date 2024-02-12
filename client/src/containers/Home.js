// Import React and React Router
import React from "react";
import { Link } from "react-router-dom";

// Import the Material UI components
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";

// Import the images for the items
import laptop from "../assets/images/laptop.jpg";
import camera from "../assets/images/camera.jpg";
import projector from "../assets/images/projector.jpg";
import microphone from "../assets/images/microphone.jpg";

// Define the Home component
function Home() {
  // Define an array of items with their details
  const items = [
    {
      id: 1,
      name: "Laptop",
      location: "Room 101",
      status: "Available",
      image: laptop,
    },
    {
      id: 2,
      name: "Camera",
      location: "Room 102",
      status: "Reserved",
      image: camera,
    },
    {
      id: 3,
      name: "Projector",
      location: "Room 103",
      status: "Unavailable",
      image: projector,
    },
    {
      id: 4,
      name: "Microphone",
      location: "Room 104",
      status: "Available",
      image: microphone,
    },
  ];

  // Return the JSX code for the home page
  return (
    // Use the Container component to center the content
    <Container>
      // Use the Typography component to display the title
      <Typography variant="h3" align="center" style={{ margin: "20px" }}>
        Welcome to SFPOPOS
      </Typography>
      // Use the Grid component to create a responsive layout
      <Grid container spacing={3}>
        // Map over the items array and render a card for each item
        {items.map((item) => (
          // Use the Grid component to define the size of each card
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            // Use the Card component to display the item details
            <Card>
              // Use the CardMedia component to display the item image
              <CardMedia
                image={item.image}
                title={item.name}
                style={{ height: 200 }}
              />
              // Use the CardContent component to display the item name,
              location, and status
              <CardContent>
                <Typography variant="h5">{item.name}</Typography>
                <Typography variant="h6">Location: {item.location}</Typography>
                <Typography variant="h6">Status: {item.status}</Typography>
              </CardContent>
              // Use the CardActions component to display a button to reserve
              the item
              <CardActions>
                // Use the Link and Button components to create a reservation
                link
                <Link
                  to={`/reserve/${item.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    disabled={item.status !== "Available"}
                  >
                    Reserve
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

// Export the Home component
export default Home;
