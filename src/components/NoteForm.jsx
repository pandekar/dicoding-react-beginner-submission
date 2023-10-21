import { useState, useEffect, useContext } from 'react';

const emptyString = '';

const NoteForm = (props) => {
  const { setDatas, datasContext } = props;
  const datas = useContext(datasContext);

  const [title, setTitle] = useState(emptyString);
  const [body, setBody] = useState(emptyString);
  const [archived, setArchived] = useState(false);

  const _onChangeHandlerTitle = (event) => {
    const data = event.target.value;
    setTitle(data);
  };

  const _onChangeHandlerBody = (event) => {
    const data = event.target.value;
    setBody(data);
  };

  const _onChangeHandlerArchivedCheckbox = () => {
    setArchived(!archived);
  };

  const _cleanForm = () => {
    setTitle(emptyString);
    setBody(emptyString);
    setArchived(false);
  };

  const _onSubmitHandler = (event) => {
    event.preventDefault();
    const createdDateTime = new Date();

    const id = +new Date();
    const createdAt = createdDateTime.toISOString();

    setDatas([
      ...datas,
      {id, title, body, archived, createdAt}
    ]);

    _cleanForm();
  };
  
  useEffect(() => {
    console.log(title, body, archived)
  }, [title, body, archived]);

  return (
    <div className='container note-form'>
      <h1>Buat catatan</h1>
      <form onSubmit={_onSubmitHandler}>
        <div>
          <label htmlFor='title'>Judul: </label>
        </div>
        <div >
          <input id='title' type='text' value={title} onChange={_onChangeHandlerTitle}/>
        </div>
        <br />
        <div>
          <label htmlFor='notes'>Catatan: </label>
        </div>
        <div>
          <textarea id="notes" rows="5" cols="50" value={body} onChange={_onChangeHandlerBody}></textarea>
        </div>
        <br />
        <div>
          <input id="isArchived" name="isArchived" type="checkbox" value={archived} checked={archived} onChange={_onChangeHandlerArchivedCheckbox}/>
          <label htmlFor="isArchived">put into archive</label>
        </div>
        <button type='submit'>Buat</button>
      </form>
    </div>
  )
};

export default NoteForm;
