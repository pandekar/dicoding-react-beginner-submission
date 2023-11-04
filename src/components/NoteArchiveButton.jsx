import PropTypes from 'prop-types';

const NoteArchiveButton = ({ id, onArchive, isArchived }) => (
  <button
    onClick={onArchive(id)}
    id="noteActionButton"
    className="card action-button"
  >
    {isArchived ? 'Aktifkan': 'Arsipkan'}
  </button>
);

NoteArchiveButton.propTypes = {
  id: PropTypes.number,
  onArchive: PropTypes.func,
  isArchived: PropTypes.bool
}

export default NoteArchiveButton;
