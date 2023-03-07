import { Scale } from 'tonal';
import Store from '../mobx/Store';

const roots = [
  { key: 'Ab' },
  { key: 'A' },
  { key: 'A' },
  { key: 'Bb' },
  { key: 'B' },
  { key: 'C' },
  { key: 'C#' },
  { key: 'Db' },
  { key: 'D' },
  { key: 'D#' },
  { key: 'Eb' },
  { key: 'E' },
  { key: 'F' },
  { key: 'F#' },
  { key: 'Gb' },
  { key: 'G' },
  { key: 'G#' },
];

export const GuitarScales = Object.freeze({
  scales: roots.map((scale) => ({
    ...scale,
    notes: Scale.get(`${scale.key} ${Store.scale}`).notes,
    triads: [1, 3, 5].map(Scale.degrees(`${scale.key} ${Store.scale}`)),
    powerChord: [1, 5].map(Scale.degrees(`${scale.key} ${Store.scale}`)),
    name: Store.getScaleName(scale.key, Store.scale),
    positions: Scale.get(`${scale.key} ${Store.scale}`).notes.some((note) =>
      note.includes('b')
    )
      ? [
          { start: 0, end: 3 },
          { start: 2, end: 6 },
          { start: 4, end: 8 },
          { start: 7, end: 10 },
          { start: 9, end: 13 },
          { start: 0, end: 24 },
        ]
      : [
          { start: 0, end: 4 },
          { start: 4, end: 7 },
          { start: 6, end: 10 },
          { start: 9, end: 12 },
          { start: 11, end: 15 },
          { start: 0, end: 24 },
        ],
  })),
});

export default GuitarScales;
