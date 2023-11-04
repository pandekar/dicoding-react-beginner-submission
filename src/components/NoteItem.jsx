import PropTypes from 'prop-types';

const NoteItem = ({ title, body }) => (
  <div className="card note-item">
    <h1>{title}</h1>
    <h3>{body}</h3>
  </div>
);

NoteItem.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string
}

export default NoteItem;
