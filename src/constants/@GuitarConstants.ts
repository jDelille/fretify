import { Scale } from 'tonal';

export const GuitarConstants = Object.freeze({
  minimumFrets: 2,
  maximumFrets: 25,
  notesFlat: ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab'],
  notesSharp: ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'],
  tuning: [
    [7, 14, 10, 5, 12, 7],
    [6, 13, 9, 4, 11, 6],
    [7, 2, 11, 7, 2, 7],
    [7, 3, 10, 3, 10, 3],
    [5, 14, 10, 5, 10, 5],
    [5, 12, 9, 5, 12, 5],
    [7, 14, 10, 5, 12, 5],
  ],
  scaleNames: Scale.names(),
  tuningNames: [
    'Standard',
    'E Flat',
    'Open E',
    'Open C',
    'Open G',
    'Open D',
    'Drop D',
  ],
  guitars: [
    'acoustic_guitar_nylon',
    'acoustic_guitar_steel',
    'electric_guitar_clean',
    'electric_guitar_jazz',
    'electric_guitar_muted',
    'overdriven_guitar',
    'distortion_guitar',
    'guitar_harmonics',
  ],
});

export default GuitarConstants;
