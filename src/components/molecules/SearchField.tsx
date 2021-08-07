import { FC } from 'react';
import styled from 'styled-components';
import Icon, { search } from '../../libs/icons';
import { Button, ButtonProps, FormInput, FormInputProps } from '../atoms';
import { ButtonWrapper } from '../atoms/Button/styles';
import { FormGroup } from '../atoms/FormInput/styles';

export const SearchField: FC<SearchFieldProps> = ({ className, onClick, ...rest }) => {
	return (
		<InputGroupWrapper className={className}>
			<Icon path={search} fill="#757575" width={26} height={26} />
			<FormInput srOnly {...rest} />
			<Button onClick={onClick}>Search</Button>
		</InputGroupWrapper>
	);
};

type SearchFieldProps = Omit<FormInputProps, 'onClick'> & Pick<ButtonProps, 'onClick'>;

const InputGroupWrapper = styled.div`
	display: flex;
	width: 100%;
	position: relative;
	margin-bottom: 1rem;

	${FormGroup} {
		width: 70%;
		margin-bottom: 0;

		input {
			padding: 1rem;
			background-color: var(--light);
			padding-left: 2.6rem;
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
			font-size: 1.25rem;
		}
	}

	${ButtonWrapper} {
		width: 30%;
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
		border-left: none;
		padding: 1rem;
	}

	svg {
		position: absolute;
		top: 19px;
		left: 10px;
	}
`;
