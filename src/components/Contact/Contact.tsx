import React from "react";
import { useTranslation } from "react-i18next";
import type { SocialLink } from "../../types";
import { ImageCarousel } from "../ImageCarousel/ImageCarousel";
import styles from "./Contact.module.css";
import gymTownEntrance from "../../assets/gym-town-2-entrence.webp";
import gymTownBarbells from "../../assets/gym-town-2-barbels.webp";
import gymTownStepper from "../../assets/gym-town-2-stepper.webp";
import gymTownLounge from "../../assets/gym-town-2-lonuge.webp";
import gymTown2 from "../../assets/gym-townn-2.webp";

const socialLinks: SocialLink[] = [
  { icon: "fab fa-instagram", href: "#", label: "Instagram" },
  { icon: "fab fa-facebook", href: "#", label: "Facebook" },
  { icon: "fab fa-youtube", href: "#", label: "YouTube" },
  { icon: "fab fa-tiktok", href: "#", label: "TikTok" },
];

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

            <div className={styles.socialLinks}>
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={styles.socialLink}
                  aria-label={link.label}
                >
                  <i className={link.icon} />
                </a>
              ))}
            </div>

            <button className="btn btn-primary">{t("contact.cta")}</button>
          </div>
        </div>
      </div>
    </section>
  );
};
