import React from 'react';
import backgroundStyle from './backgroundStyle';
import { Header } from './Header';
import { useState } from 'react';
import './Rotation.css';
import './App.css';




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
            <div className="container">
              <img src={'/animal_smile_inu.png'} className={isRotating ? 'rotate': ''} alt="smiling" onClick={handleClick} /><br />
              <img src={'/body_kanzou_good.png'} className="SmilingImage" alt="laying" />
              <img src={'/animal_smile_kuma.png'} className="Smiles" alt="kuma" />
            </div>
            
            
            
            </div>
      </div>
  );
}

export default App;
