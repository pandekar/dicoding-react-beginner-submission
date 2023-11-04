import React from 'react';
import { NoteItem } from './index'
import NoteDeleteButton from './NoteDeleteButton';
import NoteArchiveButton from './NoteArchiveButton';

const NoteItemWithAction = (props) => {
  const {
    title, body, id, onDelete, onArchive, archived
  } = props;

  return (
    <div className='card note-item-with-action'>
      <NoteItem title={title} body={body} />
      <div className='action-button-container'>
        <NoteArchiveButton id={id} onArchive={onArchive} isArchived={archived} />
        <NoteDeleteButton id={id} onDelete={onDelete} />
      </div>
    </div>
  );
}

export default NoteItemWithAction;
