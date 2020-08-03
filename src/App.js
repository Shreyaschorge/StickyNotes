import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
// import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/layout/NavBar';
import NoteList from './components/notes/NoteList';
import Note from './components/notes/Note';
import AddNotesModal from './components/notes/AddNotesModal';
import EditNotesModal from './components/notes/EditNotesModal';

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
          <div style={{ padding: '10px' }} className='overflow-auto'>
            <NoteList />
          </div>
        </div>
        <div className='col s9'>
          <Note />
        </div>
        <div className='fixed-action-btn'>
          <a
            href='#add-note-modal'
            className='btn-floating btn-large waves-effect waves-light teal accent-4 modal-trigger'
          >
            <i className='material-icons'>add</i>
          </a>
          <AddNotesModal />
          <EditNotesModal />
        </div>
      </div>
    </Provider>
  );
};

export default App;
