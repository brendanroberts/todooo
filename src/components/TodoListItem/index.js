import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Checkbox from "../ui/Checkbox";
import {List} from 'semantic-ui-react';
import {doToggleTodo} from '../../actions';
import './styles.css';

function TodoItem({todo, onToggleTodo}) {
    const {name, id, completed} = todo;
    return (
        <List.Item className={"TodoListItem__item"}>
            <Checkbox
                className={"TodoListItem__checkbox"}
                onClick={() => onToggleTodo(id)}
                checked={completed}
            />
            <List.Content className={"TodoListItem__content"}>
                <Link to={`/todos/${id}/edit`}>{name}</Link>
            </List.Content>

        </List.Item>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        onToggleTodo: id => dispatch(doToggleTodo(id)),
    };
}

export default connect(null, mapDispatchToProps)(TodoItem);
