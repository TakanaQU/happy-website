import React from 'react';
import backgroundStyle from './backgroundStyle';
import { Header } from './Header';
import { useState } from 'react';
import './Rotation.css';




function App() {
  const [isRotating, setIsRotating] = useState(false);

  const handleClick = () => {
    setIsRotating(prevState => !prevState);
  };

  const bodyStyle = {
    color: 'black',
    margin: 0,
    top: 0,
    fontSize: '5em',
};

  return (
    
      <div className="App" style = {bodyStyle}>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/destyle.css@1.0.15/destyle.css" />
          
          <Header />
            <div style={backgroundStyle}>
            <p>
              笑顔を回して笑顔の輪をつくろう
            </p>
            <img src={'/smile.svg'} className={isRotating ? 'rotate': ''} alt="smiling" onClick={handleClick} /><br />
            <img src={'/laying.svg'} className="SmilingImage" alt="laying" />

            
            
            
            </div>
      </div>
  );
}

export default App;
