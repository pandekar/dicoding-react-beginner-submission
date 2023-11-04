const NoteArchiveButton = ({ id, onArchive, isArchived }) => (
  <button
    onClick={onArchive(id)}
    id="noteActionButton"
    className="card action-button"
  >
    {isArchived ? 'Aktifkan': 'Arsipkan'}
  </button>
);

export default NoteArchiveButton;
