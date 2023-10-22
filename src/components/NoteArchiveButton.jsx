const NoteArchiveButton = ({ id, onArchive, isArchived }) => (
  <button
    onClick={onArchive(id)}
  >
    {isArchived ? 'Move to Active Section': 'Move to Archive Section'}
  </button>
);

export default NoteArchiveButton;
