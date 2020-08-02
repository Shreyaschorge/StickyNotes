import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import M from 'materialize-css/dist/js/materialize.min';

import NavBar from './components/navbar/NavBar';

function App() {
  return (
    <div className='row'>
      <div className='col-md-4'>
        <NavBar />
      </div>
      <div className='fixed-action-btn'>
        <a className='btn-floating btn-large waves-effect waves-light teal accent-4'>
          <i className='material-icons'>add</i>
        </a>
      </div>
    </div>
  );
}

export default App;
