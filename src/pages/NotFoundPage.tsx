import { Link } from 'react-router-dom';
import './components/css/notfound.css';

export default function NotFoundPage() {
    return (
        <section className="notfound">
            <div className="notfound__content">
                <h1 className="notfound__title">404</h1>
                <p className="notfound__text">
                    Упс! Такой страницы не существует или она была перемещена.
                </p>
                <div className="notfound__actions">
                    <Link to="/" className="notfound__btn">На главную</Link>
                    <Link to="/signin" className="notfound__btn notfound__btn--secondary">Войти</Link>
                </div>
            </div>
        </section>
    );
}
