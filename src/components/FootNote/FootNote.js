import React, { useContext } from 'react';
import classNames from 'classnames';
import useBreakpoint from '../../hooks/useBreakpoint';
import { FootNoteContext } from './FootNoteContainer';

const Article = ({ url, title, from, date, img, left = false }) => {
  const breakpoint = useBreakpoint();
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={classNames(
        'article z-10 absolute w-full p-4 bg-gray-100 border border-gray-300 rounded-sm leading-tight text-left left-0 md:w-1/2 md:z-0 md:m-4',
        { 'md:left-100': left, 'md:left-auto md:right-100': !left }
      )}
      style={{
        transform: breakpoint.md ? 'translateY(-50%)' : 'translateY(-100%)',
      }}
    >
      <div className="flex items-center">
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
  const [openNote, setOpenNote] = useContext(FootNoteContext);

  const aProps = breakpoint.md
    ? { href: url }
    : { onClick: () => setOpenNote(url) };

  return (
    <a
      className={classNames(
        'footnote bg-green-100 hover:bg-green-200 py-1 rounded-sm cursor-pointer',
        { 'bg-green-200': openNote === url }
      )}
      target="_blank"
      rel="noopener noreferrer"
      {...aProps}
    >
      {(breakpoint.md || openNote === url) && <Article url={url} {...props} />}
      {children}
    </a>
  );
};

export default FootNote;
