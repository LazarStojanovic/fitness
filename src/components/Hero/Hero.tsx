import React from "react";
import { useTranslation } from "react-i18next";
import { useSmoothScroll } from "../../hooks/useSmoothScroll";
import styles from "./Hero.module.css";
import landingImage from "../../assets/landing-image.webp";

export const Hero: React.FC = () => {
  const { t } = useTranslation();
  const { scrollToElement } = useSmoothScroll();

  const handleCTAClick = () => {
    scrollToElement("about");
  };

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.textContent}>
            <h1>{t("hero.title")}</h1>
            <p>{t("hero.subtitle")}</p>
            <button className="btn btn-primary" onClick={handleCTAClick}>
              {t("hero.cta")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
