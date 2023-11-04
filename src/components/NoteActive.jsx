import React from "react";

import { NoteItemWithAction } from '../components'
import { getNoteItemProps } from '../utils/index';

const NoteActive = (props) => {
  const { datas, onDelete, onNoteArchiveClick } = props

  return (
    <div className="card container note-active">
      <div>
        <h1>Catatan Aktif</h1>
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

export default NoteActive;
