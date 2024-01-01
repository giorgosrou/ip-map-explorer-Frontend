import React from 'react';
import GoogleMap from './Components/GoogleMap';
import Logo from './Components/Logo';

function App() {
  return (
    <div className='bg-gradient-to-br from-purple-600 to-indigo-600 min-h-screen'>
      <Logo />
      <GoogleMap />
    </div>
  );
}

export default App;
