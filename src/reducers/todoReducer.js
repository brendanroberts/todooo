import actionTypes from "../actions/actionTypes";

function todoReducer(state = [], action) {
    switch(action.type) {
        case actionTypes.TODO_ADD : {
            return applyAddTodo(state, action);
        }
        case actionTypes.TODO_EDIT : {
            return applyEditTodo(state, action);
        }
        case actionTypes.TODO_DELETE : {
            return applyDeleteTodo(state, action);
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

function applyEditTodo(state, action) {
    return state.map(todo =>
        todo.id === action.todo.id
            ? action.todo
            : todo
    );
}

function applyDeleteTodo(state, action) {
    return state.filter(todo => todo.id !== action.todo.id);
}

function applyToggleTodo(state, action) {
    return state.map(todo =>
        todo.id === action.todo.id
            ? Object.assign({}, todo, { completed: !todo.completed })
            : todo
    );
}

export default todoReducer;
