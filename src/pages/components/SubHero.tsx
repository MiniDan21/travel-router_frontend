// SubHero.tsx
import { GoButton } from './Button';
import './css/subhero.css';

export function SubHero() {
    return (
        <section className="sub-hero" aria-labelledby="subhero-title">
            <div className="sub-hero__content">
                <h2 id="subhero-title" className="sub-hero__title">
                    Построение кратчайших маршрутов по городу
                </h2>
                <p className="sub-hero__subtitle">
                    Рассчитай время и стоимость поездки с любым типом перемещения: пешком, авто, такси, общественный транспорт, самокат — комбинируй как удобно.
                </p>
                <div className="sub-hero__actions">
                    <GoButton to="/plan" label="Начать расчёт" />
                    <GoButton to="/routes" label="Маршруты" />
                </div>
            </div>

            <div className="sub-hero__logo-wrap">
                <img
                    className="sub-hero__logo"
                    src="/logo.png"
                    alt="Логотип приложения маршрутов"
                />
            </div>
        </section>
    );
}
