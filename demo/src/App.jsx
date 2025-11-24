import './App.css';
import Spritulus from '../../src/index.jsx';

function App() {

  return (
    <>
      <h1>Spritulus Demo</h1>
      <a href="https://www.spritulus.com/sprites/44" target="_blank" rel="noreferrer">Cpt. Misfortune</a> by <a href="https://www.spritulus.com/" target="_blank" rel="noreferrer">Spritulus</a>
      <h2>Idle Animation</h2>
      <Spritulus id="captain-misfortune-44" animationName="idle" />
      <h2>Run Animation (Flipped)</h2>
      <Spritulus id="captain-misfortune-44" animationName="run" flipped={true} />
      <h2>Idle Animation (Flipped)</h2>
      <Spritulus id="captain-misfortune-44" animationName="idle" flipped={true} />
    </>
  );
}

export default App;
