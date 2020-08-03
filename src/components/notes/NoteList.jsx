import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getNotes } from '../../actions/noteActions';

import NoteItem from './NoteItem';
import Preloader from '../layout/Preloader';

const NoteList = ({ note: { notes, loading }, getNotes }) => {
  useEffect(() => {
    getNotes();
    // eslint-next-line-disable react-hooks/exhaustive-deps
  }, []);

  if (loading || notes === null) {
    return <Preloader />;
  }

  return (
    <Fragment>
      {!loading && notes.length === 0 ? (
        <h4>No Notes to Show</h4>
      ) : (
        notes.map((note) => <NoteItem note={note} key={note.id} />)
      )}
    </Fragment>
  );
};

NoteList.protoTypes = {
  getNotes: PropTypes.func.isRequired,
  note: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  note: state.note,
});

export default connect(mapStateToProps, { getNotes })(NoteList);
