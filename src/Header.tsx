import { useState } from "react";


function Header() {
    const headerStyle = {
        backgroundColor: 'black',
        color: 'white',
        margin: 0,
        height: '100px',
        top: 0,
    }

    

    return (
        <header style={headerStyle}>
            <h1 style={{fontSize: '50px', lineHeight: '1'}}>言いたいことも言えないこんな世の中
            うんざりしていませんか？</h1>
            <button></button>
        </header>
    )
}



export default Header;