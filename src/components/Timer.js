import { useEffect, useState, useRef } from "react";
import countdown from "../sounds/countdown.mp3";

const Timer = ({ setTimeOut, questionNumber, stopTimer, setStopTimer }) => {
  const [timer, setTimer] = useState(60);
  const audioRef = useRef(new Audio(countdown));

  useEffect(() => {
    if (stopTimer) {
      audioRef.current.pause(); // Pause the music when stopTimer is true
      return; // Stop the timer if stopTimer is true
    }

    if (timer === 0) {
      setTimeOut(true);
      audioRef.current.pause(); // Stop the music when timer reaches 0
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

  useEffect(() => {
    if (timer === 10 && !stopTimer) {
      audioRef.current.play(); // Play music when timer hits 10 and stopTimer is false
    }

    // Handle music when timer is less than 10 and stopTimer is false
    if (timer < 10 && !stopTimer) {
      if (audioRef.current.paused) {
        audioRef.current.play(); // Resume music from where it left off if paused
      }
    }

    // Pause and reset the sound if stopTimer is true or timer is > 10
    if (timer > 10 || stopTimer) {
      audioRef.current.pause(); // Pause the music if timer is > 10 or stopTimer is true
      // Do not reset `currentTime` here so it resumes correctly from where it was paused
    }

    return () => {
      // Cleanup: Stop the music if the timer stops
      if (stopTimer || timer > 10) {
        audioRef.current.pause();
      }
    };
  }, [timer, stopTimer]);

  return <div>{timer}</div>;
};

export default Timer;
