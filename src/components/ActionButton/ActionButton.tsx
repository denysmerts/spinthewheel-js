import { useTranslation } from "react-i18next";
import "./ActionButton.scss";

type TranslationKey = "spin" | "collect";

interface ActionButtonProps {
  translationKey: TranslationKey;
  handleClick: () => void;
  isActive: boolean;
}

export const ActionButton = ({
  translationKey,
  handleClick,
  isActive,
}: ActionButtonProps) => {
  const { t } = useTranslation();

  return (
    <button
      className="action-button"
      onClick={handleClick}
      disabled={!isActive}
    >
      {t(translationKey)}
    </button>
  );
};
