const NoteDeleteButton = ({ id, onDelete }) => (
  <button
    onClick={onDelete(id)}
  >
    X
  </button>
);

export default NoteDeleteButton;
