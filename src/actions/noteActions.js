import {
  GET_NOTES,
  NOTES_ERRORS,
  SET_LOADING,
  SEARCH_NOTES,
  ADD_NOTE,
  SET_CURRENT,
  CLEAR_CURRENT,
  DELETE_NOTE,
  UPDATE_NOTE,
} from './types';

// Get all notes
export const getNotes = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch('https://radiant-stream-39786.herokuapp.com/notes');
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

    const res = await fetch(
      'https://radiant-stream-39786.herokuapp.com/notes',
      {
        method: 'POST',
        body: JSON.stringify(note),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
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

// Update note
export const updateNote = (note) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch(
      `https://radiant-stream-39786.herokuapp.com/notes/${note.id}`,
      {
        method: 'PUT',
        body: JSON.stringify(note),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const data = await res.json();

    dispatch({
      type: UPDATE_NOTE,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: NOTES_ERRORS,
      payload: err.response,
    });
  }
};

// delete note
export const deleteNote = (id) => async (dispatch) => {
  try {
    setLoading();

    await fetch(`https://radiant-stream-39786.herokuapp.com/notes/${id}`, {
      method: 'DELETE',
    });

    dispatch({
      type: DELETE_NOTE,
      payload: id,
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

    const res = await fetch(
      `https://radiant-stream-39786.herokuapp.com/notes?q=${text}`
    );
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

// Set current note
export const setCurrent = (note) => {
  return {
    type: SET_CURRENT,
    payload: note,
  };
};

// Clear current note
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};

// set Loading
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
