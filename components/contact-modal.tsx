"use client";

import { AnimatePresence, motion } from "motion/react";
import { ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { CopyCheckIcon } from "@/components/icons/copy-check-icon";
import { CopyIcon } from "@/components/icons/copy-icon";
import { CloseIcon } from "@/components/icons/close-icon";
import { TelegramIcon } from "@/components/icons/telegram-icon";

const email = "dvasilevdesign@gmail.com";

export function ContactModal({
  icon,
  className,
}: {
  icon: ReactNode;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches
  );
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const syncViewport = () => setIsMobile(mediaQuery.matches);
    syncViewport();
    mediaQuery.addEventListener("change", syncViewport);
    return () => mediaQuery.removeEventListener("change", syncViewport);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  useEffect(() => {
    if (!copied) return;
    const timeout = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <>
      <button
        type="button"
        className={className}
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
      >
        {icon}
        <span className="header-cta-label">Контакты</span>
      </button>

      {open && typeof document !== "undefined"
        ? createPortal(
            <AnimatePresence initial={false}>
              {open ? (
          <motion.div
            className="contact-modal-backdrop"
            role="presentation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.2, 0, 0, 1] }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setOpen(false);
            }}
          >
            <motion.div
              className="contact-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="contact-modal-title"
              initial={{ opacity: 0, y: isMobile ? "100%" : 16, scale: isMobile ? 1 : 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: isMobile ? "100%" : 8, scale: isMobile ? 1 : 0.99 }}
              transition={{ type: "spring", duration: isMobile ? 0.55 : 0.3, bounce: 0 }}
            >
              <button
                ref={closeButtonRef}
                type="button"
                className="contact-modal-close"
                onClick={() => setOpen(false)}
                aria-label="Закрыть окно контактов"
              >
                <CloseIcon size={24} aria-hidden="true" />
              </button>

              <h2>Контакты</h2>

              <div className="contact-modal-list">
                <div className="contact-modal-row">
                  <a
                  className="contact-modal-icon"
                  href="https://t.me/d_vasilev"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Открыть Telegram @d_vasilev"
                >
                  <TelegramIcon size={24} aria-hidden="true" />
                  </a>
                  <span className="contact-modal-copy">
                    <span className="contact-modal-label">Telegram</span>
                    <span className="contact-modal-value">@d_vasilev</span>
                  </span>
                </div>

                <div className="contact-modal-row">
                  <button
                  type="button"
                  className="contact-modal-icon contact-modal-copy-icon"
                  onClick={copyEmail}
                  aria-label={`Скопировать email ${email}`}
                >
                  <span className={`contact-icon-layer ${copied ? "is-hidden" : "is-visible"}`}>
                    <CopyIcon size={24} />
                  </span>
                  <span className={`contact-icon-layer ${copied ? "is-visible" : "is-hidden"}`}>
                    <CopyCheckIcon size={24} />
                  </span>
                  </button>
                  <span className="contact-modal-copy">
                    <span className="contact-modal-label">Email</span>
                    <span className="contact-modal-value">{email}</span>
                  </span>
                </div>
              </div>

              <a
                className="project-cta-btn contact-modal-telegram-cta"
                href="https://t.me/d_vasilev"
                target="_blank"
                rel="noopener noreferrer"
              >
                Написать в Telegram
              </a>
            </motion.div>
          </motion.div>
              ) : null}
            </AnimatePresence>,
            document.body
          )
        : null}
    </>
  );
}
