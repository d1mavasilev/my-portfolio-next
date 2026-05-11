"use client";

import { useEffect } from "react";

import { setupImageLightbox } from "@/lib/setup-image-lightbox";

export function HomeBehavior() {
  useEffect(() => {
    const body = document.body;
    const heroImage = document.querySelector<HTMLElement>(".hero-image");
    const header = document.querySelector<HTMLElement>(".header");
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

    const syncHeaderState = () => {
      if (!heroImage) {
        return;
      }

      const headerHeight = header?.offsetHeight ?? 0;
      const rect = heroImage.getBoundingClientRect();
      const triggerPoint = headerHeight + 8;

      if (rect.top <= triggerPoint) {
        body.classList.add("avatar-in-header");
      } else {
        body.classList.remove("avatar-in-header");
      }
    };

    syncHeaderState();

    const handleScroll = () => {
      syncHeaderState();
    };

    const handleResize = () => {
      syncHeaderState();
    };

    const cleanupLightbox = setupImageLightbox();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    const anchorHandlers = Array.from(
      document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')
    ).map((anchor) => {
      const onClick = (event: Event) => {
        const targetSelector = anchor.getAttribute("href");
        if (!targetSelector) {
          return;
        }

        const target = document.querySelector<HTMLElement>(targetSelector);
        if (!target) {
          return;
        }

        event.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      };

      anchor.addEventListener("click", onClick);
      return { anchor, onClick };
    });

    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      anchorHandlers.forEach(({ anchor, onClick }) => {
        anchor.removeEventListener("click", onClick);
      });
      cleanupLightbox();
      body.classList.remove("avatar-in-header");
    };
  }, []);

  return null;
}
