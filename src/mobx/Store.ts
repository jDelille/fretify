import { action, makeAutoObservable, computed } from 'mobx';
import { Scale } from 'tonal';
import { GuitarConstants } from '../constants/@GuitarConstants';

class MobxStore {
  rootNote: string;

  scale: string;

  tuning: string;

  isTriadVisible: boolean;

  isRootNoteVisible: boolean;

  isPowerchordVisible: boolean;

  tuningIndex: number;

  sound: string;

  isFretboardFlipped: boolean;

  isStringsFlipped: boolean;

  position: number;

  numberOfFrets: number;

  constructor() {
    makeAutoObservable(this);
    this.rootNote = 'A';
    this.scale = 'major pentatonic';
    this.tuning = 'Standard';
    this.isTriadVisible = true;
    this.isRootNoteVisible = true;
    this.isPowerchordVisible = false;
    this.tuningIndex = 0;
    this.sound = 'acoustic_guitar_nylon';
    this.isFretboardFlipped = false;
    this.isStringsFlipped = false;
    this.position = 6;
    this.numberOfFrets = 21;
  }

  get areNotesFlat() {
    const { notes } = Scale.get(`${this.rootNote} ${this.scale}`);
    const flatSymbol = 'b';
    return notes.some((note) => note.includes(flatSymbol));
  }

  get isPositionActive() {
    return this.position !== 6;
  }

  setRootNote = (note: string) => {
    this.rootNote = note;
    localStorage.setItem('rootNote', note);
  };

  setScale = (scale: string) => {
    this.scale = scale;
    localStorage.setItem('scale', scale);
  };

  setSound = (sound: string) => {
    this.sound = sound;
    localStorage.setItem('sound', sound);
  };

  setNumberOfFrets = (numberOfFrets: number) => {
    this.numberOfFrets = numberOfFrets;
  };

  setTuning = (tuning: string) => {
    const tuningIndex = GuitarConstants.tuningNames.indexOf(tuning);
    this.tuningIndex = tuningIndex;
    this.tuning = tuning;
    localStorage.setItem('tuning', tuning);
  };

  toggleTriadVisibility = (boolean: boolean) => {
    // this.isPowerchordVisible = false;
    this.isTriadVisible = boolean;
    localStorage.setItem('triads', JSON.stringify(boolean));
  };

  toggleRootNoteVisibility = (boolean: boolean) => {
    this.isRootNoteVisible = boolean;
    localStorage.setItem('storedRootNoteVisibility', JSON.stringify(boolean));
  };

  togglePowerchordVisibility = (boolean: boolean) => {
    // this.isTriadVisible = false;
    this.isPowerchordVisible = boolean;
    localStorage.setItem('powerchord', JSON.stringify(boolean));
  };

  getScaleName = (key: string, currentScale?: string) => {
    if (!currentScale) {
      const scaleName = key
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      return scaleName;
    }

    const { type } = Scale.get(`${key} ${this.scale}`);
    const capitalizedType = type
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    return capitalizedType;
  };

  setFlippedFretboard = (boolean: boolean) => {
    this.isFretboardFlipped = boolean;
  };

  setFlippedStrings = (boolean: boolean) => {
    this.isStringsFlipped = boolean;
  };

  setPosition = (position: number) => {
    this.position = position;
    localStorage.setItem('position', position.toString());
  };
}

const Store = new MobxStore();
export default Store;
