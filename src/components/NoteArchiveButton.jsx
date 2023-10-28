const NoteArchiveButton = ({ id, onArchive, isArchived }) => (
  <button
    onClick={onArchive(id)}
  >
    {isArchived ? 'Aktifkan': 'Arsipkan'}
  </button>
);

export default NoteArchiveButton;
