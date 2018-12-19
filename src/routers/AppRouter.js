import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import ExpenseDashboard from '../components/ExpenseDashboard'
import AddExpense from '../components/AddExpense'
import EditExpense from '../components/EditExpense'
import Help from '../components/Help'
import NotFound from '../components/NotFound'
import LoginPage from '../components/LoginPage'
import createHistory from 'history/createBrowserHistory'
import PrivateRoute from './PrivateRoute'

export const history = createHistory()

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <PrivateRoute path="/dashboard" component={ExpenseDashboard} />
        <PrivateRoute path="/create" component={AddExpense} />
        <PrivateRoute path="/edit/:id" component={EditExpense} />
        <Route path="/help" component={Help} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
)

export default AppRouter