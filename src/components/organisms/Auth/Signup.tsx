import { Button } from 'components/atoms';
import { BorderlessInput } from 'components/molecules';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { AuthForm, AuthWrapper } from './Login';

export const Signup: FC = () => {
	return (
		<AuthWrapper>
			<AuthForm>
				<h5 className="Title">Signup</h5>
				<BorderlessInput srOnly placeholder="Name" />
				<BorderlessInput srOnly placeholder="Username or Email" />
				<BorderlessInput srOnly placeholder="Password" />
				<BorderlessInput srOnly placeholder="Confirm Password" />
				<Button block type="submit" className="mb-3">
					Create an account
				</Button>
				<p className="Signup_Path">
					Already have an account? <Link to="/login">Login</Link>
				</p>
			</AuthForm>
		</AuthWrapper>
	);
};
