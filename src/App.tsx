import { PrivateRoute } from 'components/organisms';
import { BookDetails, Home, Login, NotFound, Signup } from 'components/templates';
import { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const App: FC = () => (
	<Switch>
		<Redirect from="/home" to="/" />
		<Route exact path="/" component={Home} />
		<PrivateRoute path="/book/:bookId">
			<BookDetails />
		</PrivateRoute>
		<Route path="/login" component={Login} />
		<Route path="/signup" component={Signup} />
		<Route path="*" component={NotFound} />
	</Switch>
);

export default App;
