import { useState } from "react";


function Header() {
    const headerStyle = {
        backgroundColor: 'black',
        color: 'white',
        margin: 0,
        height: '100px',
        top: 0,
    }

    const buttonStyle = {
        backgroundColor: 'white',
        color: 'black',
        border: '2px solid black',
        padding: '10px',
        fontSize: '16px',
        fontWeight: 'bold',
        borderRadius: '20px',
        cursor: 'pointer',
        transition: 'all 0.2s ease-in-out',
    }
    

    const [isRotated, setIsRotated] = useState(false);

    const rotationButtonClick = () => {
        setIsRotated(!isRotated);
    };
    

    return (
        <header style={headerStyle}>
            <h1 style={{fontSize: '50px', lineHeight: '1'}}>言いたいことも言えないこんな世の中
            うんざりしていませんか？</h1>
            <button style={buttonStyle} className={isRotated ? 'rotated': ''} onClick={rotationButtonClick}>
                大回転
            </button>
        </header>
    )
}



export default Header;