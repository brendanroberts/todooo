import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import TodoForm from "../form";
import {doAddTodo} from "../../../../actions";

class New extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todo: {name: ''},
            redirectToIndex: false,
        };


        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(event) {
        this.props.addTodo(this.state.todo);
        this.setState({redirectToIndex: true});
        event.preventDefault();
    }

    onChange(event) {
        const {value} = event.target;
        this.setState({todo: {name: value}});
    }

    render() {
        const redirectToIndex = this.state.redirectToIndex;

        if (redirectToIndex === true) {
            return <Redirect to="/todos"/>
        }

        return (
            <Fragment>
                <h3>Add TODO</h3>
                <TodoForm
                    onSubmit={this.onSubmit}
                    onChange={this.onChange}
                    todo={this.state.todo}
                    children="Add"
                />
            </Fragment>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addTodo: (name) => {
            dispatch(doAddTodo(name))
        },
    };
}

export default connect(null, mapDispatchToProps)(New);