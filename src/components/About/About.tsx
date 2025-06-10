import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./About.module.css";
import aboutMeImage from "../../assets/about-me-2-image.webp";

export const About: React.FC = () => {
  const { t } = useTranslation();

  const credentials = [
    {
      icon: "fas fa-graduation-cap",
      title: t("about.credentials.cert1"),
      color: "#667eea",
    },
    {
      icon: "fas fa-dumbbell",
      title: t("about.credentials.cert2"),
      color: "#764ba2",
    },
    {
      icon: "fas fa-venus",
      title: t("about.credentials.cert3"),
      color: "#e74c3c",
    },
  ];

  return (
    <section
      id="about"
      className={`section ${styles.about}`}
      aria-labelledby="about-title"
    >
      <div className="container">
        <div className={styles.aboutContent}>
          <div className={styles.textContent}>
            <div className={styles.headerSection}>
              <h2 id="about-title">{t("about.title")}</h2>
              <p className="lead">{t("about.lead")}</p>
            </div>

            <div className={styles.storySection}>
              <div className={styles.storyItem}>
                <h3 className={styles.storyTitle}>
                  <i className="fas fa-heart" aria-hidden="true"></i>
                  {t("about.storyTitles.passion")}
                </h3>
                <p>{t("about.passion")}</p>
              </div>

              <div className={styles.storyItem}>
                <h3 className={styles.storyTitle}>
                  <i className="fas fa-road" aria-hidden="true"></i>
                  {t("about.storyTitles.journey")}
                </h3>
                <p>{t("about.journey")}</p>
              </div>

              <div className={styles.storyItem}>
                <h3 className={styles.storyTitle}>
                  <i className="fas fa-lightbulb" aria-hidden="true"></i>
                  {t("about.storyTitles.philosophy")}
                </h3>
                <p>{t("about.philosophy")}</p>
              </div>

              <div className={styles.storyItem}>
                <h3 className={styles.storyTitle}>
                  <i className="fas fa-users" aria-hidden="true"></i>
                  {t("about.storyTitles.approach")}
                </h3>
                <p>{t("about.approach")}</p>
              </div>
            </div>

            <div
              className={styles.credentials}
              role="list"
              aria-label="Professional credentials"
            >
              {credentials.map((credential, index) => (
                <div key={index} className={styles.credential} role="listitem">
                  <i
                    className={credential.icon}
                    aria-hidden="true"
                    style={{ color: credential.color }}
                  />
                  <span>{credential.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.imageContent}>
            <img
              src={aboutMeImage}
              alt={`Professional photo of ${t(
                "brand.trainerName"
              )}, certified personal fitness trainer specializing in ${t(
                "brand.tagline"
              )}`}
              loading="lazy"
              width="400"
              height="500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
