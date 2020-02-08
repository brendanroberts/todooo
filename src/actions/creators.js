import actionTypes from "./actionTypes";

function doAddTodo(id, name) {
    return {
        type: actionTypes.TODO_ADD,
        todo: {id, name},
    };
}

function doToggleTodo(id) {
    return {
        type: actionTypes.TODO_TOGGLE,
        todo: {id},
    };
}

export {doAddTodo, doToggleTodo};