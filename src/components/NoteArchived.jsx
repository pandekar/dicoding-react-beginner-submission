import React from "react";
import { NoteItemWithAction } from '../components';
import { getNoteItemProps } from '../utils/index';

const NoteArchived = (props) => {
  const { datas, onDelete, onNoteArchiveClick } = props;

  return (
    <div className="container note-archived">
      <div>
        <h1>Catatan Arsip</h1>
      </div>
      <div>
        {datas.map(
          data => <NoteItemWithAction
              key={data.id}
              {...getNoteItemProps(data)}
              onDelete={onDelete}
              onArchive={onNoteArchiveClick}
            />
        )}
      </div>
    </div>
  );
};

export default NoteArchived;
