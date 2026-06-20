import { FreeTimeGallery } from "@/components/free-time-gallery";
import { HeaderActions } from "@/components/header-actions";
import { HomeBehavior } from "@/components/home-behavior";
import Link from "next/link";

export default function Home() {
  const freeTimePhotos = [
    {
      src: "/images/Freetime_1.png",
      alt: "Фотография дизайнера",
      position: "50% 50%",
      rotation: -4,
      delay: 0,
      offsetY: 0,
    },
    {
      src: "/images/Freetime_2.png",
      alt: "Вулканы и извержения",
      position: "18% 40%",
      rotation: 0,
      delay: 60,
      offsetY: 0,
    },
    {
      src: "/images/Freetime_3.png",
      alt: "Пробежки",
      position: "82% 38%",
      rotation: +4,
      delay: 120,
      offsetY: 0,
    },
  ];

  return (
    <>
      <HomeBehavior />

      <header className="header">
        <div className="container">
          <Link href="/" className="header-user" aria-label="На главную">
            <span className="breadcrumbs-avatar" aria-hidden="true">
              <img src="/images/avatar.png" alt="" />
            </span>
            <span>Дмитрий Васильев</span>
          </Link>
          <HeaderActions />
        </div>
      </header>

      <main className="main">
        <div className="container">
          <div className="hero-image fade-in">
            <img src="/images/avatar.png" alt="Ваше фото" />
          </div>

          <section className="intro fade-in">
            <h1>Дмитрий Васильев</h1>
            <h2 className="subtitle">
              Привет! Я продуктовый дизайнер с 3+ годами опыта в B2B SaaS. Специализируюсь на сложных аналитических интерфейсах, дашбордах, AI-продуктах, и на переводе бизнес-задач в конкретные UX-решения.
            </h2>
            <p className="description">
              <a href="#cases">Кейсы</a> ·{" "}
              <a href="https://drive.google.com/file/d/1Yh6jngkaE25-WkQjsd-gOAa3X-blcK65/view?usp=sharing" target="_blank" rel="noopener noreferrer">CV</a> · {" "}
              <a href="https://t.me/d_vasilev" target="_blank" rel="noopener noreferrer">Telegram</a> · {" "}
              <a href="mailto:dvasilevdesign@gmail.com" target="_blank" rel="noopener noreferrer">dvasilevdesign@gmail.com</a>
            </p>
          </section>

            <section className="approach fade-in">
              <h2>Подход</h2>
              <p>
                Проектирую с фокусом на измеримый результат: понимаю, как фича влияет на воронку и нагрузку на поддержку. Веду проекты от UX-исследований до релиза: провожу интервью, создаю прототипы, презентую решения. Детально прорабатываю сценарии от основного flow до corner cases, что сокращает правки и ускоряет разработку.
              </p>
              <p>
                Сейчас меня интересуют продукты, где дизайн напрямую влияет на ключевые метрики и карьерный рост в команде, где есть культура исследований и пространство для системной работы.
              </p>
            </section>

          <section className="experience fade-in">
            <h2>Опыт</h2>
            <ul>
              <li>
                <strong>Андата · Product Designer</strong> · Фев 2024 – Июнь 2026
                <p className="experience-description text-muted">
                  B2B SaaS-платформа для оптимизации маркетинга (аналитика,
                  реклама, AI-инструменты).
                </p>
                <ul className="pl-5 space-y-1 text-muted" style={{ listStyleType: '"✦ "' }}>
                  <li>
                    Спроектировал раздел AI-агентов с нуля. Adoption rate составил 82% среди участников бета-теста (50 SMB-клиентов) - пользователи создали первого агента, в первую неделю самостоятельно, без онбординга.
                  </li>
                  <li>
                    Пересобрал модуль аналитики. Количество запросов в поддержку на кастомные отчёты снизилось в 2 раза, время настройки отчёта сократилось с 45 до 8 минут
                  </li>
                  <li>
                    Запустил когортный анализ. 64% крупных клиентов создали 2 и более когорты в первый месяц после релиза без обучения и онбординга
                  </li>
                  <li>
                    Провёл юзабилити-тестирование, глубинные интервью и конкурентный анализ - спроектировал продуктовый flow, упростив логику и снизив точки падения конверсии
                  </li>
                  <li>
                    Расширил дизайн-систему. Добавил 10 новых компонентов, описал паттерны и поддерживал UI-kit, сократив время на типовые задачи проектирования
                  </li>
                </ul>
              </li>
              <li>
                <strong>Upjob · Product Designer</strong> · Нояб 2022 – Янв 2024
                <p className="experience-description text-muted">
                  Job-платформа для рынка Таиланда (MVP).
                </p>
                <ul className="pl-5 space-y-1 text-muted" style={{ listStyleType: '"✦ "' }}>
                  <li>
                    Собрал MVP, от стенда с конфликтующей логикой до продукта готового к тесту на реальных пользователях
                  </li>
                  <li>
                    Упростил создание резюме и вакансий: сократил путь с 8–9 экранов до 4 шагов, снизив барьер входа для аудитории с низкой цифровой грамотностью
                  </li>
                  <li>
                    Внедрил базовый UI-kit и заложил основу для будущей дизайн-системы
                  </li>
                </ul>
              </li>
            </ul>
          </section>

          <div id="about">
            <section className="cases">
              <h2 id="cases" className="cases-heading fade-in">
                Кейсы
              </h2>
              <div className="case-list">
                <article className="case-item fade-in">
                  <a href="/cases/ai-agents" className="case-link">
                    <figure className="case-cover">
                      <img
                        src="/images/projects/Cover_agents.png"
                        alt="Превью кейса AI агентов"
                      />
                    </figure>
                    <h4 className="case-title">
                      Как я спроектировал AI-агентов с нуля
                    </h4>
                    <p className="case-description">
                      Андата · 2024 – 2026
                    </p>
                  </a>
                </article>

                <article className="case-item fade-in">
                  <a href="/cases/analytics" className="case-link">
                    <figure className="case-cover">
                      <img
                        src="/images/projects/Cover_analytics.png"
                        alt="Превью кейса аналитики"
                      />
                    </figure>
                    <h4 className="case-title">
                      Пересборка модуля аналитики и снижение нагрузки на команду
                      в 2 раза
                    </h4>
                    <p className="case-description">
                      Андата · 2024 – 2026
                    </p>
                  </a>
                </article>

                <article className="case-item fade-in">
                  <a href="/cases/upjob" className="case-link">
                    <figure className="case-cover">
                      <img
                        src="/images/projects/Cover_upjob.png"
                        alt="Превью кейса Upjob"
                      />
                    </figure>
                    <h4 className="case-title">
                      Подготовка MVP job-сервиса к запуску
                    </h4>
                    <p className="case-description">
                      Upjob · 2022 – 2024
                    </p>
                  </a>
                </article>
              </div>
            </section>

          <section className="skills fade-in">
            <h2>Навыки</h2>
            <p>
              <strong>Экспертиза в UX и дизайне:</strong> <span className="text-muted">Продуктовое мышление · Информационная архитектура · UX исследования · User Flow · User Story Mapping · Card Sorting · Информационная архитектура · JTBD · CJM · Глубинные интервью · Юзабилити-тестирование · Вайрфреймы · Прототипирование · Дизайн-системы · A/B-тесты · Дизайн ревью</span>
            </p>
            <p>
              <strong>Инструменты, ПО и технологии:</strong> <span className="text-muted">Figma (advanced: auto layout, variants, components, variables) · AI-инструменты, VS Code + Codex/Claude, для ускорения ресерча, прототипирования, UX-текстов и креативов · Protopie · Jira · Notion · Miro · HTML/CSS · Material 3 & HIG</span>
            </p>
            <p>
              <strong>Документация:</strong> <span className="text-muted">описываю спецификации и механики сценариев на языке понятном разработке и продакту в Figma, Notion, Git и Confluence</span>
            </p>
          </section>

          <section className="free-time fade-in">
            <h2>В свободное время</h2>
            <p>
              Путешествую - придумываю что-то необычное и захватывающее, снимаю
              стрит-фото, увлекаюсь гастрономией и бегом. Читаю NNGroup, Medium,
              Телеграм Ozon Design, Dodo Mobile, Avito Tech. Учу английский
              (цель уровень B2+).
            </p>
            <FreeTimeGallery photos={freeTimePhotos} />
          </section>

          <section className="contacts fade-in">
            <h2>Контакты</h2>
            <p>
              Давайте работать вместе! Напишите мне, с удовольствием отвечу и обсудим, как могу помочь вам и вашему проекту.{" "}
              <a href="https://t.me/d_vasilev" target="_blank" rel="noopener noreferrer">Telegram</a>,{" "}
              <a href="mailto:dvasilevdesign@gmail.com">
                dvasilevdesign@gmail.com
              </a>
            </p>
          </section>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <p>
            © 2026 · Навайбкодено на Next.js + Tailwind + Motion ·{" "}
            <a href="https://t.me/d_vasilev" target="_blank" rel="noopener noreferrer">Telegram</a> · {" "}
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
