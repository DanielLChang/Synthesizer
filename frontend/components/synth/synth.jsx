import React from 'react';
import $ from 'jquery';
import { NOTE_NAMES, TONES } from '../../util/tones';
import Note from '../../util/note';

class Synth extends React.Component {
  constructor(props) {
    super(props);
    this.notes = NOTE_NAMES.map(note => new Note(TONES[note]));
  }

  onKeyDown(e) {
    this.props.keyReleased(e.key);
  }

  onKeyUp(e) {
    this.props.keyPressed(e.key);
  }

  componentDidMount() {
    $(document).on('keydown', e => this.onKeyDown(e));
    $(document).on('keyup', e => this.onKeyUp(e));
  }

  playNotes() {
    NOTE_NAMES.forEach((note, idx) => {
      if (this.props.notes.indexOf(note) !== -1) {
        this.notes[idx].start();
      } else this.notes[idx].stop();
    });
  }

  render() {
    this.playNotes();
    const noteKeys = NOTE_NAMES.map((note, idx) => (
      <NoteKey key={idx} note={note} pressed={this.props.notes.includes(note)}/>
    ));

    return (
      <div>
        {noteKeys}
      </div>
    );
  }
}

export default Synth;
