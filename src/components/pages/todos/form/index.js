import React from 'react';

const Form = ({onSubmit, onChange, todo = {id: 0, name: '', completed: false}, children}) =>
    <form onSubmit={onSubmit}>
        <input type="hidden" name="id" value={todo.id} />
        <input
            type="text"
            onChange={onChange}
            value={todo.name}
        />
        <button type="submit">
            {children}
        </button>
    </form>

export default Form;