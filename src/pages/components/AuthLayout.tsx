import './css/auth.css';
import { DefaultHeader } from './Header';

interface AuthLayoutProps {
	title: string;
	subtitle?: string;
	children: React.ReactNode;
}

export function AuthLayout({ title, subtitle, children }: AuthLayoutProps) {
	return <>
		<DefaultHeader />
		<section className="auth">
			<div className="auth__card">
				<h1 className="auth__title">{title}</h1>
				{subtitle && <p className="auth__subtitle">{subtitle}</p>}
				{children}
			</div>
		</section>
		
	</>
}
