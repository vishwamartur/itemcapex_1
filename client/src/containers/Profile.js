// Import React, React Router, and React Hook Form
import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

// Import the Material UI components
import { Container, Typography, TextField, Button } from "@material-ui/core";

// Import the API module
import api from "../utils/api";

// Define the Profile component
function Profile() {
  // Use the useForm hook to handle the form data and validation
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Use the useHistory hook to access the history object
  const history = useHistory();

  // Define a function to handle the form submission
  const onSubmit = async (data) => {
    // Try to update the user profile using the API module
    try {
      // Call the updateUser function with the data
      const response = await api.updateUser(data);
      // Check if the response is successful
      if (response.status === 200) {
        // Reset the form fields
        reset();
        // Redirect to the home page
        history.push("/");
      }
    } catch (err) {
      // Handle any errors
      console.error(err);
    }
  };

  // Return the JSX code for the profile page
  return (
    // Use the Container component to center the content
    <Container>
      // Use the Typography component to display the title
      <Typography variant="h3" align="center" style={{ margin: "20px" }}>
        Profile
      </Typography>
      // Use the handleSubmit function to wrap the form submission
      <form onSubmit={handleSubmit(onSubmit)}>
        // Use the TextField component to create the username input
        <TextField
          label="Username"
          type="text"
          // Use the register function to validate the input
          {...register("username", {
            required: true,
            minLength: 3,
            maxLength: 20,
          })}
          // Display an error message if the input is invalid
          error={!!errors.username}
          helperText={
            errors.username && "Username must be between 3 and 20 characters"
          }
          style={{ width: "100%", margin: "10px" }}
        />
        // Use the TextField component to create the email input
        <TextField
          label="Email"
          type="email"
          // Use the register function to validate the input
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          // Display an error message if the input is invalid
          error={!!errors.email}
          helperText={errors.email && "Please enter a valid email"}
          style={{ width: "100%", margin: "10px" }}
        />
        // Use the TextField component to create the password input
        <TextField
          label="Password"
          type="password"
          // Use the register function to validate the input
          {...register("password", { required: true, minLength: 6 })}
          // Display an error message if the input is invalid
          error={!!errors.password}
          helperText={
            errors.password && "Password must be at least 6 characters"
          }
          style={{ width: "100%", margin: "10px" }}
        />
        // Use the TextField component to create the confirm password input
        <TextField
          label="Confirm Password"
          type="password"
          // Use the register function to validate the input
          {...register("confirmPassword", {
            required: true,
            validate: (value) => value === watch("password"),
          })}
          // Display an error message if the input is invalid
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword && "Passwords must match"}
          style={{ width: "100%", margin: "10px" }}
        />
        // Use the Button component to create the submit button
        <Button
          variant="contained"
          color="primary"
          type="submit"
          style={{ width: "100%", margin: "10px" }}
        >
          Update
        </Button>
      </form>
    </Container>
  );
}

// Export the Profile component
export default Profile;
