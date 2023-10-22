const NoteArchiveButton = ({ id, onArchive }) => (
  <button
    onClick={onArchive(id)}
  >
    ARSIPKAN
  </button>
);

export default NoteArchiveButton;
