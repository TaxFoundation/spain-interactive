import React from 'react';

import data from './data.json';
import paths from './paths.json';
import Region from './Region.js';
import Tooltip from './Tooltip';

const App = () => (
  <div>
    <svg
      x="0px"
      y="0px"
      viewBox="0 0 3300 1885"
      style={{ strokeWidth: '3px', enableBackground: 'new 0 0 3300 1885' }}
    >
      {paths.map((path, i) => {
        if (data[path.id]) {
          return (
            <Region
              theData={data[path.id]}
              dataFor="tooltip"
              path={path.d}
              key={path.id}
            ></Region>
          );
        }
        return <Region path={path.d} key={`path-${i}`}></Region>;
      })}
    </svg>
    <Tooltip id="tooltip" />
  </div>
);

export default App;
