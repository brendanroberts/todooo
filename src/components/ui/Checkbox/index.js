import React from 'react';
import { Checkbox as UiCheckbox } from 'semantic-ui-react';

const Checkbox = ({onClick, className, checked = false}) =>
    <UiCheckbox
        onClick={onClick}
        className={className}
        defaultChecked={checked}
        onChange={() => {}}
    />

export default Checkbox;