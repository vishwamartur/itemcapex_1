// Import React and React Big Calendar
import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

// Import the CSS file for React Big Calendar
import "react-big-calendar/lib/css/react-big-calendar.css";

// Define the localizer for moment
const localizer = momentLocalizer(moment);

// Define some sample events for the calendar
const events = [
  {
    id: 1,
    title: "Birthday party",
    start: new Date(2024, 1, 13, 7, 0, 0),
    end: new Date(2024, 1, 13, 10, 30, 0),
  },
  {
    id: 2,
    title: "Conference",
    start: new Date(2024, 1, 18, 9, 0, 0),
    end: new Date(2024, 1, 20, 17, 0, 0),
  },
  {
    id: 3,
    title: "Meeting",
    start: new Date(2024, 1, 24, 10, 0, 0),
    end: new Date(2024, 1, 24, 11, 0, 0),
  },
];

// Define the Calendar component
function CalendarGfg() {
  return (
    // Use the Calendar component from React Big Calendar
    <Calendar
      localizer={localizer} // Pass the localizer
      events={events} // Pass the events
      startAccessor="start" // Specify the start date/time of the events
      endAccessor="end" // Specify the end date/time of the events
      style={{ height: 500 }} // Set the height of the calendar
    />
  );
}

// Export the Calendar component
export default CalendarGfg;
