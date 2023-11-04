import { useState, createContext } from 'react';

import {
  NoteForm,
  NoteActive,
  NoteArchived,
  NoteSearch
} from '../components';
import { getInitialData } from '../utils';

const STATUS_ARCHIVED = true;
const STATUS_ACTIVE = false;

const NoteApp = () => {
  const initialDatas = getInitialData();
  const [datas, setDatas] = useState(initialDatas);
  const datasContext = createContext(datas);

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
      <NoteActive {...getNotesSectionProps(STATUS_ACTIVE, datas)} />
      <NoteArchived {...getNotesSectionProps(STATUS_ARCHIVED, datas)} />
    </div>
  );
};

export default NoteApp;
