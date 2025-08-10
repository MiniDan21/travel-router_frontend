import { useNavigate } from 'react-router-dom';

import './css/button.css'


interface GoButtonProps {
    to: string;
    label: string;
    img?: string
}

export function GoButton({ to, label, img}: GoButtonProps) {
    const navigate = useNavigate();

    function handleClick() {
        navigate(to);
    }

    return (
        <button onClick={handleClick} className={img ? 'icon-button' : 'button-styled'}>
            {img ? (
                <img
                    src={img}
                    alt={label}
                    className='icon-image'
                />
            ) : <span className='span-styled'>{label}</span>}
        </button>
    );
}
