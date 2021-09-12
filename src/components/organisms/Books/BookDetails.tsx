import { Button, Card, Image } from 'components/atoms';
import { booksData } from 'libs/database';
import { FC } from 'react';
import styled from 'styled-components';

export const BookDetails: FC<PropsType> = ({ data }) => {
	const { name, author, image, price, description } = data;

	return (
		<Wrapper>
			<Card className="d-flex align-items-center justify-content-center">
				<div className="ImgContainer">
					<Image fluid src={image} />
				</div>
				<div className="Info">
					<h4 className="title">{name}</h4>
					<p className="author">
						by <span>{author}</span>
					</p>
					<h5 className="oldPrice">$500</h5>
					<h5 className="price">${price}</h5>
					<p className="stock">
						Stock: <span>50 copies available</span>
					</p>
					<Button block className="addToCart">
						Add to Cart
					</Button>
					<Button variant="light">Add to Booklist</Button>
				</div>
			</Card>
			<h5 className="Summary">
				<span>Summary:</span> {description}{' '}
			</h5>
		</Wrapper>
	);
};

interface PropsType {
	data: typeof booksData[0];
}

const Wrapper = styled.div`
	padding-top: 2.5rem;

	.ImgContainer {
		width: 18.75rem;
		border: 1px solid #e6e6e6;

		img {
			padding: 2rem;
		}
	}

	.Info {
		padding-left: 3rem;

		.title {
			font-weight: 700;
		}
		.author {
			font-size: 0.875rem;

			span {
				color: #b8b5b5;
			}
		}
		.oldPrice {
			color: var(--secondary);
			margin-bottom: 0;
			font-size: 1.5rem;
			text-decoration: line-through;
		}
		.price {
			color: var(--primary);
			font-size: 2.5rem;
			font-weight: 700;
		}
		.stock {
			span {
				color: var(--success);
			}
		}
		.addToCart {
			margin-bottom: 1rem;
			padding: 0.75rem;
			border-radius: 3px;
		}
	}

	.Summary {
		font-size: 0.875rem;
		color: var(--secondary);

		span {
			color: var(--primary);
			font-size: 1rem;
		}
	}
`;
