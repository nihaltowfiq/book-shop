import styled, { css } from 'styled-components';
import { AvatarProps } from '.';
import { Image } from '../Image';

export const AvatarWrapper = styled(Image)<AvatarProps>`
	border-radius: 50%;
	position: relative;
	object-fit: cover;

	${({ size }) => {
		if (size === 'sm') {
			return css`
				width: 1.875rem;
				height: 1.875rem;
			`;
		} else if (size === 'md') {
			return css`
				width: 2.5rem;
				height: 2.5rem;
			`;
		} else if (size === 'lg') {
			return css`
				width: 5rem;
				height: 5rem;
			`;
		}
	}}
`;
