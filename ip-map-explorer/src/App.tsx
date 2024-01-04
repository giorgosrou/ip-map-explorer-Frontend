import React from 'react';
import GoogleMap from './Components/GoogleMap';
import Logo from './Components/Logo';
import WebsiteVisitorsInfoSearch from './Components/WebsiteVisitorsInfoSearch';
import CurrentUserInfo from './Components/CurrentUserInfo';

function App() {
  return (
    <div className="flex flex-col bg-gradient-to-b from-indigo-900 to-gray-900">
      <div className="flex-1 overflow-y-auto">
      </div>
      <div className="flex-1">
        <Logo />
        <WebsiteVisitorsInfoSearch />
        <CurrentUserInfo />
        <GoogleMap />
      </div>
    </div>
  );
}

export default App;
