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
    <nav className={`${styles.nav} ${className}`}>
      {navigationItems.map((item) => (
        <a
          key={item.id}
          href={item.href}
          className={`${styles.navLink} ${
            activeSection === item.id ? styles.active : ""
          }`}
          onClick={(e) => handleNavClick(e, item.id)}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
};
