/* eslint-disable indent */
import styled, { css } from 'styled-components';
import { FormUploadProps } from '.';

interface IFormControl extends FormUploadProps {
	isInvalid?: boolean;
}

export const FormGroup = styled.div`
	display: block;
	margin-bottom: 1rem;
	cursor: pointer;

	.SelectText {
		color: var(--primary);
		font-weight: 500;
		margin-bottom: 0;
		text-align: center;

		&:hover {
			text-decoration: underline;
		}
	}
`;

export const FormLabel = styled.label<Pick<FormUploadProps, 'srOnly' | 'required'>>`
	display: inline-block;
	margin-bottom: 0.25rem;
	${({ srOnly }) => {
		if (srOnly) {
			return css`
				position: absolute;
				width: 1px;
				height: 1px;
				padding: 0;
				overflow: hidden;
				clip: rect(0, 0, 0, 0);
				white-space: nowrap;
				-webkit-clip-path: inset(50%);
				clip-path: inset(50%);
				border: 0;
			`;
		}
	}}

	&:after {
		${({ required }) => {
			if (required) {
				return css`
					content: ' *';
					color: var(--danger);
				`;
			}
		}}
	}
`;

export const DropImage = styled.div<Pick<IFormControl, 'isInvalid'>>`
	min-height: 10rem;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	background-color: ${({ isInvalid }) => (isInvalid ? 'rgba(220, 53, 69, 0.1)' : 'var(--light)')};
`;

export const FormControl = styled.input`
	display: none;
`;

export const FormFeedback = styled.p`
	color: var(--danger);
	margin-bottom: 0;
	text-align: left;
`;
