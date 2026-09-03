import FaultyTerminal from "@/components/FaultyTerminal";

export function ProjectCTA() {
  return (
    <section className="project-cta fade-in">
      <div className="project-cta-card">
        <FaultyTerminal className="project-cta-background" tint="#d7d7d7" gridMul={[2, 1.2]} digitSize={1.8} scanlineIntensity={0.22} noiseAmp={0.7} mouseReact={true} pageLoadAnimation={false} fit="cover" />
        <h2>Хотите обсудить кейс или поработать вместе?</h2>
        <p className="project-cta-text">
          Открыт для вакансий продуктового дизайнера в сегментах B2B и B2C. Напишите в Telegram или на dvasilevdesign@gmail.com
        </p>
        <div className="project-cta-actions">
          <a
            className="project-cta-btn primary project-cta-btn-lg"
            href="https://t.me/d_vasilev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Написать в Telegram
          </a>
        </div>
      </div>
    </section>
  )
}
