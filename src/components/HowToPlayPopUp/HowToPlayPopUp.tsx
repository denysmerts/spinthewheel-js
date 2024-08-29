import { ReactComponent as CrossSVG } from "../../assets/svgs/cross-icon.svg";
import { ReactComponent as Chest } from "../../assets/svgs/chest.svg";
import { useTranslation } from "react-i18next";
import "./HowToPlayPopUp.scss";

interface HowToPlayPopUpProps {
  closePopUp: () => void;
  isClosed: boolean;
}

export const HowToPlayPopUp = ({ closePopUp }: HowToPlayPopUpProps) => {
  const { t } = useTranslation();
  return (
    <div className="how-to-play">
      <CrossSVG onClick={closePopUp} className="how-to-play__cross" />
      <div className="how-to-play__title">{t("how-to-play-title")}</div>
      <div className="how-to-play__content">
        <div className="how-to-play__content__line">
          <div className="how-to-play__content__line__number">1.</div>
          <div>{t("how-to-play-1")}</div>
        </div>
        <div className="how-to-play__content__line">
          <div className="how-to-play__content__line__number">2.</div>
          <div>{t("how-to-play-2")}</div>
        </div>
        <div className="how-to-play__content__line">
          <div className="how-to-play__content__line__number">3.</div>
          <div>{t("how-to-play-3")}</div>
        </div>
        <div className="how-to-play__content__line">
          <div className="how-to-play__content__line__number">4.</div>
          <div>{t("how-to-play-4")}</div>
        </div>
      </div>

      <div className="how-to-play__chest">
        <Chest />
      </div>
    </div>
  );
};
