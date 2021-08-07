import styled from 'styled-components';
import { CardProps } from '.';

export const CardWrapper = styled.div<CardProps>`
	width: 100%;
	display: block;
	padding: 1rem;
	background-color: var(--white);
	border: 1px solid var(--border);
	border-radius: ${({ pill }) => (pill ? '50rem' : '0.625rem')};
`;

export const CardHeader = styled.div`
	display: block;
	padding: 0 1rem 1rem 1rem;
	margin: 0 -1rem 1rem -1rem;
	border-bottom: 1px solid var(--border);
`;

export const CardFooter = styled.div`
	display: block;
	padding: 1rem 1rem 0 1rem;
	margin: 0 -1rem 0 -1rem;
	border-top: 1px solid var(--border);
`;
