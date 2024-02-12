// Import dotenv and load the environment variables
const dotenv = require("dotenv");
dotenv.config();

// Define the config object
const config = {
  // Define the port number
  port: process.env.PORT || 3000,
  // Define the database connection string
  db: process.env.DATABASE_URL || "postgres://user:pass@host:port/db",
  // Define the secret key for encryption
  secret: process.env.SECRET || "some-random-string",
};

// Export the config object
module.exports = config;
