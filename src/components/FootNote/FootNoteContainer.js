import React, { useState, createContext } from 'react';
import useBreakpoint from '../../hooks/useBreakpoint';

export const FootNoteContext = createContext();

const FootNoteContainer = ({ children }) => {
  const [openNote, setOpenNote] = useState(null);
  const breakpoint = useBreakpoint();

  return (
    <FootNoteContext.Provider value={[openNote, setOpenNote]}>
      <div className="overflow-hidden">{children}</div>
      {openNote && (
        <div
          onClick={() => setOpenNote(false)}
          className="fixed inset-0 bg-white opacity-25 cursor-pointer"
        ></div>
      )}
    </FootNoteContext.Provider>
  );
};

export default FootNoteContainer;
