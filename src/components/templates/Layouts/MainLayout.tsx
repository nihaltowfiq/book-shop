import { FC, Fragment } from 'react';
import { Container } from 'react-bootstrap';
import { Footer, Header } from '../../organisms';

export const MainLayout: FC<PropsType> = ({
    isNav = true,
    isFooter = true,
    children,
}) => {
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
