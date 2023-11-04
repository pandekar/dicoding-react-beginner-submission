const NoteDeleteButton = ({ id, onDelete }) => (
  <button
    id="noteDeleteButton"
    onClick={onDelete(id)}
    className="card action-button"
  >
    Hapus
  </button>
);

export default NoteDeleteButton;
