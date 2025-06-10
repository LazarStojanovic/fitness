import React, { useEffect } from "react";

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export const PerformanceOptimizer: React.FC = () => {
  useEffect(() => {
    // Preload critical images
    const criticalImages = [
      "/src/assets/landing-image.webp",
      "/src/assets/about-me-2-image.webp",
    ];

    criticalImages.forEach((src) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = src;
      document.head.appendChild(link);
    });

    // Lazy load non-critical resources
    const loadNonCriticalResources = () => {
      // Add Google Analytics
      if (
        typeof window.gtag === "undefined" &&
        process.env.NODE_ENV === "production"
      ) {
        const script = document.createElement("script");
        script.async = true;
        script.src =
          "https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID";
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        window.gtag = function (...args: any[]) {
          window.dataLayer.push(args);
        };
        window.gtag("js", new Date());
        window.gtag("config", "GA_MEASUREMENT_ID");
      }
    };

    // Load non-critical resources after page load
    if (document.readyState === "complete") {
      loadNonCriticalResources();
    } else {
      window.addEventListener("load", loadNonCriticalResources);
    }

    return () => {
      window.removeEventListener("load", loadNonCriticalResources);
    };
  }, []);

  return null;
};
