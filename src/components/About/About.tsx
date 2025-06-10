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
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <div className={styles.aboutContent}>
          <div className={styles.textContent}>
            <h2>{t("about.title")}</h2>
            <p className="lead">{t("about.lead")}</p>
            <p>{t("about.description")}</p>

            <div className={styles.credentials}>
              {credentials.map((credential, index) => (
                <div key={index} className={styles.credential}>
                  <i className={credential.icon} />
                  <span>{credential.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.imageContent}>
            <img
              src={aboutMeImage}
              alt={`${t("brand.trainerName")} - ${t("brand.tagline")}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
