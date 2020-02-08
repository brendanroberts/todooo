import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import TodoList from "../../../TodoList";

class Index extends Component {

    render() {
        return (
            <Fragment>
                <Link to="/todos/new">new</Link>
                <TodoList/>
            </Fragment>
        );
    }
}

export default Index;