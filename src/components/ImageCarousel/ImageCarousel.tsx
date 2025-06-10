import React, { useState, useEffect } from "react";
import styles from "./ImageCarousel.module.css";

interface ImageCarouselProps {
  images: string[];
  alt: string;
  autoPlay?: boolean;
  autoPlayDelay?: number;
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  alt,
  autoPlay = true,
  autoPlayDelay = 4000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;

    const interval = setInterval(() => {
      goToNext();
    }, autoPlayDelay);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayDelay, images.length, currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (images.length <= 1) return;

      switch (event.key) {
        case "ArrowLeft":
        case "ArrowUp":
          event.preventDefault();
          goToPrevious();
          break;
        case "ArrowRight":
        case "ArrowDown":
          event.preventDefault();
          goToNext();
          break;
        case "Home":
          event.preventDefault();
          goToSlide(0);
          break;
        case "End":
          event.preventDefault();
          goToSlide(images.length - 1);
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [images.length, currentIndex]);

  const goToPrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    setTimeout(() => {
      setCurrentIndex(
        currentIndex === 0 ? images.length - 1 : currentIndex - 1
      );
      setIsTransitioning(false);
    }, 150);
  };

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    setTimeout(() => {
      setCurrentIndex(
        currentIndex === images.length - 1 ? 0 : currentIndex + 1
      );
      setIsTransitioning(false);
    }, 150);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);

    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 150);
  };

  if (images.length === 0) return null;

  return (
    <div
      className={styles.carousel}
      role="region"
      aria-label={`Image carousel: ${alt}`}
      aria-live="polite"
    >
      <div className={styles.imageContainer}>
        <div
          className={styles.imageWrapper}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
          role="group"
          aria-label={`Image ${currentIndex + 1} of ${images.length}`}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${alt} ${index + 1} of ${images.length}`}
              className={styles.carouselImage}
              loading="lazy"
              aria-hidden={index !== currentIndex}
              tabIndex={index === currentIndex ? 0 : -1}
            />
          ))}
        </div>

        {images.length > 1 && (
          <>
            <button
              className={`${styles.navButton} ${styles.prevButton}`}
              onClick={goToPrevious}
              disabled={isTransitioning}
              aria-label={`Previous image (currently showing ${
                currentIndex + 1
              } of ${images.length})`}
            >
              <i className="fas fa-chevron-left" aria-hidden="true" />
            </button>

            <button
              className={`${styles.navButton} ${styles.nextButton}`}
              onClick={goToNext}
              disabled={isTransitioning}
              aria-label={`Next image (currently showing ${
                currentIndex + 1
              } of ${images.length})`}
            >
              <i className="fas fa-chevron-right" aria-hidden="true" />
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div
          className={styles.indicators}
          role="tablist"
          aria-label="Carousel navigation"
        >
          {images.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${
                index === currentIndex ? styles.active : ""
              }`}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              role="tab"
              aria-selected={index === currentIndex}
              aria-label={`Go to image ${index + 1} of ${images.length}`}
              tabIndex={index === currentIndex ? 0 : -1}
            />
          ))}
        </div>
      )}
    </div>
  );
};
