import React from 'react';
import { NOTE_NAMES, TONES } from '../../util/tones';
import Note from '../../util/note';

import Notekey from './note_key';

class Synth extends React.Component {
  constructor(props) {
    super(props);
    this.notes = NOTE_NAMES.map(note => new Note(TONES[note]));
  }

  componentDidMount() {
    document.addEventListener('keydown', (e) => this.onKeyDown(e));
    document.addEventListener('keyup', (e) => this.onKeyUp(e));
  }

  onKeyDown(e) {
    this.props.keyPressed(e.key);
  }

  onKeyUp(e) {
    this.props.keyReleased(e.key);
  }

  playNotes() {
    for (let i = 0; i < NOTE_NAMES.length; i++) {
      const note = NOTE_NAMES[i];

      if (this.props.notes.indexOf(note) !== -1) {
        this.notes[i].start();
      } else {
        this.notes[i].stop();
      }
    }
  }

  render() {
    this.playNotes();
    const noteKeys = NOTE_NAMES.map((note, idx) => (
      <Notekey key={idx} note={note} pressed={this.props.notes.includes(note)}/>
    ));

    return (
      <div>
        <div>Synth</div>
        { noteKeys }
      </div>

    );
  }
}

export default Synth;
