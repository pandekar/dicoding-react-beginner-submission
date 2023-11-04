import PropTypes from 'prop-types';

import { NoteItemWithAction } from '../components'
import { getNoteItemProps } from '../utils/index';

const NoteActive = ({ datas, onDelete, onNoteArchiveClick }) => (
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

NoteActive.propTypes = {
  datas: PropTypes.array,
  onDelete: PropTypes.func,
  onNoteArchiveClick: PropTypes.func
};

export default NoteActive;
