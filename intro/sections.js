import * as patterns from '../patterns.js';
import { widgets } from '../constants.js';
import { emptyPattern } from '../utils.js';

/*
 * constructActionSteps - method that constructs the HTML layout of an action step component
 *
 * Arguments:
 * actions: string[];
 * description: string;
 *
 * Returns: string
 */
const constructActionSteps = (actions, description = '') => `
  <section class="action-steps">
    <header class="action-steps__header">
      <h4 class="action-steps__heading">Action Steps</h4>
    </header>
    <div class="action-steps__content">
      ${description && `<p class="action-steps__description">${description}</p>`}
      <ul class="action-steps__content-list">
        ${
  actions.map((action) => `<li>${action}</li>`).join(' ')
}
      </ul>
    </div>
  </section>
  `;

/*
* Activity Schema:
*
* title: string;
* content: string;
* pattern?: { innerCustomPattern: any; outerCustomPattern: any; samplerCustomPattern: any;}
* widgets?: {type: 'did-you-know' | 'math-connection'; content: string}[];
*
*/

/*
*
* Section Schema:
* title: string;
* key: string;
* activities: {[key: number]: Activity};
*
*/

/*
* sections - dictionary of sections, where each have the Section schema
*
*/

export const sections = {
  BASICS: {
    title: '8 Basics You Need To Know',
    activities: {
      1: {
        title: 'Music\'s built up in layers, starting with the drum',
        content:
          `
          <ul>
            <li>The Mute tool lets you hear how the layers work together.</li>
            <li>Press Play then tick each of the layers one by one.</li>
            <li>Tick a chord in the list at top right.</li>
            <li>Listen to how the drum, hi hat, chord, and melody fit together.</li>
            <li>Press Play again to stop.</li>
          </ul>
          `,
          pattern: patterns.constructPattern(
            {
              value: Array(32).fill('-').map((e, i) => ([0, 6, 12, 18, 24, 28].includes(i) ? 'H' : '-')),
              amplitude: Array(32).fill(0).map((e, i) => ([0, 6, 12, 18, 24, 28].includes(i) ? 1 : 0)),
              duration: Array(32).fill(0),
            },
            {
              // eslint-disable-next-line no-nested-ternary
              value: Array(32).fill('-').map((e, i) => ([0, 16].includes(i) ? 'B' : ([8, 22].includes(i) ? 'S' : '-'))),
              amplitude: Array(32).fill(0).map((e, i) => ([0, 16, 8, 22].includes(i) ? 1 : 0)),
              duration: Array(32).fill(0),
            },
            {
              value: ['E4', '-', '-', '-', '-', '-', 'D4', '-', '-', '-', '-', '-', 'E4', '-', '-', '-', '-', '-', 'E4', '-', 'D4', '-', '-', '-', 'B3', '-', '-', '-', '-', '-', '-', '-'],
              amplitude: [3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0],
              duration: [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
            },
            {
              tempo: 90,
              volume: 60,
              mute: { bassSnare: true, hiHat: true, melody: true },
              chord: '',
              voice: 'synth',
            },
          ),
      },
      2: {
        title: 'What can you do with drum notes?',
        content:
          `
          <ul>
            <li>Make them louder (tap more than once)</li>
            <li>Delete them (click 3 times)</li>
            <li>Change instrument (click a different drum then the note)</li>
            <li>Double a note</li>
            <li>Add a row of notes in one part of the pattern</li>
            <li>To clear the pattern, press Reset at top left</li>
          </ul>
          `,
        pattern: patterns.constructPattern(
          emptyPattern(),
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => ([0, 6, 12, 22].includes(i) ? 'B' : ([24, 28].includes(i) ? 'S' : '-'))),
            amplitude: Array(32).fill(0).map((e, i) => ([0, 6, 12, 22, 24, 28].includes(i) ? 1 : 0)),
            duration: Array(32).fill(0),
          },
          emptyPattern(),
        ),
        activeInstrument: 'B'
      },
      3: {
        title: 'What can you do with hi hat notes?',
        content:
          `
          <ul>
            <li>Delete a note to make a gap (tap 3 times)</li>
            <li>Fill in the spaces between the last snare drum sound and the top of the circle to make the music pick up energy</li>
            <li>Change the hi hat note before the last snare to "Open Hi Hat"</li>
            <li>Listen to how each edit changes the way you hear the drum pattern.</li>
          </ul>
        `,
        pattern: patterns.constructPattern(
          {
            value: Array(32).fill('-').map((e, i) => ([4, 12, 20, 28].includes(i) ? 'H' : '-')),
            amplitude: Array(32).fill(0).map((e, i) => ([4, 12, 20, 28].includes(i) ? 1 : 0)),
            duration: Array(32).fill(0),
          },
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => ([0, 16].includes(i) ? 'B' : ([8, 22].includes(i) ? 'S' : '-'))),
            amplitude: Array(32).fill(0).map((e, i) => ([0, 16, 8, 22].includes(i) ? 1 : 0)),
            duration: Array(32).fill(0),
          },
          emptyPattern(),
        ),
        activeInstrument: 'H'
      },
      4: {
        title: 'What can you do with melody notes?',
        content:
          `
          <ul>
            <li>Delete a note (click several times)</li>
            <li>Make the note right before the one you deleted away longer (tap more than once)</li>
            <li>Change pitch (how high or low the note sounds): click/hold/scroll up and down</li>
            <li>Put in a bigger leap in pitch somewhere that stands out in the melody</li>
          </ul>
          `,
        pattern: patterns.constructPattern(
          {
            value: Array(32).fill('-').map((e, i) => ([0, 6, 12, 18, 24, 28].includes(i) ? 'H' : '-')),
            amplitude: Array(32).fill(0).map((e, i) => ([0, 6, 12, 18, 24, 28].includes(i) ? 1 : 0)),
            duration: Array(32).fill(0),
          },
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => ([0, 16].includes(i) ? 'B' : ([8, 22].includes(i) ? 'S' : '-'))),
            amplitude: Array(32).fill(0).map((e, i) => ([0, 16, 8, 22].includes(i) ? 1 : 0)),
            duration: Array(32).fill(0),
          },
          {
            value: ['E4', '-', '-', '-', '-', '-', 'D4', '-', '-', '-', '-', '-', 'E4', '-', '-', '-', '-', '-', 'E4', '-', 'D4', '-', '-', '-', 'B3', '-', '-', '-', '-', '-', '-', '-'],
            amplitude: [3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0],
            duration: [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
          },
          {
            tempo: 90,
            volume: 60,
            mute: { bassSnare: true, hiHat: true, melody: true },
            chord: 'B1',
            voice: 'synth',
          },
        ),
        activeInstrument: 'B3'
      },
      5: {
        title: 'What can you do with chords (blended pitches played at the same time)?',
        content:
          `
            <ul>
              <li>Create a mood: compare Bm ("minor"), then D ("major"). Which is brighter? Which is sadder?</li>
              <li>Choose 3 chords and play them in a row, then repeat the pattern.</li>
              <li>Turn chords into a kind of melody: make a 4-chord pattern using Bm/Em, D, Asus, and G.</li>
            </ul>
          `,
        pattern: patterns.constructPattern(
          {
            value: Array(32).fill('-').map((e, i) => ([4, 10, 20, 26].includes(i) ? 'H' : '-')),
            amplitude: Array(32).fill(0).map((e, i) => ([4, 10, 20, 26].includes(i) ? 1 : 0)),
            duration: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => ([0, 28, 30].includes(i) ? 'B' : ([6, 14, 18, 24].includes(i) ? 'S' : '-'))),
            amplitude: Array(32).fill(0).map((e, i) => ([0, 28, 30, 6, 14, 18, 24].includes(i) ? 1 : 0)),
            duration: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
          emptyPattern(),
        ),
      },
      6: {
        title: 'Find the right tempo (speed) and volume (loudness)',
        content:
          `
            <ul>
              <li>Click/hold/slide the Tempo slider to play this pattern faster or slower</li>
              <li>Click/hold/slide the Volume slider to make the whole pattern louder or softer</li>
              <li>Make a faster tempo louder, and slower one softer</li>
            </ul>
          `,
        pattern: patterns.constructPattern(
          {
            value: Array(32).fill('-').map((e, i) => ([4, 6, 10, 12, 18, 20, 26, 28].includes(i) ? 'H' : '-')),
            amplitude: Array(32).fill(0).map((e, i) => ([4, 6, 10, 12, 18, 20, 26, 28].includes(i) ? 1 : 0)),
            duration: Array(32).fill(0),
          },
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => ([0, 16, 18].includes(i) ? 'B' : ([8, 22].includes(i) ? 'S' : '-'))),
            amplitude: Array(32).fill(0).map((e, i) => ([0, 18, 8, 22].includes(i) ? 1 : ([16].includes(i) ? 2 : 0))),
            duration: Array(32).fill(0),
          },
          emptyPattern(),
          ),
      },
      7: {
        title: 'There\'s nothing worse than forgetting to save an idea you really like',
        content:
          `
            <ul>
              <li>Make a 2-3 changes to this pattern - delete or move a note, or add hi hat notes. Press "Save Pattern" after each change.</li>
              <li>Now press "Save Set"</li>
              <li>Press "Load Set" to reload later. You can save up to 8 patterns in a set.</li>
            </ul>
          `,
        pattern: patterns.constructPattern(
          emptyPattern(),
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => ([0, 14].includes(i) ? 'B' : ([8, 20].includes(i) ? 'S' : '-'))),
            amplitude: Array(32).fill(0).map((e, i) => ([0, 14, 8, 20].includes(i) ? 1 : 0)),
            duration: Array(32).fill(0),
          },
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => {
              if ([4, 8, 14, 18].includes(i)) return 'E4';
              if ([12, 22, 30].includes(i)) return 'D4';
              if ([26].includes(i)) return 'B3';
              return '-';
            }),
            amplitude: Array(32).fill(0).map((e, i) => ([0, 14, 8, 20, 12, 22, 30, 26].includes(i) ? 3 : 0)),
            duration: Array(32).fill(0).map((e, i) => {
              if ([4, 8, 18].includes(i)) return 1;
              if ([12, 22, 30].includes(i)) return 1;
              if ([26].includes(i)) return 1;
              if ([14].includes(i)) return 2;
              return 0;
            })
          },
          {
            tempo: 90,
            volume: 60,
            mute: { bassSnare: true, hiHat: true, melody: true },
            chord: 'B1',
            voice: 'synth',
          },
        ),
      },
      8: {
        title: 'How Do You Play Longer Sections of Music?',
        content:
          `
          <ul>
            <li>Make a few changes to this idea: delete a note, or change a pitch. Save each.</li>
            <li>Enter patterns in the Sequencer in the order you want by clicking the + symbol beside each pattern</li>
            <li>Press Start, then Play to listen. Press Stop, then Clear to re-enter them.</li>
          </ul>
          `,
        pattern: patterns.constructPattern(
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => ([0, 6, 12, 20, 24, 28].includes(i) ? 'H' : '-')),
            amplitude: Array(32).fill(0).map((e, i) => ([0, 6, 12, 20, 24, 28].includes(i) ? 1 : 0)),
            duration: Array(32).fill(0),
          },
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => ([0, 16].includes(i) ? 'B' : ([8, 22].includes(i) ? 'S' : '-'))),
            amplitude: Array(32).fill(0).map((e, i) => ([0, 14, 8, 22].includes(i) ? 1 : 0)),
            duration: Array(32).fill(0),
          },
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => {
              if ([0].includes(i)) return 'D4';
              if ([16, 28].includes(i)) return 'F#4';
              if ([22].includes(i)) return 'E4';
              return '-';
            }),
            amplitude: Array(32).fill(0).map((e, i) => ([0, 16, 28, 22].includes(i) ? 3 : 0)),
            duration: Array(32).fill(0).map((e, i) => {
              if ([0].includes(i)) return 4;
              if ([16, 28].includes(i)) return 1;
              if ([22].includes(i)) return 1;
              return 0;
            })
          },
          {
            tempo: 90,
            volume: 60,
            mute: { bassSnare: true, hiHat: true, melody: true },
            chord: 'D2',
            voice: 'synth',
          },
        ),
      },
    },
  },
  MUSIC_CREATION: {
    title: '8 Tips on Making Engaging Music',
    activities: {
      1: {
        title: 'Let your music breathe',
        content:
          `
          <ul>
            <li>More notes = more energy</li>
            <li>But if all the spaces are filled in, nothing stands out</li>
            <li>To get us to pay attention, put a gap in the music</li>
            <li>Listen to this idea, then delete notes right before and after part of it</li>
            <li>It's still got energy, but now you hear something you missed before</li>
          </ul>          
          `,
        pattern: patterns.constructPattern(
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => (i % 2 == 0 ? 'H' : '-')),
            amplitude: Array(32).fill(0).map((e, i) => (i % 2 == 0 ? 1 : 0)),
            duration: Array(32).fill(0),
          },
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => ([0, 14].includes(i) ? 'B' : ([8, 24].includes(i) ? 'S' : '-'))),
            amplitude: Array(32).fill(0).map((e, i) => ([0, 14, 8, 24].includes(i) ? 1 : 0)),
            duration: Array(32).fill(0),
          },
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => {
              if ([0, 20, 24].includes(i)) return 'E4';
              if ([2,4,6,8].includes(i)) return 'F#4';
              if ([10,12,22,26].includes(i)) return 'D4';
              if ([14,16,18,28,30].includes(i)) return 'B3';
              return '-';
            }),
            amplitude: Array(32).fill(0).map((e, i) => (i % 2 == 0 ? 3 : 0)),
            duration: Array(32).fill(0).map((e, i) => (i % 2 == 0 ? 1 : 0))
          },
          {
            tempo: 90,
            volume: 60,
            mute: { bassSnare: true, hiHat: true, melody: true },
            chord: 'B1',
            voice: 'synth',
          },
        ),
        activeInstrument: 'B3',
      },
      2: {
        title: 'Make sure we always hear the steady beat',
        content:
          `
          <ul>
            <li>The steady drum beat helps us count the music.</li>
            <li>Always start with this pattern.</li>
            <li>Mix it up a bit, but make sure we can still hear the beat.</li>
            <li>Try moving one of the beats above one space early or late.</li>
            <li>Now try moving it 2 spaces, can you still hear the beat?</li>
          </ul>          
          `,
        pattern: patterns.constructPattern(
          emptyPattern(),
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => (i % 8 == 0 ? 'B' : '-')),
            amplitude: Array(32).fill(0).map((e, i) => (i % 8 == 0 ? 1 : 0)),
            duration: Array(32).fill(0),
          },
          emptyPattern(),
        ),
        activeInstrument: 'B',
      },
      3: {
        title: 'Use the backbeat to make your rhythm patterns easier to follow',
        content:
          `
          <ul>
            <li>This is called the BackBeat. It’s like the audience clapping back the 1st and 3rd beats.</li>
            <li>It puts the beat into pairs: Bass Drum-Snare Drum, Bass Drum-Snare Drum.</li>
            <li>This helps listeners follow rhythms by comparing the pairs.</li>
            <li>Move the 3rd or 4th beat one space earlier or later to hear the difference.</li>
          </ul>          
          `,
        pattern: patterns.constructPattern(
          emptyPattern(),
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => (i % 16 == 0 ? 'B' : ((i + 8) % 16 == 0 ? 'S' : '-'))),
            amplitude: Array(32).fill(0).map((e, i) => (i % 16 == 0 || (i + 8) % 16 == 0 ? 1 : 0)),
            duration: Array(32).fill(0),
          },
          emptyPattern(),
        ),
        activeInstrument: 'S',
      },
      4: {
        title: 'Repeat anything you don\'t catch the first time',
        content:
          `
          <ul>
            <li>Make this drum pattern more complicated: move 2 beats one space early or late. Add a note between beats.</li>
            <li>See if you can 'get' it the first time you hear it. How many times do you need to hear it before you do?</li>
            <li>Your listeners will need to hear it at least that many times!</li>
          </ul>          
          `,
        pattern: patterns.constructPattern(
          emptyPattern(),
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => (i % 16 == 0 ? 'B' : ((i + 8) % 16 == 0 ? 'S' : '-'))),
            amplitude: Array(32).fill(0).map((e, i) => (i % 16 == 0 || (i + 8) % 16 == 0 ? 1 : 0)),
            duration: Array(32).fill(0),
          },
          emptyPattern(),
        ),
        activeInstrument: 'S',
      },
      5: {
        title: 'With melody, less is more',
        content:
          `
          <ul>
            <li>Hit melodies start with just a few pitches.</li>
            <li>Enter pitches in the outer circle on 3-5 drum/hi hat spaces (click/hold/scroll to change pitch)</li>
            <li>Make one note longer (click 1-3 times)</li>
            <li>Give your melody at least one change in direction</li>
            <li>Everything you do stands out in a melody with just a few notes!</li>
          </ul>          
          `,
        pattern: patterns.constructPattern(
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => ((i + 4) % 8 == 0 ? 'H' : '-')),
            amplitude: Array(32).fill(0).map((e, i) => ((i + 4) % 8 == 0 ? 1 : 0)),
            duration: Array(32).fill(0),
          },
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => ([0, 16].includes(i) ? 'B' : ([8, 22].includes(i) ? 'S' : '-'))),
            amplitude: Array(32).fill(0).map((e, i) => ([0, 16, 8, 22].includes(i) ? 1 : 0)),
            duration: Array(32).fill(0),
          },
          emptyPattern(),
        ),
        activeInstrument: 'B3',
      },
      6: {
        title: 'The melody and chord talk to each other',
        content:
          `
          <ul>
            <li>We hear the melody against the backdrop of the chord.</li>
            <li>Enter  3-5 melody pitches on drum/hi hat spaces</li>
            <li>Put all the pitches on white lines (so they sync with the chord)</li>
            <li>Now make one pitch clash by putting it between white lines</li>
          </ul>          
          `,
        pattern: patterns.constructPattern(
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => ((i + 4) % 8 == 0 ? 'H' : '-')),
            amplitude: Array(32).fill(0).map((e, i) => ((i + 4) % 8 == 0 ? 1 : 0)),
            duration: Array(32).fill(0),
          },
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => ([0, 16].includes(i) ? 'B' : ([8, 22].includes(i) ? 'S' : '-'))),
            amplitude: Array(32).fill(0).map((e, i) => ([0, 16, 8, 22].includes(i) ? 1 : 0)),
            duration: Array(32).fill(0),
          },
          emptyPattern(),
          {
            tempo: 90,
            volume: 60,
            mute: { bassSnare: true, hiHat: true, melody: true },
            chord: 'B1',
            voice: 'synth',
          },
        ),
        activeInstrument: 'B3',
      },
      7: {
        title: 'Good ideas happen when you work fast',
        content:
          `
          <ul>
            <li>Tick Mirror Horizontal and enter a drum pattern</li>
            <li>Next, rotate the melody one or more times by pressing Melody +90</li>
            <li>Now make one pitch longer</li>
            <li>This creates an idea that's so different, you could use it as the Chorus to a Verse</li>
            <li>In the full app, to get to Mirror and Rotation tools, click Note Entry at bottom left to reach Special Tools.</li>
          </ul>
          `,
        pattern: patterns.constructPattern(
          {
            value: Array(32).fill('-').map((e, i) => ([0, 6, 12, 18, 24, 28].includes(i) ? 'H' : '-')),
            amplitude: Array(32).fill(0).map((e, i) => ([0, 6, 12, 18, 24, 28].includes(i) ? 1 : 0)),
            duration: Array(32).fill(0),
          },
          emptyPattern(),
          {
            value: ['E4', '-', '-', '-', '-', '-', 'D4', '-', '-', '-', '-', '-', 'E4', '-', '-', '-', '-', '-', 'E4', '-', 'D4', '-', '-', '-', 'B3', '-', '-', '-', '-', '-', '-', '-'],
            amplitude: [3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0],
            duration: [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
          },
          {
            tempo: 90,
            volume: 60,
            mute: { bassSnare: true, hiHat: true, melody: true },
            chord: 'B1',
            voice: 'synth',
          },
        ),
        activeInstrument: 'B',
        features: ['mirror', 'rotate'],
      },
      8: {
        title: 'Build longer songs up in pairs of bars',
        content:
          `
          <ul>
            <li>Make a few small changes to this idea (saving each): delete a note, move a note, make the melody go down at the end</li>
            <li>Next, make a couple of bigger changes (saving each): change chord, change drum pattern</li>
            <li>Play the first pattern 2x, then the 1st & 2nd, 2nd & 3rd, 3rd & 4th, and so on.</li>
            <li>This makes it easier to follow the changes.</li>
          </ul>
          <p>You'll find many more tips in our full YouthBeat tutorials. Happy music making!</p>
          `,
        pattern: patterns.constructPattern(
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => ([0, 6, 12, 20, 24, 28].includes(i) ? 'H' : '-')),
            amplitude: Array(32).fill(0).map((e, i) => ([0, 6, 12, 20, 24, 28].includes(i) ? 1 : 0)),
            duration: Array(32).fill(0),
          },
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => ([0, 16].includes(i) ? 'B' : ([8, 22].includes(i) ? 'S' : '-'))),
            amplitude: Array(32).fill(0).map((e, i) => ([0, 14, 8, 22].includes(i) ? 1 : 0)),
            duration: Array(32).fill(0),
          },
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => {
              if ([0].includes(i)) return 'D4';
              if ([16, 28].includes(i)) return 'F#4';
              if ([22].includes(i)) return 'E4';
              return '-';
            }),
            amplitude: Array(32).fill(0).map((e, i) => ([0, 16, 28, 22].includes(i) ? 3 : 0)),
            duration: Array(32).fill(0).map((e, i) => {
              if ([0].includes(i)) return 4;
              if ([16, 28].includes(i)) return 1;
              if ([22].includes(i)) return 1;
              return 0;
            })
          },
          {
            tempo: 90,
            volume: 60,
            mute: { bassSnare: true, hiHat: true, melody: true },
            chord: 'D2',
            voice: 'synth',
          },
        ),
        activeInstrument: 'B3',
      },
    },   
  },
  MATH: {
    title: 'Math Program Grades 6-8',
    activities: {
      1: {
        title: 'Without math, there would be no music!',
        content:
          `
          <ul>
            <li>Press the Play button in the middle of the circle to listen, Press again to stop.</li>
            <li>Find 4 tools on the screen that involve numbers.</li>
            <li>Let’s see how they work:
              <ul>
                <li>Add 1-2 notes in one numbered quarter of the circle. Click the instrument, then the space in the circle.</li>
                <li>Raise and lower the volume or loudness. Click/hold/drag the slider at bottom left.</li>
                <li>Raise and lower the tempo or speed. Click/hold/drag the slider at bottom left.</li>
              </ul>
            </li>
            <li>Which of these tools involves a unit rate - measuring how many of one kind of thing there are for each unit of another kind of thing?</li>
            <li>Now, make your own musical idea, trying out different volume and tempo settings.</li>
          </ul>          
          `,
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: 'The circle shows one bar of music. The four quarters of the bar are called beats or beat units.',
          },
          {
            type: widgets.TeacherNote,
            content: 'The 4 numbered tools are: tempo slider, volume slider, circle/beat numbers, and bar counter. The beat numbers mark the subdivision of the circle into four quarters or beats. The bar counter counts complete revolutions of the circle or bar of music. The tempo slider measures the number of beats per minute. The Volume slider measures the loudness level in decibels converted to a scale of 1-100. Tempo is a unit rate that measures the number of beats (quarters of the circle or bar) there are in a minute (known as BPM).',
          },
        ],
        pattern: patterns.constructPattern(
          emptyPattern(),
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => ([0, 14].includes(i) ? 'B' : ([8, 20].includes(i) ? 'S' : '-'))),
            amplitude: Array(32).fill(0).map((e, i) => ([0, 14, 8, 20].includes(i) ? 1 : 0)),
            duration: Array(32).fill(0),
          },
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => {
              if ([4, 8, 14, 18].includes(i)) return 'E4';
              if ([12, 22, 30].includes(i)) return 'D4';
              if ([26].includes(i)) return 'B3';
              return '-';
            }),
            amplitude: Array(32).fill(0).map((e, i) => ([0, 14, 8, 20, 12, 22, 30, 26].includes(i) ? 3 : 0)),
            duration: Array(32).fill(0).map((e, i) => {
              if ([4, 8, 18].includes(i)) return 1;
              if ([12, 22, 30].includes(i)) return 1;
              if ([26].includes(i)) return 1;
              if ([14].includes(i)) return 2;
              return 0;
            })
          },
          {
            tempo: 90,
            volume: 60,
            mute: { bassSnare: true, hiHat: true, melody: true },
            chord: 'B1',
            voice: 'synth',
          },
        ),
        activeInstrument: 'B3',
      },
    },   
  },
};

/*
* getOrderedSEctions - method returns an array of sections in sequential order
*
* Returns: Section[]
*/

export const getOrderedSections = () => [
  sections.RHYTHM_DRUMS,
  sections.RHYTHM_HI_HAT,
  sections.TEMPO,
  sections.VOLUME,
  sections.TIMBRE,
  sections.PITCH,
  sections.CHORDS,
  sections.MELODY,
  sections.ADVANCED_TOOLS,
  sections.SPECIAL_PROJECTS,
];
