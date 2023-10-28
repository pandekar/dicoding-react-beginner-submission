import React from 'react';
import { NoteItem } from './index'
import NoteDeleteButton from './NoteDeleteButton';
import NoteArchiveButton from './NoteArchiveButton';

const NoteItemWithAction = (props) => {
  const {
    title, body, id, onDelete, onArchive, archived
  } = props;

  return (
    <div>
      <NoteItem title={title} body={body} />
      <NoteArchiveButton id={id} onArchive={onArchive} isArchived={archived} />
      <NoteDeleteButton id={id} onDelete={onDelete} />
    </div>
  );
}

export default NoteItemWithAction;
