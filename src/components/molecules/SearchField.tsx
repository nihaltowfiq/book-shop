import { Button, ButtonProps, ButtonWrapper, FormGroup, FormInput, FormInputProps } from 'components/atoms';
import Icon, { search } from 'libs/icons';
import { FC } from 'react';
import styled from 'styled-components';

export const SearchField: FC<SearchFieldProps> = ({ className, onClick, ...rest }) => {
	return (
		<InputGroupWrapper className={className}>
			<Icon path={search} fill="#A9A9A9" width={26} height={26} />
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
			padding: 0.875rem;
			background-color: var(--light);
			padding-left: 3rem;
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
			font-size: 1.25rem;

			&::placeholder {
				color: #a9a9a9;
			}
		}
	}

	${ButtonWrapper} {
		width: 30%;
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
		border-left: none;
		padding: 0.875rem;
	}

	svg {
		position: absolute;
		top: 17px;
		left: 15px;
	}
`;
