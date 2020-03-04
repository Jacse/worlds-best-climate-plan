import React, { useState, createContext } from 'react';

export const FootNoteContext = createContext();

const FootNoteContainer = ({ children }) => {
  const [openNote, setOpenNote] = useState(null);

  return (
    <FootNoteContext.Provider value={[openNote, setOpenNote]}>
      <div>{children}</div>
      {openNote && (
        <div
          onClick={() => setOpenNote(false)}
          className="fixed inset-0 bg-green-900 opacity-25 cursor-pointer"
        ></div>
      )}
    </FootNoteContext.Provider>
  );
};

export default FootNoteContainer;
