import "../scss/StyleContact.scss"

export default function SectionContact() {

    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="header">
                    <h2 className="title">Свяжитесь со мной</h2>
                    <p className="description">
                        Готовы обсудить ваш проект? Напишите мне!
                    </p>
                </div>
                <div className="grid">
                <form className="form">
                    <div className="formGroup">
                        <label htmlFor="name">Имя</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Ваше имя"
                            // value={formData.name}
                            // onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                        />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                            // value={formData.email}
                            // onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                        />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="message">Сообщение</label>
                        <textarea
                            id="message"
                            placeholder="Расскажите о вашем проекте..."
                            // value={formData.message}
                            // onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            required
                        />
                    </div>
                    <button type="submit" className="submitButton">Отправить сообщение</button>
                </form>
                <div className="contactInfo">
                    <div className="infoCard">
                        <h3>Контактная информация</h3>
                        <div className="infoItem">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                            <div className="infoContent">
                                <p>Email</p>
                                <p>raxit354@gmail.com</p>
                            </div>
                        </div>
                        <div className="infoItem">              
                            <svg width="800px" height="800px" viewBox="1.45 1.4 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 8L5 12.5L9.5 14M18 8L9.5 14M18 8L14 18.5L9.5 14" stroke="#ffffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#ffffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <div className="infoContent">
                                <p>Тг</p>
                                <p>@Z00nnn</p>
                            </div>
                        </div>
                        <div className="infoItem">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                            <div className="infoContent">
                                <p>Адрес</p>
                                <p>Казань, Россия</p>
                                </div>
                            </div>
                        </div>
                        <div className="scheduleCard">
                            <h3>Время работы</h3>
                            <p>Понедельник - Пятница: 9:00 - 18:00</p>
                            <p>Суббота - Воскресенье: Выходной</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}