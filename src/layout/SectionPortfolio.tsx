import "../scss/StylePortfolio.scss";
// Импортируем изображения
import TgBotImage from "../assets/Tg-bot.png";
import PortfolioImage from "../assets/Portfolio.png";

interface Project {
    title: string;
    category: string;
    image: string;
    tags: string[];
}

const projects: Project[] = [
  {
    title: 'Тг-бот для маркетплейсов',
    category: 'Телеграмм боты',
    image: TgBotImage, // Используем импортированную переменную
    tags: ['Telegraf.js', 'Node.js', 'SQLite'],
  },
  {
    title: 'Портфолио сайт',
    category: 'Дизайн + Разработка',
    image: PortfolioImage, // Используем импортированную переменную
    tags: ['TypeScript', 'ReactJS', 'Figma'],
  },
];

export default function SectionPortfolio() {
    return (
        <section id="portfolio" className="portfolio">
            <div className="container">
                <div className="header">
                    <h2 className="title">Мои работы</h2>
                    <p className="description">
                        Проекты, которыми я горжусь
                    </p>
                </div>

                <div className="grid">
                    {projects.map((project, index) => (
                        <div key={index} className="cards">
                            <div className="imageWrapper">
                                <img src={project.image} alt={project.title}/>
                                <div className="overlay" />
                            </div>
                            <div className="content">
                                <p className="category">{project.category}</p>
                                <h3 className="projectTitle">{project.title}</h3>
                                <div className="tagsContainer">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="tag">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}