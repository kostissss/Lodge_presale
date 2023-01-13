import React, { useState, useEffect } from 'react';

export default function CountdownTimer ({ initialCountdown }) {
  // Declare a state variable for the countdown
  const [countdown, setCountdown] = useState(initialCountdown);

  // Use the useEffect hook to update the countdown every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Convert the countdown value to a string in the format DD:HH:MM:SS
  const countdownString = new Date(countdown * 1000).toISOString().substr(11, 8);

  // Render the countdown
  return <p>This is a countdown timer: {countdownString}</p>;
};