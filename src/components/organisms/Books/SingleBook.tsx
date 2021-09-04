import { Button, Card, Image } from 'components/atoms';
import { booksData } from 'libs/database';
import { FC } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';

export const SingleBook: FC<PropsType> = ({ data }) => {
	const history = useHistory();
	const { id, name, author, image, price } = data;

	return (
		<Wrapper>
			<div className="ImageArea">
				<Image src={image} />
			</div>
			<h5>{name}</h5>
			<p>{author}</p>
			<div className="Action">
				<h3>${price}</h3>
				<Button onClick={() => history.push(`/book/${id}`)}>Buy Now</Button>
			</div>
		</Wrapper>
	);
};

interface PropsType {
	data: typeof booksData[0];
}

const Wrapper = styled(Card)`
	margin-bottom: 1rem;
	box-shadow: 0 0 10px #f1f1f1;

	h5 {
		font-size: 1.35rem;
		font-weight: 700;
		margin-bottom: 0.25rem;
	}
	p {
		font-size: 14px;
		color: var(--secondary);
		margin-bottom: 0.25rem;
	}

	.ImageArea {
		padding: 1.65rem 1.75rem;
		margin-bottom: 0.5rem;
		text-align: center;
		background-color: #f1f1f1;
		border-radius: 1.25rem;

		img {
			width: 14.375rem;
			height: 18.75rem;
		}
	}

	.Action {
		display: flex;
		justify-content: space-between;
		align-items: center;

		h3 {
			color: var(--primary);
			font-size: 2.25rem;
			font-weight: 700;
		}
		button {
			min-width: 8.75rem;
			min-height: 3.125rem;
			border-radius: 0.675rem;
		}
	}
`;
