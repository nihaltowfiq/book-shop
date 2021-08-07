import styled, { css } from 'styled-components';
import { ButtonProps } from '.';
import { getThemeColor } from '../utils';

export const ButtonWrapper = styled.button<ButtonProps>`
	text-align: center;
	border: 1px solid transparent;
	padding: 0.5rem 0.75rem;

	${({ block }) => {
		if (block) {
			return css`
				width: 100%;
				display: block;
			`;
		} else {
			return css`
				display: inline-block;
			`;
		}
	}};

	${({ variant }) => {
		return css`
			color: var(--white);
			border-color: ${getThemeColor(variant)};
			background-color: ${getThemeColor(variant)};

			&:hover {
				opacity: 0.95;
			}
			&:focus {
				outline: none;
				border-color: ${getThemeColor(variant)};
				box-shadow: 0 0 0 0.2rem rgba(105, 70, 244, 0.25);
			}
		`;
	}}

	border-radius: ${({ pill }) => (pill ? '50rem' : '0.25rem')};

	&:hover {
		opacity: 0.95;
	}
	&:disabled {
		opacity: 0.65;
		cursor: not-allowed;
	}

	transition: border 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
`;
