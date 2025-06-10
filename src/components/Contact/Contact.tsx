import React from "react";
import { useTranslation } from "react-i18next";
import { ImageCarousel } from "../ImageCarousel/ImageCarousel";
import styles from "./Contact.module.css";
import gymTownEntrance from "../../assets/gym-town-2-entrence.webp";
import gymTownBarbells from "../../assets/gym-town-2-barbels.webp";
import gymTownStepper from "../../assets/gym-town-2-stepper.webp";
import gymTownLounge from "../../assets/gym-town-2-lonuge.webp";
import gymTown2 from "../../assets/gym-townn-2.webp";

export const Contact: React.FC = () => {
  const { t } = useTranslation();

  const gymTownImages = [
    gymTownEntrance,
    gymTownBarbells,
    gymTownStepper,
    gymTownLounge,
    gymTown2,
  ];

  const contactInfo = [
    {
      icon: "fas fa-phone",
      text: t("contact.info.phone"),
      href:
        t("contact.info.phone") !== "Coming Soon" &&
        t("contact.info.phone") !== "Uskoro dostupno"
          ? `tel:${t("contact.info.phone")}`
          : undefined,
    },
    {
      icon: "fab fa-instagram",
      text: t("contact.info.instagram"),
      href: "https://www.instagram.com/ivana.nikicc",
    },
    {
      icon: "fas fa-envelope",
      text: t("contact.info.email"),
      href: `mailto:${t("contact.info.email")}`,
    },
    {
      icon: "fas fa-map-marker-alt",
      text: t("contact.info.location1"),
      href: "https://www.google.com/maps/search/Gym+Town+Niš",
    },
    {
      icon: "fas fa-map-marker-alt",
      text: t("contact.info.location2"),
      href: "https://www.google.com/maps/search/Gym+Town+2+Niš",
    },
    {
      icon: "fas fa-clock",
      text: t("contact.info.hours"),
    },
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className={styles.contactContent}>
          <div className={styles.imageContent}>
            <ImageCarousel
              images={gymTownImages}
              alt={t("contact.title")}
              autoPlay={true}
              autoPlayDelay={4000}
            />
          </div>

          <div className={styles.textContent}>
            <h2>{t("contact.title")}</h2>
            <p className="lead">{t("contact.lead")}</p>

            <div className={styles.contactInfo}>
              {contactInfo.map((info, index) => (
                <div key={index} className={styles.contactItem}>
                  <i className={info.icon} />
                  {info.href ? (
                    <a
                      href={info.href}
                      target={
                        info.href.startsWith("https://") ? "_blank" : undefined
                      }
                      rel={
                        info.href.startsWith("https://")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      {info.text}
                    </a>
                  ) : (
                    <span>{info.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
