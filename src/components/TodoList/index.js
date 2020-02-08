import React from 'react';
import {connect} from 'react-redux';
import TodoListItem from '../TodoListItem'

function TodoList({todos}) {
    return (
        <ul>
            {todos.map(todo =>
                <TodoListItem
                    key={todo.id}
                    todo={todo}/>
            )}
        </ul>
    );
}

function mapStateToProps(state) {
    return {
        todos: state.todoState,
    };
}

export default connect(mapStateToProps)(TodoList);