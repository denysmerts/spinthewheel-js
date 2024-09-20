import { ActionButton } from "../../ActionButton";
import { ReactComponent as BigWinSVG } from "../../../assets/svgs/big-win.svg";
import { useTranslation } from "react-i18next";
import "./SuperPrize.scss";

interface SuperPrizeProps {
  closePopUp: () => void;
  collectSuperPrize: (spins: number) => void;
}

export const SuperPrize = ({closePopUp, collectSuperPrize }: SuperPrizeProps) => {
  const { t } = useTranslation();

  const prizeAmount = 10;

  const collectPrize = () => {
    collectSuperPrize(prizeAmount);
    closePopUp();
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
          handleClick={collectPrize}
        />
      </div>
    </div>
  );
};
