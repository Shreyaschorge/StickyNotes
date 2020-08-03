import {
  GET_NOTES,
  ADD_NOTE,
  UPDATE_NOTE,
  DELETE_NOTE,
  SET_LOADING,
  SEARCH_NOTES,
  NOTES_ERRORS,
  SET_CURRENT,
  CLEAR_CURRENT,
} from '../actions/types';

const initialState = {
  notes: null,
  loading: false,
  current: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_NOTES:
      return {
        ...state,
        notes: action.payload,
        loading: false,
      };

    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload],
        loading: false,
      };

    case UPDATE_NOTE:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id ? action.payload : note
        ),
      };

    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload),
        loading: false,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case SEARCH_NOTES:
      return {
        ...state,
        notes: action.payload,
      };

    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };

    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };

    case NOTES_ERRORS:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
