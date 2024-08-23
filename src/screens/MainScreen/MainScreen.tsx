import {
  ActionButton,
  CountDown,
  FortuneWheel,
  InfoLabel,
  TitleText,
  NavigationButton,
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

  const openHowToPlay = () => {
    console.log("test");
  };

  return (
    <div className="main-screen">
      <div className="main-screen__nav-bar">
        <NavigationButton type="how-to-play" onClick={openHowToPlay} />
        <InfoLabel spinsAmount={spinsAmount} />
        <NavigationButton type="settings" onClick={openHowToPlay} />
      </div>
      <TitleText />
      <CountDown spinsNumber={5} onCollectSpins={handleCollectSpins} />
      <div className="main-screen__spin-button">
        <ActionButton
          translationKey="spin"
          handleClick={handleClick}
          isActive={!isSpinning && spinsAmount > 0}
        />
      </div>

      <FortuneWheel spinning={isSpinning} setSpinning={setIsSpinning} />
    </div>
  );
};
