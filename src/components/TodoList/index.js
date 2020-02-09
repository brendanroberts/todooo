import React from 'react';
import {connect} from 'react-redux';
import TodoListItem from '../TodoListItem'
import { List } from 'semantic-ui-react'
import './styles.css';

function TodoList({todos}) {
    return (
        todos.length > 0
            ? <List>
            {todos.map(todo =>
                <TodoListItem
                    key={todo.id}
                    todo={todo}/>
            )}
        </List>
            : <h2 className={"TodoList__h2"}>Create a new TODO to get started</h2>
    );
}

function mapStateToProps(state) {
    return {
        todos: state.todoState,
    };
}

export default connect(mapStateToProps)(TodoList);