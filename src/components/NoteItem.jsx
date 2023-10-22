import React from 'react';
import NoteDeleteButton from './NoteDeleteButton';
import NoteArchiveButton from './NoteArchiveButton';

const NoteItem = (props) => {
  const { title, body, id, onDelete, onArchive } = props;

  return (
    <div>
      <h1>{title}</h1>
      <h3>{body}</h3>
      <NoteArchiveButton id={id} onArchive={onArchive} />
      <NoteDeleteButton id={id} onDelete={onDelete} />
    </div>
  )
}

export default NoteItem;