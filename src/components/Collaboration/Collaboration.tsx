import React from "react";
import { useTranslation } from "react-i18next";
import type { Feature } from "../../types";
import { ImageCarousel } from "../ImageCarousel/ImageCarousel";
import styles from "./Collaboration.module.css";
import slider1 from "../../assets/slider-1.webp";
import slider2 from "../../assets/slider-2.webp";
import slider3 from "../../assets/slider-3.webp";
import contactImage from "../../assets/conntact-image.webp";

export const Collaboration: React.FC = () => {
  const { t } = useTranslation();

  const features: Feature[] = [
    {
      icon: "fas fa-dumbbell",
      title: t("collaboration.features.training.title"),
      description: t("collaboration.features.training.description"),
    },
    {
      icon: "fas fa-utensils",
      title: t("collaboration.features.nutrition.title"),
      description: t("collaboration.features.nutrition.description"),
    },
    {
      icon: "fas fa-video",
      title: t("collaboration.features.videos.title"),
      description: t("collaboration.features.videos.description"),
    },
    {
      icon: "fab fa-viber",
      title: t("collaboration.features.communication.title"),
      description: t("collaboration.features.communication.description"),
    },
  ];

  const carouselImages = [slider1, slider2, slider3, contactImage];

  return (
    <section id="collaboration" className="section">
      <div className="container">
        <div className={styles.collaborationContent}>
          <div className={styles.imageContent}>
            <ImageCarousel
              images={carouselImages}
              alt={t("collaboration.title")}
              autoPlay={true}
              autoPlayDelay={5000}
            />
          </div>

          <div className={styles.textContent}>
            <div className={styles.headerSection}>
              <h2>{t("collaboration.title")}</h2>
              <p className="lead">{t("collaboration.lead")}</p>
            </div>

            <div className={styles.features}>
              {features.map((feature, index) => (
                <div key={index} className={styles.feature}>
                  <i className={feature.icon} />
                  <div className={styles.featureContent}>
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
