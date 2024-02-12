// Import React and React Router
import React from "react";
import { Link } from "react-router-dom";

// Import the Material UI components
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

// Define the Header component
function Header() {
  return (
    // Use the AppBar component to create a header bar
    <AppBar position="static">
      // Use the Toolbar component to align the elements horizontally
      <Toolbar>
        // Use the Typography component to display the title
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          SFPOPOS
        </Typography>
        // Use the Link and Button components to create navigation links
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <Button color="inherit">Home</Button>
        </Link>
        <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
          <Button color="inherit">Login</Button>
        </Link>
        <Link to="/register" style={{ textDecoration: "none", color: "white" }}>
          <Button color="inherit">Register</Button>
        </Link>
        <Link to="/profile" style={{ textDecoration: "none", color: "white" }}>
          <Button color="inherit">Profile</Button>
        </Link>
        <Link to="/admin" style={{ textDecoration: "none", color: "white" }}>
          <Button color="inherit">Admin</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

// Export the Header component
export default Header;
