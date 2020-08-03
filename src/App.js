import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import NavBar from './components/layout/NavBar';
import NoteList from './components/notes/NoteList';
import Note from './components/notes/Note';
import AddNotesModal from './components/notes/AddNotesModal';
import EditNotesModal from './components/notes/EditNotesModal';
import AddNoteBtn from './components/layout/AddNoteBtn';

import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });

  return (
    <Provider store={store}>
      <div className='row'>
        <div className='col s3' style={{ paddingLeft: '0px' }}>
          <NavBar />
          <NoteList />
        </div>
        <div className='col s9'>
          <Note />
        </div>
        <AddNoteBtn />
        <AddNotesModal />
        <EditNotesModal />
      </div>
    </Provider>
  );
};

export default App;
