import React from "react";
import { useTranslation } from "react-i18next";
import { useSmoothScroll } from "../../hooks/useSmoothScroll";
import { useActiveSection } from "../../hooks/useActiveSection";
import type { NavigationItem } from "../../types";
import styles from "./Navigation.module.css";

interface NavigationProps {
  className?: string;
  onItemClick?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  className = "",
  onItemClick,
}) => {
  const { t } = useTranslation();
  const { scrollToElement } = useSmoothScroll();
  const activeSection = useActiveSection([
    "about",
    "collaboration",
    "pricing",
    "contact",
  ]);

  const navigationItems: NavigationItem[] = [
    { id: "about", label: t("navigation.aboutMe"), href: "#about" },
    {
      id: "collaboration",
      label: t("navigation.collaboration"),
      href: "#collaboration",
    },
    { id: "pricing", label: t("navigation.planPriceList"), href: "#pricing" },
    { id: "contact", label: t("navigation.contact"), href: "#contact" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    scrollToElement(sectionId);
    onItemClick?.();
  };

  return (
    <nav
      className={`${styles.nav} ${className}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <ul className={styles.navList}>
        {navigationItems.map((item) => (
          <li key={item.id} className={styles.navItem}>
            <a
              href={item.href}
              className={`${styles.navLink} ${
                activeSection === item.id ? styles.active : ""
              }`}
              onClick={(e) => handleNavClick(e, item.id)}
              aria-current={activeSection === item.id ? "page" : undefined}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
