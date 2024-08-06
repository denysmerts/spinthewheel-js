import { useTranslation } from "react-i18next";
import "./ActionButton.scss";

type TranslationKey = "spin" | "collect";

interface ActionButtonProps {
  translationKey: TranslationKey;
  handleClick: () => void;
}

export const ActionButton = ({
  translationKey,
  handleClick,
}: ActionButtonProps) => {
  const { t } = useTranslation();

  return (
    <button className="action-button" onClick={handleClick}>
      {t(translationKey)}
    </button>
  );
};
