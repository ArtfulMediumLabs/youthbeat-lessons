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
* tierFilter: {{key: number]: { cutoff: number; }}
*
*/

/*
* sections - dictionary of sections, where each have the Section schema
*
*/

export const sections = {
  RHYTHM_DRUMS: {
    key: 'RHYTHM_DRUMS',
    title: 'Exploring Rhythm - The Drums',
    tierFilter: {
      1: {
        cutoff: 12,
      },
      2: {
        cutoff: 12,
      },
      3: {
        cutoff: 12,
      },
    },
    activities: {
      1: {
        title: 'The Beat Helps Us Count the Music',
        content:
          `
          <ol>
            <li>Press Play. Press again to stop.</li>
            <li>Choose one word to describe this pattern.</li>
            <li>The basic beat is like a clock. It helps listeners count the music.</li>
            <li>Always start a new idea with this pattern!</li>
          </ol>
          `,
        pattern: patterns.bassPattern,
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: 'The whole circle shows <bold>one bar</bold> of music. Each beat is a quarter of the circle.',
          },
        ],
      },
      2: {
        title: 'Hearing the Beat in Pairs',
        content:
          `
          <ol>
            <li>Listen.</li>
            <li>Now tap Snare Drum, then tap the 2nd and 4th beats.</li>
            <li>What's different now?</li>
          </ol>
          `,
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: 'We hear 2 pairs of sounds (Bass Drum - Snare), instead of a group of 4 Bass Drums. Each pair takes up one half of the pattern.',
          },
        ],
        pattern: patterns.bassPattern,
      },
      3: {
        title: 'What A Pause Does',
        content:
          `
          <ol>
            <li>Press "Save Pattern"</li>
            <li>Click the 3rd or 4th beat 3 times to delete it. Save.</li>
            <li>Listen to Pattern 1, then 2.</li>
            <li>What difference do you hear?</li>
            <li>What note sticks out in Pattern 2?</li>
          </ol>
          `,
        pattern: patterns.bassPattern,
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: 'The 1st drum sound is almost never left out. We need to hear it to know when the circle or bar begins.',
          },
        ],
      },
      4: {
        title: 'Making a Funky Beat',
        content:
          `
          <ol>
            <li>Click/tap the 3rd or 4th beat 3 times to delete it. Click it back in one space earlier.</li>
            <li>Choose a word to describe the change this makes.</li>
          </ol>
          `,
        pattern: patterns.bassSnarePattern,
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: 'When a beat is moved a little early or late, it\'s called <em>off the beat</em>. Its normal position is called <em>on the beat</em>.',
          },
        ],
      },
      5: {
        title: 'Smoothing Out The Flow',
        content:
          `
          <ol>
            <li>Listen. Add a drum note midway between each pair of beats.</li>
            <li>Choose a word to describe the change this makes.</li>
          </ol>
          `,
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: 'A note midway between beats adds energy. It picks up the sound of the drum beat and passes it along to the next beat.',
          },
        ],
        pattern: patterns.bassSnareGapPattern,
      },
      6: {
        title: 'Making it Easier to Follow Complicated Rhythms',
        content:
          `
          <ol>
            <li>Tap the 1st beat twice to make it as loud as possible.</li>
            <li>Tap the 3rd beat once to make it a little louder.</li>
            <li>Tap play then close your eyes. Listen for the 1st beat every time it’s played. Now listen for the 3rd beat.</li>
          </ol>
          `,

        pattern: patterns.bassPattern,
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: 'The loudest drum tells us when the bar begins. The next loudest tells us when the second half begins.',
          },
        ],
      },
      7: {
        title: 'Level 2: How Long Can a Gap Get Before it Breaks the Flow of the Music?',
        content:
          `
          <ol>
            <li>Listen and save this pattern.</li>
            <li>Put a note midway between the 3rd and 4th beats. Save.</li>
            <li>Play the 2 patterns in a row.</li>
            <li>What difference do you hear?</li>
          </ol>
          `,
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: 'Too long a gap can leave listeners hanging. It breaks the flow of the music.',
          },
        ],
        pattern: patterns.constructPattern(
          emptyPattern(),
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => ([0, 12].includes(i) ? 'B' : ([8, 24].includes(i) ? 'S' : '-'))),
            amplitude: Array(32).fill(0).map((e, i) => ([0, 12, 8, 24].includes(i) ? 1 : 0)),
            duration: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
          emptyPattern(),
        ),
      },
      8: {
        title: 'Level 2: Ways to Draw Attention',
        content:
          `
          <ol>
            <li>Tap one note twice to make it louder. Save.</li>
            <li>Now, double a note - putting a note in the very next space. Save.</li>
            <li>Play the patterns back in a row. Which one gets your attention the most?</li>
          </ol>
          `,
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: 'Use these tools to highlight a bigger change, such as when the music goes <em>off the beat</em> or comes back <em>on the beat</em>.',
          },
        ],
        pattern: patterns.constructPattern(
          emptyPattern(),
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => ([0, 12].includes(i) ? 'B' : ([8, 24].includes(i) ? 'S' : '-'))),
            amplitude: Array(32).fill(0).map((e, i) => ([0, 12, 8, 24].includes(i) ? 1 : 0)),
            duration: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
          emptyPattern(),
        ),
      },
      9: {
        title: 'Level 2: How to Up the Energy',
        content:
          `
          <ol>
            <li>Fill in the empty spaces between the last two beats. </li>
            <li>Listen.</li>
            <li>Where does the energy in the pattern peak?</li>
          </ol>
          `,
        pattern: patterns.bassSnarePattern,
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: 'The closer together the notes are, the more energy and forward motion there is.',
          },
        ],
      },
      10: {
        title: 'Level 2: Creating a Stop-Start Effect',
        content:
          `
          <ol>
            <li>Fill in all the empty spaces in the 1st half and save.</li>
            <li>Now take away the two beats in the 2nd half and save.</li>
            <li>Listen to Pattern 1 then 2. Choose one word to describe the change you hear.</li>
          </ol>
          `,
        pattern: patterns.bassSnarePattern,
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: 'When we hear close together notes, then a longer gap, the music seems to speed up, then almost stop.',
          },
        ],
      },
      11: {
        title: 'Level 3: Do You Need to Hear It More Than Once?',
        content:
          `
          <ol>
            <li>Listen.</li>
            <li>How many times do you need to hear this pattern before you can remember it?</li>
            <li>Now move the 1st snare drum one space early. Add a bass drum in the 7th space. How many times do you need to hear it?</li>
          </ol>
          `,
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: 'We need to hear a complicated pattern more often.',
          },
        ],
        pattern: patterns.constructPattern(
          emptyPattern(),
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => ([0, 14, 20].includes(i) ? 'B' : ([8, 24].includes(i) ? 'S' : '-'))),
            amplitude: Array(32).fill(0).map((e, i) => ([0, 14, 20, 8, 24].includes(i) ? 1 : 0)),
            duration: Array(32).fill(0),
          },
          emptyPattern(),
        ),
      },
      12: {
        title: 'Level 3: Smaller and Bigger Changes to a Rhythm ',
        content:
          `
          <ol>
            <li>Listen and Save.</li>
            <li>Add a drum between 2 beats. Save.</li>
            <li>Move a drum beat just off the beat. Save.</li>
            <li>Add fills between 2 beats. Save.</li>
            <li>Put in a gap right after the fills. Save.</li>
            <li>Listen to all the patterns. Is there one that's harder to follow?</li>
          </ol>
          `,
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: 'Music starts with small changes that are easy to follow, then mixes it up with a bigger change.',
          },
        ],
        pattern: patterns.constructPattern(
          emptyPattern(),
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => ([0, 14, 20].includes(i) ? 'B' : ([8, 24].includes(i) ? 'S' : '-'))),
            amplitude: Array(32).fill(0).map((e, i) => ([0, 14, 20, 8, 24].includes(i) ? 1 : 0)),
            duration: Array(32).fill(0),
          },
          emptyPattern(),
        ),
      },
    },
  },
  RHYTHM_HI_HAT: {
    title: 'Rhythm - Hi Hat',
    key: 'RHYTHM_HI_HAT',
    activities: {
      1: {
        title: '1. The Hi Hat Adds a New Layer',
        content:
          `
          <ol>
            <li>Listen. This piece has a new layer, played by the hi hat.</li>
            <li>Is the new sound shorter or longer than the drum? Higher or lower?</li>
            <li>What stands out - the drum or the hi hat? How do they fit together?</li>
          </ol>
          `,
        pattern: patterns.constructPattern(
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => ([4, 12, 20, 28].includes(i) ? 'H' : '-')),
            amplitude: Array(32).fill(0).map((e, i) => ([4, 12, 20, 28].includes(i) ? 1 : 0)),
            duration: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => ([0, 16].includes(i) ? 'B' : ([8, 22].includes(i) ? 'S' : '-'))),
            amplitude: Array(32).fill(0).map((e, i) => ([0, 16, 8, 22].includes(i) ? 1 : 0)),
            duration: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
          emptyPattern(),
        ),
      },
      2: {
        title: 'Smoothing Out the Beat',
        content:
        `
        <ol>
          <li>Listen to this complicated drum.</li>
          <li>Now click on Hi Hat and enter notes every 2 spaces, starting with the 1st space in the circle.</li>
          <li>Listen. Is it easier to follow the drum now?</li>
        </ol>
        `,
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: 'The regular spacing of the hi hat smooths out the music.',
          },
        ],
        pattern: patterns.constructPattern(
          emptyPattern(),
          {
            value: ['B', '-', '-', '-', '-', '-', 'B', '-', '-', '-', '-', '-', 'B', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'B', '-', 'S', '-', '-', '-', 'S', '-', '-', '-'],
            amplitude: [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0],
            duration: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
          emptyPattern(),
        ),
      },
      3: {
        title: 'Playing Tricks with Time',
        content:
        `
        <ol>
          <li>Add a hi hat note right before each drum beat.</li>
          <li>How does this change the way the music moves?</li>
          <li>Now add hi hat notes on all the empty spaces in the last quarter.</li>
          <li>How does this change the way the music moves?</li>
        </ol>
        `,
        pattern: patterns.constructPattern(
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => ([0, 8, 16, 24].includes(i) ? 'H' : '-')),
            amplitude: Array(32).fill(0).map((e, i) => ([0, 8, 16, 24].includes(i) ? 1 : 0)),
            duration: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => ([0, 16].includes(i) ? 'B' : ([8, 22].includes(i) ? 'S' : '-'))),
            amplitude: Array(32).fill(0).map((e, i) => ([0, 16, 8, 22].includes(i) ? 1 : 0)),
            duration: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
          emptyPattern(),
        ),
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: 'The closer together the hi hat notes are, the more the energy picks up. The music seems to go a bit faster.',
          },
        ],
      },
      4: {
        title: 'Pushing and Pulling Against/With the Beat',
        content:
        `
        <ol>
          <li>Add hi hat notes 3 spaces apart, starting with the 1st space in the circle. Listen.</li>
          <li>Where does the hi hat move away from the drum. Where do they line up?</li>
        </ol>
        `,
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: 'When it\'s off the beat, the hi hat pattern pushes against the drum. Then the beat pulls it back in.',
          },
        ],
        pattern: patterns.bassSnarePattern,
      },
      5: {
        title: 'Hearing Hi Hat Notes Not as Individual Notes but as Groups',
        content:
        `
        <ol>
          <li>Listen.</li>
          <li>Do you hear 2 groups of 3?</li>
          <li>Take away one note in the 2nd group.</li>
          <li>Listen. Is it easy to follow the change from half to half?</li>
        </ol>
        `,
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: 'The empty space at the end of each group of 3 tells us the notes before it go together.',
          },
        ],
        pattern: patterns.constructPattern(
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => ([0, 4, 8, 16, 20, 24].includes(i) ? 'H' : '-')),
            amplitude: Array(32).fill(0).map((e, i) => ([0, 4, 8, 16, 20, 24].includes(i) ? 1 : 0)),
            duration: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
          {
            value: ['B', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
            amplitude: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            duration: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
          emptyPattern(),
        ),
      },
      6: {
        title: 'Smaller Changes',
        content:
        `
        <ol>
          <li>Listen and Save.</li>
          <li>Move the 2nd or 4th hi hat one space early or late. Save.</li>
          <li>Load Pattern 1. Delete the 2nd or 4th note. Save.</li>
          <li>Play the 3 patterns in a row.</li>
          <li>Are the changes easy to follow?</li>
        </ol>
        `,
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: 'Smaller changes mostly affect notes between beats.',
          },
        ],
        pattern: patterns.constructPattern(
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => ([0, 4, 8, 12, 20, 24].includes(i) ? 'H' : '-')),
            amplitude: Array(32).fill(0).map((e, i) => ([0, 4, 8, 12, 20, 24].includes(i) ? 1 : 0)),
            duration: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
          emptyPattern(),
          emptyPattern(),
        ),
      },
      7: {
        title: 'Level 2: Playing with Groups of 3',
        content:
        `
        <ol>
          <li>Listen and Save.</li>
          <li>Pick a group of 3. Move each of the 3 notes one space later. Save.</li>
          <li>Which beat is highlighted?</li>
          <li>Reload Pattern 1. Move one group of 3 a space early.</li>
          <li>Which beat is highlighted now?</li>
        </ol>
        `,
        pattern: patterns.constructPattern(
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => ([0, 2, 4, 8, 10, 12, 16, 18, 20, 24, 26, 28].includes(i) ? 'H' : '-')),
            amplitude: Array(32).fill(0).map((e, i) => ([0, 2, 4, 8, 10, 12, 16, 18, 20, 24, 26, 28].includes(i) ? 1 : 0)),
            duration: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => ([0, 16].includes(i) ? 'B' : ([8, 22].includes(i) ? 'S' : '-'))),
            amplitude: Array(32).fill(0).map((e, i) => ([0, 16, 8, 22].includes(i) ? 1 : 0)),
            duration: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
          emptyPattern(),
        ),
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: `The run of hi hat notes draws our attention to the beat within or at the end of the run.`,
          },
        ],
      },
      8: {
        title: 'Level 2: How the Hi Hat Groups Affect How We Hear the Beat',
        content:
        `
        <ol>
          <li>Listen.</li>
          <li>Move the 2nd drum beat 1 space early. Save.</li>
          <li>Move the 2nd group of 3 hi hat notes one space later. Save.</li>
          <li>Listen to the 2 patterns. What\'s different?</li>
        </ol>
        `,
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: `In pattern 1, the hi hat carries on through the off beat drum, smoothing the flow. In pattern 2, the break in the hi hat makes the off beat drum stand out.`,
          },
        ],
        pattern: patterns.constructPattern(
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => ([0, 2, 4, 8, 10, 12, 16, 18, 20, 24, 26, 28].includes(i) ? 'H' : '-')),
            amplitude: Array(32).fill(0).map((e, i) => ([0, 2, 4, 8, 10, 12, 16, 18, 20, 24, 26, 28].includes(i) ? 1 : 0)),
            duration: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => ([0, 16].includes(i) ? 'B' : ([8, 22].includes(i) ? 'S' : '-'))),
            amplitude: Array(32).fill(0).map((e, i) => ([0, 16, 8, 22].includes(i) ? 1 : 0)),
            duration: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
          emptyPattern(),
        ),
      },
      9: {
        title: 'Level 2: Two Hi Hat Sounds: Open and Closed',
        content:
        `
        <ol>
          <li>Listen & Save.</li>
          <li>Change the 2nd hi hat note in each pair to Open Hi Hat. Save.</li>
          <li>Reload Pattern 1. Change the first note in the first 2 pairs to Open Hi Hat.</li>
          <li>Listen to Pattern 2 then 3. Does the Open HI Hat sound change how you hear the drum pattern?</li>
        </ol>
        `,
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: `In Pattern 2, the Open sound glides into the 2nd snare sound. In Pattern 3, the Open sound is cut off, making a small break.`,
          },
        ],
        pattern: patterns.constructPattern(
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => ([2, 4, 10, 12, 18, 20, 26, 28].includes(i) ? 'H' : '-')),
            amplitude: Array(32).fill(0).map((e, i) => ([2, 4, 10, 12, 18, 20, 26, 28].includes(i) ? 1 : 0)),
            duration: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => ([0, 16, 18].includes(i) ? 'B' : ([8, 22].includes(i) ? 'S' : '-'))),
            amplitude: Array(32).fill(0).map((e, i) => ([0, 18, 8, 22].includes(i) ? 1 : ([16].includes(i) ? 2 : 0))),
            duration: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
          emptyPattern(),
        ),
      },
      10: {
        title: 'Level 2: Ride Cymbal - the Ultimate Highlighting Tool',
        content:
        `
        <ol>
          <li>Choose a drum beat to highlight in this pattern. Change one hi hat sound leading up to this beat to Ride Cymbal. Save.</li>
          <li>Now change more Hi Hat notes to Ride Cymbal. Save.</li>
          <li>Listen to both patterns.</li>
          <li>Where does the Ride Cymbal stand out the most?</li>
        </ol>
        `,
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: `The Ride Cymbal really gets out attention, so using it just once or twice in a pattern is powerful.`,
          },
        ],
        pattern: patterns.constructPattern(
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => (i % 2 == 0 ? 'H' : '-')),
            amplitude: Array(32).fill(0).map((e, i) => (i % 2 == 0 ? 1 : 0)),
            duration: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => ([0, 14, 22].includes(i) ? 'B' : ([8, 24].includes(i) ? 'S' : '-'))),
            amplitude: Array(32).fill(0).map((e, i) => ([0, 14, 22, 8, 24].includes(i) ? 1 : ([16].includes(i) ? 2 : 0))),
            duration: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
          emptyPattern(),
        ),
      },
      11: {
        title: 'Level 3: Smaller and Larger Changes (Do This Activity Together with #12)',
        content:
        `
        <ol>
          <li>Listen and Save.</li>
          <li>Move the 3rd pair of hi hat notes 1 space early. Save.</li>
          <li>Add one hi hat on the 4th beat. Save.</li>
          <li>Fill in hi hat notes between the 3rd and 4th hi hat pairs. Save.</li>
          <li>Change the 2nd hi hat in the first 2 pairs to Open Hi Hat. Save.</li>
          <li>Which of these patterns are easy to follow the first time you hear them? Which do you need to hear more than once?</li>
        </ol>
        `,
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: `When you\'re making a song, always start with the smaller changes, and play the bigger changes more than once.`,
          },
        ],
        pattern: patterns.constructPattern(
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => ([2, 4, 10, 12, 18, 20, 26, 28].includes(i) ? 'H' : '-')),
            amplitude: Array(32).fill(0).map((e, i) => ([2, 4, 10, 12, 18, 20, 26, 28].includes(i) ? 1 : 0)),
            duration: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => ([0, 16].includes(i) ? 'B' : ([8, 22].includes(i) ? 'S' : '-'))),
            amplitude: Array(32).fill(0).map((e, i) => ([0, 16, 8, 22].includes(i) ? 1 : 0)),
            duration: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
          emptyPattern(),
        ),
      },
      12: {
        title: 'Level 3: When the Hi Hat Stands Alone (Uses the Patterns You Created in #12)',
        content:
        `
        <ol>
          <li>Listen to the patterns you saved in activity 12.</li>
          <li>In Pattern 3, untick the drum. Save.</li>
          <li>Do the same in Pattern 5.</li>
          <li>Now play the patterns in a row.</li>
          <li>Think about where to put the hi hat-only patterns so they stand out the most. </li>
        </ol>
        `,
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: `When the hi hat is heard on its own, it takes on the role of marking the beat.`,
          },
        ],
      },
    },   
    tierFilter: {
      1: {
        cutoff: 12,
      },
      2: {
        cutoff: 12,
      },
      3: {
        cutoff: 12,
      },
    },
  },
  TEMPO: {
    title: 'Tempo',
    key: 'TEMPO',
    activities: {
      1: {
        title: 'Tempo - Speed - Makes a Huge Difference',
        content:
          `
          <ol>
            <li>Listen. As it plays, click, hold, and drag the tempo slider left and right.</li>
            <li>How does changing the tempo change the way the music moves?</li>
            <li>How does it change how the hi hat and drum fit together? The mood?</li>
          </ol>
          `,
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: 'Speeding up music makes it brighter, slowing it down makes it sadder. Tempo is measured in BPM - beat units per minute.',
          },
        ],
        pattern: patterns.constructPattern(
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => ([2, 12, 18, 28].includes(i) ? 'H' : '-')),
            amplitude: Array(32).fill(0).map((e, i) => ([2, 12, 18, 28].includes(i) ? 1 : 0)),
            duration: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => ([0, 14].includes(i) ? 'B' : ([6, 24].includes(i) ? 'S' : '-'))),
            amplitude: Array(32).fill(0).map((e, i) => ([0, 14, 6, 24].includes(i) ? 1 : 0)),
            duration: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
          emptyPattern(),
        ),
      },
      2: {
        title: 'Level 2: Musical Genres Have Different Tempo Ranges',
        content:
          `
          <ol>
            <li>Click, hold, and drag the tempo slider to play this pattern at these speeds.
              <ul>
                <li>Hip hop: 80-100 BPM</li>
                <li>Techno: 120-140 BPM</li>
                <li>Dubstep:	135-145 BPM</li>
              </ul>
            </li>
            <li>How does the tempo change the way you want to move?</li>
          </ol>
          `,
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: 'Outside the tempo range, we feel the beat in a different way. That’s why each genre has a specific tempo range.',
          },
        ],
        pattern: patterns.constructPattern(
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => (i % 2 == 0 ? 'H' : '-')),
            amplitude: Array(32).fill(0).map((e, i) => (i % 2 == 0 ? 1 : 0)),
            duration: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => ([0, 14].includes(i) ? 'B' : ([8, 24].includes(i) ? 'S' : '-'))),
            amplitude: Array(32).fill(0).map((e, i) => ([0, 14, 8, 24].includes(i) ? 1 : 0)),
            duration: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
          emptyPattern(),
        ),
      },
      3: {
        title: 'Level 3: Gradually Speeding Up or Slowing Down',
        content:
          `
          <p>We normally expect the tempo to stay the same for a whole song or piece of music.</p>
          <p>But tempo can be used to attract attention within a piece.</p>
          <ol>
            <li>Listen and save.</li>
            <li>Make and save 2-3 versions that get a little slower each time.</li>
            <li>Play them starting with the slowest, building up to the tempo of Pattern 1.</li>
            <li>How does this change the way you hear the music?</li>
          </ol>
          `,
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: 'Gradually increasing the tempo builds energy and makes us wonder what\'s about to happen.',
          },
        ],
        pattern: patterns.constructPattern(
          emptyPattern(),
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => ([0, 12, 14, 18, 20].includes(i) ? 'B' : ([8, 24].includes(i) ? 'S' : '-'))),
            amplitude: Array(32).fill(0).map((e, i) => ([0, 12, 14, 18, 20, 8, 24].includes(i) ? 1 : 0)),
            duration: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
          emptyPattern(),
        ),
      },
    },
    tierFilter: {
      1: {
        cutoff: 3,
      },
      2: {
        cutoff: 3,
      },
      3: {
        cutoff: 3,
      },
    },
  },
  VOLUME: {
    title: 'Volume',
    key: 'VOLUME',
    activities: {
      1: {
        title: 'Changing Volume (Loudness) Changes the Energy Level of the Music',
        content: `
        <ol>
          <li>Click, hold, and drag the volume slider to the left as you listen.</li>
          <li>As the music gets softer, how does it change the mood?</li>
          <li>Now drag the slider to the right.</li>
          <li>As the music gets louder, how does it change the mood?</li>
        </ol>
        `,
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: `The louder the music gets, the brighter it sounds. The softer the music gets, the moodier.`,
          },
        ],
        pattern: patterns.constructPattern(
          emptyPattern(),
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => ([0, 14].includes(i) ? 'B' : ([8, 24].includes(i) ? 'S' : '-'))),
            amplitude: Array(32).fill(0).map((e, i) => ([0, 14, 8, 24].includes(i) ? 1 : 0)),
            duration: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
          {
            value: ['D4', '-', '-', '-', '-', '-', 'A4', '-', '-', '-', '-', '-', 'F#4', '-', '-', '-', 'E4', '-', '-', '-', '-', '-', '-', '-', 'F#4', '-', '-', '-', '-', '-', '-', '-'],
            amplitude: [3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0],
            duration: [4, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
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
      2: {
        title: 'Volume and Tempo Work Together',
        content: `
        <ol>
          <li>Listen and Save.</li>
          <li>Make this pattern softer. Save.</li>
          <li>Now make it a little slower, too. Save.</li>
          <li>Reload Pattern 1 and make it louder. Save.</li>
          <li>Now make it a little faster too. Save.</li>
          <li>Listen to all your patterns.</li>
          <li>How does the mood change as the music first gets softer, then slower? Louder, then faster?</li>
        </ol>
        `,
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: `A faster tempo and louder volume both boost the energy of the music.`,
          },
        ],
        pattern: patterns.constructPattern(
          emptyPattern(),
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => ([0, 14].includes(i) ? 'B' : ([8, 20].includes(i) ? 'S' : '-'))),
            amplitude: Array(32).fill(0).map((e, i) => ([0, 14, 8, 20].includes(i) ? 1 : 0)),
            duration: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
          {
            value: ['-', '-', '-', '-', 'E4', '-', '-', '-', 'E4', '-', '-', '-', 'D4', '-', 'E4', '-', '-', '-', 'E4', '-', '-', '-', 'D4', '-', '-', '-', 'B3', '-', '-', '-', 'D4', '-'],
            amplitude: Array(32).fill(0).map((e, i) => ([4, 8, 12, 14, 18, 22, 26, 30].includes(i) ? 3 : 0)),
            duration: Array(32).fill(0).map((e, i) => ([4, 8, 12, 18, 22, 26, 30].includes(i) ? 1 : ([14].includes(i) ? 2 : 0))),
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
    },
    tierFilter: {
      1: {
        cutoff: 2,
      },
      2: {
        cutoff: 2,
      },
      3: {
        cutoff: 2,
      },
    },
  },
  TIMBRE: {
    title: 'Timbre',
    key: 'TIMBRE',
    activities: {
      1: {
        title: 'Introducing the Synth and Guitar Sounds',
        content: `
          <ol>
            <li>Listen to this example played on the synth, then on Guitar (Rock then RnB).</li>
            <li>Which sound has the most bite?</li>
            <li>Which is heard for the longest?</li>
            <li>Which is smoothest?</li>
          </ol>
        `,
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: 'Synth is short for Synthesizer, a computer-generated sound. RnB stands for Rhythm and Blues, a guitar that often plays as part of the rhythm section.',
          },
        ],
        pattern: patterns.constructPattern(
          emptyPattern(),
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => ([0, 14].includes(i) ? 'B' : ([8, 24].includes(i) ? 'S' : '-'))),
            amplitude: Array(32).fill(0).map((e, i) => ([0, 14, 8, 24].includes(i) ? 1 : 0)),
            duration: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
          {
            value: ['D4', '-', '-', '-', '-', '-', 'A4', '-', '-', '-', '-', '-', 'F#4', '-', '-', '-', 'E4', '-', '-', '-', '-', '-', '-', '-', 'F#4', '-', '-', '-', '-', '-', '-', '-'],
            amplitude: [3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0],
            duration: [4, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
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
      2: {
        title: 'Instruments add Colour to the Music',
        content: `
        <ol>
          <li>Listen first with Synth, then Rock, then RnB guitar.</li>
          <li>Which is brightest, darkest, most dramatic?</li>
          <li>What colour would you choose to represent each instrument sound?</li>
          <li>Which one stands out the most?</li>
        </ol>
        `,
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: 'Sound colour (called Timbre in music) makes a huge difference to the mood of the music.',
          },
        ],
        pattern: patterns.constructPattern(
          {
            value: Array(32).fill('-').map((e, i) => ([4, 12, 18, 26, 28, 30].includes(i) ? 'H' : '-')),
            amplitude: Array(32).fill(0).map((e, i) => ([4, 12, 18, 26, 28, 30].includes(i) ? 1 : 0)),
            duration: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => ([0, 14].includes(i) ? 'B' : ([8, 22].includes(i) ? 'S' : '-'))),
            amplitude: Array(32).fill(0).map((e, i) => ([0, 14, 8, 22].includes(i) ? 1 : 0)),
            duration: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
          {
            value: ['F#4', '-', '-', '-', 'B3', '-', '-', '-', '-', '-', 'E4', '-', '-', '-', '-', '-', 'D4', '-', '-', '-', 'B3', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
            amplitude: [3, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            duration: [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
      3: {
        title: 'Level 3: Switching Instruments Changes the Mood',
        content: `
        <ol>
          <li>Listen and save.</li>
          <li>Make the 2nd last note longer by clicking it, then delete the last note. Save.</li>
          <li>Take away 1-2 notes. Save.</li>
          <li>Change 2 patterns to another instrument. Save.</li>
          <li>Listen to the patterns in a row. How does switching instruments change the mood?</li>
        </ol>
        `,
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: 'The longer we hear an instrument, the more contrast we hear when we switch instruments.',
          },
        ],
        pattern: patterns.constructPattern(
          emptyPattern(),
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => ([0, 14].includes(i) ? 'B' : ([8, 20].includes(i) ? 'S' : '-'))),
            amplitude: Array(32).fill(0).map((e, i) => ([0, 14, 8, 20].includes(i) ? 1 : 0)),
            duration: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
          {
            value: ['-', '-', '-', '-', 'E4', '-', '-', '-', 'E4', '-', '-', '-', 'D4', '-', 'E4', '-', '-', '-', 'E4', '-', '-', '-', 'D4', '-', '-', '-', 'B3', '-', '-', '-', 'D4', '-'],
            amplitude: Array(32).fill(0).map((e, i) => ([4, 8, 12, 14, 18, 22, 26, 30].includes(i) ? 3 : 0)),
            duration: Array(32).fill(0).map((e, i) => ([4, 8, 12, 18, 22, 26, 30].includes(i) ? 1 : ([14].includes(i) ? 2 : 0))),
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
    },
    tierFilter: {
      1: {
        cutoff: 3,
      },
      2: {
        cutoff: 3,
      },
      3: {
        cutoff: 3,
      },
    },
  },
  PITCH: {
    title: 'Introducing Pitch',
    key: 'PITCH',
    activities: {
      1: {
        title: 'Notes that Sound Higher and Lower Are Called Pitches',
        content: `
        <ol>
          <li>Click on the synth note in the pattern above. Hold and drag it up and down.</li>
          <li>How many different higher or lower sounding notes (pitches) did you find?</li>
        </ol>
        `,
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: 'The pitches are all named for letters of the alphabet. A higher pitch has a letter that’s further into the alphabet.',
          },
        ],
        pattern: patterns.constructPattern(
          emptyPattern(),
          emptyPattern(),
          {
            value: ['E4'].concat(Array(31).fill('-')),
            amplitude: [3].concat(Array(31).fill(0)),
            duration: [1].concat(Array(31).fill(0)),
          },
        ),
      },
      2: {
        title: 'A Scale is a Pattern of Steps Up in Pitch',
        content: `
        <ol>
          <li>On the spaces with hi hat notes, add Synth pitches that rise in pitch from low B to high B.</li>
          <li>Listen.</li>
          <li>How many steps up are there?</li>
          <li>Are they all the same size?</li>
        </ol>
        `,
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: 'The steps are: B-D (larger), D-E (smaller), E-F# (smaller), F#-A (larger), A-B (smaller). This is called a pentatonic scale (penta means 5).',
          },
        ],
        pattern: patterns.constructPattern(
          {
            value: Array(32).fill('-').map((e, i) => (i % 4 === 0 ? 'H' : '-')),
            amplitude: Array(32).fill(0).map((e, i) => (i % 4 === 0 ? 1 : 0)),
            duration: Array(32).fill(0),
          },
          emptyPattern(),
          emptyPattern(),
        ),
      },
    },
    tierFilter: {
      1: {
        cutoff: 2,
      },
      2: {
        cutoff: 2,
      },
      3: {
        cutoff: 2,
      },
    },
  },
  CHORDS: {
    title: 'Introducing the Chord',
    key: 'CHORDS',
    activities: {
      1: {
        title: 'Chords Paint a Mood',
        content: `
        <ol>
          <li>Listen.</li>
          <li>Tick the box beside the D chord at top right and listen.</li>
          <li>What difference in mood do you hear?</li>
        </ol>
        `,
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: 'The D chord seems brighter. It’s called a major chord. The Bm chord seems either more dramatic or sadder. It’s called a minor chord.',
          },
        ],
        pattern: patterns.constructPattern(
          {
            value: Array(32).fill('-').map((e, i) => ([2, 12, 18, 28].includes(i) ? 'H' : '-')),
            amplitude: Array(32).fill(0).map((e, i) => ([2, 12, 18, 28].includes(i) ? 1 : 0)),
            duration: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => ([0, 14].includes(i) ? 'B' : ([8, 24].includes(i) ? 'S' : '-'))),
            amplitude: Array(32).fill(0).map((e, i) => ([0, 14, 8, 24].includes(i) ? 1 : 0)),
            duration: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
          emptyPattern(),
        ),
      },
      2: {
        title: 'Level 2: The Home Chord',
        content: `
        <ol>
          <li>While this pattern is playing, change chord to create these patterns:
            <ul>
              <li>D/D/Bm/D</li>
              <li>Bm/Bm/D/Bm</li>
            </ul>
          </li>
        </ol>
        `,
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: 'Repeating the main chord at the beginning of a song helps listeners remember it so they can connect other chords to it more easily.',
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
      3: {
        title: 'Level 2: Chords with 2 Pitches in Common Are More Alike',
        content: `
        <ol>
          <li>Listen to the D chord, then the Bm chord. Notice the pattern of white lines each makes in the melody circle. How many white lines are in both chords?</li>
          <li>Now listen to the D chord then G. How many white lines are in both?</li>
          <li>Which pair of chords (D/Bm or D/G) seem more like? More different?
            <ol>
              <li>Which pair has more white lines in common?</li>
            </ol>
          </li>
        </ol>
        `,
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: 'There is only one pitch in common between D to G (D), but two pitches in common between D and Bm (D, F#). So D and Bm seem more similar.',
          },
        ],
        pattern: patterns.constructPattern(
          emptyPattern(),
          emptyPattern(),
          emptyPattern(),
        ),
      },
      4: {
        title: 'Level 3: Smaller and Larger Changes in Chords',
        content: `
        <ol>
          <li>Play this pattern with the D chord twice.</li>
          <li>Next, play Bm (a chord that's like the D chord), then go back to D.</li>
          <li>Now play a chord that's different from D, then end with D again.</li>
        </ol>
        `,
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: 'We keep going back to the main chord so listeners can compare each new chord to the \'home chord\'. ',
          },
        ],
        pattern: patterns.constructPattern(
          {
            value: Array(32).fill('-').map((e, i) => ([2, 12, 18, 28].includes(i) ? 'H' : '-')),
            amplitude: Array(32).fill(0).map((e, i) => ([2, 12, 18, 28].includes(i) ? 1 : 0)),
            duration: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => ([0, 14].includes(i) ? 'B' : ([8, 24].includes(i) ? 'S' : '-'))),
            amplitude: Array(32).fill(0).map((e, i) => ([0, 14, 8, 24].includes(i) ? 1 : 0)),
            duration: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
          emptyPattern(),
        ),
      },
      5: {
        title: 'Level 3: Keeping the Chord Pattern Fresh',
        content:
          `
          <ol>
            <li>Play these chords over this beat. 
              <ul>
                <li>D-Bm-G-D</li>
                <li>Bm-D-G-D</li>
                <li>Bm-D-G-Bm</li>
                <li>Bm-D-Em-Bm</li>
              </ul>
            </li>
          </ol>
          `,
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: 'Chords that have two notes in common, like D and Bm or G and Em, are used in place of each other (called a substitution).',
          },
        ],
        pattern: patterns.constructPattern(
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => (i % 2 == 0 ? 'H' : '-')),
            amplitude: Array(32).fill(0).map((e, i) => (i % 2 == 0 ? 1 : 0)),
            duration: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => ([0, 14].includes(i) ? 'B' : ([8, 24].includes(i) ? 'S' : '-'))),
            amplitude: Array(32).fill(0).map((e, i) => ([0, 14, 8, 24].includes(i) ? 1 : 0)),
            duration: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
          emptyPattern(),
        ),
      },
      6: {
        title: 'Level 3: The Three Main Chords in Popular Music',
        content:
          `
          <ol>
            <li>Listen to these chords in a row: D, G, and Asus.</li>
            <li>Use these 3 chords to make a four-chord pattern by:
              <ul>
                <li>Repeating D at the end.</li>
                <li>Adding Bm somewhere in the pattern.</li>
                <li>Adding Em to the pattern.</li>
                <li>What do you notice about the melody these patterns make?</li>
              </ul>
            </li>
          </ol>
          `,
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: 'D, G, A are the three main chords in popular music. Songs add a substitution for D (Bm) or G (Em) to create a 4-chord pattern from these 3 chords.',
          },
        ],
        pattern: patterns.constructPattern(
          emptyPattern(),
          emptyPattern(),
          emptyPattern(),
        ),
      },
    },
    tierFilter: {
      1: {
        cutoff: 6,
      },
      2: {
        cutoff: 6,
      },
      3: {
        cutoff: 6,
      },
    },
  },
  MELODY: {
    title: 'Melody',
    key: 'MELODY',
    activities: {
      1: {
        title: 'Introduction',
        content: 'Melody weaves together the rhythm and the chords. That&#8217;s why the melody gets most of the attention when we listen to a song - it&#8217;s the signature of the whole piece.',
      },
      2: {
        title: 'Melody Timing Pattern',
        content: `
          <p>Melody gets its timing pattern from the drum and hi hat.</p>
          <p>But does it tend to follow mainly the drum or mainly the hi hat?</p>
          ${
  constructActionSteps([
    'Press Play to listen to this melody.',
    'Does it fall mainly on the hi hat or drum locations?',
    'Now delete the 2nd and 3rd melody note (click 5x) and re-enter them 1 space later.',
    'How does this change the melody?',
  ])
}    
          <p>
            <strong>Notice</strong> the first melody pushes against the beat, the second one is pulled into the beat. The first follows mainly the hi hat, the second mainly the drum. 
          </p>
        `,
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: 'Hi hat patterns have more notes, so they are useful for lyrics or raps - which have lots of syllables.',
          },
        ],
        pattern: patterns.constructPattern(
          {
            value: Array(32).fill('-').map((e, i) => ([0, 6, 12, 18, 22, 26].includes(i) ? 'H' : '-')),
            amplitude: Array(32).fill(0).map((e, i) => ([0, 6, 12, 18, 22, 26].includes(i) ? 1 : 0)),
            duration: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => ([0, 16].includes(i) ? 'B' : ([8, 22].includes(i) ? 'S' : '-'))),
            amplitude: Array(32).fill(0).map((e, i) => ([0, 16, 8, 22].includes(i) ? 1 : 0)),
            duration: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
      },
      3: {
        title: 'The Push and Pull of the Melody and Chord ',
        content: `
          <p>The melody is pulled by the notes in the chord that&#8217;s playing in the background, but it also pushes back against the chord.</p>
          ${
  constructActionSteps([
    'Listen to this idea where all the pitches are on white lines (<em>in the chord</em>). ',
    'Change <strong>one</strong> pitch so it&#8217;s <strong>not</strong> on a white line. Save.',
    'Do this for a different note instead. Save.',
    'Listen to the push and pull of the melody and chord.',
  ])
}    
          <p>
            <strong>Notice</strong> a non-chord note pushes back against the chord. The chord pulls the melody back when the melody goes back to a white line. 
          </p>
        `,
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: 'Just like we expect to hear a rhythm that goes <em>off the beat</em> go back <em>on the beat</em>, we expect a melody that goes away from the chord to come back to it. ',
          },
        ],
        pattern: patterns.constructPattern(
          emptyPattern(),
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => ([0, 16].includes(i) ? 'B' : ([8, 22].includes(i) ? 'S' : '-'))),
            amplitude: Array(32).fill(0).map((e, i) => ([0, 16, 8, 22].includes(i) ? 1 : 0)),
            duration: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
          {
            value: ['F#4', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'D4', '-', '-', '-', 'F#4', '-', '-', '-', '-', '-', 'B3', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
            amplitude: [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            duration: [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
      4: {
        title: 'Chord notes and the beat',
        content: `
          <p>How much tension or pressure we feel when a melody note pushes against the chord depends on <strong>when</strong> the melody note that is <strong>not</strong> in the chord is heard.</p>
          ${
  constructActionSteps([
    'Listen to Pattern 1 where the note that&#8217;s not on a white line falls <strong>between</strong> beats.',
    'Change one of the two pitches that are on a white line, putting it <strong>between</strong> white lines instead.',
    'How does this change the way you hear the melody?',
  ])
}    
          <p>
            <strong>Notice</strong> the clash between this pitch and the chord is greater because the note is on the beat, not between beats as in Pattern 1.
          </p>
        `,
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: 'This is an example of how rhythm and chords come together to make a strong effect in a melody.',
          },
        ],
        pattern: patterns.constructPattern(
          emptyPattern(),
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => ([0, 16].includes(i) ? 'B' : ([8, 22].includes(i) ? 'S' : '-'))),
            amplitude: Array(32).fill(0).map((e, i) => ([0, 16, 8, 22].includes(i) ? 1 : 0)),
            duration: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
          {
            value: ['F#4', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'D4', '-', '-', '-', 'F#4', '-', '-', '-', '-', '-', 'B3', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
            amplitude: [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            duration: [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
      5: {
        title: 'Repeated pitches',
        content: `
          <p>Most melodies change pitch often.</p>
          <p>What happens if we keep hearing one repeated pitch instead? </p>
          ${
  constructActionSteps([
    'Play this pattern a few times and save.',
    'How does it make you feel?',
    'Now change the last pitch. Save.',
    'Play Pattern 1 a few times, then Pattern 2. ',
    'How do you feel when Pattern 2 is played? ',
  ])
}    
          <p>
            <strong>Notice</strong> when we hear a repeated pitch, we expect to hear it change pitch right away. The longer the one pitch is repeated, the more suspense we feel. 
          </p>
        `,
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: 'Repeated pitches are used a lot in thriller and horror movie scores.',
          },
        ],
        pattern: patterns.constructPattern(
          emptyPattern(),
          emptyPattern(),
          {
            value: ['D4', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'D4', '-', '-', '-', '-', '-', '-', '-', 'D4', '-', '-', '-', '-', '-', '-', '-', 'D4', '-', '-', '-'],
            amplitude: [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0],
            duration: [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
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
      6: {
        title: 'Melody and Note Length',
        content: `
          <p>Melodies use a lot of different note lengths (called <em>durations</em>). Our app has 4 different durations.</p>
          <p>What do these add?</p>
          ${
  constructActionSteps([
    'Make 1-2 durations in this melody longer, by clicking them more than once. Try different possibilities.',
    'Which note stands out when you make a note longer?',
  ])
}    
          <p>
            <strong>Notice</strong> a longer note makes us wait for the next note. This highlights the note that’s held for longer, as well as the one that comes next.
          </p>
        `,
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: 'Singers often hold a note for a long time when they want to stress a particular word.',
          },
        ],
        pattern: patterns.constructPattern(
          emptyPattern(),
          emptyPattern(),
          {
            value: ['D4', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'E4', '-', '-', '-', '-', '-', '-', '-', 'F#4', '-', '-', '-', '-', '-', '-', '-'],
            amplitude: [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0],
            duration: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
          },
        ),
      },
      7: {
        title: `
          Level 2: Creating a sense of 'home' in a melody
        `,
        content: `
          <p>Listeners need to know the main pitch in a melody - the one the melody starts from and comes back to throughout the song.</p>
          ${
  constructActionSteps([
    'On hi hat locations, enter two D’s in the first half of the melody.',
    'Next enter either E or B, then end with D. Save.',
    'Now start instead with E or B then D, then E/B then end with D. Save.',
    'Listen to the two patterns and how they help you remember D.'
  ])
}    
          <p>
            <strong>Notice</strong> repeating D, moving to a nearby pitch and back, and reversing the order all help us remember D is the main pitch.
          </p>
        `,
        pattern: patterns.constructPattern(
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => ([0, 6, 12, 20, 24, 28].includes(i) ? 'H' : '-')),
            amplitude: Array(32).fill(0).map((e, i) => ([0, 6, 12, 20, 24, 28].includes(i) ? 1 : 0)),
            duration: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
          {
            // eslint-disable-next-line no-nested-ternary
            value: Array(32).fill('-').map((e, i) => ([0, 16].includes(i) ? 'B' : ([8, 22].includes(i) ? 'S' : '-'))),
            amplitude: Array(32).fill(0).map((e, i) => ([0, 16, 8, 22].includes(i) ? 1 : 0)),
            duration: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          },
          emptyPattern(),
          {
            tempo: 90,
            volume: 60,
            mute: { bassSnare: true, hiHat: true, melody: true },
            chord: 'D2',
            voice: 'synth',
          },
        ),
      },
      8: {
        title: 'Level 2: Smaller vs Larger Steps in Pitch',
        content: `
          <p>At the beginning of a song, the melody mostly uses small changes in pitch so listeners can connect new pitches back to the main pitch.</p>
          <p>What does a larger step add?</p>
          ${
  constructActionSteps([
    'Enter a melody that has 5 notes, using just D and E. Save.',
    'Change one note near the end to the higher A or B to create a leap up in pitch. Save.',
    'Play Pattern 1 then 2.',
    'How does the leap up change the way you hear the melody?'
  ])
}    
          <p>
            <strong>Notice</strong> the longer we hear small changes in pitch, the more a leap stands out. A leap up in pitch is exciting, it adds energy to the melody, like a flourish in a drum pattern.
          </p>
        `,
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: 'A larger leap is often used in the chorus - to make it different from the verse, which tends to use smaller steps.',
          },
        ],
      },
      
    },
    tierFilter: {
      1: {
        cutoff: 8,
      },
      2: {
        cutoff: 10,
      },
      3: {
        cutoff: 14,
      },
    },
  },
  ADVANCED_TOOLS: {
    title: 'Advanced Tools',
    key: 'ADVANCED_TOOLS',
    activities: {},
    tierFilter: {
      3: {
        cutoff: 2,
      },
    },
  },
  SPECIAL_PROJECTS: {
    title: 'Special Projects',
    key: 'SPECIAL_PROJECTS',
    activities: {},
    tierFilter: {
      2: {
        cutoff: 2,
      },
      3: {
        cutoff: 2,
      },
    },
  },
};

/*
* getOrderedSEctions - method that takes a tier and returns an array of sections in sequential order
*
* Arguments:
* tier: number;
*
* Returns: Section[]
*/

export const getOrderedSections = (tier) => [
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
].filter((section) => !!section.tierFilter[tier]);
