// Import React, React Router, and React Hook Form
import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

// Import the Material UI components
import { Container, Typography, TextField, Button } from "@material-ui/core";

// Define the Login component
function Login() {
  // Use the useForm hook to handle the form data and validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Use the useHistory hook to access the history object
  const history = useHistory();

  // Define a function to handle the form submission
  const onSubmit = (data) => {
    // Simulate an API call that returns a token
    // You can replace this with your own logic
    const token = "some-random-string";
    // Save the token to the sessionStorage
    sessionStorage.setItem("token", token);
    // Redirect to the profile page
    history.push("/profile");
  };

  // Return the JSX code for the login page
  return (
    // Use the Container component to center the content
    <Container>
      // Use the Typography component to display the title
      <Typography variant="h3" align="center" style={{ margin: "20px" }}>
        Login
      </Typography>
      // Use the handleSubmit function to wrap the form submission
      <form onSubmit={handleSubmit(onSubmit)}>
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
        // Use the Button component to create the submit button
        <Button
          variant="contained"
          color="primary"
          type="submit"
          style={{ width: "100%", margin: "10px" }}
        >
          Login
        </Button>
      </form>
    </Container>
  );
}

// Export the Login component
export default Login;
