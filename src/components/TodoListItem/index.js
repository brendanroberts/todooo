import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import Checkbox from "../ui/Checkbox";
import {doToggleTodo} from '../../actions/creators'

function TodoItem({todo, onToggleTodo}) {
    const {name, id} = todo;
    return (
        <Fragment>
            <li>
                <Checkbox
                    onClick={() => onToggleTodo(id)}
                />
                {name}
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
