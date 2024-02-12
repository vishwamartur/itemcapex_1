// Import the models
const User = require("../models/user");
const Item = require("../models/item");
const Reservation = require("../models/reservation");

// Define the controller functions for the user resource
exports.user_list = (req, res, next) => {
  // Get all users from the database
  User.find()
    .then((users) => {
      // Send a JSON response with the users
      res.json(users);
    })
    .catch((err) => {
      // Handle any errors
      next(err);
    });
};

exports.user_detail = (req, res, next) => {
  // Get the user id from the request parameters
  const id = req.params.id;
  // Find the user by id from the database
  User.findById(id)
    .then((user) => {
      // Check if the user exists
      if (user) {
        // Send a JSON response with the user
        res.json(user);
      } else {
        // Send a 404 response if the user is not found
        res.status(404).send("User not found");
      }
    })
    .catch((err) => {
      // Handle any errors
      next(err);
    });
};

exports.user_create = (req, res, next) => {
  // Get the user data from the request body
  const userData = req.body;
  // Create a new user instance with the data
  const user = new User(userData);
  // Save the user to the database
  user
    .save()
    .then((user) => {
      // Send a 201 response with the user
      res.status(201).json(user);
    })
    .catch((err) => {
      // Handle any errors
      next(err);
    });
};

exports.user_update = (req, res, next) => {
  // Get the user id from the request parameters
  const id = req.params.id;
  // Get the user data from the request body
  const userData = req.body;
  // Find the user by id and update it with the data
  User.findByIdAndUpdate(id, userData, { new: true })
    .then((user) => {
      // Check if the user exists
      if (user) {
        // Send a 200 response with the user
        res.status(200).json(user);
      } else {
        // Send a 404 response if the user is not found
        res.status(404).send("User not found");
      }
    })
    .catch((err) => {
      // Handle any errors
      next(err);
    });
};

exports.user_delete = (req, res, next) => {
  // Get the user id from the request parameters
  const id = req.params.id;
  // Find the user by id and delete it
  User.findByIdAndDelete(id)
    .then((user) => {
      // Check if the user exists
      if (user) {
        // Send a 200 response with a message
        res.status(200).send("User deleted");
      } else {
        // Send a 404 response if the user is not found
        res.status(404).send("User not found");
      }
    })
    .catch((err) => {
      // Handle any errors
      next(err);
    });
};

// Define the controller functions for the item resource
// You can follow the same pattern as the user resource
// TODO: Complete the item controller functions

// Define the controller functions for the reservation resource
// You can follow the same pattern as the user resource
// TODO: Complete the reservation controller functions
