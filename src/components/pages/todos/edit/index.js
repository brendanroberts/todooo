import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import TodoForm from "../form";
import {doEditTodo} from "../../../../actions";


class Edit extends Component {
    constructor(props) {
        super(props);

        const idParam = Number.parseInt(props.match.params.id, 10);
        const currentTodo = this.props.todo.find(item => item.id === idParam);
        this.state = {
            todo: currentTodo,
            redirectToIndex: false,
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(event) {
        this.props.editTodo(this.state.todo);
        this.setState({redirectToIndex: true});
        event.preventDefault();
    }

    onChange(event) {
        const {value} = event.target;
        const revisedTodo = {...this.state.todo, name: value};
        this.setState((state, props) => {
            return {
                todo: revisedTodo
            };
        });
    }

    render() {
        const redirectToIndex = this.state.redirectToIndex;

        if (redirectToIndex === true) {
            return <Redirect to="/todos"/>
        }

        return (
            <Fragment>
                <h3>Edit TODO</h3>
                <TodoForm
                    onSubmit={this.onSubmit}
                    onChange={this.onChange}
                    todo={this.state.todo}
                    children="Update"
                />
            </Fragment>
        );

    }
}

function mapStateToProps(state) {
    return {
        todo: state.todoState,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        editTodo: (todo) => {
            dispatch(doEditTodo(todo))
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit);