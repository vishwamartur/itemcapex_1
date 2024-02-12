// Import axios
import axios from "axios";

// Create an axios instance
const auth = axios.create({
  // Set the base URL for the authentication API
  baseURL: "https://example.com/api/auth",
});

// Define a function to get the token from the sessionStorage
auth.getToken = function () {
  // Return the token value or null if it does not exist
  return sessionStorage.getItem("token") || null;
};

// Define a function to set the token to the sessionStorage
auth.setToken = function (token) {
  // Save the token value to the sessionStorage
  sessionStorage.setItem("token", token);
};

// Define a function to remove the token from the sessionStorage
auth.removeToken = function () {
  // Remove the token value from the sessionStorage
  sessionStorage.removeItem("token");
};

// Define a function to check if the user is authenticated
auth.isAuthenticated = function () {
  // Return true if the token exists and false otherwise
  return !!auth.getToken();
};

// Define a function to sign up a new user
auth.signUp = function (data) {
  // Return the promise from the post request
  return auth.post("/sign-up", data);
};

// Define a function to sign in an existing user
auth.signIn = function (data) {
  // Return the promise from the post request
  return auth.post("/sign-in", data);
};

// Define a function to sign out the current user
auth.signOut = function () {
  // Return the promise from the post request
  return auth.post("/sign-out");
};

// Define a function to get the current user profile
auth.getProfile = function () {
  // Return the promise from the get request with the token as a header
  return auth.get("/profile", {
    headers: {
      Authorization: `Bearer ${auth.getToken()}`,
    },
  });
};

// Define a function to update the current user profile
auth.updateProfile = function (data) {
  // Return the promise from the put request with the token as a header
  return auth.put("/profile", data, {
    headers: {
      Authorization: `Bearer ${auth.getToken()}`,
    },
  });
};

// Export the auth object
export default auth;
