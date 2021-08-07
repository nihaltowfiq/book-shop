import { FC } from 'react';
import { Button, FormInput } from '../components/atoms';
import { SearchField } from '../components/molecules';
import { MainLayout } from '../components/templates';

export const Home: FC = () => {
	return (
		<MainLayout>
			<Button>Something</Button>

			<br />

			<FormInput srOnly placeholder="Form Input" />

			<SearchField placeholder="Search Book" />
		</MainLayout>
	);
};
