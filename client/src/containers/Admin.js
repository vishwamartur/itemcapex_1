// Import React and React Router
import React from 'react';
import { Route } from 'react-router-dom';

// Import the Material UI components
import { Container, Typography, Tabs, Tab } from '@material-ui/core';

// Import the components and containers
import Header from '../components/Header';
import Footer from '../components/Footer';
import UserList from './UserList';
import ItemList from './ItemList';
import ReservationList from './ReservationList';

// Define the Admin component
function Admin() {
  // Define a state variable to store the current tab value
  const [value, setValue] = React.useState(0);

  // Define a function to handle the tab change
  const handleChange = (event, newValue) => {
    // Set the value to the new value
    setValue(newValue);
  };

  // Return the JSX code for the admin page
  return (
    // Use the Header component to display the navbar
    <Header />
    // Use the Container component to center the content
    <Container>
      // Use the Typography component to display the title
      <Typography variant="h3" align="center" style={{margin: '20px'}}>
        Admin Panel
      </Typography>
      // Use the Tabs and Tab components to create a navigation menu
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Users" />
        <Tab label="Items" />
        <Tab label="Reservations" />
      </Tabs>
      // Use the Route component to render different components based on the tab value
      <Route path="/admin" exact>
        // Render the UserList component for the first tab
        {value === 0 && <UserList />}
      </Route>
      <Route path="/admin/items">
        // Render the ItemList component for the second tab
        {value === 1 && <ItemList />}
      </Route>
      <Route path="/admin/reservations">
        // Render the ReservationList component for the third tab
        {value === 2 && <ReservationList />}
      </Route>
    </Container>
    // Use the Footer component to display the footer
    <Footer />
  );
}

// Export the Admin component
export default Admin;
