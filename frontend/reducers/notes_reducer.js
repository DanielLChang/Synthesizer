import {
  KEY_PRESSED,
  KEY_RELEASED,
} from '../actions/notes_actions';

import { NOTE_NAMES } from '../util/tones';

const notesReducer = (state = [], action) => {
  Object.freeze(state);
  // Check if key corresponds to a note frequency
  const validNote = NOTE_NAMES.includes(action.key);
  // Check to see if note is in previous state
  const idx = state.indexOf(action.key);

  switch (action.type) {
    case KEY_PRESSED:
      if (validNote && idx === -1) {
        return [...state, action.key];
      }
      return state;
    case KEY_RELEASED:
      if (idx !== -1) {
        return [...state.slice(0, idx), ...state.slice(idx + 1)];
      }
      return state;
    default:
      return state;
  }

};

export default notesReducer;
