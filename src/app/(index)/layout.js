import React from 'react';

const Layout = ({children}) => {
    return (
        <div>
            <div>header</div>
            {children}
            <div>footer</div>
        </div>
    );
};

export default Layout;