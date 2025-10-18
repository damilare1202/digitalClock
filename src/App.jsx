import React, { useState, useEffect } from "react";
import "./App.css";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours = hours.toString().padStart(2, "0");
    minutes = minutes.toString().padStart(2, "0");
    seconds = seconds.toString().padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="clock-container">
      <h1 className="clock">{formatTime(time)}</h1>
    </div>
  );
}

export default function App() {
  return (
    <div className="container">
      <DigitalClock />
    </div>
  );
}
