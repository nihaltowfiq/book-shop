import { SignupComponent } from 'components/organisms';
import { FC } from 'react';
import { MainLayout } from './Layouts';

export const Signup: FC = () => {
	return (
		<MainLayout isNav={false}>
			<SignupComponent />
		</MainLayout>
	);
};
