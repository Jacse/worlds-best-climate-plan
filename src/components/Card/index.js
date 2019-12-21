import React from 'react';
import ReactRough, { Rectangle } from 'react-rough';
import styles from './index.module.css';
import useDimensions from '../../lib/useDimensions';

const Card = ({ className, children, backgroundColor = 'none' }) => {
  const [ref, { width, height }] = useDimensions();
  return (
    <div className={[className, styles.card].join(' ')} ref={ref}>
      <div className={styles.content}>{children}</div>
      <div className={styles.background}>
        <ReactRough renderer="svg" width={width} height={height}>
          <Rectangle
            fill={backgroundColor}
            width={width - 8}
            height={height - 8}
            x={4}
            y={4}
          />
        </ReactRough>
      </div>
    </div>
  );
};

export default Card;
