import React from 'react';
import moment from 'moment';

const NoteItem = ({ note }) => {
  const { id, title, content, date } = note;

  return (
    <a href='#!' className='clearfix'>
      <div className='card'>
        <div className='card-content'>
          <strong style={{ color: 'black' }}>{title}</strong>
          <p style={{ color: 'black' }}>{content.slice(0, 69)}...</p>
          <em>
            {' '}
            <small style={{ color: 'grey' }}>
              Created on {moment(date).format('MMMM Do YYYY, h:mm:ss a')}
            </small>
          </em>
        </div>
      </div>
    </a>
  );
};

export default NoteItem;
