import React from 'react';
import { Button as UiButton } from 'semantic-ui-react';

const Button = ({onClick, className, children}) =>
    <UiButton
        onClick={onClick}
        className={className}
        content={children}
    />;

export default Button;