import { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Home, NotFound } from './components/templates';

const App: FC = () => {
	return (
		<Switch>
			<Redirect from="/home" to="/" />
			<Route exact path="/" component={Home} />
			<Route path="*" component={NotFound} />
		</Switch>
	);
};

export default App;
