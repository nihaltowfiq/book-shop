import { BookDetailsComponent } from 'components/organisms';
import { booksData } from 'libs/database';
import { FC } from 'react';
import { useParams } from 'react-router';
import { MainLayout } from '.';

export const BookDetails: FC = () => {
	const { bookId } = useParams<{ bookId: string }>();
	const data = booksData.find(({ id }) => id === parseInt(bookId));

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
				<h5 className="pt-5 text-center text-warning">Data not found</h5>
			</div>
		</MainLayout>
	);
};
