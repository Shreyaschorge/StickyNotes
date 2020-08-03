import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setCurrent } from '../../actions/noteActions';

const NoteItem = ({ note, setCurrent }) => {
  const { title, content, date } = note;

  return (
    <a href='#!' className='clearfix' onClick={() => setCurrent(note)}>
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

NoteItem.propTypes = {
  setCurrent: PropTypes.func.isRequired,
};

export default connect(null, { setCurrent })(NoteItem);
