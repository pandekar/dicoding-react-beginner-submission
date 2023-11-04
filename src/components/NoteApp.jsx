import { useState, createContext } from 'react';

import {
  NoteForm,
  NoteActive,
  NoteArchived,
  NoteSearch
} from '../components';

const STATUS_ARCHIVED = true;
const STATUS_ACTIVE = false;

const NoteApp = () => {
  const [datas, setDatas] = useState([]);
  const datasContext = createContext(datas);

  const isActive = datas.some(data => data.archived === STATUS_ACTIVE);
  const isArchived = datas.some(data => data.archived === STATUS_ARCHIVED);

  const _handleOnDelete = (id) => () => {
    const newDatas = datas.filter((data) => data.id !== id);

    setDatas(newDatas);
  };

  const _handleUpdateNoteIsArchived = (id) => () => {
    const noteIndex = datas.findIndex((data) => data.id === id);
    const oldNote = datas[noteIndex];

    const newNote = {
      ...oldNote,
      archived: !oldNote.archived
    };

    const newDatas = [...datas]
    newDatas[noteIndex] = newNote

    setDatas(newDatas);
  };

  const getNotesSectionProps = (noteStatus, notes) => ({
    datas: notes.filter(data => data.archived === noteStatus),
    onDelete: _handleOnDelete,
    onNoteArchiveClick: _handleUpdateNoteIsArchived
  })

  return (
    <div className='main'>
      <NoteForm setDatas={setDatas} datasContext={datasContext} />
      <NoteSearch datas={datas} />
      {isActive && <NoteActive {...getNotesSectionProps(STATUS_ACTIVE, datas)} />}
      {isArchived && <NoteArchived {...getNotesSectionProps(STATUS_ARCHIVED, datas)} />}
    </div>
  );
};

export default NoteApp;
