import React from 'react';
import './App.css';
import clsx from 'clsx';

function App() {
  return (
    
      <div className="App">
        
          
          <header className="App-header">       
            <div style={{ backgroundImage: "url(/vortex.png"}}>
            <img src={'/smile.svg'} className="SmilingImage" alt="smiling" />
            <img src={'/laying.svg'} className="SmilingImage" alt="smiling" />
            <p>
              死は救済なのか？　自分で確かめるしかないのか？
            </p>
            <p>
              確かめるにはこちら↓
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </div>
        </header>
    </div>
  );
}

export default App;
