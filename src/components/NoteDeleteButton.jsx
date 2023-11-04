import PropTypes from 'prop-types';

const NoteDeleteButton = ({ id, onDelete }) => (
  <button
    id="noteDeleteButton"
    onClick={onDelete(id)}
    className="card action-button"
  >
    Hapus
  </button>
);

NoteDeleteButton.propTypes = {
  id: PropTypes.number,
  onDelete: PropTypes.func
}

export default NoteDeleteButton;
