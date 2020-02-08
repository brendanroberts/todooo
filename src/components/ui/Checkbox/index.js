import React from 'react';

const Checkbox = ({onClick, className, checked = false}) =>
    <input
        type="checkbox"
        onClick={onClick}
        className={className}
        checked={checked}
    />

export default Checkbox;