import { useState } from "react";
import './Rotation.css';


interface RotateButtonProps {
    isRotating: boolean;
    onRotationButtonClick: () => void;
}

const Header = () => {
    const headerStyle = {
        backgroundColor: 'black',
        color: 'white',
        margin: 0,
        height: 'auto',
        top: 0,
    };

    
    const [isRotating, setIsRotating] = useState(false);

    const handleRotationButtonClick = () => {
        setIsRotating((prevIsRotating) => !prevIsRotating);
    };
    
    return (
        <header style={headerStyle}>
            <h1 style={{fontSize: '50px', lineHeight: '1'}}>言いたいことも言えないこんな世の中
            うんざりしていませんか?</h1>
            <RotateButton 
            isRotating={isRotating}
            onRotationButtonClick={handleRotationButtonClick}
            />
        </header>
    );
};

const RotateButton = ({ isRotating, onRotationButtonClick }: RotateButtonProps) => {
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
    };
    return (
        <button style={buttonStyle} className={isRotating ? 'rotate': ''} onClick={onRotationButtonClick}>
            {isRotating ? '停止': '回転'}
        </button>
    );
};

export { Header, RotateButton };
