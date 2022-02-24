import * as patterns from './patterns.js';
import { widgets } from './constants.js';
import { emptyPattern } from './utils.js';

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
* LessonSection Schema:
*
* title: string;
* content: string;
* pattern?: { innerCustomPattern: any; outerCustomPattern: any; samplerCustomPattern: any;}
* widgets?: {type: 'did-you-know' | 'math-connection'; content: string}[];
*
*/

/*
*
* Lesson Schema:
* title: string;
* key: string;
* sections: {[key: number]: LessonSection};
* tierFilter: {{key: number]: { cutoff: number; }}
*
*/

/*
* lessons - dictonary of lessons, where each have the Lesson schema
*
*/

export const lessons = {
  RHYTHM_DRUMS: {
    key: 'RHYTHM_DRUMS',
    title: 'Rhythm - Drums',
    tierFilter: {
      1: {
        cutoff: 7,
      },
      2: {
        cutoff: 11,
      },
      3: {
        cutoff: 13,
      },
    },
    sections: {
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
    'Press Play <img src="assets/play.svg" alt="play button" width="20px" alt="" /> to listen. Press again to stop.',
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
    `Delete one note in the 2nd half above by clicking it 3 times. Save by pressing “Save Pattern”.
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
          {
            type: widgets.MathConnection,
            content: `
              <ul>
                <li>What are the three fractions made when you put a gap in your pattern?</li>
                <li>Put them on a number line.</li>
                <li>Compare the smallest to the largest, by dividing the largest by the smallest.</li>
              </ul>
            `,
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
          {
            type: widgets.MathConnection,
            content: `
              <ul>
                <li>How would you show each of the four beats in your pattern as a part of the circle as a whole?</li>
                <li>How many spaces are there in the circle? (This is the denominator). How many spaces are there from each beat to the next? (This is the numerator).</li>
                <li>Put the four fractions on a number line numbered from 0 to 16, drawing a line to show each fraction above the number line.</li>
              </ul>
              <div class="image-container">
                <img src="assets/numberline.png" width="500" alt="a numberline with 17 dashes labelled 0 through 16 with the fraction 4/16 at the 5th line, 8/16 at the 9th line, 12/16 at the 13th line, and 16/16 at the 17th line." />
              </div>
            `,
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
      //       8: {
      //         title: 'Highlight part of the beat pattern',
      //         content:
      //           `
      //           <p>Drummers often highlight notes they want the listener to pay attention to: for example the very first note in the bar,  or where the music goes off the beat or comes back on the beat. </p>
      //           ${
      //   constructActionSteps([
      //     'Double a beat, by putting a drum sound in the very next space.',
      //     'Make a beat that you want to stand out louder, by tapping it more than once. (Highlight a beat that moves off the beat or one that comes back on the beat).',
      //   ], 'Try these two ways to highlight a note in this pattern:')
      // }
      //           <p>Notice how this makes you pay more attention to the note that is highlighted.</p>
      //           `,
      //         widgets: [
      //           {
      //             type: 'did-you-know',
      //             content: 'Doubling a beat changes the flow of the music because the note that&#8217;s added is off the beat.',
      //           },
      //         ],
      //         pattern: patterns.bassSnareLongGapPattern,
      //       },
      //       9: {
      //         title: 'Add a row of short notes to make the music seem to speed up',
      //         content:
      //           `
      //           <p>We get used to the drum beats being spaced evenly every four spaces apart.</p>
      //           <p>So if we fill in all the spaces between two beats, it makes the music seem to go faster, have more forward energy or momentum in that one part.</p>
      //           ${
      //   constructActionSteps([
      //     'In the second or third beat unit above, ‘fill in&#8217; the beat unit, adding drum sounds in each empty space. Listen.',
      //   ])
      // }
      //           <p>Notice how the music seems to lead up to the drum sound right after the run of short notes.</p>
      //           <p>Did you know that drummers often put a row of short notes in the fourth beat unit? Called a flourish, this picks up the energy as the music leads back into the next bar.</p>
      //           `,
      //         pattern: patterns.bassSnareLongGapPattern,
      //       },
      //       10: {
      //         title: 'Create a sense of the music rushing then stopping',
      //         content:
      //           `
      //           <p>Listen to this pattern. </p>
      //           ${
      //   constructActionSteps([
      //     'Now, take away the third beat, the one right after the close together notes.',
      //     'Listen again. How does this change the way you hear the pattern?',
      //   ])
      // }
      //           <p>Notice when we hear a run of close together notes and then a gap, the music can almost seem to stop. We expect to hear a sound, so it&#8217;s surprising to hear no sound at all.</p>
      //           `,

      //         widgets: [
      //           {
      //             type: 'did-you-know',
      //             content: 'Gaps (called rests) are among the most powerful musical tools because they play tricks on our sense of timing plus they highlight the notes before and after them!',
      //           },
      //         ],
      //         pattern: patterns.bassSnareLongGapPattern,
      //       },
      //       11: {
      //         title: 'Story telling with the drum',
      //         content:
      //           `
      //           <p>What we hear first in music is the most important. So when we&#8217;re creating a piece of music, we need to make sure the listener is familiar with the first idea.</p>
      //           ${
      //   constructActionSteps([
      //     `
      //               Listen to the patterns in this list. The main idea is Pattern #1. Enter the patterns in the sequencer in this order: (click the > button beside the pattern to enter it in the sequencer,
      //                 <ul>
      //                   <li>Main Idea</li>
      //                   <li>Repeat main Idea</li>
      //                   <li>Make small changes</li>
      //                   <li>Repeat main idea.</li>
      //                 </ul>
      //               `,
      //     'Press Start and then press Play in the circle to listen. To change the order, press Stop and Clear and re-enter.',
      //   ])
      // }
      //           <p>Notice that the music keeps going back to the original idea: that&#8217;s so listeners can compare the small changes to the original idea. The further we get into a piece, the less we have to repeat the original idea because listeners are so familiar with it by now.</p>
      //           `,
      //         widgets: [
      //           {
      //             type: 'did-you-know',
      //             content: 'To get to the sequencer, click the Note Entry button in the bottom left of the app.',
      //           },
      //         ],
      //         pattern: patterns.bassSnareLongGapPattern,
      //       },
    },
  },
  RHYTHM_HI_HAT: {
    title: 'Rhythm - Hi Hat',
    key: 'RHYTHM_HI_HAT',
    sections: {
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
          {
            type: widgets.MathConnection,
            content: `
              <ul>
                <li>What part of the whole circle is the distance from each hi hat note to the next hi hat, when the notes are spaced 2 spaces apart?</li>
                <li>Think about the number of spaces in the circle as a whole (the denominator) and the number of spaces beginning with each hi hat note and ending with the space right before the next note (the numerator).</li>
                <li>What part of the whole circle is the distance from one hi hat to the next if the notes are 3 spaces apart?</li>
                <li>When there are hi hats on every space?</li>
              </ul>
            `,
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
        widgets: [
          {
            type: widgets.MathConnection,
            content: `
              <ul>
                <li>Put the drum and hi hat patterns on a number line, circling the spaces where the hi hat and drum come together.</li>
                <li>Divide these space numbers by 3 - the number of spaces between each pair of hi hat notes.</li>
                <li>Divide the space numbers by 4 - the number of spaces between each pair of drum notes. </li>
              </ul>
              <p>
                <strong>Notice</strong> you can divide the space numbers where the two patterns come together by both 3 and 4. This is the <strong>common multiple</strong> of the spacing of the hi hat (3) and drum (4).
              </p>
            `,
          },
          {
            type: widgets.LiteracyConnection,
            content: 'Think of an adjective that seems to be at odds with the noun it is describing. This creates a kind of tension because we don&#8217;t normally associate this noun with this adjective. Now resolve the tension, by creating a new sentence where you use other adjectives to help explain the adjective that clashes with the noun.',
          },
        ],
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
        widgets: [
          {
            type: widgets.LiteracyConnection,
            content: 'The empty space that tells us the notes before it go together is like punctuation in writing. What punctuation tells us a small group of words go together?',
          },
        ],
      },
      6: {
        title: 'Quarter to quarter changes',
        content:
        `
        <p>Smaller changes in the hi hat tend to happen from one quarter to the next.</p>
        ${
  constructActionSteps([
    'Listen to this pattern with a big change from half to half (missing beat).',
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
    },
    tierFilter: {
      1: {
        cutoff: 6,
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
    sections: {
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
          {
            type: widgets.MathConnection,
            content: `
            <p>Tempo is a <em>unit rate</em>. It tells us how many of one kind of unit (beats) there are for every number of another kind of unit (a minute).</p>
            <ul>
              <li> How would you show 60 BPM as a unit rate, using math symbols? </li>
              <li> How many beat units are there in a second if there are 60 in a minute? </li>
            `,
          },
          {
            type: widgets.LiteracyConnection,
            content: 'What are some ways you can change the <em>pacing</em> of a story or text to make it seem to go faster or slower?',
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
    sections: {
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
        widgets: [
          {
            type: widgets.MathConnection,
            content: `
            <p>The volume slider measures the loudness in decibels. </p>
            <ul>
              <li> 
                What is the percentage increase from 30 decibels to 110? 
                <ul>
                  <li>Think of this first as a fraction. 30 decibels is the denominator. The difference from 30 to 110 is the numerator. </li>
                </ul>
              </li>
              <li> Now divide out the fraction and multiply by 100 to get the percentage increase. </li>
            </ul>
            `,
          },
          {
            type: widgets.LiteracyConnection,
            content: 'How does lowering or increasing the volume of speech change what we hear and understand?',
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
            duration: [4, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]
          },
          {
            tempo: 90,
            volume: 60,
            mute: {bassSnare: true, hiHat: true, melody: true},
            chord: "B1",
            voice: "synth"
          }
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
    sections: {
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
            duration: [4, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]
          },
          {
            tempo: 90,
            volume: 60,
            mute: {bassSnare: true, hiHat: true, melody: true},
            chord: "D2",
            voice: "synth"
          }
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
          {
            type: widgets.LiteracyConnection,
            content: 'How can we use words that start with the same sound to create a musical flow to a text? Words that have the same vowel sound?',
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
            duration: [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
          },
          {
            tempo: 90,
            volume: 60,
            mute: {bassSnare: true, hiHat: true, melody: true},
            chord: "B1",
            voice: "synth"
          }
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
    sections: {
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
          {
            type: widgets.MathConnection,
            content: 'Think about how music could be represented using x and y coordinates, with the x being time and y pitch.',
          },
        ],
        pattern: patterns.constructPattern(
          emptyPattern(),
          emptyPattern(),
          {
            value: ['E4'].concat(Array(31).fill('-')),
            amplitude: [3].concat(Array(31).fill(0)),
            duration: [1].concat(Array(31).fill(0))
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
    'Are they all the same size?'
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
          {
            type: widgets.MathConnection,
            content: `
            <ul>
              <li>What part of the whole scale is each of the steps in the pentatonic scale beginning on B?</li> 
              <li>The total number of steps is 6 (the denominator). What is the numerator for each step?</li>
            </ul>
           `,
          },
        ],
        pattern: patterns.constructPattern(
          {
            value: Array(32).fill('-').map((e, i) => (i % 4 == 0 ? 'H' : '-')),
            amplitude: Array(32).fill(0).map((e, i) => (i % 4 == 0 ? 1 : 0)),
            duration: Array(32).fill(0)
          },
          emptyPattern(),
          emptyPattern()
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
    sections: {
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
    },
    tierFilter: {
      1: {
        cutoff: 1,
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
    sections: {
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
    'Press Play to listen to this melody again.  ',
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
          {
            type: widgets.LiteracyConnection,
            content: 'Write a lyric to fit a popular melody. Write down the pattern of notes in the melody using short lines separated by spaces, then pencil in the syllables of your lyric or rap.',
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
            duration: [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0]
          },
          {
            tempo: 90,
            volume: 60,
            mute: {bassSnare: true, hiHat: true, melody: true},
            chord: "B1",
            voice: "synth"
          }
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
          emptyPattern(),
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
          emptyPattern(),
        ),
      },
      5: {
        title: 'Repeated pitches',
        content: `
          <p>Most melodies change pitch often.</p>
          <p>What happens if we keep hearing one repeated pitch instead? </p>
          ${
  constructActionSteps([
    'Play this pattern a few times.',
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
          {
            type: widgets.LiteracyConnection,
            content: 'What are some tools you can use to create a sense of suspense in a story?',
          },
        ],
        pattern: patterns.constructPattern(
          emptyPattern(),
          emptyPattern(),
          emptyPattern(),
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
          {
            type: widgets.MathConnection,
            content: `
             <ul>
               <li>Plot the four note lengths on a number line.</li> 
               <li>What do you have to do to the shortest to get the next longest? </li>
               <li>What do you have to do to this to get the next longest? And from that to the next longest?</li>
               <li>And from that, what do you have to do to get to the longest of all? </li>
               <li>What would have to do to get from the shortest to the longest? </li>
             </ul>
            `,
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
    sections: {},
    tierFilter: {
      3: {
        cutoff: 2,
      },
    },
  },
  SPECIAL_PROJECTS: {
    title: 'Special Projects',
    key: 'SPECIAL_PROJECTS',
    sections: {},
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
* orderedLesson - method that takes a tier and returns an array of lessons in sequential order
*
* Arguments:
* tier: number;
*
* Returns: Lesson[]
*/

export const getOrderedLessons = (tier) => [
  lessons.RHYTHM_DRUMS,
  lessons.RHYTHM_HI_HAT,
  lessons.TEMPO,
  lessons.VOLUME,
  lessons.TIMBRE,
  lessons.PITCH,
  lessons.CHORDS,
  lessons.MELODY,
  lessons.ADVANCED_TOOLS,
  lessons.SPECIAL_PROJECTS,
].filter((lesson) => !!lesson.tierFilter[tier]);
