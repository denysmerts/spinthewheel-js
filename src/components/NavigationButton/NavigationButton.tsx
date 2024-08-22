import "./NavigationButton.scss";
import { ReactComponent as InfoIcon } from "../../assets/svgs/Info-icon.svg";
import { ReactComponent as GearIcon } from "../../assets/svgs/gear-icon.svg";

type NavigationButtonTypes = "how-to-play" | "settings";

interface NavigationButtonProps {
  type: NavigationButtonTypes;
  onClick: () => void;
}

export const NavigationButton = ({ type, onClick }: NavigationButtonProps) => {
  return (
    <>
      <div className="nav-button" onClick={onClick}>
        {type === "how-to-play" ? <InfoIcon /> : <GearIcon />}
      </div>
    </>
  );
};
