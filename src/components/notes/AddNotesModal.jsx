import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';

import { addNote } from '../../actions/noteActions';

const AddNotesModal = ({ addNote }) => {
  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  const { title, content } = note;

  const onChange = (e) => setNote({ ...note, [e.target.name]: e.target.value });

  const onSubmit = () => {
    if (title === '' || content === '') {
      M.toast({ html: 'Please Enter title and content' });
    } else {
      const newNote = {
        title,
        content,
        date: new Date(),
      };

      addNote(newNote);

      M.toast({ html: 'New Note Added' });
    }
    setNote({
      title: '',
      content: '',
    });
  };

  return (
    <div
      id='add-note-modal'
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
          Add
        </a>
      </div>
    </div>
  );
};

AddNotesModal.propTypes = {
  addNote: PropTypes.func.isRequired,
};

const styles = {
  modalStyle: {
    width: '65%',
    height: '60%',
  },
  btnStyle: {
    marginRight: '30px',
  },
};

export default connect(null, { addNote })(AddNotesModal);
