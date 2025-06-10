import React from "react";
import { Navigation } from "./Navigation";
import styles from "./MobileMenu.module.css";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.mobileMenu}>
      <Navigation className={styles.mobileNav} onItemClick={onClose} />
    </div>
  );
};
