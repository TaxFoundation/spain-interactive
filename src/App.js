import React from 'react';

import Spain from './map';
import data from './data.json';

function App() {
  return (
    <div className="App">
      <Spain {...data} />
    </div>
  );
}

export default App;
