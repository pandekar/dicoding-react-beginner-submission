import { useState, createContext } from 'react';

import { getData } from '../utils';
import {
  NoteForm,
  NoteActive,
  NoteArchived
} from '../components';

const NoteApp = () => {
  const getDataValues = getData();
  const [datas, setDatas] = useState(getDataValues);
  const datasContext = createContext(datas);
  console.log('NoteApp', datasContext);

  const isActive = datas.some(data => data.archived === false);
  const isArchived = datas.some(data => data.archived === true);

  const activePosts = datas.filter(data => data.archived === false);
  const archivedPosts = datas.filter(data => data.archived === true);

  const _hanldeOnDelete = (id) => () => {
    const newDatas = datas.filter((data) => data.id !== id);

    setDatas(newDatas);
  };

  return (
    <div className='main'>
      <NoteForm setDatas={setDatas} datasContext={datasContext} />
      {isActive && <NoteActive datas={activePosts} onDelete={_hanldeOnDelete} />}
      {isArchived && <NoteArchived datas={archivedPosts} onDelete={_hanldeOnDelete} />}
    </div>
  );
};

export default NoteApp;
