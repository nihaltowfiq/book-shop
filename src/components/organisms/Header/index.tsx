import { FC } from 'react';
import { Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header: FC<PropsType> = ({ isNav }) => {
    return (
        <Container>
            <NavBar>
                <div className="Logo">
                    <Link
                        to="/"
                        style={{ color: 'var(--dark)', textDecoration: 'none' }}
                    >
                        <h4 className="mb-0 font-weight-bold">BOOK SHOP</h4>
                    </Link>
                </div>

                {isNav && (
                    <Navigation>
                        <li>
                            <NavLink exact to="/" activeClassName="active">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/something">Something</NavLink>
                        </li>
                    </Navigation>
                )}
            </NavBar>
        </Container>
    );
};

interface PropsType {
    isNav: boolean;
}

const NavBar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;
    padding: 1rem 0;
`;

const Navigation = styled.ul`
    margin: 0;
    padding: 0;

    li {
        list-style-type: none;
        display: inline-block;
        margin-right: 1rem;

        &:last-child {
            margin-right: 0;
        }
        a {
            color: var(--dark);
            text-decoration: none;
            font-weight: 700;
            padding: 0.5rem;
        }
        .active {
            border-bottom: 2px solid var(--primary);
        }
    }
`;