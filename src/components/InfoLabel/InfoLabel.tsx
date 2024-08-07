import { useTranslation } from "react-i18next";
import "./InfoLabel.scss";

interface InfoLabelProps {
  spinsAmount: number;
}

const InfoLabel = ({ spinsAmount }: InfoLabelProps) => {
  const { t } = useTranslation();
  return <div className="info-label">{t("spins-left", { spinsAmount })}</div>;
};

export default InfoLabel;
