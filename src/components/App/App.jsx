import React from 'react';

import UserPanel from '../UserPanel';
import DataView from '../DataView';

function App() {
  return (
    <div className="md:flex">
      <UserPanel />
      <DataView />
    </div>
  );
}

export default App;
