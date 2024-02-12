// Import React and ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";

// Import the App component
import App from "./App";

// Import the reportWebVitals function
import reportWebVitals from "./reportWebVitals";

// Get the root element from the HTML file
const rootElement = document.getElementById("root");

// Create a root using ReactDOM
const root = ReactDOM.createRoot(rootElement);

// Render the App component to the root
root.render(<App />);

// Call the reportWebVitals function
reportWebVitals();
