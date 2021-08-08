import { FC } from 'react';
import { Button, FormInput } from '../atoms';
import { SearchField } from '../molecules';
import { MainLayout } from './Layouts';

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
