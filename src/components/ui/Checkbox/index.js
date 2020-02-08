import React from 'react';

const Checkbox = ({onClick, className, checked = ''}) =>
    <input
        type="checkbox"
        onClick={onClick}
        className={className}
        checked={checked}
        onChange={() => {}}
    />

export default Checkbox;