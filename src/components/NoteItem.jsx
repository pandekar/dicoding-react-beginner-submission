const NoteItem = (props) => {
  const { title, body } = props;

  return (
    <div className="note-item">
      <h1>{title}</h1>
      <h3>{body}</h3>
    </div>
  );
}

export default NoteItem;
