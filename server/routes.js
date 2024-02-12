// Import express and get a router object
const express = require("express");
const router = express.Router();

// Import the controller functions
const userController = require("./controllers/userController");
const itemController = require("./controllers/itemController");
const reservationController = require("./controllers/reservationController");

// Define the routes for the user resource
router.get("/users", userController.getAllUsers); // Get all users
router.get("/users/:id", userController.getUserById); // Get a user by id
router.post("/users", userController.createUser); // Create a new user
router.put("/users/:id", userController.updateUser); // Update a user by id
router.delete("/users/:id", userController.deleteUser); // Delete a user by id

// Define the routes for the item resource
router.get("/items", itemController.getAllItems); // Get all items
router.get("/items/:id", itemController.getItemById); // Get an item by id
router.post("/items", itemController.createItem); // Create a new item
router.put("/items/:id", itemController.updateItem); // Update an item by id
router.delete("/items/:id", itemController.deleteItem); // Delete an item by id

// Define the routes for the reservation resource
router.get("/reservations", reservationController.getAllReservations); // Get all reservations
router.get("/reservations/:id", reservationController.getReservationById); // Get a reservation by id
router.post("/reservations", reservationController.createReservation); // Create a new reservation
router.put("/reservations/:id", reservationController.updateReservation); // Update a reservation by id
router.delete("/reservations/:id", reservationController.deleteReservation); // Delete a reservation by id

// Export the router object
module.exports = router;
