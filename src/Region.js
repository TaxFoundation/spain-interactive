import React from 'react';
import PropTypes from 'prop-types';
import { scaleLinear } from 'd3-scale';
import { interpolateYlOrRd } from 'd3-scale-chromatic';

import data from './data.json';

const scale = scaleLinear()
  .domain([0, Object.keys(data).length])
  .range([0, 1]);

const color = value => interpolateYlOrRd(scale(value));

const Region = ({ dataFor, theData, path }) => {
  console.log(theData);
  return (
    <path
      data-for={dataFor}
      data-tip={theData ? `${theData.name} is ranked ${theData.score}` : null}
      d={path}
      fill={theData ? color(theData.score) : '#bbb'}
      style={{ stroke: '#fff', strokeWidth: '3px' }}
    />
  );
};

Region.propTypes = {
  path: PropTypes.string.isRequired,
  theData: PropTypes.object,
  dataFor: PropTypes.string,
};

export default Region;
