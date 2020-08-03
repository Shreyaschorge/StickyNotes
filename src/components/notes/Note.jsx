import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';

import { deleteNote, clearCurrent } from '../../actions/noteActions';

import Background from '../layout/Background';

const Note = ({ note: { current }, deleteNote, clearCurrent }) => {
  const onDelete = () => {
    deleteNote(current.id);
    M.toast({ html: 'Note Deleted' });
    clearCurrent();
  };

  const back = () => {
    clearCurrent();
  };

  if (current === null) {
    return <Background />;
  }

  return (
    <div style={{ padding: '19px 35px 30px 0px' }}>
      <a href='#!' onClick={back}>
        <i className='material-icons' style={{ fontSize: '50px' }}>
          chevron_left
        </i>
      </a>
      <div className='card'>
        <div className='card-content'>
          <span className='card-title'> {current.title}</span>
          <p>{current.content}</p>
        </div>
        <a
          href='#edit-note-modal'
          className='btn-floating halfway-fab waves-effect waves-light teal accent-4 modal-trigger'
          style={{ margin: '0px 50px 0px 0px' }}
        >
          <i className='material-icons'>create</i>
        </a>
        <a
          href='#!'
          className='btn-floating halfway-fab waves-effect waves-light red'
          onClick={onDelete}
        >
          <i className='material-icons'>delete</i>
        </a>
      </div>
    </div>
  );
};

Note.propTypes = {
  note: PropTypes.object.isRequired,
  deleteNote: PropTypes.func.isRequired,
  clearCurrent: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  note: state.note,
});

export default connect(mapStateToProps, { deleteNote, clearCurrent })(Note);
