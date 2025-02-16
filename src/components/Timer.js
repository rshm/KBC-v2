import { useEffect, useState } from "react";
import countdown from "../sounds/countdown.mp3";
import useSound from "use-sound";

const Timer = ({ setTimeOut, questionNumber, stopTimer, setStopTimer }) => {
  const [timer, setTimer] = useState(30);
  const [countdownPlay] = useSound(countdown);
  useEffect(() => {
    if (stopTimer) return; // Stop the timer if stopTimer is true

    if (timer === 0) {
      setTimeOut(true);
      return;
    }

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer, setTimeOut, stopTimer]);

  useEffect(() => {
    setTimer(60);
    setStopTimer(false); // Reset stopTimer when questionNumber changes
  }, [questionNumber]);

  // Play countdown sound when timer reaches 10 seconds
  useEffect(() => {
    if (timer === 10) {
      countdownPlay()
    }
  }, [timer]);

  return <div>{timer}</div>;
};

export default Timer;
