// Define some helper functions that can be used by other components

// Define a helper function to format a date
export function formatDate(date) {
  // Return a string representation of the date in the format MM/DD/YYYY
  return new Date(date).toLocaleDateString();
}

// Define a helper function to validate an email
export function validateEmail(email) {
  // Return true if the email matches a regular expression, false otherwise
  return /^\S+@\S+\.\S+$/.test(email);
}

// Define a helper function to calculate the total price of an order
export function calculateTotalPrice(items) {
  // Return the sum of the price and quantity of each item in the array
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
}
