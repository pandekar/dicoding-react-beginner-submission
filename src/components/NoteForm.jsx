import { useState, useContext } from 'react';

const emptyString = '';
const CHAR_LIMIT = 50


const NoteForm = (props) => {
  const { setDatas, datasContext } = props;
  const titleLengthLimit = CHAR_LIMIT;
  const datas = useContext(datasContext);

  const [title, setTitle] = useState(emptyString);
  const [titleLengthWarning, setTitleLengthWarning] = useState(false)
  const [remainingChar, setRemainingChar] = useState(CHAR_LIMIT);
  const [body, setBody] = useState(emptyString);
  const [archived, setArchived] = useState(false);

  const _renderCharLimitWarning = () => {
    return (
      <div>jumlah karakter tersisa: {remainingChar}</div>
    );
  };

  const _onChangeHandlerTitle = (event) => {
    const data = event.target.value;
    const availableCharInput = titleLengthLimit - data.length;

    if (availableCharInput === -1) return

    setRemainingChar(availableCharInput)

    // title limit warning
    if (availableCharInput < CHAR_LIMIT) {
      setTitleLengthWarning(true)
    } else {
      setTitleLengthWarning(false)
    }

    if (availableCharInput >= 0) {
      setTitle(data);  
    }
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
    setTitleLengthWarning(false);
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

  return (
    <div className='container note-form'>
      <div id='formTitle'>
        <h1>Buat Catatan</h1>
      </div>
      <form onSubmit={_onSubmitHandler}>
        <div id='titleInputField'>
          <input
            id='title'
            type='text'
            value={title}
            onChange={_onChangeHandlerTitle}
            placeholder='masukan judul catatan'
          />
          {titleLengthWarning && _renderCharLimitWarning()}
        </div>
        <br />
        <div id='noteInputField'>
          <textarea
            id="notes"
            rows="5"
            cols="50"
            value={body}
            onChange={_onChangeHandlerBody}
            placeholder='masukan isi catatan'
          >
          </textarea>
        </div>
        <br />
        <div>
          <input id="isArchived" name="isArchived" type="checkbox" value={archived} checked={archived} onChange={_onChangeHandlerArchivedCheckbox}/>
          <label htmlFor="isArchived">Arsipkan</label>
        </div>
        <button id='noteFormSubmitButton' type='submit'>Simpan</button>
      </form>
    </div>
  )
};

export default NoteForm;
