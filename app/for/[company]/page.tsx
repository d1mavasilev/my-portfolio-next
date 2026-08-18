import { FreeTimeGallery } from "@/components/free-time-gallery";
import { HeaderActions } from "@/components/header-actions";
import { HomeBehavior } from "@/components/home-behavior";
import { CasesIcon } from "@/components/icons/cases-icon";
import { ContactsIcon } from "@/components/icons/contacts-icon";
import { CvIcon } from "@/components/icons/cv-icon";
import { companies } from "../../companies";
import { Tag } from "@/components/tag";
import Link from "next/link";

export default async function CompanyPage({ params }: { params: Promise<{ company: string }> }) {
  const { company: companySlug } = await params;
    const slug = companySlug.toLowerCase();
    const company = companies[slug];

  const greeting = company ? (
    <>Привет, <span style={{ color: company.color }}>{company.displayName}!</span></>
  ) : (
    <>Привет!</>
  );

    const quickActions = [
    {
      href: "https://drive.google.com/file/d/1Yh6jngkaE25-WkQjsd-gOAa3X-blcK65/view?usp=sharing",
      label: "Резюме",
      icon: <CvIcon size={20} className="header-cta-icon-svg" aria-hidden="true" />,
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      href: "#cases",
      label: "Кейсы",
      icon: <CasesIcon size={20} className="header-cta-icon-svg" aria-hidden="true" />,
    },
    {
      href: "#contacts",
      label: "Контакты",
      icon: <ContactsIcon size={20} className="header-cta-icon-svg" aria-hidden="true" />,
    },
  ] as const;
  
  const freeTimePhotos = [
    {
      src: "/images/Freetime_1.png",
      alt: "Фото дизайнера",
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
    <div className="hero-card">
      <div className="intro-top fade-in">
        <div className="hero-image intro-avatar">
          <img src="/images/avatar.png" alt="Ваше фото" />
        </div>
        <p className="text-muted">Дмитрий Васильев</p>
      </div>

      <section className="intro fade-in">
        <h2>
              {greeting} Я продуктовый дизайнер с 3+ годами опыта в B2B и B2C. Проектирую продукты с большим объёмом данных и сложными сценариями
            </h2>
            <div className="tags" aria-label="Теги">
              <Tag>AI-продукты</Tag>
              <Tag>Аналитика и Дашборды</Tag>
              <Tag>Корпоративный софт</Tag>
              <Tag>Внутренние web-системы</Tag>
              <Tag>Личные кабинеты и формы</Tag>
            </div>
            <div className="header-actions" aria-label="Быстрые кнопки">
              {quickActions.map(({ icon, label, ...linkProps }) => (
                <a
                  key={label}
                  className="header-cta header-cta-secondary header-cta-with-icon header-cta-intro"
                  {...linkProps}
                >
                  {icon ? (
                    <span aria-hidden="true" className="header-cta-icon">
                      {icon}
                    </span>
                  ) : null}
                  <span className="header-cta-label">{label}</span>
                </a>
              ))}
            </div>
          </section>
          </div>

            <section className="approach card-section fade-in">
              <h2>Подход</h2>
              <p className="experience-description text-muted">
                Веду разработку продукта полным циклом от UX-исследований и гипотез, до релиза и последующей оптимизации. Дизайн-решения аргументирую через данные и бизнес-метрики. Развиваю дизайн-системы и описываю механики сценариев на языке понятном разработке и продакту.
              </p>
              <p className="experience-description text-muted">
                AI-инструменты встроены в мой ежедневный рабочий процесс для ускорения исследований и обобщения результатов, быстрого прототипирования, UX-текстов и креативов.
              </p>
            </section>

          <section className="experience card-section fade-in">
            <h2>Опыт</h2>
            <ul>
              <li>
                <h4 style={{ marginBottom: 'var(--spacing-xs)' }}>Андата · Product Designer</h4>
                <p style={{ marginBottom: 'var(--spacing-xs)' }}>
                Фев 2024 – Июнь 2026
              </p>
                <p className="experience-description text-muted">
                  B2B SaaS-платформа для оптимизации маркетинга (аналитика,
                  реклама, AI-инструменты).
                </p>
                <ul className="pl-5 space-y-1 text-muted" style={{ listStyleType: '"✦ "' }}>
                  <li>
                    Разработал с нуля MVP раздела AI-агентов: 82% среди 50 SMB-клиентов бета-теста, создали первого агента в первую неделю. Метрика легла в основу решения о релизе фичи.
                  </li>
                  <li>
                    Сократил время создания отчётов в 5.6 раза, вдвое снизил количество обращений в поддержку и освободил ресурс команды под другие задачи, проведя редизайн раздела аналитики.
                  </li>
                  <li>
                    Спроектировал новый раздел когортного анализа: 64% крупных клиентов создали 2+ когорты в первый месяц после релиза.
                  </li>
                  <li>
                    Снизил точки падения конверсии и повысил общее качество UX, оптимизировав продуктовый flow на основе юзабилити-тестирования, глубинных интервью и конкурентного анализа.
                  </li>
                  <li>
                    Повысил эффективность процессов и сократил время на типовые и новые задачи, за счет развития дизайн-системы. Добавил 10+ новых компонентов, описал документацию и паттерны, снизил количество правок перед продакшеном.
                  </li>
                </ul>
              </li>
              <li>
                
                <h4 style={{ marginBottom: 'var(--spacing-xs)' }}>Upjob · Product Designer</h4>
                <p style={{ marginBottom: 'var(--spacing-xs)' }}>
                Нояб 2022 – Янв 2024
              </p>
                <p className="experience-description text-muted">
                  Job-платформа для рынка Таиланда (MVP).
                </p>
                <ul className="pl-5 space-y-1 text-muted" style={{ listStyleType: '"✦ "' }}>
                  <li>
                    Спроектировал и запустил MVP job-платформы, устранив конфликтующую логику тестовой среды и подготовив продукт к тестированию на реальных пользователях.
                  </li>
                  <li>
                    Снизил барьер входа для аудитории с низкой цифровой грамотностью, упростив создание резюме и вакансий – сократил путь с 8–9 экранов до 4 шагов.
                  </li>
                  <li>
                    Внедрил базовый UI-kit и заложил основу для будущей дизайн-системы.
                  </li>
                </ul>
              </li>
            </ul>
          </section>

          <div id="about">
            <section className="cases">
              <h2
                id="cases"
                className="cases-heading cases-heading-home fade-in"
                style={{
                  padding: '0 clamp(var(--spacing-md), 5vw, var(--spacing-lg)) 0',
                }}
               >
               Кейсы
              </h2>
              <div className="case-list case-list-home">
                <article className="case-item case-item-home fade-in">
                  <a href="/cases/ai-agents" className="case-link">
                    <figure className="case-cover">
                      <img
                        src="/images/projects/Cover_agents.jpg"
                        alt="Превью кейса AI агентов"
                      />
                    </figure>
                    <div className="case-content case-content-home">
                      <h4 className="case-title">
                        Как спроектировал AI-агентов с нуля
                      </h4>
                      <p className="case-description">
                        Андата · 2024 – 2026
                      </p>
                    </div>
                  </a>
                </article>

                <article className="case-item case-item-home fade-in">
                  <a href="/cases/analytics" className="case-link">
                    <figure className="case-cover">
                      <img
                        src="/images/projects/Cover_analytics.jpg"
                        alt="Превью кейса аналитики"
                      />
                    </figure>
                    <div className="case-content case-content-home">
                      <h4 className="case-title">
                        Редизайн модуля аналитики и снижение нагрузки на команду в 2 раза
                      </h4>
                      <p className="case-description">
                        Андата · 2024 – 2026
                      </p>
                    </div>
                  </a>
                </article>

                <article className="case-item case-item-home fade-in">
                  <a href="/cases/visuals" className="case-link">
                    <figure className="case-cover">
                      <img
                        src="/images/projects/Cover_visuals.jpg"
                        alt="Превью UI-шотов и концептов"
                      />
                    </figure>
                    <div className="case-content case-content-home">
                      <h4 className="case-title">
                        UI-шоты и концепты
                      </h4>
                      <p className="case-description">
                        2025 – 2026
                      </p>
                    </div>
                  </a>
                </article>

                {/*
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
                </article>*/}
              </div>
            </section>

          <section className="skills card-section fade-in">
            <h2>Навыки</h2>
            <p>
              <strong>Экспертиза в UX и дизайне:</strong> <span className="text-muted">Дизайн-системы и UI-kit | Информационная архитектура | UX-исследования | User Flow | JTBD | Глубинные интервью | Юзабилити-тестирование | Вайрфреймы | Прототипы | A/B-тесты | Дизайн-ревью | Material 3 & HIG</span>
            </p>
            <p>
              <strong>Инструменты, ПО и технологии:</strong> <span className="text-muted">Figma (advanced: auto layout, variants, components, variables) | AI-инструменты, VS Code + Codex/Claude, для ускорения исследований и обобщения результатов, быстрого прототипирования, UX-текстов и креативов | HTML, CSS, JavaScript/React | Git | Jira | Notion | Miro</span>
            </p>
            <p>
              <strong>Документация:</strong> <span className="text-muted">описываю спецификации и механики сценариев на языке понятном разработке и продакту в Figma, Notion, Git и Confluence</span>
            </p>
          </section>

          <section className="free-time card-section fade-in">
            <h2>В свободное время</h2>
            <p className="experience-description text-muted">
              Путешествую - придумываю что-то необычное и захватывающее, снимаю
              стрит-фото, смотрю Формулу 1, увлекаюсь гастрономией и бегом. Читаю NNGroup, Medium,
              Телеграм Ozon Design, Dodo Mobile, Avito Tech. Учу английский
              (цель уровень B2+).
            </p>
            <FreeTimeGallery photos={freeTimePhotos} />
          </section>

          <section id="contacts" className="contacts project-cta fade-in">
            <div className="project-cta-card">
              <h2>Контакты</h2>
              <p className="project-cta-text">
                Открыт для вакансий продуктового дизайнера в сегментах B2B и B2C. Напишите в Telegram или на dvasilevdesign@gmail.com
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
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <p>
            © 2026 · Навайбкодил на Next.js + Tailwind + Motion ·{" "}
            <a href="https://t.me/d_vasilev" target="_blank" rel="noopener noreferrer">Telegram</a> · {" "}
            <a href="mailto:dvasilevdesign@gmail.com">
              dvasilevdesign@gmail.com
            </a>{" "}
          </p>
        </div>
      </footer>
    </>
  );
}

