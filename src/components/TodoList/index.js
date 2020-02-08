import React from 'react';
import TodoItem from '../TodoItem'

function TodoList({ todos }) {
    return (
        <ul>
            {todos.map(todo =>
                <li>
                    <TodoItem
                        key={todo.id}
                        todo={todo} />
                </li>
            )}
        </ul>
    );
}

export default TodoList;