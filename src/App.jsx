import React, { useState, useEffect } from "react";

export default function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // cleanup
  }, []);

  const formatTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    // Pad with leading zeros if needed
    hours = hours.toString().padStart(2, "0");
    minutes = minutes.toString().padStart(2, "0");
    seconds = seconds.toString().padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.clock}>{formatTime(time)}</h1>
    </div>
  );

}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "300px",
    width: "600px",
    background: "linear-gradient(to right, red, pink, blue)",
    marginLeft: "350px",
    marginTop: "150px"
  },
  clock: {
    fontSize: "4rem",
    fontFamily: "monospace",
    color: "#0f0",
  },
};
