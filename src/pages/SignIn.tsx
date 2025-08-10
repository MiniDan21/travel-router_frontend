// SignIn.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthLayout } from './components/AuthLayout';
import './components/css/auth.css';

function validateEmail(value: string) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function SignIn() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [remember, setRemember] = useState(true);
	const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

	function onSubmit(e: React.FormEvent) {
		e.preventDefault();
		const nextErrors: typeof errors = {};
		if (!validateEmail(email)) nextErrors.email = 'Введите корректный e-mail';
		if (password.length < 6) nextErrors.password = 'Минимум 6 символов';
		setErrors(nextErrors);
		if (Object.keys(nextErrors).length > 0) return;

		// здесь ваш вызов API авторизации
		console.log({ email, password, remember });
		alert('Вход выполнен (демо). Подключите API.');
	}

	return (
		<AuthLayout
			title="Вход в Travel Router"
			subtitle="Построй кратчайший маршрут и посчитай стоимость любой поездки по городу."
		>
			<form className="auth__form" onSubmit={onSubmit} noValidate>
				<label className="auth__field">
					<span className="auth__label">E-mail</span>
					<input
						type="email"
						inputMode="email"
						autoComplete="email"
						className={`auth__input${errors.email ? ' is-error' : ''}`}
						placeholder="you@example.com"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
					{errors.email && <span className="auth__error">{errors.email}</span>}
				</label>

				<label className="auth__field">
					<span className="auth__label">Пароль</span>
					<div className="auth__input-wrap">
						<input
							type={showPassword ? 'text' : 'password'}
							autoComplete="current-password"
							className={`auth__input auth__input--password${errors.password ? ' is-error' : ''}`}
							placeholder="Ваш пароль"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
							minLength={6}
						/>
						<button
							type="button"
							className="auth__toggle"
							onClick={() => setShowPassword((v) => !v)}
							aria-label={showPassword ? 'Скрыть пароль' : 'Показать пароль'}
						>
							{showPassword ? 'Скрыть' : 'Показать'}
						</button>
					</div>
					{errors.password && <span className="auth__error">{errors.password}</span>}
				</label>

				<label className="auth__checkbox">
					<input
						type="checkbox"
						checked={remember}
						onChange={(e) => setRemember(e.target.checked)}
					/>
					<span>Запомнить меня</span>
				</label>

				<button type="submit" className="auth__submit">Войти</button>

				<p className="auth__switch">
					Нет аккаунта? <Link to="/signup" className="auth__link">Зарегистрироваться</Link>
				</p>
			</form>
		</AuthLayout>
	);
}
