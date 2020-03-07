import React, { useContext, useRef } from 'react';
import classNames from 'classnames';
import memoize from 'memoize-one';
import useBreakpoint from '../../hooks/useBreakpoint';
import { FootNoteContext } from './FootNoteContainer';

const boundingRect = ref =>
  ref.current
    ? ref.current.getBoundingClientRect()
    : { left: 0, top: 0, width: 0, height: 0 };

const Article = ({ active, pos, url, title, from, date, img }) => {
  // top, left from foot note component
  let { top, left } = pos;

  const ref = useRef(null);
  const { width, height } = boundingRect(ref);

  top -= height;
  left -= width / 2;

  left = left < 16 ? 16 : left; // right is already taken care of due to tailwind max width

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block absolute z-10"
      style={{
        top,
        left,
        visibility: active ? 'visible' : 'hidden',
      }}
    >
      <div
        className="p-4 max-w-sm bg-gray-100 border border-gray-300 rounded-sm leading-tight text-left flex items-center -mt-2"
        ref={ref}
      >
        {img && (
          <div className="w-16 pr-4 flex-none">
            <img src={img} />
          </div>
        )}
        <div className="flex-1 overflow-hidden">
          <h4 className="text-gray-800 mb-2">{title}</h4>
          <div className="flex">
            <span className="text-green-500 mr-2 truncate">{from}</span>
            <span className="text-gray-600 flex-none">{date}</span>
          </div>
        </div>
      </div>
    </a>
  );
};

const FootNote = ({ children, url, ...props }) => {
  const breakpoint = useBreakpoint();
  const ref = useRef(null);
  const [openNote, setOpenNote] = useContext(FootNoteContext);

  const aProps = breakpoint.md
    ? {
        href: url,
        onMouseEnter: () => setOpenNote(url),
        onMouseLeave: () => setOpenNote(null),
      }
    : { onClick: () => setOpenNote(url) };

  const pos = boundingRect(ref);
  const left = !breakpoint.md
    ? window.innerWidth / 2
    : pos.left + pos.width / 2;
  const top = pos.top + window.scrollY;

  return (
    <React.Fragment>
      <a
        className={classNames(
          'relative footnote bg-green-100 hover:bg-green-200 py-1 rounded-sm cursor-pointer',
          { 'bg-green-200 z-10 ': openNote === url }
        )}
        target="_blank"
        rel="noopener noreferrer"
        ref={ref}
        {...aProps}
      >
        {children}
      </a>
      <Article
        active={openNote === url}
        url={url}
        {...props}
        pos={{ left, top }}
      />
    </React.Fragment>
  );
};

export default memoize(FootNote);
