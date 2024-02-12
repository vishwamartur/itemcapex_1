// Import React
import React from "react";

// Define the Footer component
function Footer() {
  // Get the current year
  const year = new Date().getFullYear();
  // Return the JSX code for the footer
  return (
    <footer>
      <p>© {year} SFPOPOS. All rights reserved.</p>
    </footer>
  );
}

// Export the Footer component
export default Footer;
