// SignUp.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthLayout } from './components/AuthLayout';
import './components/css/auth.css';

function validateEmail(value: string) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function SignUp() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirm, setConfirm] = useState('');
	const [agree, setAgree] = useState(true);
	const [showPassword, setShowPassword] = useState(false);
	const [errors, setErrors] = useState<{ name?: string; email?: string; password?: string; confirm?: string; agree?: string }>({});

	function onSubmit(e: React.FormEvent) {
		e.preventDefault();
		const nextErrors: typeof errors = {};
		if (name.trim().length < 2) nextErrors.name = 'Минимум 2 символа';
		if (!validateEmail(email)) nextErrors.email = 'Введите корректный e-mail';
		if (password.length < 6) nextErrors.password = 'Минимум 6 символов';
		if (confirm !== password) nextErrors.confirm = 'Пароли не совпадают';
		if (!agree) nextErrors.agree = 'Необходимо согласиться с условиями';
		setErrors(nextErrors);
		if (Object.keys(nextErrors).length > 0) return;

		// здесь ваш вызов API регистрации
		console.log({ name, email, password, agree });
		alert('Регистрация выполнена (демо). Подключите API.');
	}

	return (
		<AuthLayout
			title="Регистрация в Travel Router"
			subtitle="Создай аккаунт и планируй поездки умнее."
		>
			<form className="auth__form" onSubmit={onSubmit} noValidate>
				<label className="auth__field">
					<span className="auth__label">Имя</span>
					<input
						type="text"
						className={`auth__input${errors.name ? ' is-error' : ''}`}
						placeholder="Иван"
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
						minLength={2}
					/>
					{errors.name && <span className="auth__error">{errors.name}</span>}
				</label>

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
							autoComplete="new-password"
							className={`auth__input auth__input--password${errors.password ? ' is-error' : ''}`}
							placeholder="Придумайте пароль"
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

				<label className="auth__field">
					<span className="auth__label">Повторите пароль</span>
					<input
						type={showPassword ? 'text' : 'password'}
						autoComplete="new-password"
						className={`auth__input${errors.confirm ? ' is-error' : ''}`}
						placeholder="Ещё раз пароль"
						value={confirm}
						onChange={(e) => setConfirm(e.target.value)}
						required
						minLength={6}
					/>
					{errors.confirm && <span className="auth__error">{errors.confirm}</span>}
				</label>

				<label className="auth__checkbox">
					<input
						type="checkbox"
						checked={agree}
						onChange={(e) => setAgree(e.target.checked)}
					/>
					<span>Соглашаюсь с условиями использования и политикой конфиденциальности</span>
				</label>
				{errors.agree && <span className="auth__error">{errors.agree}</span>}

				<button type="submit" className="auth__submit">Создать аккаунт</button>

				<p className="auth__switch">
					Уже есть аккаунт? <Link to="/signin" className="auth__link">Войти</Link>
				</p>
			</form>
		</AuthLayout>
	);
}
