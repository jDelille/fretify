import { action, makeAutoObservable, computed } from 'mobx';
import { Scale } from 'tonal';

class MobxStore {
  rootNote: string;

  scale: string;

  tuning: string;

  constructor() {
    makeAutoObservable(this);
    this.rootNote = 'Ab';
    this.scale = 'Major Pentatonic';
    this.tuning = 'Standard Tuning';
  }

  get areNotesFlat() {
    const { notes } = Scale.get(`${this.rootNote} ${this.scale}`);
    const flatSymbol = 'b';
    return notes.some((note) => note.includes(flatSymbol));
  }

  setRootNote = (note: string) => {
    this.rootNote = note;
    localStorage.setItem('rootNote', note);
  };

  setScale = (scale: string) => {
    this.scale = scale;
    localStorage.setItem('scale', scale);
  };

  setTuning = (tuning: string) => {
    this.tuning = tuning;
    localStorage.setItem('tuning', tuning);
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
}

const Store = new MobxStore();
export default Store;
