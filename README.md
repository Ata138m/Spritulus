# <img width="32" height="32" alt="spritulus-logo-256" src="https://github.com/user-attachments/assets/96ddb63e-d715-463c-ab9d-427f124c7a5d" /> React Component for Spritulus Sprites

This package exports a component named `<Spritulus/>` that adds animated sprites from [Spritulus](https://www.spritulus.com/sprites) to your web apps.

## Requirements

This requires the following to use the component:

• Node.js 22+
• React 16+

## Installation

Install via npm:

```bash
npm install spritulus
```

Or using yarn:

```bash
yarn add spritulus
```

Or using pnpm:

```bash
pnpm add spritulus
```

## Usage

Import and use the `Spritulus` component in your React application:

```jsx
import Spritulus from 'spritulus';

function App() {
  return (
    <div>
      <h1>My Game Character</h1>
      <Spritulus 
        id="sprite-captain-misfortune-44" 
        animationName="Idle" 
      />
    </div>
  );
}
```

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `id` | `string` | Yes | - | The sprite identifier (e.g., "sprite-captain-misfortune-44") |
| `animationName` | `string` | Yes | - | The animation to play (e.g., "Idle", "Walk", "Run") |
| `flipped` | `boolean` | No | `false` | Whether to flip the sprite horizontally |

### Example with Animation Control

```jsx
import { useState } from 'react';
import Spritulus from 'spritulus';

function GameCharacter() {
  const [animation, setAnimation] = useState('Idle');
  const [flipped, setFlipped] = useState(false);

  return (
    <div>
      <Spritulus 
        id="sprite-captain-misfortune-44" 
        animationName={animation}
        flipped={flipped}
      />
      
      <div>
        <button onClick={() => setAnimation('Idle')}>Idle</button>
        <button onClick={() => setAnimation('Walk')}>Walk</button>
        <button onClick={() => setAnimation('Run')}>Run</button>
        <button onClick={() => setFlipped(!flipped)}>Flip</button>
      </div>
    </div>
  );
}
```
