import  { useEffect, useState } from "react";

const Timer = ({ setTimeOut, questionNumber, stopTimer, setStopTimer }) => {
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (stopTimer) return; // Stop the timer if stopTimer is true

    if (timer === 0) return setTimeOut(true);
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer, setTimeOut, stopTimer]);

  useEffect(() => {
    setTimer(30);
    setStopTimer(false); // Reset stopTimer when questionNumber changes
  }, [questionNumber, setStopTimer]);

  return timer;
};

export default Timer;