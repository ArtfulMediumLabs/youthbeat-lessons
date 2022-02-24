import { emptyPattern } from './utils.js';

export const bassPattern = {
  innerCustomPattern: emptyPattern(),
  outerCustomPattern:
  {
    value: ['B', '-', '-', '-', '-', '-', '-', '-', 'B', '-', '-', '-', '-', '-', '-', '-', 'B', '-', '-', '-', '-', '-', '-', '-', 'B', '-', '-', '-', '-', '-', '-', '-'],
    amplitude: [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    duration: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  samplerCustomPattern: emptyPattern(),
};

export const bassSnarePattern = {
  innerCustomPattern: emptyPattern(),
  outerCustomPattern:
  {
    value: ['B', '-', '-', '-', '-', '-', '-', '-', 'S', '-', '-', '-', '-', '-', '-', '-', 'B', '-', '-', '-', '-', '-', '-', '-', 'S', '-', '-', '-', '-', '-', '-', '-'],
    amplitude: [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    duration: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  samplerCustomPattern: emptyPattern(),
};
export const bassSnareGapPattern = {
  innerCustomPattern: emptyPattern(),
  outerCustomPattern:
  {
    value: ['B', '-', '-', '-', '-', '-', '-', '-', 'S', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'S', '-', '-', '-', '-', '-', '-', '-'],
    amplitude: [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    duration: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  samplerCustomPattern: emptyPattern(),
};
export const bassSnareLongGapPattern = {
  innerCustomPattern: emptyPattern(),
  outerCustomPattern:
  {
    value: ['B', '-', '-', '-', '-', '-', '-', '-', 'S', '-', '-', '-', 'B', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'S', '-', '-', '-', '-', '-', '-', '-'],
    amplitude: [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    duration: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  samplerCustomPattern: emptyPattern(),
};
export const bassFirstBeatPattern = {
  innerCustomPattern: emptyPattern(),
  outerCustomPattern:
  {
    value: ['B', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
    amplitude: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    duration: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  samplerCustomPattern: emptyPattern(),
};

export const defaultMeta = {
  tempo: 90,
  volume: 60,
  mute: {bassSnare: true, hiHat: true, melody: true},
  chord: "",
  voice: "synth"
}

export const constructPattern = (innerCustomPattern, outerCustomPattern, samplerCustomPattern, meta = defaultMeta) => ({
  meta,
  innerCustomPattern,
  outerCustomPattern,
  samplerCustomPattern,
});
