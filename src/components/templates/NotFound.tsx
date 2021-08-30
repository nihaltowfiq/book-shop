import { Image } from 'components/atoms';
import { FC } from 'react';
import styled from 'styled-components';
import { MainLayout } from './Layouts';
export const NotFound: FC = () => {
	return (
		<MainLayout>
			<Wrapper>
				<Image src="/images/404.png" />
				<h3 className="text-danger">sorry, page not found!</h3>
			</Wrapper>
		</MainLayout>
	);
};

const Wrapper = styled.div`
	text-align: center;
	padding: 1rem;

	img {
		width: 400px;
		height: 400px;
	}
`;
