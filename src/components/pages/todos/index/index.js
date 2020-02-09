import React from 'react';
import {Link} from 'react-router-dom';
import TodoList from "../../../TodoList";
import Button from "../../../ui/Button";

const Index = () =>
    <div className={"ui grid"}>
        <div className={"row"}>
            <div className={"right aligned sixteen wide column"}>
                <Link to="/todos/new">
                    <Button>New</Button>
                </Link>
            </div>
        </div>
        <div className="row">
            <div className={"sixteen wide column"}>
                <TodoList/>
            </div>
        </div>
    </div>


export default Index;