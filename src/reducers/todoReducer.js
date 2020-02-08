import actionTypes from "../actions/actionTypes";

const todos = [
    { id: '1', name: 'uno' },
    { id: '2', name: 'dos' },
];

function todoReducer(state = todos, action) {
    switch(action.type) {
        case actionTypes.TODO_ADD : {
            return applyAddTodo(state, action);
        }
        case actionTypes.TODO_TOGGLE : {
            return applyToggleTodo(state, action);
        }
        default : return state;
    }
}

function applyAddTodo(state, action) {
    const todo = Object.assign({}, action.todo, { completed: false });
    return state.concat(todo);
}

function applyToggleTodo(state, action) {
    return state.map(todo =>
        todo.id === action.todo.id
            ? Object.assign({}, todo, { completed: !todo.completed })
            : todo
    );
}

export default todoReducer;
