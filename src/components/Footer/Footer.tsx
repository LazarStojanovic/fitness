import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Footer.module.css";

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.mainFooter}>
            <div className={styles.logo}>
              <i className="fas fa-dumbbell" />
              <span>{t("brand.name")}</span>
            </div>
            <p>{t("footer.copyright")}</p>
          </div>
          <div className={styles.copyrightText}>
            <p>{t("footer.copyrightText")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
