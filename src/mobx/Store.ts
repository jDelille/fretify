import { action, makeAutoObservable, computed } from 'mobx';

class MobxStore {
  rootNote: string;

  constructor() {
    makeAutoObservable(this);
    this.rootNote = 'Ab';
  }

  setRootNote = (note: string) => {
    this.rootNote = note;
    localStorage.setItem('rootNote', note);
  };
}

const Store = new MobxStore();
export default Store;
