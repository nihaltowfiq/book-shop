import { Button } from 'components/atoms';
import { BorderlessInput } from 'components/molecules';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Login: FC = () => {
	return (
		<AuthWrapper>
			<AuthForm>
				<h5 className="Title">Login</h5>
				<BorderlessInput srOnly placeholder="Username or Email" />
				<BorderlessInput srOnly placeholder="Password" />
				{/* <div className="d-flex justify-content-between align-items-center">
					<FormCheck rounded type="checkbox" label="Remember Me" />
                    FORGOT PASSWORD 
				</div> */}
				<Button block type="submit" className="mb-3">
					Login
				</Button>
				<p className="Signup_Path">
					Don`t have an account? <Link to="/signup">Create an account</Link>
				</p>
			</AuthForm>
		</AuthWrapper>
	);
};

export const AuthWrapper = styled.div`
	min-height: calc(100vh - 60px - 88px);
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const AuthForm = styled.form`
	width: 30rem;
	padding: 2.5rem;
	border: 1px solid var(--secondary);
	border-radius: 5px;

	.Title {
		margin-bottom: 1.5rem;
		font-weight: 600;
	}
	.Signup_Path {
		font-size: 14px;
		text-align: center;
		margin-bottom: 0;
	}
	input::placeholder {
		color: var(--dark);
	}
`;
