import { LoginComponent } from 'components/organisms';
import { FC, FormEvent } from 'react';
import { useAuthCtx } from 'store';
import { MainLayout } from './Layouts';

export const Login: FC = () => {
	const { isSignIn, onSignin } = useAuthCtx();
	const handleSubmit = (e: FormEvent<HTMLInputElement>) => {
		e.preventDefault();

		onSignin();

		console.log('clicked');
	};
	console.log(isSignIn);

	return (
		<MainLayout isNav={false}>
			<LoginComponent onLogin={handleSubmit} />
		</MainLayout>
	);
};
