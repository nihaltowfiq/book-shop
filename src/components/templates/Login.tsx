import { LoginComponent } from 'components/organisms';
import { FC } from 'react';
import { MainLayout } from './Layouts';

export const Login: FC = () => {
	return (
		<MainLayout isNav={false}>
			<LoginComponent />
		</MainLayout>
	);
};
