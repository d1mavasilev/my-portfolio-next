import { CONTACT_URL, CV_URL } from "@/lib/site"

export function HeaderActions() {
  return (
    <div className="header-actions">
      <a
        className="header-cta header-cta-secondary"
        href={CV_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        CV
      </a>
      <a
        className="header-cta"
        href={CONTACT_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        Связаться
      </a>
    </div>
  )
}
