import React from "react";
import { useTranslation } from "react-i18next";
import { useSmoothScroll } from "../../hooks/useSmoothScroll";
import styles from "./Pricing.module.css";

export const Pricing: React.FC = () => {
  const { t } = useTranslation();
  const { scrollToElement } = useSmoothScroll();

  const handleContactClick = () => {
    scrollToElement("contact");
  };

  const pricingPlans = [
    {
      id: "starter",
      title: t("pricing.plans.starter.title"),
      price: t("pricing.plans.starter.price"),
      period: t("pricing.plans.starter.period"),
      features: [
        t("pricing.plans.starter.features.sessions"),
        t("pricing.plans.starter.features.workout"),
        t("pricing.plans.starter.features.nutrition"),
        t("pricing.plans.starter.features.videos"),
        t("pricing.plans.starter.features.tracking"),
        t("pricing.plans.starter.features.technique"),
        t("pricing.plans.starter.features.support"),
      ],
      buttonText: t("navigation.contact"),
    },
    {
      id: "transformation",
      title: t("pricing.plans.transformation.title"),
      price: t("pricing.plans.transformation.price"),
      period: t("pricing.plans.transformation.period"),
      features: [
        t("pricing.plans.transformation.features.sessions"),
        t("pricing.plans.transformation.features.workout"),
        t("pricing.plans.transformation.features.nutrition"),
        t("pricing.plans.transformation.features.videos"),
        t("pricing.plans.transformation.features.tracking"),
        t("pricing.plans.transformation.features.technique"),
        t("pricing.plans.transformation.features.support"),
      ],
      buttonText: t("navigation.contact"),
      featured: true,
      popular: true,
    },
    {
      id: "elite",
      title: t("pricing.plans.elite.title"),
      price: t("pricing.plans.elite.price"),
      period: t("pricing.plans.elite.period"),
      features: [
        t("pricing.plans.elite.features.sessions"),
        t("pricing.plans.elite.features.note"),
        t("pricing.plans.elite.features.contact"),
      ],
      buttonText: t("navigation.contact"),
    },
  ];

  return (
    <section id="pricing" className="section">
      <div className="container">
        <div className={styles.pricingContent}>
          <h2>{t("pricing.title")}</h2>
          <p className="lead">{t("pricing.lead")}</p>

          <div className={styles.pricingCards}>
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`${styles.pricingCard} ${
                  plan.featured ? styles.featured : ""
                }`}
              >
                {plan.popular && (
                  <div className={styles.popular}>
                    {t("pricing.mostPopular")}
                  </div>
                )}

                <h4>{plan.title}</h4>
                <div className={styles.price}>
                  {plan.price}
                  <span> {plan.period}</span>
                </div>

                <ul className={styles.features}>
                  {plan.features.map((feature, index) => (
                    <li key={index}>
                      <i className="fas fa-check" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={`btn ${
                    plan.featured ? "btn-secondary" : "btn-primary"
                  } ${styles.planBtn}`}
                  onClick={handleContactClick}
                >
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>

          <p className={styles.afterPayment}>{t("pricing.afterPayment")}</p>
        </div>
      </div>
    </section>
  );
};
