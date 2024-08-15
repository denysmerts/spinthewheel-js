import {
  ActionButton,
  CountDown,
  FortuneWheel,
  InfoLabel,
  TitleText,
} from "../../components";
import { useState } from "react";
import "./MainScreen.scss";

export const MainScreen = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinsAmount, setSpinsAmount] = useState<number>(3);

  const handleCollectSpins = (spinsToAdd: number) => {
    setSpinsAmount((prevSpins) => prevSpins + spinsToAdd);
  };

  const handleClick = () => {
    if (spinsAmount > 0) {
      setSpinsAmount((prevSpins) => prevSpins - 1);
      setIsSpinning(true);
    }
  };

  return (
    <div className="main-screen">
      <InfoLabel spinsAmount={spinsAmount} />
      <TitleText />
      <CountDown spinsNumber={5} onCollectSpins={handleCollectSpins} />
      <ActionButton
        translationKey="spin"
        handleClick={handleClick}
        isActive={!isSpinning && spinsAmount > 0}
      />
      <FortuneWheel spinning={isSpinning} setSpinning={setIsSpinning} />
    </div>
  );
};
