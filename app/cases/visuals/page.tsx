import { CaseNavigation } from "@/components/case-navigation";
import { ProjectCTA } from "@/components/project-cta";
import { ProjectImage } from "@/components/project-image";
import { ProjectPageShell } from "@/components/project-page-shell";

export default function VisualsPage() {
  return (
    <ProjectPageShell>
      <div className="container">
        <div>
          <p className="project-meta">
            UI-шоты и концепты · 2025 - 2026
          </p>
        </div>

        <section className="project-intro fade-in">
          <h1>UI-шоты и концепты</h1>
          <h3 className="subtitle">
            Здесь тренирую UI, насмотренность, руки и выхожу за рамки задач
          </h3>
          <ProjectImage
            src="/images/projects/uishot_messenger_desktop.jpg"
            alt="AI-summarization непрочитанных сообщений в корпоративном мессенджере"
            caption="AI-summarization непрочитанных сообщений в корпоративном мессенджере"
          />
          <ProjectImage
            src="/images/projects/uishot_messenger_mobile.jpg"
            alt="AI-summarization непрочитанных сообщений в корпоративном мессенджере"
          />
          <ProjectImage
            src="/images/projects/uishot_alfa.jpg"
            alt="Уведомление от AI-ассистента Банка и выдача рекомендаций"
            caption="Уведомление от AI-ассистента Банка и выдача рекомендаций"
          />
          <ProjectImage
            src="/images/projects/uishot_s7.jpg"
            alt="Посадочный талон на рейс S7 Airlines"
            caption="Посадочный талон на рейс S7 Airlines"
          />
          <ProjectImage
            src="/images/projects/uishot_portals.jpg"
            alt="Путешествия по параллельным мирам"
            caption="Путешествия по параллельным мирам"
          />
          <ProjectImage
            src="/images/projects/uishot_podpisnye.jpg"
            alt="Приложение для книжного магазина Подписные издания"
            caption="Приложение для книжного магазина Подписные издания"
          />
        </section>

        <ProjectCTA />
      </div>
    </ProjectPageShell>
  );
}
