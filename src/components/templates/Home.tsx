import { Button, FormInput } from 'components/atoms';
import { SearchField } from 'components/molecules';
import { FC } from 'react';
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
