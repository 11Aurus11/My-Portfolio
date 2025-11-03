import "../scss/StyleHeader.scss"

export default function SectionHeader() {

    return (
        <header id="home" className="hero">
            <div className="container">
                <div className="grid">
                    <div className="content">
                        <h1 className="title">
                            Разрабатываю. Воплощаю. Запускаю.
                        </h1>
                        <p className="description">
                            Я беру вашу идею и превращаю её в красивый и работающий продукт.
                        </p>
                    </div>
                    <div className="buttons">
                        <button className="primaryButton" >
                            Начать проект
                        </button>
                        <button className="secondaryButton">
                            Мои работы
                        </button>
                    </div>
                </div>

                <div className="imageWrapper">
                    <div className="imageContainer">
                        <img
                            
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}