const NoteArchiveButton = ({ id, onArchive, isArchived }) => (
  <button
    onClick={onArchive(id)}
    id="noteActionButton"
  >
    {isArchived ? 'Aktifkan': 'Arsipkan'}
  </button>
);

export default NoteArchiveButton;
