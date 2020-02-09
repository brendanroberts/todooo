import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import TodoForm from "../form";
import {doEditTodo, doDeleteTodo} from "../../../../actions";
import Button from "../../../ui/Button";


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
        this.onDelete = this.onDelete.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.editTodo(this.state.todo);
        this.setState({redirectToIndex: true});
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

    onDelete(event) {
        event.preventDefault();
        if (window.confirm("Really?")) {
            this.props.deleteTodo(this.state.todo);
            this.setState({redirectToIndex: true});
        }
    }

    render() {
        const redirectToIndex = this.state.redirectToIndex;

        if (redirectToIndex === true) {
            return <Redirect to="/todos"/>
        }

        return (
            <Fragment>
                <h3>Edit TODO</h3>
                <div className={"ui grid"}>
                    <div className={"row"}>
                        <div className={"sixteen wide column"}>
                            <TodoForm
                                onSubmit={this.onSubmit}
                                onChange={this.onChange}
                                todo={this.state.todo}
                                children="Update"
                            />
                        </div>
                    </div>
                    <div className={"row"}>
                        <div className={"sixteen wide column"}>
                            <Link to="/todos/new">
                                <Button className={"ui negative basic"} onClick={this.onDelete}>Delete this item</Button>
                            </Link>
                        </div>
                    </div>
                </div>
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
        deleteTodo: (todo) => {
            dispatch(doDeleteTodo(todo))
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit);