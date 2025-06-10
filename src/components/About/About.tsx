import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./About.module.css";
import aboutMeImage from "../../assets/about-me-2-image.webp";

export const About: React.FC = () => {
  const { t } = useTranslation();

  const credentials = [
    { icon: "fas fa-certificate", title: t("about.credentials.cert1") },
    { icon: "fas fa-certificate", title: t("about.credentials.cert2") },
    { icon: "fas fa-certificate", title: t("about.credentials.cert3") },
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
            <h2 id="about-title">{t("about.title")}</h2>
            <p className="lead">{t("about.lead")}</p>
            <p>{t("about.description")}</p>

            <div
              className={styles.credentials}
              role="list"
              aria-label="Professional credentials"
            >
              {credentials.map((credential, index) => (
                <div key={index} className={styles.credential} role="listitem">
                  <i className={credential.icon} aria-hidden="true" />
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
