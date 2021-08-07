import { FC } from 'react';
import styled from 'styled-components';
import { FormControl, FormInput, FormInputProps } from '../atoms';

export const BorderlessInput: FC<FormInputProps> = ({ ...rest }) => {
	return <BorderlessInputWrapper {...rest} />;
};

const BorderlessInputWrapper = styled(FormInput)<FormInputProps>`
	${FormControl} {
		padding: 0;
		border-top: none;
		border-left: none;
		border-right: none;
		border-radius: 0;

		&:focus {
			box-shadow: none;
			border-color: var(--primary);
		}
	}
`;
