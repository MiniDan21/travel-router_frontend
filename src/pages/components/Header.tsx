import React from 'react'

import { GoButton } from './Button'
import './css/header.css';

interface HeaderProps {
    leftChildren?: React.ReactNode;
    rightChildren?: React.ReactNode;
}

function Header({ leftChildren, rightChildren }: HeaderProps) {
    const hasLeft = React.Children.count(leftChildren) > 0;
    const hasRight = React.Children.count(rightChildren) > 0;

    return (
        <header className='header-tab'>
            {hasLeft && (
                <div className='header-left'>
                    <GoButton to='/' label='travel-router' img='icons/icon.png' />
                    <h2 className='h2-header'>Travel Router</h2>
                    {leftChildren}
                </div>
            )}
            {hasRight && (
                <div className='header-right'>
                    {rightChildren}
                </div>
            )}
        </header>
    );
}

export function WelcomeHeader() {
	return (
		<Header
            leftChildren={<>
            </>
            }
			rightChildren={<>
                <GoButton to='/signin' label='Войти' />
                <GoButton to='/signup' label='Регистрация' />
            </>}
		/>
	);
}

export function DefaultHeader() {
	return (
		<Header
            leftChildren={<>
            </>
            }
			rightChildren={<>
            </>}
		/>
	);
}