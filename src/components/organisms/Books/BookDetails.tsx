import { Card, Image } from 'components/atoms';
import { booksData } from 'libs/database';
import { FC } from 'react';
import styled from 'styled-components';

export const BookDetails: FC<PropsType> = ({ data }) => {
	const { name, author, image, price } = data;

	return (
		<Wrapper>
			<Card className="d-flex">
				<Image src={image} />
				<div>
					<p>{name}</p>
					<p>{author}</p>
					<h5>{price}</h5>
				</div>
			</Card>
		</Wrapper>
	);
};

interface PropsType {
	data: typeof booksData[0];
}

const Wrapper = styled.div`
	img {
		height: 10rem;
	}
`;
