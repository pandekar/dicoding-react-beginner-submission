import PropTypes from 'prop-types';

import { NoteItemWithAction, NoteEmpty } from '../components'
import { getNoteItemProps } from '../utils/index';

const NoteActive = ({ datas, onDelete, onNoteArchiveClick }) => {
  const _renderNoteItems = (datas) => datas.map(
    data => <NoteItemWithAction
      key={data.id}
      {...getNoteItemProps(data)}
      onDelete={onDelete}
      onArchive={onNoteArchiveClick}
    />
  );

  const _renderEmptyNote = () => <NoteEmpty />;

  const _renderNotes = (datas) => (
    datas.length === 0 ? _renderEmptyNote() : _renderNoteItems(datas)
  );

  return (
    <div className="card container note-active">
      <div>
        <h1>Catatan Aktif</h1>
      </div>
      <div>
        {_renderNotes(datas)}
      </div>
    </div>
  );
}
NoteActive.propTypes = {
  datas: PropTypes.array,
  onDelete: PropTypes.func,
  onNoteArchiveClick: PropTypes.func
};

export default NoteActive;
