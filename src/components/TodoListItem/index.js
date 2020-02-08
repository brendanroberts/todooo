import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Checkbox from "../ui/Checkbox";
import {doToggleTodo} from '../../actions'

function TodoItem({todo, onToggleTodo}) {
    const {name, id, completed} = todo;
    return (
        <Fragment>
            <li>
                <Checkbox
                    onClick={() => onToggleTodo(id)}
                    checked={completed ? 'checked' : ''}
                />
                <Link to={`/todos/${id}/edit`}>{name}</Link>

            </li>
        </Fragment>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        onToggleTodo: id => dispatch(doToggleTodo(id)),
    };
}

export default connect(null, mapDispatchToProps)(TodoItem);
