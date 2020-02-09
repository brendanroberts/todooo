import actionTypes from "./actionTypes";

let nextTodoId = 0;

function doAddTodo({name}) {
    return {
        type: actionTypes.TODO_ADD,
        todo: {
            id: ++nextTodoId,
            name
        }
    };
}

function doToggleTodo(id) {
    return {
        type: actionTypes.TODO_TOGGLE,
        todo: {id},
    };
}

function doEditTodo(todo) {
    return {
        type: actionTypes.TODO_EDIT,
        todo: todo,
    };
}

function doDeleteTodo(todo) {
    return {
        type: actionTypes.TODO_DELETE,
        todo: todo,
    };
}

export {doAddTodo, doEditTodo, doDeleteTodo, doToggleTodo};