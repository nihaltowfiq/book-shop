import { booksData } from 'libs/database';
import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import { SingleBook } from './SingleBook';

export const Books: FC = () => {
	return (
		<Row>
			{booksData.map((el, i) => (
				<Col key={i} lg={4} md={6}>
					<SingleBook data={el} />
				</Col>
			))}
		</Row>
	);
};
