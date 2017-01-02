import {
  KEY_PRESSED,
  KEY_RELEASED
} from '../actions/notes_actions';

import { NOTE_NAMES } from '../util/tones';

const notesReducer = (state = [], action) => {
  Object.freeze(state);
  const validNote = NOTE_NAMES.includes(action.key);
  const idx = state.indexOf(action.key);

  switch(action.type) {
    case KEY_PRESSED:
      if (validNote && idx === -1) {
        return [...state, action.key];
      } else return state;
    case KEY_RELEASED:
      if (idx !== -1) {
        return [...state.slice(0, idx), ...state.slice(idx + 1)];
      } else return state;
    default:
      return state;
  }
};

export default notesReducer;
