import React from 'react';
import ReactRough, { Line } from 'react-rough';
import useDimensions from '../lib/useDimensions';

const Divider = () => {
  const [ref, { width }] = useDimensions();
  return (
    <div ref={ref}>
      <ReactRough renderer="svg" width={width} height={6}>
        <Line x1={0} y1={3} x2={width} y2={3}></Line>
      </ReactRough>
    </div>
  );
};

export default Divider;
