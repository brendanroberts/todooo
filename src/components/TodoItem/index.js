import React, {Fragment} from 'react';
import Checkbox from "../ui/Checkbox";

function TodoItem({todo, onToggleTodo}) {
    const {name, id} = todo;
    return (
        <Fragment>
            <Checkbox
                onClick={() => onToggleTodo(id)}
            />
            {name}
        </Fragment>
    );
}

export default TodoItem;