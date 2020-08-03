import {
  GET_NOTES,
  SET_LOADING,
  SEARCH_NOTES,
  ADD_NOTE,
  NOTES_ERRORS,
} from '../actions/types';

const initialState = {
  notes: null,
  loading: false,
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

    case NOTES_ERRORS:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
