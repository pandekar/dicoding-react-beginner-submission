import PropTypes from 'prop-types';

import { NoteItem } from './index'
import NoteDeleteButton from './NoteDeleteButton';
import NoteArchiveButton from './NoteArchiveButton';

const NoteItemWithAction = (props) => {
  const {
    title, body, id, onDelete, onArchive, archived
  } = props;

  return (
    <div className='card note-item-with-action'>
      <NoteItem title={title} body={body} />
      <div className='action-button-container'>
        <NoteArchiveButton id={id} onArchive={onArchive} isArchived={archived} />
        <NoteDeleteButton id={id} onDelete={onDelete} />
      </div>
    </div>
  );
};

NoteItemWithAction.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
  archived: PropTypes.bool,
  onArchive: PropTypes.func,
  onDelete: PropTypes.func
}

export default NoteItemWithAction;
