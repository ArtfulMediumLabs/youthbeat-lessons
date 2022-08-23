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
          emptyPattern(),
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
      2: {
        title: 'We love symmetry in music!',
        content:
          `
          <ul>
            <li>At top left, click Mirror Vertical.
              <ul>
                <li>Enter a drum beat in the 1st space of the 2nd quarter of the circle. (Click a drum, then the space. Click a note a few times to delete it).</li>
                <li>Press Play to listen.</li>
                <li>How far is the new note from the blue vertical line? How far is the note you entered?</li>
              </ul>
            </li>
            <li>Now turn off Mirror Vertical and turn on Mirror Horizontal.
              <ul>
                <li>Enter a drum beat in the 1st space of the 1st quarter and listen.</li>
                <li>How far is the new note from the horizontal blue line? How far is the note you entered?</li>
                <li>The note you entered is in the first space of a quarter. What space is the new note in?</li>
              </ul>
            </li>
            <li>Make your own rhythm patterns using these Reflection tools. Try using Vertical and Horizontal at the same time.
              <ul>
                <li>To save your ideas, press Save Pattern. Press Reset to clear the idea.</li>
              </ul>
            </li>
          </ul>          
          `,
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: 'The mirror tools change the position of a drum from the first space - called \'on the beat\' to the second or fourth space, called \'off the beat\'. It\'s surprising when this happens so it catches our attention.',
          },
          {
            type: widgets.TeacherNote,
            content: 'The mirror tools reflect a note across either a vertical or horizontal line dividing the circle in half. This changes the position of a note within the quarter of the circle, and results in music that shifts off the beat in unexpected (and engaging) ways.',
          },
        ],
        pattern: patterns.constructPattern(
          emptyPattern(),
          emptyPattern(),
          emptyPattern(),
        ),
        activeInstrument: 'B',
        features: ['mirror'],
      },
      3: {
        title: 'There\'s a hidden geometry behind the music - what\'s it telling us?',
        content:
          `
          <ul>
            <li>Press Play to listen.</li>
            <li>Just below the drum list, tick Rhythm Polygon.</li>
            <li>This joins the notes using straight lines inside the circle. What shapes do you see?</li>
            <li>Press Synth and enter a melody that has just 3 notes. Use only spaces that have a hi hat or drum note.
              <ul>
                <li>What do you notice when the patterns overlap?</li>
              </ul>
            </li>
            <li>Press Reset and create a new pattern using Rhythm Polygon: include a triangle, a pentagon, and a hexagon shape.
              <ul>
                <li>Be sure to include a drum in the first space of the first quarter - we need to hear this to follow your beat.</li>
              </ul>
            </li>
          </ul>          
          `,
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: 'When patterns pull apart, we feel tension. When they come back together, we feel relief.',
          },
          {
            type: widgets.TeacherNote,
            content: 'This is a good opportunity to highlight that a square is a rectangle (meets the definition of a rectangle), as some students don\'t realize this.',
          },
        ],
        pattern: patterns.constructPattern(
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => ([0,6,12,20,26].includes(i) ? 'B' : '-')),
            amplitude: Array(32).fill(0).map((e, i) => ([0,6,12,20,26].includes(i) ? 1 : 0)),
            duration: Array(32).fill(0),
          },
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => (i % 16 == 0 ? 'B' : ((i + 8) % 16 == 0 ? 'S' : '-'))),
            amplitude: Array(32).fill(0).map((e, i) => (i % 16 == 0 || (i + 8) % 16 == 0 ? 1 : 0)),
            duration: Array(32).fill(0),
          },
          emptyPattern(),
        ),
        activeInstrument: 'B',
        features: ['polygon'],
      },
      4: {
        title: 'Rotation totally changes the music. It can even turn a verse into a chorus!',
        content:
          `
          <ul>
            <li>Press Play to listen.</li>
            <li>Press the Melody +90 button three times. This rotates the pattern 270 degrees in a clockwise direction.
              <ul>
                <li>Listen. How does this change the way the music sounds?</li>
              </ul>
            </li>
            <li>What if the rotation went the other way - counterclockwise? 
              <ul>
                <li>How many degrees would you have to rotate the pattern to get to the same position in a counterclockwise direction? (Think about how many degrees are there in a circle, then subtract 270 degrees from this to get the answer).</li>
              </ul>
            </li>
            <li>Rotate the melody back to its original position by clicking the Melody +90 button once.
              <ul>
                <li>Choose a different number of degrees to rotate it.</li>
                <li>Take away one note in the melody by tapping it several times.</li>
                <li>Make the note before the one you took away longer by tapping it once or twice.</li>
              </ul>
            </li>
            <li>Listen. Can you still connect this new idea to the original one?</li>
          </ul>          
          `,
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: 'Rotation changes what we hear first, so It really changes how we hear the music. You can use rotation to make a chorus from a verse!',
          },
          {
            type: widgets.TeacherNote,
            content: 'We only hear music a note at a time, so we tend to relate everything to what we hear first. This activity can be extended by having students apply different degrees of rotation to the different lines in an idea (drum, hi hat, melody).',
          },
        ],
        pattern: patterns.constructPattern(
          {
            value: Array(32).fill('-').map((e, i) => ([0, 6, 12, 18, 24, 28].includes(i) ? 'H' : '-')),
            amplitude: Array(32).fill(0).map((e, i) => ([0, 6, 12, 18, 24, 28].includes(i) ? 1 : 0)),
            duration: Array(32).fill(0),
          },
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => ([0, 16].includes(i) ? 'B' : ([8, 22].includes(i) ? 'S' : '-'))),
            amplitude: Array(32).fill(0).map((e, i) => ([0, 14, 8, 22].includes(i) ? 1 : 0)),
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
        activeInstrument: 'B3',
        features: ['rotate'],
      },
      5: {
        title: 'How do we know it\'s hip hop, not dubstep?',
        content:
          `
          <ul>
            <li>Move 1-2 drum or hi hat notes to personalize this beat.
              <ul>
                <li>To move a note, tap it several times to delete it, then re-enter it.</li>
              </ul>
            </li>
            <li>Choose a tempo for your beat using the tempo slider. 
              <ul>
                <li>Press \"Save Pattern\".</li>
              </ul>
            </li>
            <li>Increase the tempo until the music sounds different, and makes you move in a different way. Press "Save Pattern."
              <ul>
                <li>How big an increase in tempo is the new tempo over the first one you used?</li>
                <li>What percentage increase is the new tempo compared to the original tempo?
                  <ul>
                    <li>First divide the increase in tempo by the original tempo, then multiply the result by 100.</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>Now click on Pattern 1. Make the original tempo slower until it sounds different. Press "Save Pattern".
              <ul>
                <li>How big a decrease in tempo is the new tempo compared to the original one? What percentage decrease is it compared to the original tempo?
                  <ul>
                    <li>First, divide the decrease in tempo by the original tempo. Then multiply the result by 100.</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>Listen again to the 3 patterns and how different they sound and make you want to move.</li>
          </ul>          
          `,
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: 'Every musical genre, like hip hop, has a tempo range, not just a single tempo. There’s a point beyond which the music sounds so different it can’t be the same genre. Research these tempo ranges online!',
          },
          {
            type: widgets.TeacherNote,
            content: 'Students sometimes struggle with percentages because they don’t take the time to consider what they are relating the increase or decrease to. We’ve tried to make that clear in this activity, but you may have to underline this for some students.',
          },
        ],
        pattern: patterns.constructPattern(
          {
            value: Array(32).fill('-').map((e, i) => ([4, 6, 10, 12, 18, 20, 26, 28].includes(i) ? 'H' : '-')),
            amplitude: Array(32).fill(0).map((e, i) => ([4, 6, 10, 12, 18, 20, 26, 28].includes(i) ? 1 : 0)),
            duration: Array(32).fill(0),
          },
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => ([0, 14, 22].includes(i) ? 'B' : ([8, 24].includes(i) ? 'S' : '-'))),
            amplitude: Array(32).fill(0).map((e, i) => ([0, 14, 22, 8, 24].includes(i) ? 1 : 0)),
            duration: Array(32).fill(0),
          },
          emptyPattern(),
          ),
        activeInstrument: 'B',
      },
      6: {
        title: 'Fractions get our toes tapping!',
        content:
          `
          <ul>
            <li>Listen to this pattern, called the basic beat.
              <ul>
                <li>The notes are all placed in the first space of a quarter or beat unit.</li>
              </ul>
            </li>
            <li>Make a new pattern of fractions.</li> 
            <li>Leave in the first beat (in the first quarter), then change the pattern to create the following fractions:
              <ul>
                <li>¼,⅛,¼,⅛,¼</li>
                <li>Convert the fractions to a common denominator (bottom number) of 16.</li>
                <li>•	Multiply both top and bottom numbers for each fraction by the number of times the bottom number goes into 16. The numerator (top number) will tell you the number of spaces from one note to the next (counting from the first note up to the space before the next note).</li>
              </ul>
            </li>
            <li>Now press Reset. Make a rhythm with these fractions: 
              <ul>
                <li>⅛,¹⁄₁₆,¼,⁵⁄₁₆,⅛,⅛</li>
              </ul>
            </li>
          </ul>          
          `,
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: 'All the fractions in the rhythm are multiples of the smallest fraction used - making it easier for listeners to relate them all.',
          },
          {
            type: widgets.TeacherNote,
            content: 'If time permits, ask students to transfer their rhythm fractions to a number line. It’s good practice and easier to measure and compare values in the linear format.',
          },
        ],
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
        activeInstrument: 'H',
      },
      7: {
        title: 'Music that gets a lot louder jumps out. But what about smaller changes in loudness?',
        content:
          `
          <ul>
            <li>Play with the loudness level of this pattern, using the volume slider.</li> 
            <li>Find the smallest amount of increase in loudness that stands out when you play it back after the original volume.
              <ul>
                <li>What percentage increase does this represent?
                  <ul>
                    <li>The volume slider is already on a scale of 100, so you just need to subtract the new loudness level from the original, and multiply by 100 to get the percentage.</li>
                  </ul>
                </li>
                <li>Now find the smallest decrease in loudness that stands out when you play it back.
                  <ul>
                    <li>What percentage decrease is this? </li>
                    <li>Did you get a different number for the decrease compared to the increase?</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>Take this pattern and save it at 8 gradually increasing levels of volume, pressing Save Pattern each time. Use the percentage increase you calculated above throughout.</li>
            <li>Play them back from 1-8 then from 8-1 to hear the impact this makes.</li>
          </ul>
          `,
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: 'Gradually increasing the volume can be used to build up to a change of mood or to a new section of the piece. Decreasing the volume might be used to bring the piece to an end.',
          },
          {
            type: widgets.TeacherNote,
            content: 'We\'ve tried to be clear about having students compare the new volume to the original when calculating percentages. You might need to reinforce this as it can be confusing to some students.',
          },
        ],
        pattern: patterns.constructPattern(
          emptyPattern(),
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => ([0, 16].includes(i) ? 'B' : ([8, 22].includes(i) ? 'S' : '-'))),
            amplitude: Array(32).fill(0).map((e, i) => ([0, 16, 8, 22].includes(i) ? 1 : 0)),
            duration: Array(32).fill(0),
          },
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => {
              if ([0].includes(i)) return 'D4';
              if ([6].includes(i)) return 'A4';
              if ([12,24].includes(i)) return 'F#4';
              if ([16].includes(i)) return 'E4';
              return '-';
            }),
            amplitude: Array(32).fill(0).map((e, i) => ([0,8,14,6,12,24,16].includes(i) ? 3 : 0)),
            duration: Array(32).fill(0).map((e, i) => {
              if ([0].includes(i)) return 4;
              if ([6].includes(i)) return 1;
              if ([12,24].includes(i)) return 1;
              if ([16].includes(i)) return 3;
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
        title: 'The melody is the signature of a song. It\'s also a set of fractions (Part 1)',
        content:
          `
          <ul>
            <li>Make a melody with 3-5 notes
              <ul>
                <li>Enter the notes on spaces that also have a hi hat or drum note.</li>
                <li>Put most of the notes on the white lines running through the outer part of the circle.</li>
                <li>Make one note length 4 times as long by clicking it 3 times.
                  <ul>
                    <li>What’s the effect when the melody includes one longer note like this?</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>Make a new melody with these note lengths or durations: ¹⁄₁₆, ⅛, ³⁄₁₆, and ¼. 
              <ul>
                <li>How are the last three related to the first in length?</li>
              </ul>
            </li>
          </ul>
          `,
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: 'All the note lengths in the app are multiples of the shortest length. This makes it easier for listeners to compare and follow them.',
          },
          {
            type: widgets.TeacherNote,
            content: 'This is another opportunity to have students plot values on a number line. The white lines in the pitch layer of the circle show the pitches in the chord that is playing. The melody mostly uses these pitches.',
          },
        ],
        pattern: patterns.constructPattern(
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => ([4,8,12,16,22,28].includes(i) ? 'H' : '-')),
            amplitude: Array(32).fill(0).map((e, i) => ([4,8,12,16,22,28].includes(i) ? 1 : 0)),
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
      9: {
        title: 'The melody is the signature of the song. It\'s also a set of fractions (Part 2)',
        content:
          `
          <ul>
            <li>Listen to this pattern.
              <ul>
                <li>What do you notice about the steps up in pitch - how high each note sounds compared to the one before it?</li>
                <li>What sizes of steps are there?</li>
                <li>What is the pattern of steps starting with the first note (B)?</li>
                <li>What is the pattern of steps starting with the second note (D)?</li>
              </ul>
            </li>
            <li>Now create a melody using 3-4 pitches. 
              <ul>
                <li>Use mostly small steps up in pitch, but include one larger leap.</li>
                <li>What is the pattern of steps up or down in pitch in your melody?</li>
                <li>What\'s the effect when you go from small steps to a larger leap?</li>
              </ul>
            </li>
          </ul>
          `,
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: 'The original pattern is a pentatonic scale. It has 5 lettered pitches (2 of them are repeated at a higher pitch). Penta means 5 and tone is another word for pitch. So a pentatonic scale is a set of 5 pitches played in order from lowest to highest.',
          },
          {
            type: widgets.TeacherNote,
            content: 'A scale is a grid. This is an opportunity to ask students to name other grids and what they measure and help organize. They could also be asked to put the steps in the scale and/or their melody onto a number line.',
          },
        ],
        pattern: patterns.constructPattern(
          emptyPattern(),
          emptyPattern(),
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => {
              var notes = ['B3','D4','E4','F#4','A4','B4','D5']
              if (i <= 24 && i % 4 == 0) {
                return notes[i/4]
              } else {
                return '-';
              }
            }),
            amplitude: Array(32).fill(0).map((e, i) => (i <= 24 && i % 4 == 0) ? 3 : 0),
            duration: Array(32).fill(0).map((e, i) => (i <= 24 && i % 4 == 0) ? 1 : 0)
          },
        ),
        activeInstrument: 'B3',
      },
      10: {
        title: 'Putting it all together.',
        content:
          `
          <ul>
            <li>Create a musical idea using all the math tools we’ve explored so far:
              <ul>
                <li>Mirror Vertical and Horizontal</li>
                <li>Rotation</li>
                <li>Rhythm Polygon</li>
                <li>Changes to tempo and volume levels</li>
                <li>Fractions of the beat, duration, and pitch in rhythm and melody</li>
              </ul>
            </li>
            <li>Write out how you built the idea, including the patterns of fractions of the beat, the steps in pitch and the sizes of durations, as well as the percentage increases and decreases in tempo and volume.</li>
          </ul>
          `,
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: 'This activity shows how many ways music relies on math. It\'s proof that without math, there would be no music!',
          },
          {
            type: widgets.TeacherNote,
            content: 'This is an ideal opportunity to evaluate for understanding, as well as to celebrate students\' creativity. Have students share their projects - both playing their ideas and telling how they built them. Ensure students clearly label each part of their math description of their musical idea.',
          },
        ],
        pattern: patterns.constructPattern(
          emptyPattern(),
          emptyPattern(),
          emptyPattern(),
        ),
        activeInstrument: 'B',
        features: ['mirror', 'rotate', 'polygon'],
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
