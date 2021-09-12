import { FC, Fragment } from 'react';
import { Container } from 'react-bootstrap';
import { Footer, Header } from '../../organisms';

export const MainLayout: FC<PropsType> = ({ isNav, isFooter, children }) => {
	return (
		<Fragment>
			<header>
				<Header isNav={isNav} />
			</header>
			<main style={{ minHeight: 'calc(100vh - 148px)' }}>
				<Container>{children}</Container>
			</main>
			<Footer show={isFooter} />
		</Fragment>
	);
};

interface PropsType {
	isNav?: boolean;
	isFooter?: boolean;
}

MainLayout.defaultProps = {
	isNav: true,
	isFooter: true,
};
