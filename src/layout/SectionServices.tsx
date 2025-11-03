import "../scss/StyleServices.scss"

interface Service {
    icon: JSX.Element;
    title: string;
    description: string;
}

const services: Service[] = [
  {
    icon: (
      <svg viewBox="-2 -1.5 28 28" fill="none" stroke="currentColor" color="white" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: 'Создание сайтов',
    description: 'Разрабатываем современные сайты под ключ — от лендингов до сложных веб-приложений',
  },
  {
    icon: (
      <svg viewBox="-2 -1.5 28 28" fill="none" stroke="currentColor" color="white" strokeWidth="2">
        <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'Адаптивная вёрстка',
    description: 'Чистая семантическая вёрстка, которая идеально отображается на всех устройствах',
  },
  {
    icon: (
      <svg viewBox="-2 -1.5 28 28" fill="none" stroke="currentColor" color="white" strokeWidth="2">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
    title: 'Telegram боты',
    description: 'Умные боты для автоматизации бизнеса, уведомлений и взаимодействия с клиентами',
  },
  {
    icon: (
      <svg viewBox="-2 -1.5 28 28" fill="none" stroke="currentColor" color="white" strokeWidth="2">
        <path d="M9.1 9.1a3 3 0 0 1 4.2 0l5 5a3 3 0 0 1 0 4.2M14.9 14.9a3 3 0 0 1-4.2 0l-5-5a3 3 0 0 1 0-4.2" />
        <line x1="4.9" y1="4.9" x2="19.1" y2="19.1" />
      </svg>
    ),
    title: 'Исправление ошибок',
    description: 'Диагностика и исправление багов в существующем коде, оптимизация производительности',
  },
  {
    icon: (
      <svg viewBox="-2 -1.5 28 28" fill="none" stroke="currentColor" color="white" strokeWidth="2">
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: 'Доработка сайтов',
    description: 'Добавление нового функционала, обновление дизайна и улучшение пользовательского опыта',
  },
  {
    icon: (
      <svg viewBox="-2 -1.5 28 28" fill="none" stroke="currentColor" color="white" strokeWidth="2">
        <path d="M3 15a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4z" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <line x1="8" y1="6" x2="16" y2="6" />
        <line x1="6" y1="2" x2="18" y2="2" />
      </svg>
    ),
    title: 'Техническая поддержка',
    description: 'Постоянное сопровождение и поддержка ваших digital-проектов',
  },
];

export default function SectionServices() {
    return (
        <section id="services" className="services">
            <div className="container">
                <div className="header">
                    <h2 className="title">Мои услуги</h2>
                    <p className="description">
                        Комплексные решения для развития вашего бизнеса в цифровой среде
                    </p>
                </div>

                <div className="grid">
                    {services.map((service, index) => (
                        <div key={index} className="card">
                            <div className="iconWrapper">{service.icon}</div>
                            <h3 className="cardTitle">{service.title}</h3>
                            <p className="cardDescription">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}