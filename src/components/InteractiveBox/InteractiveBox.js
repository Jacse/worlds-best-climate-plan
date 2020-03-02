import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import './InteractiveBox.css';

const InteractiveBox = ({ children }) => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    children.map((c, idx) => {
      document
        .getElementById(c.props.link)
        .addEventListener('mouseenter', () => {
          setSlide(idx);
        });
    });
  });

  return (
    <div className="interactive-box-container">
      <div className="boxes-container">
        {children.map((c, idx) => {
          var boxClass = classNames({
            box: true,
            'visible-box': slide === idx,
            'invisible-box': slide !== idx,
            'going-out': slide !== idx,
            'going-in': slide === idx,
          });

          return (
            <div key={idx} id={`box-${idx}`} className={boxClass}>
              {c}
            </div>
          );
        })}
      </div>
      <div className="box-index-container">
        {children.map((c, idx) => (
          <div
            onClick={() => setSlide(idx)}
            className={`box-index-ball ${
              slide === idx ? 'box-index-ball-active' : ''
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveBox;
