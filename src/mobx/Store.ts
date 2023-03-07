import { action, makeAutoObservable, computed } from 'mobx';

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
}

const Store = new MobxStore();
export default Store;
