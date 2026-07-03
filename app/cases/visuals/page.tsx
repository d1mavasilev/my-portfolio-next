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
            Визуалы и UI-концепты · 2025 - 2026
          </p>
        </div>

        <section className="project-intro fade-in">
          <h1>Визуалы и UI-концепты</h1>
          <h3 className="subtitle">
            Здесь тренирую UI, насмотренность, руки и немного выхожу за рамки задач
          </h3>
          <ProjectImage
            src="/images/projects/uishot_alfa.png"
            alt="Уведомление от AI-ассистента Банка и выдача рекомендаций"
            caption="Уведомление от AI-ассистента Банка и выдача рекомендаций"
          />
          <ProjectImage
            src="/images/projects/uishot_s7.png"
            alt="Посадочный талон на рейс S7 Airlines"
            caption="Посадочный талон на рейс S7 Airlines"
          />
          <ProjectImage
            src="/images/projects/uishot_podpisnye.png"
            alt="Приложение для книжного магазина Подписные издания"
            caption="Приложение для книжного магазина Подписные издания"
          />
        </section>

        <ProjectCTA />
      </div>
    </ProjectPageShell>
  );
}
