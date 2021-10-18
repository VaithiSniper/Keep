import React from 'react';

function Header() {
    const customBorder = {
        border: "4px dashed #FFF0F5",
        borderRadius: "100px 100px 100px 100px"
    }
    return (<header><p><h1 style= {customBorder} className="header">Notes</h1></p></header>);
    };

        export default Header;