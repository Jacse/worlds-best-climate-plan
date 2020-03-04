import React, { useState } from 'react';
import useBreakpoint from '../hooks/useBreakpoint';
import classNames from 'classnames';

const Article = ({ url, title, from, date, img, left = false }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="article absolute w-1/2 m-4 p-4 bg-gray-100 border border-gray-300 rounded-sm leading-tight text-left"
    style={{
      [left ? 'left' : 'right']: '100%',
      transform: 'translateY(-100%)',
    }}
  >
    <div className="flex items-center">
      {img && (
        <div className="w-12 mr-4 flex-shrink-0">
          <img src={img} />
        </div>
      )}
      <div className="w-full">
        <h4 className="text-gray-800 mb-2">{title}</h4>
        <div className="flex">
          <span className="text-green-500 mr-2 truncate">{from}</span>
          <span className="text-gray-600 flex-shrink-0">{date}</span>
        </div>
      </div>
    </div>
  </a>
);

const FootNote = ({ children, url, ...props }) => {
  const breakpoint = useBreakpoint();
  const [isShown, setShown] = useState(false);

  console.log(breakpoint);

  return (
    <span className="footnote bg-green-100 hover:bg-green-200 py-1 rounded-sm cursor-pointer">
      {breakpoint.md ? (
        <a href={url} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ) : (
        <a onClick={() => setShown(true)}>{children}</a>
      )}
      {(breakpoint.md || isShown) && <Article url={url} {...props} />}
    </span>
  );
};

export default FootNote;
