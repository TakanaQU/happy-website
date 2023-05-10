import React from 'react';
import backgroundStyle from './backgroundStyle';
import { Header, RotateButton } from './Header';
import { useState } from 'react';
import './Rotation.css';




function App() {
  const [isRotating, setIsRotating] = useState(false);

  const handleClick = () => {
    setIsRotating(prevState => !prevState);
  };

  return (
    
      <div className="App">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/destyle.css@1.0.15/destyle.css" />
          
          <Header />
            <div style={backgroundStyle}>
            <img src={'/smile.svg'} className={isRotating ? 'rotate': ''} alt="smiling" onClick={handleClick} /><br />
            <img src={'/laying.svg'} className="SmilingImage" alt="laying" />
            <p>
              あ〜5000兆円欲しい!!!
              石油掘りたい
            </p>
            <p>
              確かめるにはこちら↓
            </p>
            <a
              className="Abehiroshi-link"
              href="http://abehiroshi.la.coocan.jp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              学校では教えてくれない世界の真理（ひ♡み♡つ）
            </a>
            <br />死は救済なのか？ 自分で確かめるしかないのか？<br />
            <div className="App-logo-spin"> 
            <img src={'/smile.svg'} className="SmilingImage" alt="smiling" /><br />
            </div>
            人生にログボはないんですか？
            <img src={'/smile.svg'} className="SmilingImage" alt="smiling" /><br />
            石油王道案内したら100万くらいくれないかな〜
            <img src={'/smile.svg'} className="SmilingImage" alt="smiling" /><br />
            物足りない愛情
            <img src={'/smile.svg'} className="SmilingImage" alt="smiling" /><br />
            生! 生! 傷つくことなく手軽に生を感じたい
            <img src={'/smile.svg'} className="SmilingImage" alt="smiling" /><br />
            裏
            反転ボタン
            全部全部全部壊したい
            ラズパイサーバーにして立てる

          </div>
    </div>
  );
}

export default App;
