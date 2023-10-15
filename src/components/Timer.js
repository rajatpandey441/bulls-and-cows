import React, { useState, useEffect, useContext } from "react";
import { ResponsesContext } from "../context/responsesContext";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const { timeElapsedDispatch } = useContext(ResponsesContext);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (seconds === 59) {
        if (minutes === 59) {
          setHours(hours + 1);
          setMinutes(0);
          setSeconds(0);
        } else {
          setMinutes(minutes + 1);
          setSeconds(0);
        }
      } else {
        setSeconds(seconds + 1);
      }
      timeElapsedDispatch({
        type: "updateTime",
        payload: `${hours}:${minutes}:${seconds}`,
      });
    }, 1000);

    return () => clearInterval(timerInterval); // Cleanup on unmount
  }, [seconds, minutes, hours]);

  return (
    <div>
      <h2>Timer</h2>
      <p>
        {String(hours).padStart(2, "0")}:{String(minutes).padStart(2, "0")}:
        {String(seconds).padStart(2, "0")}
      </p>
    </div>
  );
};

export default Timer;
