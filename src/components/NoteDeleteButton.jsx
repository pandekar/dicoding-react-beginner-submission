const NoteDeleteButton = ({ id, onDelete }) => (
  <button
    id="noteDeleteButton"
    onClick={onDelete(id)}
  >
    Hapus
  </button>
);

export default NoteDeleteButton;
