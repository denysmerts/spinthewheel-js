import { ActionButton } from "../ActionButton";
import { ReactComponent as BigWinSVG } from "../../assets/svgs/big-win.svg";
import { useTranslation } from "react-i18next";
import "./PopUpSuperPrize.scss";

const CollectPrize = () => {
  console.log("Collected"); //add funciton to handle prize collection
};

interface PopUpSuperPrizeProps {} //add props

export const PopUpSuperPrize = () => {
  const { t } = useTranslation(); //add translation
  return (
    <div className="pop-up-super-prize">
      <div className="pop-up-super-prize__big-win">
        <BigWinSVG />
      </div>
      <div className="pop-up-super-prize__prize-text">+60 freespins</div>
      <div className="pop-up-super-prize__collect-button">
        <ActionButton
          translationKey="collect"
          isActive={true}
          handleClick={CollectPrize}
        />
      </div>
    </div>
  );
};
