import React from "react";
import { NoteItem } from '../components';
import { getNoteItemProps } from '../utils/index';

const NoteArchived = (props) => {
  const { datas, onDelete } = props;

  return (
    <div className="container note-archived">
      {datas.map(
        data => <NoteItem key={data.id} {...getNoteItemProps(data)} onDelete={onDelete}/>
      )}
    </div>
  );
};

export default NoteArchived;
