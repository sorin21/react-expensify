import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDasboard = () => {
  return (
    <div>
      Dashboard
    </div>
  );
};
const AddExpense = () => {
  return (
    <div>
      AddExpense
    </div>
  );
};
const Edit = () => {
  return (
    <div>
      Edit
    </div>
  );
};
const Help = () => {
  return (
    <div>
      Help
    </div>
  );
};
const NotFound = () => {
  return (
    <div>
      404 Error - <Link to="/">Go Home</Link>
    </div>
  );
};
const Header = () => {
  return <header>
      <h1>Expensify</h1>
      <NavLink to="/" activeClassName="is-active" exact>
        Go Home
      </NavLink>
      <NavLink to="/create" activeClassName="is-active">
        Create Expense
      </NavLink>
      <NavLink to="/edit" activeClassName="is-active">
        Edit
      </NavLink>
      <NavLink to="/help" activeClassName="is-active">
        Help
      </NavLink>
    </header>;
};

export default app;

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={ExpenseDasboard} />
        <Route path="/create" component={AddExpense} />
        <Route path="/edit" component={Edit} />
        <Route path="/help" component={Help} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
