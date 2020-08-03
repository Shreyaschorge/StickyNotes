import {
  GET_NOTES,
  NOTES_ERRORS,
  SET_LOADING,
  SEARCH_NOTES,
  ADD_NOTE,
} from './types';

// Get all notes
export const getNotes = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch('http://localhost:5000/notes');
    const data = await res.json();
    dispatch({
      type: GET_NOTES,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: NOTES_ERRORS,
      payload: err.response.statusText,
    });
  }
};

// add note
export const addNote = (note) => async (dispatch) => {
  try {
    setLoading();
    console.log('addNote');

    const res = await fetch('http://localhost:5000/notes', {
      method: 'POST',
      body: JSON.stringify(note),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();

    dispatch({
      type: ADD_NOTE,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: NOTES_ERRORS,
      payload: err.response.statusText,
    });
  }
};

// search note
export const searchNotes = (text) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch(`http://localhost:5000/notes?q=${text}`);
    const data = await res.json();

    dispatch({
      type: SEARCH_NOTES,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: NOTES_ERRORS,
      payload: err.response.statusText,
    });
  }
};

// set Loading
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
