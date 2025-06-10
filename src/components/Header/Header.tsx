import React, { useState } from "react";
import { Navigation } from "./Navigation";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import styles from "./Header.module.css";

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { y: scrollY } = useScrollPosition();

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const headerClasses = [styles.header, scrollY > 100 ? styles.scrolled : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={headerClasses} role="banner">
      <div className="container">
        <div className={styles.headerContent}>
          <Logo />
          <Navigation className={styles.desktopNav} />
          <div className={styles.headerActions}>
            <LanguageSwitcher />
            <button
              className={styles.mobileMenuBtn}
              onClick={handleMobileMenuToggle}
              aria-label={
                isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"
              }
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <i
                className={isMobileMenuOpen ? "fas fa-times" : "fas fa-bars"}
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />
      </div>
    </header>
  );
};
