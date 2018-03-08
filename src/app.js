import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
	<div>
		This is from my ExpenseDashboardPage component
	</div>
)

const AddExpensePage = () => (
	<div>
		This is from my AddExpensePage component
	</div>
)

const EditExpensePage = () => (
	<div>
		This is from my EditExpensePage component
	</div>
)

const HelpPage = () => (
	<div>
		This is from my HelpPage component
	</div>
)

const NotFoundPage = () => (
	<div>
		404! - <Link to="/">Go Home</Link>
	</div>
)

const Header = () => (
	<header>
		<h1>Expensify</h1>
		<NavLink to="/" activeClassName="is-active" exact={true}>Go Home Page</NavLink>
		<br />
		<NavLink to="/create" activeClassName="is-active">Go Create Page</NavLink>
		<br />
		<NavLink to="/edit" activeClassName="is-active">Go Edit Page</NavLink>
		<br />
		<NavLink to="/help" activeClassName="is-active">Go Help Page</NavLink>
		{/*<Link to="/">Go Home Page</Link>
		<br />
		<Link to="/create">Go Create Page</Link>
		<br />
		<Link to="/edit">Go Edit Page</Link>
		<br />
		<Link to="/help">Go Help Page</Link>*/}
	</header>
)

const routs = (
	<BrowserRouter>
		<div>
			<Header />
			<Switch>
				<Route path="/" component={ExpenseDashboardPage} exact={true} />
				<Route path="/create" component={AddExpensePage} />
				<Route path="/edit" component={EditExpensePage} />
				<Route path="/help" component={HelpPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>	
	</BrowserRouter>
);

ReactDOM.render(routs, document.getElementById('app'));