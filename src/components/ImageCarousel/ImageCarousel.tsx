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
    <div className={styles.carousel}>
      <div className={styles.imageContainer}>
        <div
          className={styles.imageWrapper}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${alt} ${index + 1}`}
              className={styles.carouselImage}
              loading="lazy"
            />
          ))}
        </div>

        {images.length > 1 && (
          <>
            <button
              className={`${styles.navButton} ${styles.prevButton}`}
              onClick={goToPrevious}
              disabled={isTransitioning}
              aria-label="Previous image"
            >
              <i className="fas fa-chevron-left" />
            </button>

            <button
              className={`${styles.navButton} ${styles.nextButton}`}
              onClick={goToNext}
              disabled={isTransitioning}
              aria-label="Next image"
            >
              <i className="fas fa-chevron-right" />
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className={styles.indicators}>
          {images.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${
                index === currentIndex ? styles.active : ""
              }`}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
