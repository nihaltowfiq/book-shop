import { booksData } from 'libs/database';
import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import { SingleBook } from './SingleBook';

export const Books: FC = () => {
	return (
		<Row>
			{booksData.map((el, i) => (
				<Col key={i} md={4}>
					<SingleBook data={el} />
				</Col>
			))}
		</Row>
	);
};
