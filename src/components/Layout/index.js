import React from 'react';

const Layout = ({children}) => (
    <div className={"ui text container"}>
        <h1 className={"ui dividing header"}>Todooo</h1>
        {children}
    </div>
);

export default Layout;
