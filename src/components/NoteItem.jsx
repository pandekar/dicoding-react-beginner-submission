import React from 'react';
import NoteDeleteButton from './NoteDeleteButton';

const NoteItem = ({ id, title, body, onDelete }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h3>{body}</h3>
      <NoteDeleteButton id={id} onDelete={onDelete} />
    </div>
  )
}

export default NoteItem;