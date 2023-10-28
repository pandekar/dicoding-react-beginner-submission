import React from "react";
import { NoteItemWithAction } from '../components';
import { getNoteItemProps } from '../utils/index';

const NoteArchived = (props) => {
  const { datas, onDelete, onNoteArchiveClick } = props;

  return (
    <div className="container note-archived">
      {datas.map(
        data => <NoteItemWithAction
            key={data.id}
            {...getNoteItemProps(data)}
            onDelete={onDelete}
            onArchive={onNoteArchiveClick}
          />
      )}
    </div>
  );
};

export default NoteArchived;
