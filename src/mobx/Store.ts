import { action, makeAutoObservable, computed } from 'mobx';

class MobxStore {
  rootNote: string;

  scale: string;

  constructor() {
    makeAutoObservable(this);
    this.rootNote = 'Ab';
    this.scale = 'Major Pentatonic';
  }

  setRootNote = (note: string) => {
    this.rootNote = note;
    localStorage.setItem('rootNote', note);
  };

  setScale = (scale: string) => {
    this.scale = scale;
    localStorage.setItem('scale', scale);
  };
}

const Store = new MobxStore();
export default Store;
