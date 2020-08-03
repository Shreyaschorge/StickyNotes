import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';

import { updateNote, clearCurrent } from '../../actions/noteActions';

const EditNotesModal = ({ updateNote, current, clearCurrent }) => {
  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  useEffect(
    () => {
      if (current) {
        setNote({ title: current.title, content: current.content });
      }
    },
    // eslint-next-line-disable
    [current]
  );

  const { title, content } = note;

  const onChange = (e) => setNote({ ...note, [e.target.name]: e.target.value });

  const onSubmit = () => {
    if (title === '' || content === '') {
      M.toast({ html: 'Please Enter title and content' });
    } else {
      const newNote = {
        id: current.id,
        title,
        content,
        date: new Date(),
      };

      updateNote(newNote);

      M.toast({ html: 'Note Updated' });
      clearCurrent();
    }
  };

  return (
    <div
      id='edit-note-modal'
      className='modal rounded'
      style={styles.modalStyle}
    >
      <div className='modal-content'>
        <h4>Sticky Notes</h4>
        <input
          type='text'
          name='title'
          value={title}
          onChange={onChange}
          placeholder='Title'
        />
        <textarea
          name='content'
          value={content}
          placeholder='Content'
          onChange={onChange}
          id='textarea1'
          className='materialize-textarea'
        ></textarea>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          className='waves-effect waves-light btn teal accent-4'
          style={styles.btnStyle}
          onClick={onSubmit}
        >
          Update
        </a>
      </div>
    </div>
  );
};

EditNotesModal.propTypes = {
  clearCurrent: PropTypes.func.isRequired,
  updateNote: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  current: state.note.current,
});

const styles = {
  modalStyle: {
    width: '65%',
    height: '60%',
  },
  btnStyle: {
    marginRight: '30px',
  },
};

export default connect(mapStateToProps, { updateNote, clearCurrent })(
  EditNotesModal
);
