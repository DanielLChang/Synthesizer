import React from 'react';

const Notekey = ({ note, pressed }) => (
  <div className={pressed ? `note-key pressed` : `note-key`}>
    { note }
  </div>
);

export default Notekey;
