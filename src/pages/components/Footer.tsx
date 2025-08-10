import './css/footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__section">
                    <h4 className="footer__title">Контакты</h4>
                    <ul className="footer__list">
                        <li>Email: <a href="mailto:info@travelrouter.com">info@travelrouter.com</a></li>
                        <li>Телефон: <a href="tel:+79990000000">+7 (999) 000-00-00</a></li>
                        <li>Адрес: Москва, ул. Маршрутная, 15</li>
                    </ul>
                </div>

                <div className="footer__section">
                    <h4 className="footer__title">Соцсети</h4>
                    <ul className="footer__list">
                        <li><a href="#">VK</a></li>
                        <li><a href="#">Telegram</a></li>
                        <li><a href="#">Instagram</a></li>
                    </ul>
                </div>

                <div className="footer__section">
                    <h4 className="footer__title">О проекте</h4>
                    <p className="footer__text">
                        Travel Router — сервис для построения кратчайших маршрутов по городу с учётом любых видов транспорта и расчётом стоимости поездки.
                    </p>
                </div>
            </div>

            <div className="footer__bottom">
                &copy; {new Date().getFullYear()} Travel Router. Все права защищены.
            </div>
        </footer>
    );
}

export default Footer;
