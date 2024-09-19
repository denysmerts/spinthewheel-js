import { ActionButton } from "../../ActionButton";
import { ReactComponent as BigWinSVG } from "../../../assets/svgs/big-win.svg";
import { useTranslation } from "react-i18next";
import "./SuperPrize.scss";

interface SuperPrizeProps {
  closePopUp: () => void; // Accept a function to close the popup
}

export const SuperPrize = ({ closePopUp }: SuperPrizeProps) => {
  const { t } = useTranslation();

  const prizeAmount = 10;

  const handleCollect = () => {
    console.log("Collected");
    closePopUp(); // Close the popup when the prize is collected
  };

  return (
    <div className="pop-up-super-prize">
      <div className="pop-up-super-prize__big-win">
        <BigWinSVG />
      </div>
      <div className="pop-up-super-prize__prize-text">
        {t("big-prize-amount", { prizeAmount })}
      </div>
      <div className="pop-up-super-prize__collect-button">
        <ActionButton
          translationKey="collect"
          isActive={true}
          handleClick={handleCollect} // Use the handleCollect function
        />
      </div>
    </div>
  );
};
