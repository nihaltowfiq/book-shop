import { FC } from 'react';
import styled from 'styled-components';

export const Footer: FC<PropsType> = ({ show }) => {
	if (show) {
		return (
			<Wrapper>
				<p className="mb-0">
					&copy; all rights reserved by{' '}
					<a href="https://github.com/nihaltowfiq" target="_blank" rel="noopener noreferrer">
						Nihal Towfiq
					</a>
				</p>
			</Wrapper>
		);
	}

	return null;
};

interface PropsType {
	show: boolean;
}

const Wrapper = styled.section`
	padding: 2rem 0;
	text-align: center;
`;
