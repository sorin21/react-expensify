import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } 
  from 'react-router-dom';

const HeaderPage = () => (
  <header>
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
  </header>
);

export default HeaderPage;