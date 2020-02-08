import React from 'react';
import {
    Switch,
    Redirect,
    Route,
} from 'react-router-dom';
import Index from './components/pages/todos/index'
import NewTodo from './components/pages/todos/new'

const Routes = () => (
    <Switch>
        <Route path="/todos/new">
            <NewTodo/>
        </Route>
        <Route path="/todos">
            <Index/>
        </Route>
        <Route path="/">
            <Redirect to="/todos"/>
        </Route>
    </Switch>
);

export default Routes;