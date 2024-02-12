// Import express and create an app instance
const express = require("express");
const app = express();

// Import other modules and files
const routes = require("./routes");
const config = require("./config");
const utils = require("./utils");

// Connect to the database using the config file
const db = utils.connectToDB(config.db);

// Use express.json middleware to parse JSON requests
app.use(express.json());

// Use the routes file to handle API endpoints
app.use("/api", routes);

// Use express.static middleware to serve static files from the public folder
app.use(express.static(__dirname + "/../client/public"));

// Listen on the port specified in the config file
app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}`);
});
