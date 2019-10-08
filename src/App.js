import React from 'react';
import ReactTooltip from 'react-tooltip';

import data from './data.json';
import paths from './paths.json';
import Region from './Region.js';

const App = () => (
  <div>
    <svg
      x="0px"
      y="0px"
      viewBox="0 0 3300 1885"
      style={{ strokeWidth: '3px', enableBackground: 'new 0 0 3300 1885' }}
    >
      {paths.map(path => {
        if (data[path.id]) {
          return (
            <Region
              theData={data[path.id]}
              dataFor="tooltip"
              path={path.d}
            ></Region>
          );
        }
        return <Region path={path.d}></Region>;
      })}
    </svg>
    <ReactTooltip id="tooltip" />
  </div>
);

export default App;
