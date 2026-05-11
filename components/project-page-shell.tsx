import { ProjectPageBehavior } from "@/components/project-page-behavior";
import { ReactNode } from "react";

type ProjectPageShellProps = {
  children: ReactNode;
};

export function ProjectPageShell({ children }: ProjectPageShellProps) {
  return (
    <>
      <ProjectPageBehavior />

      <header className="header">
        <div className="container">
          <a href="/" className="header-user" aria-label="На главную">
            <span className="breadcrumbs-avatar" aria-hidden="true">
              <img src="/images/avatar.png" alt="" />
            </span>
            <span>Дмитрий Васильев</span>
          </a>
          <a
            className="header-cta"
            href="https://t.me/d_vasilev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Связаться
          </a>
        </div>
      </header>

      <main className="main project-page">{children}</main>

      <footer className="footer">
        <div className="container">
          <p>
            © 2026 · Навайбкодено на Next.js + Tailwind + Motion ·{" "}
            <a href="https://t.me/d_vasilev">Telegram</a> ·{" "}
            <a href="mailto:dvasilevdesign@gmail.com">
              dvasilevdesign@gmail.com
            </a>{" "}
            ·
          </p>
        </div>
      </footer>
    </>
  );
}
