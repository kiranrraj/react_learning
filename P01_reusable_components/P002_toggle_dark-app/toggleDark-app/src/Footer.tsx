// Footer.jsx
import React, { useState, useEffect } from "react";

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(timerId); // Clean up on unmount
  }, []);

  const formatTime = (date) => {
    // Options for Indian Standard Time (IST)
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true, // Use 12-hour clock with AM/PM
      timeZone: "Asia/Kolkata", // Explicitly set IST timezone
    };
    return date.toLocaleTimeString("en-IN", options);
  };

  return (
    <footer className="footer-minimal">
      <div className="footer-content-minimal">
        <p>
          &copy; {new Date().getFullYear()} Kiranraj R. All rights reserved.
        </p>
        <p className="open-status">We're Open Now!</p>
        <p>Current Time: {formatTime(currentTime)} IST</p>
      </div>
    </footer>
  );
};

export default Footer;
