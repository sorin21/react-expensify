import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } 
from 'react-router-dom';
import AddExpense from '../components/AddExpense';
import Edit from '../components/Edit';
import ExpenseDasboard from '../components/ExpenseDasboard';
import Header from '../components/Header';
import Help from '../components/Help';
import NotFound from '../components/NotFound';


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={ExpenseDasboard} />
        <Route path="/create" component={AddExpense} />
        <Route path="/edit/:id" component={Edit} />
        <Route path="/help" component={Help} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;