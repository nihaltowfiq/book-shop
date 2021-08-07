import styled, { css } from 'styled-components';
import { ImageProps } from '.';
import { getThemeColor } from '../utils';
import { radius } from '../variables';

export const ImgWrapper = styled.img<ImageProps>`
	${({ fluid }) => {
		if (fluid) {
			return css`
				width: 100%;
				height: auto;
			`;
		}
	}}
	${({ rounded, roundedCircle }) => {
		if (rounded || roundedCircle) {
			return css`
				border-radius: ${rounded ? radius.sm : radius.circle};
			`;
		}
	}}
	${({ thumbnail }) => {
		if (thumbnail) {
			return css`
				padding: 0.25rem;
				background-color: ${getThemeColor('white')};
				border: 1px solid ${getThemeColor('border')};
			`;
		}
	}}
`;
