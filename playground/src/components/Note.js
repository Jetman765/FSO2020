import React from 'react';

const Note = ({ note, toggleImportance }) => {
  const label = note.imporant
    ? 'make not imporant' : 'make important'

  return (
    <li className="note">
      {note.content}
      <button onClick={toggleImportance}>{label}</button>
    </li>
  );
}

export default Note;