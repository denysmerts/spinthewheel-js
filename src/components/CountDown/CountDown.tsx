import { useState } from "react";
import { useCountdown } from "../../hooks/useCountdown";
import { useTranslation } from "react-i18next";
import "./CountDown.scss";

interface CountDownProps {
  spinsNumber: number;
  onCollectSpins: (spinsToAdd: number) => void;
}

export const CountDown = ({ spinsNumber, onCollectSpins }: CountDownProps) => {
  const { t } = useTranslation();

  const [collected, setCollected] = useState<boolean>(false);

  const duration = 10 * 1000; // 24 hours in milliseconds

  const { resetCountdown, getReturnValues } = useCountdown({
    duration,
    onCountdownComplete: () => setCollected(true),
  });

  const [hours, minutes, seconds] = getReturnValues();

  const handleCollectSpins = () => {
    setCollected(false);
    resetCountdown();
    onCollectSpins(spinsNumber);
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
