import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Logo.module.css";

export const Logo: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.logo}>
      <i className="fas fa-dumbbell" />
      <span>{t("brand.name")}</span>
    </div>
  );
};
