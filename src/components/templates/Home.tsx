import { SearchField } from 'components/molecules';
import { Books } from 'components/organisms';
import { FC } from 'react';
import { MainLayout } from './Layouts';

export const Home: FC = () => {
	return (
		<MainLayout>
			<div style={{ width: '35rem', margin: '3.5rem auto' }}>
				<SearchField placeholder="Search Book" />
			</div>
			<Books />
		</MainLayout>
	);
};
