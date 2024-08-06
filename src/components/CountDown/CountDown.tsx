import { useState } from "react";
import { useCountdown } from "../../hooks/useCountdown";
import { useTranslation } from "react-i18next";
import "./CountDown.scss";

interface CountDownProps {
  spinsNumber: number;
}

const Countdown = ({ spinsNumber }: CountDownProps) => {
  const { t } = useTranslation();

  const [collected, setCollected] = useState<boolean>(false);

  const duration = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

  const { resetCountdown, getReturnValues } = useCountdown({
    duration,
    onCountdownComplete: () => setCollected(true),
  });

  const [hours, minutes, seconds] = getReturnValues();

  const handleCollectSpins = () => {
    setCollected(false);
    resetCountdown();
  };

  const time = `${hours}:${minutes}:${seconds}`;

  return (
    <div>
      {collected ? (
        <div className="collect-free-spins-text" onClick={handleCollectSpins}>
          {t("collect-daily-free-spins")}
        </div>
      ) : (
        <div className="spins-countdown">
          {t("spins-ready-in", { spinsNumber, time })}
        </div>
      )}
    </div>
  );
};

export default Countdown;
