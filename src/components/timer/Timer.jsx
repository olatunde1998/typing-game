import React, { useEffect, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  // const [pause, setPause] = useState(false)
  // var timer;
  useEffect(() => {
    var timer = setInterval(() => {
      setSeconds(seconds + 1);
      if (seconds === 59) {
        setMinutes(minutes + 1);
        setSeconds(0);
      }
    }, 1000);
    return () => clearInterval(timer);
  });

  // const handlePauseToggle = () => {
  //   clearInterval(timer);
  // };

  return (
    
    <h2>
      {minutes < 10 ? "0" + minutes : minutes}:
      {seconds < 10 ? "0" + seconds : seconds}
    </h2>
  );
};

export default Timer;
