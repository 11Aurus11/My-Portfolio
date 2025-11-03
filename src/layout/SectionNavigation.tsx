import "../scss/StyleNavigation.scss"

export default function SectionNavigation() {

    return (
        <section className="navigation">
            <div className="container">
                <div className="logo">
                    <h1>Моё портфолио</h1>
                </div>

                <nav className="nav">
                    <a href="">Главная</a>
                    <a href="">Услуги</a>
                    <a href="">Портфолио</a>
                    <a href="">Контакты</a>
                </nav>
            </div>
        </section>
    )
}