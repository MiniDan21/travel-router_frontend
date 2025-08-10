// BigLogoSlide.tsx
import { useEffect, useRef, useState } from 'react';
import './css/biglogo.css';

function BigLogoSlide() {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const io = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    // Появился в зоне видимости → выезжаем
                    // Вышел из зоны видимости → заезжаем обратно
                    setVisible(entry.isIntersecting);
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.2
            }
        );

        io.observe(node);
        return () => io.disconnect();
    }, []);

    return (
        <section className="bls" aria-label="Большой логотип">
            <div ref={ref} className={`bls__logo-wrap ${visible ? 'is-visible' : ''}`}>
                <img
                    className="bls__logo"
                    src="/icons/icon.png"
                    alt="Логотип Travel Router"
                />
            </div>

            <div className="bls__content">
                <h3 className="bls__title">Оптимальные маршруты в один клик</h3>
                <p className="bls__text">
                    Смешивай виды транспорта, сравнивай стоимость и время — находи самый короткий путь по городу.
                </p>
            </div>
        </section>
    );
}

export default BigLogoSlide;
