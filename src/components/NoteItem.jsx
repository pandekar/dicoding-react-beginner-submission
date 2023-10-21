import React from 'react';
import NoteDeleteButton from './NoteDeleteButton';
import NoteArchiveButton from './NoteArchiveButton';

const NoteItem = (props) => {
  const { title, body, id, onDelete } = props;

  return (
    <div>
      <h1>{title}</h1>
      <h3>{body}</h3>
      <NoteArchiveButton />
      <NoteDeleteButton id={id} onDelete={onDelete} />
    </div>
  )
}

export default NoteItem;