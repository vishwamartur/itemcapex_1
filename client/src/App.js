// Import React and React Router
import React from "react";
import { BrowserRouter, Route, Switch, Routes } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";

// Import the components and containers
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Register from "./containers/Register";
import Profile from "./containers/Profile";
import Admin from "./containers/Admin";

// Define the App component
function App() {
  return (
    // Use the BrowserRouter component to enable routing
    <BrowserRouter>
      // Use the Header component to display the navbar
      <Header />
      // Use the Switch component to render different pages based on the path
      {/* <Switch> */}
      // Use the Route component to define the routes and the components to
      render
      <Routes>
        {/* <Route path="/" element={<HomePage />} />
  <Route path="/about" element={<AboutPage />} /> */}
        {/* ...other routes */}
        <Route exact path="/" component={Home} /> // Render the Home component
        for the root path
        <Route path="/login" component={Login} /> // Render the Login component
        for the /login path
        <Route path="/register" component={Register} /> // Render the Register
        component for the /register path
        <Route path="/profile" component={Profile} /> // Render the Profile
        component for the /profile path
        <Route path="/admin" component={Admin} /> // Render the Admin component
        for the /admin path
      </Routes>
      {/* </Switch> */}
      // Use the Footer component to display the footer
      <Footer />
    </BrowserRouter>
  );
}

// Export the App component
export default App;
