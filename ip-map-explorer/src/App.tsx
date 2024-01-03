import React from 'react';
import GoogleMap from './Components/GoogleMap';
import Logo from './Components/Logo';
import ParticlesBg from 'particles-bg'

function App() {
  return (
    <div className='min-h-screen'>
        <ParticlesBg type="lines" bg={true} />
        <Logo />
        <GoogleMap />
    </div>
  );
}

export default App;
