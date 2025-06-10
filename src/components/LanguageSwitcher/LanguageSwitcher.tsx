import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import styles from "./LanguageSwitcher.module.css";

export const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: "en", name: t("language.english"), flag: "🇺🇸" },
    { code: "sr", name: t("language.serbian"), flag: "🇷🇸" },
  ];

  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.languageSwitcher} ref={dropdownRef}>
      <button
        className={styles.currentLanguage}
        onClick={toggleDropdown}
        aria-label="Change language"
      >
        <span className={styles.currentFlag}>{currentLanguage.flag}</span>
        <span className={styles.currentLangName}>{currentLanguage.name}</span>
        <i
          className={`fas fa-chevron-down ${styles.chevron} ${
            isOpen ? styles.open : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className={styles.languageDropdown}>
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`${styles.languageOption} ${
                i18n.language === language.code ? styles.active : ""
              }`}
            >
              <span className={styles.flag}>{language.flag}</span>
              <span>{language.name}</span>
              {i18n.language === language.code && (
                <i className={`fas fa-check ${styles.checkIcon}`} />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
