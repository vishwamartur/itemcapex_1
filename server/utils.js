// Import bcrypt and jsonwebtoken
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Import the config file
const config = require("./config");

// Define the utils object
const utils = {};

// Define a function to hash a password
utils.hashPassword = function (password) {
  // Generate a salt
  const salt = bcrypt.genSaltSync(10);
  // Hash the password with the salt
  const hash = bcrypt.hashSync(password, salt);
  // Return the hash
  return hash;
};

// Define a function to compare a password and a hash
utils.comparePassword = function (password, hash) {
  // Compare the password and the hash using bcrypt
  const match = bcrypt.compareSync(password, hash);
  // Return the result
  return match;
};

// Define a function to generate a token
utils.generateToken = function (user) {
  // Create a payload with the user id and role
  const payload = {
    id: user.id,
    role: user.role,
  };
  // Create a token with the payload and the secret key
  const token = jwt.sign(payload, config.secret, { expiresIn: "1h" });
  // Return the token
  return token;
};

// Define a function to verify a token
utils.verifyToken = function (token) {
  // Try to verify the token with the secret key
  try {
    // Decode the token
    const decoded = jwt.verify(token, config.secret);
    // Return the decoded payload
    return decoded;
  } catch (err) {
    // Return null if the token is invalid
    return null;
  }
};

// Define a function to connect to the database
utils.connectToDB = function (dbUrl) {
  // Import sequelize
  const Sequelize = require("sequelize");
  // Create a new sequelize instance with the database url
  const db = new Sequelize(dbUrl, {
    // Disable logging
    logging: false,
  });
  // Test the connection
  db.authenticate()
    .then(() => {
      // Log a success message
      console.log("Database connection established");
    })
    .catch((err) => {
      // Log an error message
      console.error("Database connection error:", err);
    });
  // Return the db object
  return db;
};

// Export the utils object
module.exports = utils;
