"use client";

import type { CSSProperties } from "react";
import { motion } from "motion/react";

type FreeTimePhoto = {
  src: string;
  alt: string;
  position: string;
  rotation: number;
  delay: number;
  offsetY?: number;
};

type FreeTimeGalleryProps = {
  photos: FreeTimePhoto[];
};

export function FreeTimeGallery({ photos }: FreeTimeGalleryProps) {
  return (
    <div
      className="free-time-gallery"
      aria-label="Галерея фотографий из свободного времени"
    >
      {photos.map((photo, index) => (
        <motion.figure
          key={`${photo.alt}-${index}`}
          className="project-image free-time-shot fade-in"
          style={
            {
              "--free-time-delay": `${photo.delay}ms`,
              marginTop: `${photo.offsetY ?? 0}px`,
            } as CSSProperties
          }
          initial={false}
          whileTap={{
            rotate: 0,
            scale: 1.1,
            zIndex: 100,
          }}
          whileHover={{
            rotate: 0,
            scale: 1.1,
            zIndex: 100,
          }}
          transition={{
            type: "spring",
            stiffness: 900,
            damping: 15,
            mass: 0.5,
          }}
          animate={{
            rotate: photo.rotation,
            scale: 1,
            zIndex: 1,
          }}
        >
          <img
            src={photo.src}
            alt={photo.alt}
            style={{ objectPosition: photo.position }}
          />
        </motion.figure>
      ))}
    </div>
  );
}
