import React from "react";
import { useTranslation } from "react-i18next";
import { useSmoothScroll } from "../../hooks/useSmoothScroll";
import styles from "./Hero.module.css";

export const Hero: React.FC = () => {
  const { t } = useTranslation();
  const { scrollToElement } = useSmoothScroll();

  const handleCTAClick = () => {
    scrollToElement("about");
  };

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.heroOverlay}></div>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.textContent}>
            <div className={styles.badge}>
              <i className="fas fa-dumbbell"></i>
              <span>{t("brand.tagline")}</span>
            </div>

            <h1 id="hero-title" className={styles.heroTitle}>
              {t("hero.title")}
            </h1>

            <p className={`lead ${styles.heroSubtitle}`}>
              {t("hero.subtitle")}
            </p>

            <div className={styles.ctaSection}>
              <button
                className={`btn btn-primary ${styles.ctaButton}`}
                onClick={handleCTAClick}
                aria-describedby="hero-title"
              >
                <i className="fas fa-rocket"></i>
                {t("hero.cta")}
              </button>

              <p className={styles.description}>{t("hero.description")}</p>
            </div>

            <div className={styles.features}>
              <div className={styles.feature}>
                <i className="fas fa-medal"></i>
                <span>Certified Trainer</span>
              </div>
              <div className={styles.feature}>
                <i className="fas fa-users"></i>
                <span>1:1 Mentorship</span>
              </div>
              <div className={styles.feature}>
                <i className="fas fa-chart-line"></i>
                <span>Proven Results</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
