import {
  ActionButton,
  CountDown,
  FortuneWheel,
  InfoLabel,
  TitleText,
  NavigationButton,
  HowToPlayPopUp,
} from "../../components";
import { useState } from "react";
import "./MainScreen.scss";

export const MainScreen = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinsAmount, setSpinsAmount] = useState<number>(3);
  const [isHowToPlayOpen, setIsHowToPlayOpen] = useState(false); // State for managing the popup

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
    setIsHowToPlayOpen(true); 
  };

  const closeHowToPlay = () => {
    setIsHowToPlayOpen(false); 
  };

  return (
    <div className="main-screen">
      <div className="main-screen__nav-bar">
        <NavigationButton type="how-to-play" onClick={openHowToPlay} />
        <InfoLabel spinsAmount={spinsAmount} />
        <NavigationButton
          type="settings"
          onClick={() => console.log("Settings")}
        />
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

      <FortuneWheel
        spinning={isSpinning}
        setSpinning={setIsSpinning}
        collectSpins={handleCollectSpins} // Pass the function here
      />

      {isHowToPlayOpen && (
        <div className="popup-overlay">
          <div className="popup-overlay__how-to-play">
            <HowToPlayPopUp
              closePopUp={closeHowToPlay}
              isClosed={!isHowToPlayOpen}
            />
          </div>
        </div>
      )}
    </div>
  );
};
