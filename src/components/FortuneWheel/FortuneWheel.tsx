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
}

export const FortuneWheel = ({ spinning, setSpinning }: FortuneWheelProps) => {
  const [rotation, setRotation] = useState(0);
  const [showSuperPrize, setShowSuperPrize] = useState(false); // New state to track the SuperPrize visibility

  const closeSuperPrize = () => {
    setShowSuperPrize(false); // Close the popup when the prize is collected
  };

  useEffect(() => {
    if (spinning) {
      const spinWheel = () => {
        // Randomly calculate rotation (between 2 and 5 full rotations)
        const randomRotation = Math.floor(Math.random() * 360) + 720;

        setRotation((prevRotation) => prevRotation + randomRotation);

        setTimeout(() => {
          const totalRotation = (rotation + randomRotation) % 360; // Ensure the total rotation is within 0-360 degrees
          const normalizedRotation = (360 - totalRotation + 20) % 360; // Flip the rotation to match the segments correctly
          const segmentIndex = Math.floor(normalizedRotation / segmentAngle);
          const prize = segments[segmentIndex];

          console.log(`You won: ${prize}`);

          if (prize === segments[7]) {
            setShowSuperPrize(true); // Show SuperPrize if the prize is 800
          }

          setSpinning(false);
        }, 4000); // 4 seconds to simulate the spinning duration
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
          <SuperPrize closePopUp={closeSuperPrize} />
        </div>
      )}
    </div>
  );
};
