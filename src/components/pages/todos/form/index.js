import React from 'react';
import Button from "../../../ui/Button";
import {Form as UiForm} from 'semantic-ui-react';

const Form = ({onSubmit, onChange, todo = {id: 0, name: '', completed: false}, children}) =>
    <UiForm onSubmit={onSubmit}>
        <input type="hidden" name="id" value={todo.id}/>
        <div className={"ui grid"}>
            <div className={"row"}>
                <div className={"thirteen wide column"}>
                    <input
                        type="text"
                        onChange={onChange}
                        value={todo.name}
                    />
                </div>
                <div className={"three wide column"}>
                    <Button
                        children={children}/>
                </div>
            </div>
        </div>
    </UiForm>

export default Form;