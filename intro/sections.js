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

const intro = {
  title: 'Getting Started',
  content:
    `
    <ul>
      <li>Press the Play button in the middle of the circle. Press again to stop. The purple squares show you the timing of the drum sounds.</li>
      <li>Press Snare Drum at top left, then click 2 of the purple notes. Listen.</li>
      <li>Click Hi Hat and click spaces in the circle to make a pattern. Listen.</li>
      <li>Delete a note, by clicking it 3 times.</li>
      <li>Click Synth and enter 3-4 notes. Click/hold/scroll to change how high or low they sound.
        <ul>
          <li>Make a synth note longer by tapping it more than once.</li>
        </ul>
      </li>
      <li>Click on a Guitar sound and press play to listen.</li>
      <li>Take a few minutes to play with your pattern. When you're done, share it with a classmate.</li>
      <li>To save it, press Save Pattern at the right.</li>
    </ul>          
    `,
  widgets: [
    {
      type: widgets.TeacherNote,
      content: 'Students may need a little more time the first time they use the app, as they are excited to create their first idea. Some students even create 4 or 5 the first time they use the app!',
    },
  ],
  pattern: patterns.constructPattern(
    emptyPattern(),
    {
      // eslint-disable-next-line no-nested-ternary
      value: Array(32).fill('-').map((e, i) => ([0, 8, 16, 22].includes(i) ? 'B' : '-')),
      amplitude: Array(32).fill(0).map((e, i) => ([0, 8, 16, 22].includes(i) ? 1 : 0)),
      duration: Array(32).fill(0),
    },
    emptyPattern(),
  ),
  activeInstrument: 'B',
};

export const sections = {
  BASICS: {
    title: '8 Basics You Need To Know',
    activities: {
      1: intro,
      2: {
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
        widgets: [
          {
            type: widgets.TeacherNote,
            content: 'The mute tool helps students hear the connections between the different layers: drum, hi hat, and melody. It\'s a useful tool for musical story telling, as students can introduce an idea gradually, adding a layer at a time, or combine layers in unexpected ways. This is one key to creating longer pieces from a single idea. Ask students to explore all the ways they can play this idea using the mute tool (i.e. one layer at a time, two layers, three).',
          },
        ],
      },
      3: {
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
        widgets: [
          {
            type: widgets.TeacherNote,
            content: 'Our goal is to enable students to become familiar with the tools and the resources. We want them to be actively exploring - listening and discovering - without interrupting the process at this early stage with analysis or ideas. The drum is the foundation of popular music, which is why we begin with the drum layer. It fulfills an important function in keeping time and organizing the overall rhythm of a song.',
          },
        ],
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
      4: {
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
        widgets: [
          {
            type: widgets.TeacherNote,
            content: 'The hi hat is part of the drum kit. It\'s played by a foot pedal that bangs 2 metal cymbals together. With the Closed Hi Hat sound, the pedal stops the cymbals from reverberating right after they are played, making a dry sound. With the Open Hi Hat sound, the cymbals are allowed to continue to vibrate, making a \'wetter\' sound. Ask students to describe the difference between the sounds in their own words.',
          },
        ],
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
      5: {
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
        widgets: [
          {
            type: widgets.TeacherNote,
            content: 'Almost all of music\'s reputation for complexity comes from pitch. Here we just want students to explore changing pitch and how that sounds and feels, rather than jumping into pitch naming or pitch steps. We build to that gradually...',
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
      6: {
        title: 'What can you do with chords (blended pitches played at the same time)?',
        content:
          `
            <ul>
              <li>Create a mood: compare Bm ("minor"), then D ("major"). Which is brighter? Which is sadder?</li>
              <li>Choose 3 chords and play them in a row, then repeat the pattern.</li>
              <li>Turn chords into a kind of melody: make a 4-chord pattern using Bm/Em, D, Asus, and G.</li>
            </ul>
          `,
        widgets: [
          {
            type: widgets.TeacherNote,
            content: 'Our emphasis is on getting students to explore and listen to how different chords sound and feel. At the same time, we\'re introducing the idea that chords in a song make a kind of melody - scaffolding the idea of a chord onto a concept (melody) with which students are  already familiar. The melody is formed by the lowest note in each chord.',
          },
        ],
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
      7: {
        title: 'Find the right tempo (speed) and volume (loudness)',
        content:
          `
            <ul>
              <li>Click/hold/slide the Tempo slider to play this pattern faster or slower</li>
              <li>Click/hold/slide the Volume slider to make the whole pattern louder or softer</li>
              <li>Make a faster tempo louder, and slower one softer</li>
            </ul>
          `,
        widgets: [
          {
            type: widgets.TeacherNote,
            content: 'Almost nothing changes music as much as changing the tempo, and changing the volume is not far behind in impact. Encourage students to explore the extremes as well as more subtle changes. Prompt them for vocabulary to describe these changes: this will help them firm up their awareness.',
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
            value: Array(32).fill('-').map((e, i) => ([0, 16, 18].includes(i) ? 'B' : ([8, 22].includes(i) ? 'S' : '-'))),
            amplitude: Array(32).fill(0).map((e, i) => ([0, 18, 8, 22].includes(i) ? 1 : ([16].includes(i) ? 2 : 0))),
            duration: Array(32).fill(0),
          },
          emptyPattern(),
          ),
      },
      8: {
        title: 'There\'s nothing worse than forgetting to save an idea you really like',
        content:
          `
            <ul>
              <li>Make a 2-3 changes to this pattern - delete or move a note, or add hi hat notes. Press "Save Pattern" after each change.</li>
              <li>Now press "Save Set"</li>
              <li>Press "Load Set" to reload later. You can save up to 8 patterns in a set.</li>
            </ul>
          `,
        widgets: [
          {
            type: widgets.TeacherNote,
            content: `
            <p>When students save a pattern for the first time using the full app (as opposed to in these tutorials), the generic app URL switches to a personal URL. Have them bookmark this. YouthBeat organizes ideas into patterns and Sets. There are 8 slots for patterns and 8 for Sets.</p>
            <p>When a group of patterns has been saved as a Set, students can over-write or delete the original patterns to create another Set. If they need more space, they can export their work by tapping the arrow icon in the bottom right corner of Special Tools (reached via the Note Entry button on the main screen), bookmarking the new URL that is created. Then they can over-write the patterns in their personal URL. Unlike a personal URL, an exported URL can be played by anyone, so it's helpful for evaluating student work!</p>
            `,
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
      },
      9: {
        title: 'How Do You Play Longer Sections of Music?',
        content:
          `
          <ul>
            <li>Make a few changes to this idea: delete a note, or change a pitch. Save each.</li>
            <li>Enter patterns in the Sequencer in the order you want by clicking the + symbol beside each pattern</li>
            <li>Press Start, then Play to listen. Press Stop, then Clear to re-enter them.</li>
          </ul>
          `,
        widgets: [
          {
            type: widgets.TeacherNote,
            content: 'The sequencer plays back up to 8 patterns in the order selected by students. It\'s how they go from a single idea to a longer section of music. Encourage them to try out different ways of organizing the patterns, this can make a huge difference! Students can save a sequence when they press Save Set. (This is helpful when work is exported, as it allows others to listen to patterns in the intended order).',
          },
        ],
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
            <li>But if all the spaces are filled in, as in this example, nothing stands out.</li>
            <li>To get us to pay attention, put a gap in the music</li>
            <li>Listen to this idea, then delete notes right before and after part of it</li>
            <li>It's still got energy, but now you hear something you missed before</li>
            <li>Try different places to put space into this pattern. What stands out in each of them?</li>
          </ul>          
          `,
        widgets: [
          {
            type: widgets.TeacherNote,
            content: 'Many students start off by wanting to fill in every space in the music. This makes the music high energy (which students love), but it all sounds the same. Putting space into the music is like putting punctuation around a phrase, it calls attention to it. It also puts air into the music, so the pace is not just fast forward, it can meander or flow, creating more of a vibe.',
          },
        ],
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
        widgets: [
          {
            type: widgets.TeacherNote,
            content: 'We only hear music one slice at a time. The regular beat is a kind of grid that helps us as listeners or performers to put all the individual slices together to build meaning and follow the music. When the YouthBeat app loads, it always starts with this basic beat pattern.',
          },
        ],
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
            <li>This is called the BackBeat. It\'s like the audience clapping back the 1st and 3rd beats.</li>
            <li>It puts the beat into pairs: Bass Drum-Snare Drum, Bass Drum-Snare Drum.</li>
            <li>This helps listeners follow rhythms by comparing the pairs.</li>
            <li>Change the two snare drums to bass drum.</li>
            <li>Move the 3rd of 4th bass drum one space earlier or later and listen.</li>
            <li>Now change the 2nd and 4th drum sounds to snare drum and listen to the difference this makes.</li>
          </ul>          
          `,
        widgets: [
          {
            type: widgets.TeacherNote,
            content: 'The term \'backbeat\' refers to the idea that the second and fourth notes involve \'clapping back\' the first and third. The snare drum has a higher, snappier sound than the Bass drum, so it\'s often used for the back beat sound.',
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
        activeInstrument: 'S',
      },
      4: {
        title: 'Repeat anything you don\'t catch the first time',
        content:
          `
          <ul>
            <li>Make this drum pattern more complicated: move 2 beats one space earlier or later (but not the first one at the top of the circle - we always need to hear this to know when the bar is beginning).</li>
            <li>Now add a note between two beats somewhere in the pattern.</li>
            <li>See if you can 'get' it the first time you hear it. How many times do you need to hear it before you do?</li>
            <li>Your listeners will need to hear it at least that many times!</li>
          </ul>          
          `,
        widgets: [
          {
            type: widgets.TeacherNote,
            content: 'Repetition is a big part of music as an auditory art form! Because we only hear music in small slices, our brain needs repetition to build an accurate mental map of how the sounds fit together. The more complicated the pattern, the more times we need to hear it repeated!',
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
            <li>Give your melody at least one change in direction (going up instead of down or down instead of up).</li>
            <li>Everything you do stands out in a melody with just a few notes!</li>
          </ul>          
          `,
        widgets: [
          {
            type: widgets.TeacherNote,
            content: 'This is a challenging idea for students, not unlike the idea of communicating with as few words as are needed - so that every word has meaning. This task, which involves removing notes from an idea - will help students grasp that there are hidden relationships in the music that deserve to be heard and developed! This is essentially the art of composition. You could ask students to think about the beginning of a song they like - most songs start with just a few pitches and gradually build in length through an additive process.',
          },
        ],
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
            <li>We expect to hear the pitches in the chord used in the melody, too, So when a note that\'s not in the chord is heard in the melody, it draws our attention.</li>
          </ul>          
          `,
        widgets: [
          {
            type: widgets.TeacherNote,
            content: 'Pitch is complicated! We\'ve tried to make it simpler by showing which pitch locations in the melody are part of the chord that\'s playing (white lines). Chord notes tend to be heard throughout the bar, so we naturally expect to hear them in the melody, too. When other pitches are used instead, they create tension and contrast with the chord. A lot of the emotional impact of music comes from this clash and its resolution when the melody goes back to a chord note. So students just need to pay attention to the white lines and the mix of notes in the melody that are on the white lines or not.',
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
            <li>When using the full app, press the Note Entry button to get to Special Tools - this is where you\'ll find the Rotation and Reflection tools.</li>
          </ul>
          `,
        widgets: [
          {
            type: widgets.TeacherNote,
            content: 'Ideation works best when it happens quickly, without distractions or changes in mode. Once students have a few ideas saved, they can listen and evaluate them to determine which ones suit their purposes best. They shouldn\'t be trying to do that while they\'re involved in ideation.',
          },
        ],
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
            <li>Playing patterns in pairs makes it easier for listeners to follow the changes.</li>
          </ul>
          <p>You'll find many more tips in our full YouthBeat tutorials. Happy music making!</p>
          `,
        widgets: [
          {
            type: widgets.TeacherNote,
            content: 'When we listen to music, we\'re always comparing what we\'re hearing right now to what we just heard. Placing patterns into pairs, then groups of 4 or 8 bars, makes it easier for listeners to make those comparisons and keep track of where the music is going. Music has conventions, like any art form, and you rarely, if ever, encounter a 3-bar phrase in a song!',
          },
        ],
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
      1: intro,
      2: {
        title: 'Without math, there would be no music!',
        content:
          `
          <ul>
            <li>Press the Play button in the middle of the circle to listen, Press again to stop.</li>
            <li>Find 4 tools on the screen that involve numbers.</li>
            <li>Let's see how they work:
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
      3: {
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
                <li>The note you entered is in the first space of a quarter. What space within a quarter is the new note in?</li>
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
      4: {
        title: 'There\'s a hidden geometry behind the music - what\'s it telling us?',
        content:
          `
          <ul>
            <li>Press Play to listen.</li>
            <li>Just below the drum list, tick Rhythm Polygon.</li>
            <li>This joins the notes using straight lines inside the circle. What shapes do you see?</li>
            <li>Press Synth and enter a melody that has just 3 notes. Use only spaces that have a hi hat or drum note.
              <ul>
                <li>What do you notice when the shapes overlap?</li>
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
            value: Array(32).fill('-').map((e, i) => ([0,6,12,20,26].includes(i) ? 'H' : '-')),
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
      5: {
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
                <li>How many degrees would you have to rotate the pattern to get to the same position in a counterclockwise direction? (Think about how many degrees are there in a circle, then subtract 270 degrees from this).</li>
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
            content: 'Rotation changes what we hear first, so it really changes how we hear the music. You can use rotation to make a chorus from a verse!',
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
      6: {
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
                    <li>First show the increase in tempo as a fraction. What is the denominator or lower number? What is the numerator or upper number? Next, divide out the fraction. Then multiply by 100 to get the percentage (percentage means "per 100" or for each 100)</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>Now click on Pattern 1. Make the original tempo slower until the music sounds different.
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
            content: 'Every musical genre, like hip hop, has a tempo range, not just a single tempo. There\'s a point beyond which the music sounds so different it can\'t be the same genre. Research these tempo ranges online!',
          },
          {
            type: widgets.TeacherNote,
            content: 'This activity can be extended by having students calculate the percentage increase or decrease between the musical genres they research online, for example between Hip Hop and Dubstep.”',
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
      7: {
        title: 'Fractions get our toes tapping!',
        content:
          `
          <ul>
            <li>Listen to this pattern, called the basic beat.
              <ul>
                <li>The notes are all placed in the first space of a quarter or beat unit.</li>
                <li>The drum sounds divide the circle into 4 quarters, so each represents ¼ of the circle or bar of music.</li>
              </ul>
            </li>
            <li>Make a new pattern of fractions that's less regular..</li> 
            <li>Leave the first 2 beats in their current location. Then change the rest of the pattern so that the complete pattern divides the circle up into these fractions: ¼, ⅛, ¼, ⅛, ¼. (You'll have to add one drum note to do this).</li>
            <li>To calculate the space to put each note in, convert the fractions to a common denominator of 16. (First calculate how many times each fraction's denominator or bottom number goes into 16. Then multiply both top and bottom numbers by this number).
              <ul>
                <li>The numerator or top number for each converted fraction tells you how many spaces there are from the note to the next note.</li>
              </ul>
            </li>
            <li>Now Press Reset. Make a pattern with 5 notes that includes these fractions: 
              <ul>
                <li>⅛,¹⁄₁₆,¼,½</li>
              </ul>
            </li>
          </ul>          
          `,
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: 'All the fractions in the example you just created are multiples of the smallest fraction (¹⁄₁₆). This helps listeners relate the different values.',
          },
          {
            type: widgets.TeacherNote,
            content: 'If time permits, ask students to transfer their rhythm fractions to a number line. This reinforces learning as it is easier to measure and compare values in the linear format.',
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
        activeInstrument: 'B',
      },
      8: {
        title: 'Pushing And Pulling Against the Beat - there\'s math behind that!',
        content:
          `
          <ul>
            <li>Add Hi Hat notes 3 spaces apart to this pattern, starting with the 1st space at the top of the circle. (Click closed hi hat, then the space). Listen.</li> 
            <li>Where does the hi hat move away from the drum? Where do the two patterns sync up?</li>
            <li>What do you feel when the hi hat moves away from the drum? When it comes back to the beat?</li>
            <li>Put the drum and hi hat patterns on a number line numbered from 1-16. Fill in the spaces that have drum notes with one colour, and the spaces with hi hat notes with a different colour.</li>
            <li>Circle the spaces where the hi hat and drum come together.</li>
            <li>Divide these space numbers by 3 - the number of spaces between each pair of hi hat notes.</li>
            <li>Now divide these same space numbers where the drum and hi hat come together by 4 - the number of spaces between each pair of drum notes.</li>
          </ul>
          `,
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: 'When numbers can be divided by two different numbers, such as 3 and 4 in our example, they are called common multiples (in this case, of 3 and 4).',
          },
          {
            type: widgets.TeacherNote,
            content: 'This example can be extended by having students create a third pattern using the melody in which notes are spaced 2 or 5 spaces apart.',
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
        activeInstrument: 'B',
      },
      9: {
        title: 'The melody is the signature of a song. It\'s also a set of fractions (Part 1)',
        content:
          `
          <ul>
            <li>Make a new melody with 5 notes that includes these durations or note lengths: ½, ⅛, ¼, ¹⁄₁₆, ¹⁄₁₆  (feel free to change the order of these fractions in your melody).</li>
            <li>How many times do you have to multiply the smallest fraction to get the largest? Divide the second largest to get the smallest?</li>
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
      10: {
        title: 'The melody is the signature of the song. It\'s also a set of fractions (Part 2)',
        content:
          `
          <ul>
            <li>Listen to this pattern.
              <ul>
                <li>What do you notice about the steps up in pitch - how high each note sounds compared to the one before it?</li>
                <li>How many different sizes of steps are there? (You can see this by looking at the pattern of white lines dividing up the colour block representing each pitch).</li>
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
      11: {
        title: 'Putting it all together.',
        content:
          `
          <ul>
            <li>Create a musical idea using all the math tools we've explored so far:
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
  ORANGE_SHIRT: {
    title: 'Orange Shirt Day Music Project',
    image: 'TheOrangeShirtDayMusicProject.png',
    activities: {
      1: {
        title: 'Introducing the Heartbeat Pattern Played by Elder Nk\'xetko',
        content:
          `
          <ul>
            <li>Press the Play button in the middle of the circle to listen to this pattern several times.</li>
            <li>Press the Play button again to stop.</li>
            <li>Each heartbeat is shown by a pair of purple notes.</li>
            <li>When Elder Nk'xetko played this, she made one of each pair of notes a little louder.</li>
            <li>Make one note in each pair louder by clicking it once. (Choose the same note in each pair).</li>
            <li>Listen, then press 'Save Pattern' (at the right above)</li>
            <li>Now make the other note louder instead. Click the two notes you made louder 3 times, then click the other notes once. Listen, then Save Pattern. </li>
            <li>Play Pattern 1 a few times then click on Pattern 2, then go right back to Pattern 1. How do you feel when the pattern changes and then goes back? </li>
          </ul>
          `,
          pattern: patterns.constructPattern(
            emptyPattern(),
            {
              // eslint-disable-next-line no-nested-ternary
              value: Array(32).fill('-').map((e, i) => ([0, 12, 16, 28].includes(i) ? 'B' : '-')),
              amplitude: Array(32).fill(0).map((e, i) => ([0, 12, 16, 28].includes(i) ? 1 : 0)),
              duration: Array(32).fill(0),
            },
            emptyPattern(),
          ),
        widgets: [
          {
            type: widgets.TeacherNote,
            content: 'You may wish to play the part of the video where Elder Nk\'xetko plays the drum and ask students to pay attention to the loudness of the drum notes. Is it always the same? You might also explain that this is similar to accentuating one word when we\'re speaking.',
          },
        ],
      },
      2: {
        title: 'Set the Loudness (Volume) and Speed (Tempo) to Make a Soothing Pattern',
        content:
          `
          <ul>
            <li>Press Play, then change the loudness by clicking, holding, and dragging the Volume slider left and right (it's at the bottom left).</li>
            <li>Find a volume setting that makes the drum sound soothing.</li>
            <li>Next, press Play and change the tempo or speed: click, hold, and drag the Tempo slider to the left and right (It's at the bottom left, too).</li>
            <li>Find a tempo that sounds the most soothing.</li>
            <li>Share your settings with your partner. Did you both choose the same settings?</li>
          </ul>
          `,
          pattern: patterns.constructPattern(
            emptyPattern(),
            {
              // eslint-disable-next-line no-nested-ternary
              value: Array(32).fill('-').map((e, i) => ([0, 12, 16, 28].includes(i) ? 'B' : '-')),
              amplitude: Array(32).fill(0).map((e, i) => ([0, 12, 16, 28].includes(i) ? 1 : 0)),
              duration: Array(32).fill(0),
            },
            emptyPattern(),
          ),
        widgets: [
          {
            type: widgets.TeacherNote,
            content: 'Almost nothing changes music as much as changing the volume and tempo. Prompt students for words that describe these changes: this will help firm up their awareness.',
          },
        ],
      },
      3: {
        title: 'Create a Soothing Heartbeat Melody',
        content:
          `
          <ul>
            <li>Click on Synth or Rock or RnB guitar at the top right above.</li>
            <li>Click in the outer part of the circle to enter melody notes in the same position in the circle as the 4 purple drum notes. (Melody is the part of the music the singer sings).</li>
            <li>Click higher or lower in the space to make the notes higher or lower sounding, called pitch. (You can also click/hold/scroll to change pitch).</li>
            <li>Make 2 or 3 notes longer by clicking them one or more times.</li>
            <li>Move one pair of notes so they begin a bit before or after the drum. Click the notes you want to move a few times until they disappear, then enter them again in the new position.</li>
            <li>Finally, add one short note in between the two pairs of melody notes.</li>
            <li>As your melody is playing, listen to it with different chords (click a chord in the lettered list at the top right). Which one is the most soothing?</li>
          </ul>
          `,
          pattern: patterns.constructPattern(
            emptyPattern(),
            {
              // eslint-disable-next-line no-nested-ternary
              value: Array(32).fill('-').map((e, i) => ([0, 12, 16, 28].includes(i) ? 'B' : '-')),
              amplitude: Array(32).fill(0).map((e, i) => ([0, 12, 16, 28].includes(i) ? 1 : 0)),
              duration: Array(32).fill(0),
            },
            emptyPattern(),
          ),
        widgets: [
          {
            type: widgets.TeacherNote,
            content: 'Have students share their melodies with each other and, if time permits, with the whole class. It\'s empowering to have others listen to their work, and it\'s great for students to hear how many different possible solutions there are to this activity.',
          },
        ],
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
