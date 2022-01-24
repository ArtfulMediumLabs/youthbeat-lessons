const bassPattern = {
    innerCustomPattern: emptyPattern(),
    "outerCustomPattern": 
    { 
        "value": [ "B", "-", "-", "-", "-", "-", "-", "-", "B", "-", "-", "-", "-", "-", "-", "-", "B", "-", "-", "-", "-", "-", "-", "-", "B", "-", "-", "-", "-", "-", "-", "-" ], 
        "amplitude": [ 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0 ], 
        "duration": [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] 
    },
    samplerCustomPattern: emptyPattern()
}
const bassSnarePattern = {
    innerCustomPattern: emptyPattern(),
    "outerCustomPattern": 
    { 
        "value": [ "B", "-", "-", "-", "-", "-", "-", "-", "S", "-", "-", "-", "-", "-", "-", "-", "B", "-", "-", "-", "-", "-", "-", "-", "S", "-", "-", "-", "-", "-", "-", "-" ], 
        "amplitude": [ 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0 ], 
        "duration": [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] 
    },
    samplerCustomPattern: emptyPattern()
}
const bassSnareGapPattern = {
    innerCustomPattern: emptyPattern(),
    "outerCustomPattern": 
    { 
        "value": [ "B", "-", "-", "-", "-", "-", "-", "-", "S", "-", "-", "-", "-", "-", "-", "-", "-", "-", "B", "-", "-", "-", "-", "-", "S", "-", "-", "-", "-", "-", "-", "-" ], 
        "amplitude": [ 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0 ], 
        "duration": [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] 
    },
    samplerCustomPattern: emptyPattern()
}
const bassSnareLongGapPattern = {
    innerCustomPattern: emptyPattern(),
    "outerCustomPattern": 
    { 
        "value": [ "B", "-", "-", "-", "-", "-", "-", "-", "S", "-", "-", "-", "B", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "S", "-", "-", "-", "-", "-", "-", "-" ], 
        "amplitude": [ 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0 ], 
        "duration": [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] 
    },
    samplerCustomPattern: emptyPattern()
}

const sectionPatterns = []
sectionPatterns[1] = bassPattern;
sectionPatterns[2] = bassPattern;
sectionPatterns[3] = bassPattern;
sectionPatterns[4] = bassSnarePattern;
sectionPatterns[5] = bassSnareGapPattern;
sectionPatterns[6] = bassSnareLongGapPattern;
sectionPatterns[7] = bassSnareLongGapPattern;
sectionPatterns[8] = bassSnareLongGapPattern;
sectionPatterns[9] = bassSnareLongGapPattern;
sectionPatterns[10] = bassSnareLongGapPattern;

/*
* Lesson Schema:
*
* lessonNum: number
* title: string
* content: string
* widgets?: {type: 'did-you-know' | 'math-connection'; content: string}[]
*/

export const lessonSections = [
    {
      lessonNum: 1,
      title: "Introduction",
      content:
        `
        <p>Rhythm can mean two things:</p>
        <ul>
          <li>the timing pattern of music - when notes in the music are heard, and</li>
          <li>the music made by the rhythm section - the drums, hi hat, bells, and other instruments whose main job is to bring the timing patterns to life.</li>
        </ul>
        `
    },
    {
      lessonNum: 2,
      title: "The basic beat pattern",
      content:
        `
        <!-- [bass drum on spaces 0, 4, 8, 12] -->
        <p>There are hundreds or even thousands of musical sounds (called notes) in a piece of music. How do we keep track of them all?</p>
        <ul>
          <li>Press Play <img src="assets/play.svg" alt="play button" width="20px"/> to listen to this pattern, called ‘the beat’. Press again to stop.</li>
        </ul>
        <p>This pattern - the basic beat - helps us keep track of the timing of all the music, just as a clock helps us keeps track of minutes and hours.</p>
        <p>Always start with this basic beat pattern when you’re making a new piece.</p>
        <p>Notice the sounds or notes are all 4 spaces apart. Each group of 4 spaces is called a beat unit. There are 4 beat units to the circle, which stands for one bar of music.</p>
        `
    },
    {
      lessonNum: 3,
      title: "Edit the sounds",
      content:
        `
        <p>There are 3 different drum sounds in our app: bass drum, snare drum, and rim shot.</p>
        <div class="image-container">
          <img src="assets/drums.png" width="200" />
        </div>
        <ul>
          <li>Change the 2nd and 4th drum sounds above to snare drum: tap the drum name, then the  space in the circle, then press Play.</li>
        </ul>
        <p>Notice we now hear 2 pairs of sounds, not 4 individual sounds. Each pair is bass drum-snare drum. This makes us hear the pattern in halves.</p>
        <ul>
          <li>Now change the 2nd and 4th sounds to Rim Shot. How is this sound different from the snare drum?</li>
        </ul>
        `,
      widgets: [
        {
          type: "did-you-know",
          content: "Lots of popular music uses a hand clap sound on the 2nd and 4th beats, called a back beat because it’s like the audience clapping back to the bass drum. You can get something like this effect with the rim shot."
        }
      ]
    },
    {
      lessonNum: 4,
      title: "Pattern of stresses",
      content:
        `
        <p>The notes in the basic beat pattern are normally not all played at the same loudness. There is a pattern of stresses or how loud each beat is played.</p>
        <ul>
        <li>Tap the first note in the pattern above twice to make it as loud as possible.</li>
        <li>Tap the third note in the pattern once to make it louder.</li>
        <li>Press Play to listen.</li>
        </ul>
        <p>Notice this makes a Strong-Weak-Medium-Weak pattern.</p>
        <p>The Medium third beat tells us the second half of the bar is beginning. (This is like the chimes on a clock at the hour and half hour).</p>
        <p>This pattern helps listeners know where they are in the bar. That can be very helpful in following complicated musical patterns.</p>
        `,
      widgets: [
        {
          type: "did-you-know",
          content: "The Strong first note (called a downbeat) tells us the circle is beginning."
        }
      ]
    },
    {
      lessonNum: 5,
      title: "Edit the basic beat to create a movement or dance step",
      content:
        `
        <p>We feel the beat in our bodies, most often with our feet.</p>
        <p>If we change the space of one note in the basic beat, it makes us move in a different way - our feet or another part of us like our shoulder or waist.</p>
  
        <ul>
          <li>Listen to the basic beat again.</li>
          <li>Now click either the third or fourth beat a few times to remove it and then re-enter it one space early or late.</li>
          <li>Press Play to listen. How does this make you want to move?</li>
          <li>Press Save Pattern to save your idea.</li>
        </ul>
        
        <p>Notice that there is a difference in the spacing of the two pairs of notes now. This is a common pattern in music: we start with something regular in the first half, then change it up a bit in the second half. As we learned earlier, we find it easy to compare the two halves of patterns.</p>
        `,
      widgets: [
        {
          type: "did-you-know",
          content: "When a regular beat is moved one space early or late, it’s called ‘off the beat’. In its normal position it’s called ‘on the beat’."
        },
        {
          type: "math-connection",
          content: `
            <ul>
              <li>How would you show each of the four beats in your pattern as a part of the circle as a whole?</li>
              <li>How many spaces are there in the circle? (This is the denominator). How many spaces are there from each beat to the next? (This is the numerator).</li>
              <li>Put the four fractions on a number line numbered from 0 to 16, drawing a line to show each fraction above the number line. </li>
            </ul>
            <div class="image-container">
              <img src="assets/numberline.png" width="500" />
            </div>
          `
        },

      ]
    },
    {
      lessonNum: 6,
      title: "Take away a drum sound to create a gap",
      content:
        `
        <p>If we put a gap in a pattern, it’s like a short pause in the music. (A gap is called a rest, because the player rests.)</p>
  
        <ul>
          <li>Take away the third or fourth note in the pattern above. (Click a note a few times to remove it), and press Play to listen.</li>
          <li>Now put the note back in, and take the other one in the second half away instead.</li>
          <li>Which of the two versions seems most surprising?</li>
        </ul>
  
        <p>Notice because we heard both beats in the first half, we expect to hear them again in the second half. If the third note is also played, it makes the missing fourth beat stand out even more!</p>
        <p>Notice a gap makes you wait for the next sound. But while you’re waiting for it, you hold the last sound in your mind, so the gap highlights both the last note and the one you’re waiting to hear. </p>
        `,
      widgets: [
        {
          type: "did-you-know",
          content: "The first drum sound is almost never left out. We need to hear it to know when the bar begins."
        },
        {
          type: "math-connection",
          content: `
            <ul>
              <li>What are the three fractions made when you put a gap in your pattern?</li>
              <li>Put them on a number line.</li>
              <li>Compare the smallest to the largest, by dividing the largest by the smallest.</li>
            </ul>
          `
        },

      ]
    },
    {
      lessonNum: 7,
      title: "Filing in a longer gap",
      content:
        `
        <p>Longer gaps can break the flow of the music, especially in dance music. We’re not sure when to expect the next beat.</p>
        <ul>
          <li>Bridge over the gap in this pattern by putting a drum sound midway between the 3rd and 4th beats.</li>
        </ul>
        <p>Notice this keeps the energy of the beat going forward. And it makes the pattern smoother sounding because we don’t have to wait so long for the next beat!</p>
        `
    },
    {
      lessonNum: 8,
      title: "Highlight part of the beat pattern",
      content:
        `
        <p>Drummers often highlight notes they want the listener to pay attention to: for example the very first note in the bar,  or where the music goes off the beat or comes back on the beat. </p>
        <p>Try these two ways to highlight a note in this pattern:</p>
        <ul>
          <li>Double a beat, by putting a drum sound in the very next space.</li>
          <li>Make a beat that you want to stand out louder, by tapping it more than once. (Highlight a beat that moves off the beat or one that comes back on the beat).</li>
        </ul>
        <p>Notice how this makes you pay more attention to the note that is highlighted.</p>
        `,
      widgets: [
        {
          type: "did-you-know",
          content: "Doubling a beat changes the flow of the music because the note that’s added is off the beat."
        },
      ]
    },
    {
      lessonNum: 9,
      title: "Add a row of short notes to make the music seem to speed up",
      content:
        `
        <p>We get used to the drum beats being spaced evenly every four spaces apart.</p>
        <p>So if we fill in all the spaces between two beats, it makes the music seem to go faster, have more forward energy or momentum in that one part.</p>
  
        <ul>
          <li>In the second or third beat unit above, ‘fill in’ the beat unit, adding drum sounds in each empty space. Listen.</li>
        </ul>
  
        <p>Notice how the music seems to lead up to the drum sound right after the run of short notes.</p>
        <p>Did you know that drummers often put a row of short notes in the fourth beat unit? Called a flourish, this picks up the energy as the music leads back into the next bar.</p>
        `
    },
    {
      lessonNum: 10,
      title: "Create a sense of the music rushing then stopping",
      content: 
        `
        <p>Listen to this pattern. </p>
        <ul>
          <li>Now, take away the third beat, the one right after the close together notes.</li>
          <li>Listen again. How does this change the way you hear the pattern?</li>
        </ul>
  
        <p>Notice when we hear a run of close together notes and then a gap, the music can almost seem to stop. We expect to hear a sound, so it’s surprising to hear no sound at all.</p>
        `,

      widgets: [
        {
          type: "did-you-know",
          content: "Gaps (called rests) are among the most powerful musical tools because they play tricks on our sense of timing plus they highlight the notes before and after them!"
        },
      ]
    },
    {
      lessonNum: 11,
      title: "Story telling with the drum",
      content:
        `
        <p>What we hear first in music is the most important. So when we’re creating a piece of music, we need to make sure the listener is familiar with the first idea.</p>
        <ul>
          <li>Listen to the patterns in this list. The main idea is Pattern #1. Enter the patterns in the sequencer in this order: (click the > button beside the pattern to enter it in the sequencer,
            <ul>
              <li>Main Idea</li>
              <li>Repeat main Idea</li>
              <li>Make small changes</li>
              <li>Repeat main idea.</li>
            </ul>
          </li>
          <li>Press Start and then press Play in the circle to listen. To change the order, press Stop and Clear and re-enter.</li>
        </ul>
        
        <p>Notice that the music keeps going back to the original idea: that’s so listeners can compare the small changes to the original idea. The further we get into a piece, the less we have to repeat the original idea because listeners are so familiar with it by now.</p>
        `,
      widgets: [
        {
          type: "did-you-know",
          content: "To get to the sequencer, click the Note Entry button in the bottom left of the app."
        },
      ]
    }
  ];

export const lessonContainer = document.querySelector('.lesson__container');

/*
* sectionIndex: number
*/
export const loadLessonSection = (sectionIndex) => {
  if (lessonSections[sectionIndex] === undefined) {
      throw new Error(`Lesson section #${sectionIndex} does not exist`);
  }

  if (sectionPatterns[sectionIndex]) {
      emptyPreset();
      loadPreset(sectionPatterns[sectionIndex]);
      updatePattern();
  }
 
  removeAllChildNodes(lessonContainer);
  const section = lessonSections[sectionIndex];
  const sectionHeader = document.createElement("h3");
  sectionHeader.textContent = section.title;
  sectionHeader.className = "section__sub-heading";
  lessonContainer.appendChild(sectionHeader);
  lessonContainer.appendChild(parseHTML(section.content));

  section.widgets && section.widgets.forEach(widget => {  
    if (!widget.type || !['did-you-know', 'math-connection'].includes(widget.type)) return;
   
    const widgetElement = document.createElement("section");
    widgetElement.className = "widget-element widget-element--disabled";
    widgetElement.addEventListener("click", () => {
      const { oldClass, newClass } = widgetElement.classList.contains("widget-element--disabled") 
      ? 
      { oldClass: "widget-element--disabled", newClass: "widget-element--enabled" } : 
      { oldClass: "widget-element--enabled", newClass: "widget-element--disabled" } 
      
      widgetElement.classList.remove(oldClass);
      widgetElement.classList.add(newClass);
    });

    const widgetIcon = widget.type === 'did-you-know' ? '<img src="assets/lightbulb.svg" width=20px" />' : '<img src="assets/math-symbol.svg" width=20px" />';
    const widgetTitle = widget.type === 'did-you-know' ? "Did you know?" : "Math Connection";
    widgetElement.appendChild(parseHTML(
     `
     ${widgetIcon}
     <span class="widget-element__title">${widgetTitle}</span>
     <img src="assets/arrow-up.svg" width="10px" class="widget-element__arrow-up"/>
     <img src="assets/arrow-down.svg" width="10px" class="widget-element__arrow-down"/>
     <div class="widget-element__content">
     ${widget.content}
     </div>
     `
    ));
   lessonContainer.appendChild(widgetElement);
  })
};
