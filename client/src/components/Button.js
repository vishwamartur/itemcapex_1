// Import React
import React from "react";

// Define the Button component
function Button(props) {
  // Get the props
  const { text, onClick, disabled, theme } = props;

  // Define the styles
  const styles = {
    backgroundColor: theme === "pink" ? "#e91e63" : "#3f51b5",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    outline: "none",
    cursor: disabled ? "default" : "pointer",
    opacity: disabled ? 0.7 : 1,
  };

  // Return the JSX code for the button
  return (
    <button style={styles} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
}

// Export the Button component
export default Button;
