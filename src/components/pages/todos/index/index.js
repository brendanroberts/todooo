import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import TodoList from "../../../TodoList";


const todos = [
    { id: '1', name: 'uno' },
    { id: '2', name: 'dos' },
];

class Index extends Component {

    render() {
        return (
            <Fragment>
                <Link to="/todos/new">new</Link>
                <TodoList todos={todos} />
            </Fragment>
        );
    }
}

export default Index;