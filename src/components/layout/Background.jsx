import React from 'react';
import image from '../../image/notes.svg';

const Background = () => {
  return (
    <div style={styles.wrapStyle}>
      <img src={image} alt='taking notes' style={styles.imgStyle} />
      <p style={styles.paraStyle}>_Sticky Notes_</p>
    </div>
  );
};

const styles = {
  wrapStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  imgStyle: {
    height: '400px',
    width: '400px',
    margin: '100px 0px 30px 0px',
  },
  paraStyle: {
    fontFamily: 'didot-w01-italic, serif',
    fontWeight: '400',
    fontSize: '30px',
    color: '#242323',
    fontStyle: 'italic',
    marginBottom: '0',
    transform: 'translateX(-40px)',
  },
};

export default Background;
