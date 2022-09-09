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
    title: 'Rhythm - Drums',
    tierFilter: {
      1: {
        cutoff: 9,
      },
      2: {
        cutoff: 11,
      },
      3: {
        cutoff: 13,
      },
    },
    activities: {
      1: {
        title: 'Introduction',
        content:
          `
          <p>Rhythm can mean two things:</p>
          <ul>
            <li>The timing pattern of musical sounds - <strong>when</strong> they are heard.</li>
            <li>The music made by the rhythm section - drums and other instruments that bring the timing patterns to life.</li>
          </ul>
          `,
      },
      2: {
        title: 'The basic beat',
        content:
          `
          <p>There are hundreds, even thousands of sounds (called <em>notes</em>) in a song.</p>
          <p>We only hear a few at a time. How do we keep track of them all?</p>
          ${
  constructActionSteps([
    'Press Play <img src="../assets/play.svg" alt="play button" width="20px" alt="" /> to listen. Press again to stop.',
    'How would you describe this pattern?',
  ])
}
          <p>
            <strong>Notice</strong> this pattern - the <em>basic beat</em> - is very regular - like a clock.
            The notes are always 4 spaces apart.
          </p>
          `,
        pattern: patterns.bassPattern,
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: 'Each group of 4 spaces is called a <em>beat unit</em>. There are 4 beat units to the circle, which is one <em>bar</em> of music.',
          },
        ],
      },
      3: {
        title: 'Two Halves',
        content:
          `
          <p>Because music goes by fast, it&#8217;s easier to follow a pattern if we can hear it as two halves.</p>
          ${
  constructActionSteps([
    'Change the 2nd and 4th drum sounds to snare drum: (tap the drum name, then the note).',
    'Listen. Do you hear 2 pairs of notes now? One pair in each half of the circle?',
  ])
}
          <p><strong>Notice</strong> that each half has the same order of drum sounds:  bass drum then snare drum. This helps us compare the two halves.</p>
          `,
        pattern: patterns.bassPattern,
      },
      4: {
        title: 'Big changes tend to happen from one half to the next',
        content:
          `
          <p>Since it&#8217;s easier to compare two halves of a pattern, big changes tend to be made from one half to the other.</p>
          ${
  constructActionSteps([
    'Listen and Save.',
    `Delete one note in the 2nd half above by clicking it 3 times. Save by pressing "Save Pattern".
    <ul>
      <li>Listen. How does this change the music?</li>
    </ul>
    `,
    `Now play Pattern 1 then 2 (click on the Pattern number then Play)
    <ul>
      <li>How does this change the way you hear Pattern 2?</li>
    </ul>
    `,
  ])
}
          <p><strong>Notice</strong> when hear just Pattern 2, we hear the difference between the halves. When we hear Pattern 1 then 2, we first hear the 4 beats, so it&#8217;s more surprising when we hear one missing.</p>
          `,
        pattern: patterns.bassPattern,
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: 'The first drum sound is hardly ever left out.',
          },
        ],
      },
      5: {
        title: 'Push and Pull',
        content:
          `
          <p>The beat pulls the music towards it, but sometimes the music pushes back.</p>
          ${
  constructActionSteps([
    'Listen to the basic beat again.',
    'Click either the 3rd or 4th beat a few times to take it out. Re-enter it one space earlier.',
    'Press Play to listen. How does this make you feel/want to move?',
  ])
}
          <p><strong>Notice</strong> the note that comes in early pushes against the beat. We expect to hear it go back to the beat.</p>
          `,
        pattern: patterns.bassSnarePattern,
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: 'When a beat is moved one space early or late, it&#8217;s called <em>off the beat</em>. In its normal position it&#8217;s called <em>on the beat</em>.',
          },
        ],
      },
      6: {
        title: 'Smaller changes happen between quarters',
        content:
          `
          <p>Big changes like a gap happen from one half to the other. But smaller changes often happen from one quarter to the next, within a half.</p>
          ${
  constructActionSteps([
    'In the first quarter (called a <em>beat unit</em>), add a note midway between beats. Save.',
    'Listen. Is the extra note a bigger or smaller change than the gap in the second half?',
    'Now add a note in the space right before or after the single beat in the second half.',
    'Listen. Is this a smaller or larger change?',

  ])
}
          <p><strong>Notice</strong> that adding notes between beats is a smaller change than moving or removing one of the beats.</p>
          `,
        pattern: patterns.bassSnareGapPattern,
      },
      7: {
        title: 'Tagging the halves and quarters',
        content:
          `
          <p>To make it easy to follow changes from half to half and quarter to quarter, music tags the beginning of each part of the circle.</p>
          ${
  constructActionSteps([
    'Tap the 1st note above twice to make it as loud as possible.',
    'Tap the 3rd note once to make it a bit louder.',
    'Listen.',
  ])
}
          <p><strong>Notice</strong> this makes a pattern: Strong-Weak-Medium-Weak. The Strong beat tells us when the first half begins, the Medium tells us when the second half begins. The Weaker beats tell us when the second and fourth quarters begin.</p>
          `,

        pattern: patterns.bassPattern,
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: 'Patterns that change a lot from one half to the next, or from one bar to the next, are named “<em>Call and response</em>”. This kind of pattern is like a conversation!',
          },
        ],
      },
      8: {
        title: 'Level 2: Bridging a Gap',
        content:
          `
          <p>Too long a gap between drum beats can leave listeners hanging - not sure what to expect next.</p>
          <p>How can we keep a gap from breaking the flow?</p>
          ${
  constructActionSteps([
    'Listen to this pattern, then save it.',
    'Put a note in Pattern 2 midway between the 3rd and 4th beats. Save.',
    'Play the 3 patterns in this order: 1-2-1-3',
    'Which pair is easier to follow and move to?',
  ])
}
          <p><strong>Notice</strong> the new note in pattern 3 has a lighter stress. It carries the energy from one beat to the next - so the energy stays high.</p>
          `,

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
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: 'a note midway between beats is called an <em>off</em> beat.',
          },
        ],
      },
      9: {
        title: 'Level 2: Highlighting Tools',
        content:
          `
          <p>When we're talking, we stress a word we want the other person to notice.</p>
          <p>We do this in music too.</p>
          ${
  constructActionSteps([
    'Tap one note above twice to make it as loud as possible.',
    'Try different notes to highlight. Save your favourite.',
    'Now, double a note - putting a note in the very next space. Try different notes. Save your favourite.',
    'Play the patterns back in a row. Which one gets your attention the most? What kind of note is highlighted?',
  ])
}
          <p><strong>Notice</strong> that highlighting draws attention to a change in the pattern, like where it goes <em>off the beat</em> or comes back <em>on the beat</em>.</p>
          `,

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
    },
  },
  RHYTHM_HI_HAT: {
    title: 'Rhythm - Hi Hat',
    key: 'RHYTHM_HI_HAT',
    activities: {
      1: {
        title: 'Introducing the Hi Hat',
        content:
          `
          <p>Music is built up in layers. The drum is the bottom layer. The next layer is the hi hat.</p>
          <p>Which layer leads? Which follows?</p>
          ${
  constructActionSteps([
    'Press Play to listen.',
    'How is the sound of the hi hat different from the drum?',
    'Is it shorter or longer sounding? Higher or lower sounding?',
    'Choose one word to describe it.',
    'What stands out most - the drum or the hi hat?',
  ])
}
          <p>
            <strong>Notice</strong> the drum is louder and deeper sounding - you can&#8217;t help but pay attention to it. The hi hat seems to follow the drum.
          </p>
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
        title: 'The hi hat changes how we hear the drum pattern',
        content:
        `
        <p>The drum is like a noun, and the hi hat is like an adjective.</p>
        ${
  constructActionSteps([
    'Listen to this drum pattern.',
    'How would you describe it? Is it easy to follow?',
    'Now click on Hi Hat: enter notes every 2 spaces, starting with the 1st space in the circle.',
    'Press Play.',
    'How does this change the way you hear the drum pattern. Is it easier to follow now?',
  ])
}
        <p>
          <strong>Notice</strong> the hi hat gives us a regular pattern that helps us keep track of the big changes in the second half of the drum pattern. This makes the music smoother sounding.
        </p>
        `,
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
        title: 'Playing tricks with time',
        content:
        `
        <p>The hi hat can play tricks with how we hear time, making the music seem to build speed as it leads up to a change in the drum pattern.</p>
        ${
  constructActionSteps([
    'Listen to this example.',
    'Add a hi hat note on the 3rd space of each beat unit or quarter and listen.',
    'How does this change the way the music moves?',
    'Now add hi hat notes on the empty spaces in the last beat unit or quarter and listen. ',
    'How does this change the way the music moves?',
  ])
}
        <p>
          <strong>Notice</strong> the closer together the hi hat notes are, the more the energy picks up. This highlights where the drum goes back on the beat after having gone off the beat just before.
        </p>
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
            content: 'A row of close-together notes in the last quarter is called a <em>flourish</em>. It builds a sense of forward motion leading back to the first beat (called the <em>downbeat</em>).',
          },
        ],
      },
      4: {
        title: 'Push and Pull',
        content:
        `
        <p>The drum and hi hat are often in sync, with hi hat notes either on or between drum beats.</p>
        <p>What happens if the hi hat notes are out of sync with the drum?</p>
        ${
  constructActionSteps([
    'Listen to the basic beat again.',
    'Add hi hat notes 3 spaces apart, starting with the 1st space in the circle. Listen',
    'Where does the hi hat move away from the drum, and where are they in sync?',
    'How does this make you feel?',
    'How does this change the way the music moves?',
  ])
}
        <p>
          <strong>Notice</strong> there is a push-pull effect as the hi hat pattern pushes back against the drum, then comes back to the drum. 
        </p>
        `,
        pattern: patterns.bassSnarePattern,
      },
      5: {
        title: 'Half to half changes',
        content:
        `
        <p>How do hi hat patterns change from half to half?</p>
        ${
  constructActionSteps([
    'Listen to this pattern.',
    'Do you hear two groups of 3 hi hat notes?',
    'What is it that tells you they go in groups?',
    'Now take away one of the notes in the 2nd group.',
    'Listen. How does the music change from half to half?',
  ])
}
        <p>
          <strong>Notice</strong> the empty space at the end of each group of 3 tells us the notes before it go together. Taking away a note on the beat stands out more (especially when there is no drum playing).
        </p>
        `,
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
        title: 'Quarter to quarter changes',
        content:
        `
        <p>Smaller changes in the hi hat tend to happen from one quarter to the next.</p>
        ${
  constructActionSteps([
    'Listen to this pattern with a big change from half to half and save.',
    'Move the 2nd or 4th note one space early or late. Save.',
    'Go back to Pattern 1 and delete the 2nd or 4th note. Save.',
    'Play the 3 patterns in a row. Is it easy to follow the changes from the 1st to 2nd quarter?',
    'Listen. How does the music change from half to half?',
  ])
}
        <p>
          <strong>Notice</strong> that these changes are easier to follow because they don&#8217;t involve moving or deleting a hi hat note that falls on the beat.
        </p>
        `,
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
        title: 'Level 2: Editing Groups of 3',
        content:
        `
        <p>Hi hat patterns often involve repeated groups of 2-3 notes.</p>
        <p>What happens if we combine groups or make a larger gap in a group?</p>

        ${
  constructActionSteps([
    'Listen then save this pattern.',
    'Move one whole group of 3 one space later. Save.',
    'Which beat is highlighted now?',
    'Click Pattern 1. Take away the 6th hi hat note. Save.',
    'Which beat is highlighted now? ',
  ])
}
        <p>
          <strong>Notice</strong> Pattern 2 highlights the beat that falls in the middle of the run of short notes. Pattern 3 highlights the 2nd snare, as it puts a gap just after it that makes the snare linger in our mind.
        </p>
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
            content: `
            You can also move one note in a group of three early or late. It's surprising how different the music can sound with these small changes - because they make us to pay attention to a different drum beat.
            `,
          },
        ],
      },
      8: {
        title: 'Level 2: Editing Groups - Part 2',
        content:
        `
        <p>A gap in the hi hat after a drum beat or a run leading up to one both make make the beat stand out. Let’s explore this using different positions for the drum beat.</p>
        ${
  constructActionSteps([
    'Listen and Save. Move the 2nd drum beat one space early or late.',
    'Now move a hi hat group or delete one of the 3 notes to make a bigger gap after the drum beat you moved. Save.',
    'Now move the 3rd drum beat one space early or late also. Change the hi hat pattern to highlight this beat, either with a run or a larger gap after it. Save.',
    'Play the patterns back. What does each highlight?',
  ])
}
        <p>
          <strong>Notice</strong> Since changes to a drum beat location are bigger changes, hi hat patterns that highlight these changes make a bigger difference than ones where the beat is more regular.
        </p>
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
      },
    },   
    tierFilter: {
      1: {
        cutoff: 8,
      },
      2: {
        cutoff: 11,
      },
      3: {
        cutoff: 13,
      },
    },
  },
  TEMPO: {
    title: 'Tempo',
    key: 'TEMPO',
    activities: {
      1: {
        title: 'Tempo is the speed of the music',
        content:
          `
          <p>Almost nothing changes music as much as the tempo or speed.</p>
          ${
  constructActionSteps([
    'Listen to this pattern. As it plays, click, hold, and drag the tempo slider left and right.',
    'How does changing the tempo change the way the music moves?',
    'How does it change how the hi hat and drum work together? The mood the music creates?',
  ])
}
          <p>
            <strong>Notice</strong> that speeding up music makes it more upbeat and brighter, while slowing it down can do the opposite. Changing speed also can change how we group notes together.
          </p>
          `,
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: 'Tempo is measured in BPM - beat units per minute.',
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
    },
    tierFilter: {
      1: {
        cutoff: 1,
      },
      2: {
        cutoff: 2,
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
        title: 'Volume (loudness)',
        content: `
          <p>Changing the volume or loudness of music changes the mood of the music.</p>
          ${
  constructActionSteps([
    'As you listen to this pattern, click, hold, and drag the volume slider to the left.',
    'As the music gets softer, how does it change the mood?',
    'Now drag the slider to the right.',
    'As the music gets louder, how does it change the mood?',
    'Now make the tempo a bit faster.',
    'Does this sound more upbeat, brighter?',
  ])
}
          <p>
            <strong>Notice</strong> the louder the music gets, the more upbeat and brighter it sounds. The opposite applies, too: as the music gets softer, it gets moodier.
          </p>
        `,
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

    },
    tierFilter: {
      1: {
        cutoff: 1,
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
        title: 'Melody instruments',
        content: `
          <p>When we hear a synth and a guitar playing together, we can instantly tell them apart.</p>
          <p>What is it about the sound of these instruments that makes them so easy to recognize?</p>
          ${
  constructActionSteps([
    'Listen to this example played on the synth, then on Guitar (Rock then RnB).',
    'Which sound has the most bite?',
    'Which is heard for the longest?',
    'Which is smoothest?',
  ])
}
          <p>
            <strong>Notice</strong> that listening to the beginning and ending of the sound helps us identify  different instruments. 
          </p>
        `,
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: 'Synth is short for Synthesizer, a computer generated sound. RnB stands for Rhythm and Blues, a guitar that often syncs up with the rhythm section (drums, hi hat).',
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
        title: 'Timbre or Sound Colour',
        content: `
          <p>We can also think about instrument sounds in terms of colour.</p>
          <p>How are the colours related/different?</p>
          ${
  constructActionSteps([
    'Press Play to listen to this pattern with Synth, then Rock, then RnB guitar.',
    'Which sound is brightest, which is darkest, most dramatic or intense?',
    'What colour would you choose to represent each instrument sound?',
    'Which one grabs your attention the most? Stands out the most?',
  ])
}
        `,
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: 'A skilled guitar player can create a huge range of sound colours.',
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
    },
    tierFilter: {
      1: {
        cutoff: 2,
      },
      2: {
        cutoff: 2,
      },
      3: {
        cutoff: 3,
      },
    },
  },
  PITCH: {
    title: 'Pitch',
    key: 'PITCH',
    activities: {
      1: {
        title: 'Introducing pitch',
        content: `
          <p>Pitch is the quality of a note sounding higher or lower.</p>
          ${
  constructActionSteps([
    'Click on the synth note in the pattern above. Hold and drag it up and down, to hear all the pitches.',
    'How many different higher or lower sounding notes or pitches did you find?',
  ])
}
          <p>
            <strong>Notice</strong> the pitches are all named for letters of the alphabet. The higher the pitch, the further into the alphabet the letter used to name them. 
          </p>
        `,
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: 'All instruments, including drums, have pitch. Instruments like the guitar make it easy to play a wider range of pitches.',
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
        title: 'Scale',
        content: `
          <p>A scale is a kind of pitch ladder.</p>
          <p>Are the steps in the ladder always the same distance apart? </p>
          ${
  constructActionSteps([
    'On the locations of the hi hat notes, add Synth pitches that rise in pitch from the lower to higher B.',
    'Listen.',
    'How many steps up are there from the lower to the higher B?',
    'Are they all the same size?',
  ])
}
          <p>
            <strong>Notice</strong> there are two sizes. The pattern is B-D (larger), D-E (smaller), E-F# (smaller), F#-A (larger), A-B (smaller). 
          </p>
        `,
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: 'A scale with five pitches (making five steps up in pitch) is called pentatonic? (Penta means 5).',
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
    title: 'Chords',
    key: 'CHORDS',
    activities: {
      1: {
        title: 'Chords paint a mood',
        content: `
          <p>A chord is made from 3 or more pitches that blend together so you can&#8217;t easily tell the individual pitches apart.</p>
          <p>Different chords paint different moods.</p>
          ${
  constructActionSteps([
    'Listen to this rhythm. ',
    'Tick the box beside the D (major) chord in the list at the top right and listen.',
    'Now tick the box beside Bm (minor) and listen.',
    'What difference in mood do you hear?',
    'Which chord seems brighter, more upbeat? Which seems more intense, sadder?',
  ])
}    
          <p>
            <strong>Notice</strong> the D chord (major) seems brighter. The Bm chord (minor) seems either more dramatic or sadder.
          </p>
        `,
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: 'Major and minor are the two main types of chords. Minor means smaller. A minor chord has a smaller step up in pitch from the 1st to 2nd chord note than a major chord.',
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
        title: 'Level 2: Home Chord',
        content: `
          <p>The first chord we hear in a song is the most important - it's the 'home' chord that the music keeps coming back to throughout the piece.</p>
          <p>How can we help listeners relate other chords to this one?</p>
          ${
  constructActionSteps([
    'While this rhythm pattern is playing, change the chord to create these patterns:',
    'D/D/Bm/D',
    'Bm/Bm/D/Bm',
  ])
}    
          <p>
            <strong>Notice</strong> the main chord is played twice before the chord is changed. And after the change, we go back to the main chord again. This helps listeners remember the main chord and connect the new chord to it.
          </p>
        `,
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: 'Further into a song, you don’t need to repeat the main chord as often, as listeners are familiar with it now.',
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
        title: 'Level 2: Which chords are more like and which less?',
        content: `
          <p>Which pairs of chords sound more like each other, and which are more different?</p>
          ${
  constructActionSteps([
    'Listen to the D chord, then the Bm chord.',
    'Now listen to the D chord then G.',
    'Which pair of chords seem more like, and which are more different?',
    'How many notes (white lines) are in common between the D and Bm chords?',
    'Between D and G chords?',
  ])
}
          <p>
            <strong>Notice</strong> there is only one pitch in common between D to G (D), but two pitches in common between D and Bm (D, F#). This may explain why D and Bm seem more like.
          </p>
        `,
        widgets: [
          {
            type: widgets.DidYouKnow,
            content: 'Bm is called the relative minor of D - another way of saying these two chords are similar.',
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
        cutoff: 3,
      },
      2: {
        start: 2,
        cutoff: 3,
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
