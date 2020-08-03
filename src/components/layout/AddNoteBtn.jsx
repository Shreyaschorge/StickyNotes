import React from 'react';

const AddNoteBtn = () => {
  return (
    <div className='fixed-action-btn'>
      <a
        href='#add-note-modal'
        className='btn-floating btn-large waves-effect waves-light teal accent-4 modal-trigger'
      >
        <i className='material-icons'>add</i>
      </a>
    </div>
  );
};

export default AddNoteBtn;
