import { useState, useEffect } from "react";
import { ReactComponent as FortuneWheelSVG } from "../../assets/svgs/wheel-of-fortune.svg";
import { ReactComponent as PointerSVG } from "../../assets/svgs/pointer.svg";
import { SuperPrize } from "../PopUps/SuperPrize/SuperPrize";
import "./FortuneWheel.scss";

const segments = ["100", "200", "300", "400", "500", "600", "700", "800"];
const segmentAngle = 360 / segments.length;

interface FortuneWheelProps {
  spinning: boolean;
  setSpinning: (spinning: boolean) => void;
  collectSpins: (spinsToAdd: number) => void; // Add a prop to collect spins
}

export const FortuneWheel = ({spinning,setSpinning,collectSpins}: FortuneWheelProps) => {
  const [rotation, setRotation] = useState(0);
  const [showSuperPrize, setShowSuperPrize] = useState(false); // Track SuperPrize visibility

  const closeSuperPrize = () => {
    setShowSuperPrize(false); // Close the popup when the prize is collected
  };

  const collectSuperPrize = (spins: number) => {
    collectSpins(spins); // Adds spins to the total
  };

  useEffect(() => {
    if (spinning) {
      const spinWheel = () => {
        const randomRotation = Math.floor(Math.random() * 360) + 720;
        setRotation((prevRotation) => prevRotation + randomRotation);

        setTimeout(() => {
          const totalRotation = (rotation + randomRotation) % 360;
          const normalizedRotation = (360 - totalRotation + 20) % 360;
          const segmentIndex = Math.floor(normalizedRotation / segmentAngle);
          const prize = segments[segmentIndex];

          console.log(`You won: ${prize}`);

          if (prize === segments[7]) {
            setShowSuperPrize(true); // Show SuperPrize if the prize is 800
          }

          setSpinning(false);
        }, 4000); // Simulate spinning duration
      };

      spinWheel();
    }
  }, [spinning, setSpinning]);

  return (
    <div className="wheel-container">
      <PointerSVG className="wheel-container__pointer" />
      <FortuneWheelSVG
        className="wheel-container__wheel"
        style={{ transform: `rotate(${rotation}deg)` }}
      />

      {showSuperPrize && (
        <div className="popup-overlay-big-prize">
          <SuperPrize
            closePopUp={closeSuperPrize}
            collectSuperPrize={collectSuperPrize} // Pass the function
          />
        </div>
      )}
    </div>
  );
};
