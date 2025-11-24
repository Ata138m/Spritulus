import './App.css';
import Spritulus from '../../src/index.jsx';
import { useState } from 'react';

function App() {
  const [isFlipped, setIsFlipped] = useState(true),
    [animation, setAnimation] = useState('run'),
    animations = ['idle', 'run', 'bow', 'punch', 'kick', 'awaken', 'jump', 'fall', 'death'];

  return (
    <>
      <h1>Cpt. Misfortune - {animation}</h1>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Spritulus id="cpt-misfortune-44" animationName={animation} flipped={isFlipped} />
      </div>
      <div style={{display: 'flex', gap: '10px', marginTop: '10px', justifyContent: 'center'}}>
        <button onClick={() => setIsFlipped(!isFlipped)}>Flip</button>
        <button onClick={() => setAnimation(animations.length > 1 ? animations.filter(a => a !== animation)[Math.floor(Math.random() * (animations.length - 1))] : animations[0])}>Random Animation</button>
      </div>
    </>
  );
}

export default App;
