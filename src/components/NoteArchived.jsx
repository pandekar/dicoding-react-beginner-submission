import PropTypes from 'prop-types';

import { NoteItemWithAction } from '../components';
import { getNoteItemProps } from '../utils/index';

const NoteArchived = ({ datas, onDelete, onNoteArchiveClick }) => (
  <div className="card container note-archived">
    <div>
      <h1>Catatan Arsip</h1>
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

NoteArchived.propTypes = {
  datas: PropTypes.array,
  onDelete: PropTypes.func,
  onNoteArchiveClick: PropTypes.func
};

export default NoteArchived;
