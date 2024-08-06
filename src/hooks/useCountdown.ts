import { useEffect, useState } from "react";

interface UseCountdownProps {
  duration: number; // Duration in milliseconds
  onCountdownComplete: () => void; // Callback when countdown completes
}

const useCountdown = ({ duration, onCountdownComplete }: UseCountdownProps) => {
  const [countDown, setCountDown] = useState<number>(duration);

  useEffect(() => {
    if (countDown <= 0) {
      onCountdownComplete();
      return;
    }

    const interval = setInterval(() => {
      setCountDown((prevCountDown) => prevCountDown - 1000);
    }, 1000);

    return () => clearInterval(interval);
  }, [countDown, onCountdownComplete]);

  const resetCountdown = () => setCountDown(duration);

  return {
    countDown,
    resetCountdown,
    getReturnValues: () => getReturnValues(countDown),
  };
};

const getReturnValues = (countDown: number): [number, number, number] => {
  // Calculate time left
  const hours = Math.floor(countDown / (1000 * 60 * 60));
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [hours, minutes, seconds];
};

export { useCountdown };
