import React from 'react';

import data from './data.json';
import paths from './paths.json';
import Region from './Region.js';
import Tooltip from './Tooltip';
import PresentationalShapes from './PresentationalShapes';

const App = () => (
  <div>
    <h1
      style={{ fontFamily: '"Trebuchet MS", sans-serif', textAlign: 'center' }}
    >
      {`Mapa de Competitividad Fiscal Autonómica ${data.year}`}
    </h1>
    <svg
      x="0px"
      y="0px"
      viewBox="0 0 3300 1885"
      style={{
        enableBackground: 'new 0 0 3300 1885',
      }}
    >
      {paths.map((path, i) => {
        if (data.ranks[path.id]) {
          return (
            <Region
              theData={data.ranks[path.id]}
              dataFor="tooltip"
              path={path.d}
              key={path.id}
            ></Region>
          );
        }
        return <Region path={path.d} key={`path-${i}`}></Region>;
      })}
      <PresentationalShapes year={data.year} />
    </svg>
    <Tooltip id="tooltip" />
  </div>
);

export default App;
