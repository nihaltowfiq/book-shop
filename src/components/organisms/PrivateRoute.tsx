import { FC } from 'react';
import { Redirect, Route, RouteProps } from 'react-router';
import { useAuthCtx } from 'store';

export const PrivateRoute: FC<RouteProps> = ({ children, ...rest }) => {
	const { isSignIn } = useAuthCtx();

	return (
		<Route
			{...rest}
			render={({ location }) =>
				isSignIn ? children : <Redirect to={{ pathname: '/login', state: { from: location } }} />
			}
		/>
	);
};
