import { BookDetailsComponent } from 'components/organisms';
import { booksData } from 'libs/database';
import { FC } from 'react';
import { useParams } from 'react-router';
import { MainLayout } from '.';

export const BookDetails: FC = () => {
	const { bookID } = useParams<{ bookID: string }>();
	const data = booksData.find(({ id }) => id === parseInt(bookID));

	if (data) {
		return (
			<MainLayout>
				<BookDetailsComponent data={data} />
			</MainLayout>
		);
	}

	return (
		<MainLayout>
			<div>
				<h5 className="mt-5 text-center text-warning">Data not found</h5>
			</div>
		</MainLayout>
	);
};
