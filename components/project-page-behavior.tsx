"use client";

import { useEffect } from "react";

import { setupImageLightbox } from "@/lib/setup-image-lightbox";

export function ProjectPageBehavior() {
  useEffect(() => {
    const body = document.body;
    body.classList.add("avatar-in-header");

    const fadeElements = Array.from(
      document.querySelectorAll<HTMLElement>(".fade-in")
    );

    const revealElement = (element: Element) => {
      element.classList.add("visible");
    };

    const shouldRevealImmediately = (element: HTMLElement) => {
      const rect = element.getBoundingClientRect();
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;

      return rect.top < viewportHeight && rect.bottom > 0;
    };

    let observer: IntersectionObserver | null = null;

    if (typeof IntersectionObserver === "undefined") {
      fadeElements.forEach(revealElement);
    } else {
      const nextObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              revealElement(entry.target);
              nextObserver.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0,
          rootMargin: "0px 0px -8% 0px",
        }
      );
      observer = nextObserver;

      fadeElements.forEach((element) => {
        if (shouldRevealImmediately(element)) {
          revealElement(element);
          return;
        }

        nextObserver.observe(element);
      });
    }

    const cleanupLightbox = setupImageLightbox();

    return () => {
      observer?.disconnect();
      cleanupLightbox();
      document.body.style.overflow = "";
      body.classList.remove("avatar-in-header");
    };
  }, []);

  return null;
}
