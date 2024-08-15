import { useTranslation } from "react-i18next";
import "./TitleText.scss";

export const TitleText = () => {
  const { t } = useTranslation();
  return <div className="title-text">{t("spin-the-wheel")}</div>;
};
