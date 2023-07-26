import { emptyPattern } from '../utils.js';

var offset = 0

function currentBeat() {
  if (offset == 0) { return 0; }
  var duration = Tone.now() - offset;
  var bpm = Tone.Transport.bpm.value
  var secondsPerBeat = 1.0 / bpm * 60.0
  var beats = Math.floor(duration / secondsPerBeat)
  return beats;
}

Tone.Transport.bpm.value = 90;
Tone.Transport.loop = true;
Tone.Transport.loopStart = "0";
Tone.Transport.loopEnd = "2m";

var loop = new Tone.Loop(updatePattern, "32n");

var activeInstrument = 'B';
var outerCustomPattern = emptyPattern();
var innerCustomPattern = emptyPattern();
var keys = createSequence();

var samplerCustomPattern = emptyPattern();

var samplerVoices = {
  synth: {
    name: "synth",
    notes: ['D3', 'E3', 'G3', 'F#3', 'A3', 'B3', 'C#4', 'D4',  'E4', 'F#4'],
    baseDir: "Sounds/ElectroSynths/",
    baseVoice: "NKnee "
  },
  rock: {
    name: "rock",
    notes: ['D4', 'E4', 'F#4', 'G4', 'A4', 'B4', 'C#5', 'D5', 'E5', 'F#5'],
    baseDir: "Sounds/RockGuitars/",
    baseVoice: "Electric Guitar Pitch "
  },
  rnb: {
    name: "rnb",
    notes: ['D4', 'E4', 'F#4', 'G4', 'A4', 'B4', 'C#5', 'D5', 'E5', 'F#5'],
    baseDir: "Sounds/RnB/",
    baseVoice: "RnB Shorter Note "
  }
}

var chordVoices = {
  synth: {
    notes: ['A1', 'B1', 'D2', 'E2', 'G2'],
    files: ['Mystical Asus-A1', 'Mystical Bm-B1', 'Mystical D-D2', 'Mystical Em-E2', 'Mystical G_D-G2'],
    baseDir: "Sounds/ElectroSynths/"
  },
  rock: {
    notes: ['A1', 'B1', 'D2', 'E2', 'G2'],
    files: ['Electric Guitar Chord A1', 'Electric Guitar Chord B1', 'Electric Guitar Chord D2', 'Electric Guitar Chord E2','Electric Guitar Chord G2'],
    baseDir: "Sounds/RockGuitars/"
  },
  rnb: {
    notes: ['A1', 'B1', 'D2', 'E2', 'G2'],
    files: ['RnB A Chord A1', 'RnB Bm Chord B1', 'RnB D Chord D2', 'RnB Em Chord E2', 'RnB G Chord G2'],
    baseDir: "Sounds/RnB/"
  }
}

var samplerLibrary = {
  synth: createSampler(samplerVoices.synth),
  rock: createSampler(samplerVoices.rock),
  rnb: createSampler(samplerVoices.rnb)
}

var chordsLibrary = {
  synth: createChords(chordVoices.synth),
  rock: createChords(chordVoices.rock),
  rnb: createChords(chordVoices.rnb)
}

var sampler, chords;

setVoice("synth");

var sequence = [];
var currentSequence = -1;

export function emptyPreset() {
  return {meta: patternMeta(),
          innerCustomPattern: emptyPattern(),
          outerCustomPattern: emptyPattern(),
          samplerCustomPattern: emptyPattern()}
}

function patternMeta() {
  return {
    tempo: 90,
    volume: 60,
    mute: {bassSnare: true, hiHat: true, melody: true},
    chord: "",
    scale: "",
    voice: "synth"
  }
}


export function updatePattern(time) {
  var progressStep = Math.floor(Tone.Transport.progress * 64) % 32

  drawPattern(innerPatternNotes, innerCustomPattern, innerMidRadius, progressStep, 32)
  drawPattern(outerPatternNotes, outerCustomPattern, outerMidRadius, progressStep, 16)
  drawPattern(samplerPatternNotes, samplerCustomPattern, samplerMidRadius, progressStep, 16)
  // updateNumbers(progressStep);
  updateHand(progressStep);

  if (rhythmPolygon.checked) {
    drawPolygons();
  }

  updatePosition(positionGroup, currentBeat());
  layer.batchDraw();
}

loop.start();

function createSequence() {
  var keys = new Tone.Players({
			"B" : "Sounds/Rhythm/Kit_1/Samples/bass.wav",
			"S" : "Sounds/Rhythm/Kit_1/Samples/snare.wav",
      "H" : "Sounds/Rhythm/Kit_1/Samples/hihat.wav",
      "O" : "Sounds/Rhythm/Kit_1/Samples/hihat_open.wav",
      "R" : "Sounds/Rhythm/Kit_1/Samples/rimshot.wav",
      "C" : "Sounds/Rhythm/Kit_1/Samples/ride.wav"
    }).toDestination();
    return keys; 
}


/*
var oldScale = ['B3', 'D4', 'E4', 'F#4', 'A4', 'B4', 'D5'];
0: 'B3'
1: 'D4'
2: 'E4'
3: 'F#4'
4: 'A4'
5: 'B4'
6: 'D5'

var scale = ['B3', 'C#4', 'D4', 'E4', 'F#4', 'G4', 'A4', 'B4', 'C#5', 'D5'];
0: 'B3'
1: 'C#4'
2: 'D4'
3: 'E4'
4: 'F#4'
5: 'G4'
6: 'A4'
7: 'B4'
8: 'C#5'
9: 'D5'
/*

/*
Asus: A,D,E
Bm: B,D,F#
D: D,F#,A
Em: E,(G),B
G: (G),B,D
*/

var pentatonicScale = ['B3', 'D4', 'E4', 'F#4', 'A4', 'B4', 'D5'];
var diatonicScale = ['B3', 'C#4', 'D4', 'E4', 'F#4', 'G4', 'A4', 'B4', 'C#5', 'D5'];
var scale = pentatonicScale;

var pentatonicSemitones = [2,3,2,2,3,2,3];
var diatonicSemitones = [2,2,1,2,2,1,2,2,2,1];
var semitones = pentatonicSemitones;

var pentatonicChordHighlights = {
  'A1' : [1,2,4,6],
  'B1' : [0,1,3,5,6],
  'D2' : [1,3,4,6],
  'E2' : [0,2,5],
  'G2' : [0,1,5,6]
}

var diatonicChordHighlights = {
  'A1' : [2,3,6,9],
  'B1' : [0,2,4,7,9],
  'D2' : [2,4,6,9],
  'E2' : [0,3,5,7],
  'G2' : [0,2,5,7,9]
}

var chordHighlights = pentatonicChordHighlights;

// https://mycolor.space/?hex=%23845EC2&sub=1
// var gradient = ['#0089BA','#2C73D2','#845EC2','#D65DB1','#FF6F91','#FF9671','#FFC75F'];
// https://colorkit.io to interpolate new colors for diatonic
var pentatonicGradient = ['#0089BA','#2C73D2','#845EC2','#D65DB1','#FF6F91','#0089BA','#2C73D2'];
// var pentatonicGradient = ['#008F7A','#2C73D2','#845EC2','#D65DB1','#FF9671','#008F7A','#2C73D2'];
var diatonicGradient = ['#0089BA','#157DC6','#2C73D2','#845EC2','#D65DB1','#EB66A2','#FF6F91','#0089BA','#157DC6','#2C73D2'];
// var diatonicGradient = ['#008F7A','#0089BA','#2C73D2','#845EC2','#D65DB1','#FF6F91','#FF9671','#008F7A','#0089BA','#2C73D2'];
var gradient = pentatonicGradient;

function createSampler(voice) {
  var extension = ".wav";
  var config = {}
  voice.notes.forEach(function(note){
    config[note] = voice.baseDir + voice.baseVoice + encodeURIComponent(note) + extension;
  })
  var sampler = new Tone.Sampler(config).toDestination();
  sampler.volume.value = -2;
  sampler.name = voice.name;
  return sampler;
}

var voiceButtons = document.getElementById("voices").children;

for (var i=0; i < voiceButtons.length; i++) {
  voiceButtons[i].addEventListener('click', function() {
    activeInstrument = scale[0];
    showSelectedButton();
    selectRing();

    setVoice(this.dataset.voice);
    updateVoiceDisplay(this.dataset.voice);
  });
}

function setVoice(voice) {
  sampler = samplerLibrary[voice];
  chords = chordsLibrary[voice];
}

function updateVoiceDisplay(voice) {
  for (var i=0; i < voiceButtons.length; i++) {
    var button = voiceButtons[i];
    if (button.dataset.voice == voice) {
      button.classList.add("selected");
    } else {
      button.classList.remove("selected");
    }
    if (button.dataset.voice == voice && activeInstrument == scale[0]) {
      button.classList.add("activeInstrument");
    } else {
      button.classList.remove("activeInstrument");
    }
  };
}

function getVoice() {
  return sampler.name;
}

updateVoiceDisplay("synth");

var scaleSelect = document.getElementById("scaleSelect");

scaleSelect.addEventListener('change', function() {
  updateScale(scaleSelect.value);
});

function updateScale(scale) {
  selectScale(scale)

  scaleSelect.value = scale || 'pentatonic';

  createNoteColors();
  createNoteRings(noteRings);
  selectNoteRings(chordSelect.value);

  updatePattern();
  
  layer.batchDraw();
}

function selectScale(newScale) {
  if (newScale == 'diatonic') {
    scale = diatonicScale;
    semitones = diatonicSemitones;
    chordHighlights = diatonicChordHighlights;
    gradient = diatonicGradient;
  } else {
    scale = pentatonicScale;
    semitones = pentatonicSemitones;
    chordHighlights = pentatonicChordHighlights;
    gradient = pentatonicGradient;
  }
}

function createChords(voice) {
  var extension = ".wav";
  var config = {}
  voice.notes.forEach(function(note, index){
    config[note] = voice.baseDir + encodeURIComponent(voice.files[index]) + extension;
  })
  var sampler = new Tone.Sampler(config).toDestination();
  sampler.volume.value = +2;
  return sampler;
}

function selectNoteRings(chord) {
  var children = noteRings.getChildren()
  var highlights = chordHighlights[chord] ?? [];
  for (var i=0; i < children.length; i++) {
    var child = children[i];
    var isVisible = highlights.indexOf(i) >= 0;
    child.visible(isVisible);
  }
}

var chordSelect = document.getElementById("chordSelect");

chordSelect.addEventListener('change', function() {
  selectNoteRings(this.value);
  layer.batchDraw();
});

function updateChordDisplay(chord) {
  chordSelect.value = chord;
  selectNoteRings(chord);
}

var allSteps = new Array(32);
for (var i = 0; i < allSteps.length; i++) {
  allSteps[i] = i;
}

var bassSnare = document.getElementById('bassSnareCheck');
var hiHat = document.getElementById('hiHatCheck');
var melody = document.getElementById('melodyCheck');

function updateMuteGroupDisplay(muteGroup) {
  bassSnare.checked = muteGroup.bassSnare;
  hiHat.checked = muteGroup.hiHat;
  melody.checked = muteGroup.melody;
}

var loop = new Tone.Sequence(function(time, step){
  var chordNote = chordSelect.value
  if (step == 0 & chordNote.length > 0) {
    chords.triggerAttackRelease(chordNote, '1m', time, 0.5);
  }
  if (hiHat.checked) {
    playActiveNote(innerCustomPattern, step, time);
  }
  if (bassSnare.checked) {
    playActiveNote(outerCustomPattern, step, time);
  }
  if (melody.checked) {
    playActiveNote(samplerCustomPattern, step, time);
  }
  if (currentSequence >= 0 && step == 31) {
    currentSequence = ++currentSequence % sequence.length
    updateSequenceDisplay();
    loadPreset(presets[sequence[currentSequence]]);
  }
}, allSteps, "32n").start(0);

function playActiveNote(customPattern, step, time) {
  var note = customPattern.value[step];
  if (note == '-') { return; }
  if (note.toUpperCase() == 'H') {
    keys.player('O').stop();
  }
  if (isRhythm(note)) {
    keys.player(note).volume.value = amplitudeFor(customPattern, step);
    keys.player(note).start(time);
  } else {
    if (scale.includes(note)) {
      var velocity = velocityFor(customPattern, step);
      var duration = durationFor(customPattern, step);
      sampler.triggerAttackRelease(note, duration, time, velocity);
    }
  }
}

function isRhythm(note) {
  return note.length == 1
}

function amplitudeFor(pattern, step) {
  var note = pattern.value[step];
  var amplitude = pattern.amplitude[step] || 0;

  var max = note == 'H' ? 8 : 0;
  var mid = note == 'H' ? 2 : -2;
  var min = -4

  switch (amplitude) {
    case 1:
      return min;
      break;
    case 2:
      return mid;
      break;
    case 3:
      return max;
      break;
    case 0:
    default:
      return -99;
      break;
  }
}

function velocityFor(pattern, step) {
  var amplitude = pattern.amplitude[step] || 0;

  switch (amplitude) {
    case 1:
      return 0.25;
      break;
    case 2:
      return 0.5;
      break;
    case 3:
      return 1.0;
      break;
    case 0:
    default:
      return 0;
      break;
  }
}

function durationFor(pattern, step) {
  var duration = pattern.duration[step] || 0;

  switch (duration) {
    case 1:
      return '16n';
      break;
    case 2:
      return '8n';
      break;
    case 3:
      return '4n';
      break;
    case 4:
      return '2n';
      break;
    case 5:
      return '1m';
      break;
    case 0:
    default:
      return 0;
      break;
  }
}

export var buffersLoaded = false

Tone.loaded().then(function(){
  buffersLoaded = true
  updateLoading()
});

  // first we need to create a stage
var stage = new Konva.Stage({
  container: 'container',   // id of container <div>
  width: 1028,
  height: 768 - 200
});

var layer = new Konva.Layer();

var patternWidth = (34 + 12)
var outerPadding = (34 + 12)
var samplerWidth = (34 + 12) + 48
var innerRadius = (97 + 12) - 48
var patternOriginX = stage.width() / 2
var patternOriginY = innerRadius + patternWidth * 2 + samplerWidth + outerPadding
var innerMidRadius = innerRadius + patternWidth / 2
var outerMidRadius = innerRadius + patternWidth * 1.5
var samplerMidRadius = innerRadius + patternWidth * 2 + samplerWidth * 0.5
var outerRadius = samplerMidRadius + samplerWidth * 0.5


// https://jsfiddle.net/PimpTrizkit/a7ac0qvp/
var noteColors = {
    "_" : "#D9D9D9",
    "B" : "#C687C6",
    "S" : "#6B63AA",
    "R" : "#D88766",
    "X" : "#6B99BC",
    "H" : "#6B99BC",
    "O" : "#355670",
    "C" : "#41C398",
  }

function createNoteColors() {
  for (var i = 0; i < scale.length; i++) {
    noteColors[scale[i]] = gradient[i];
  }
}

createNoteColors();

noteColors.getColor = function(note, amplitude=3) {
  var p = (3 - amplitude) * 0.3;
  return pSBC(p, this[note]);
}

function createSlices() {
  var sliceGroup = new Konva.Group()
  for (var i = 0; i < 16; i++) {
    var point = pointBeginning(i, outerRadius, patternOriginX, patternOriginY, 16);
    var strokeWidth = 4
    var strokeColor = 'rgba(255,255,255,0.5)'
    if (i % 8 == 0) {
      strokeWidth = 6
      // strokeColor = '#cccccc'
    }
    if ((i-4) % 8 == 0) {
      strokeWidth = 6
      // strokeColor = '#cccccc'
    }
    var line = new Konva.Line({
      points: [patternOriginX, patternOriginY, point.x, point.y],
      stroke: strokeColor,
      strokeWidth: strokeWidth,
      // opacity: 0.8,
      listening: false
    });
    sliceGroup.add(line);
  }
  return sliceGroup;
}

 
var controlBackgrounds = ['#F5F1F0', '#D9D9D9', '#B5B5B5'];

var innerFilter = ['H','O', 'C'];
var innerPatternNotes = new Konva.Group()
var innerPatternControls = new Konva.Group()
var innerPatternRing = createPatternControl(patternOriginX, patternOriginY, innerRadius, innerRadius + patternWidth, controlBackgrounds[0], innerPatternControls, innerCustomPattern, innerFilter, 32, true, false, function(){ toggleSequence();}, function(){  toggleSequence(); })

var outerFilter = ['B','S','R'];
var outerPatternNotes = new Konva.Group()
var outerPatternControls = new Konva.Group()
var outerPatternRing = createPatternControl(patternOriginX, patternOriginY, innerRadius + patternWidth, innerRadius + patternWidth * 2, controlBackgrounds[1], outerPatternControls, outerCustomPattern, outerFilter, 16, false, false, function(){ toggleSequence();}, function(){  toggleSequence(); })

var samplerFilter = scale;
var samplerPatternNotes = new Konva.Group()
var samplerPatternControls = new Konva.Group()
var samplerPatternRing = createPatternControl(patternOriginX, patternOriginY, innerRadius + patternWidth * 2, innerRadius + patternWidth * 2 + samplerWidth, controlBackgrounds[2], samplerPatternControls, samplerCustomPattern, samplerFilter, 16, false, true, function(){ toggleSequence();}, function(){  toggleSequence(); })

layer.add(samplerPatternRing);
layer.add(outerPatternRing);
layer.add(innerPatternRing);

var slices = createSlices();
layer.add(slices);

var noteRings = new Konva.Group();
createNoteRings(noteRings);
layer.add(noteRings);

layer.add(innerPatternNotes);
layer.add(outerPatternNotes);
layer.add(samplerPatternNotes);

layer.add(innerPatternControls);
layer.add(outerPatternControls);
layer.add(samplerPatternControls);



function createNoteRings(group) {
  group.destroyChildren();
  // var color = '#F5F1F0';
  // var color = '#FFF2C6';
  // var color = '#B5B5B5';
  var color = 'white';
  for (var i=0; i < scale.length; i++) {
    var noteRing = createNoteRing(patternOriginX, patternOriginY, innerRadius + patternWidth * 2, innerRadius + patternWidth * 2 + samplerWidth, color, i);
    group.add(noteRing)
  }
}

function createNoteRing(originX, originY, innerRadius, outerRadius, fill, index) {
  var innerLineRadius = index == 0 ? innerRadius : innerRadius + sizeFor(index-1);
  var outerLineRadius = innerLineRadius + incrementalSizeFor(index);

  var padding = 3;

  var ring = new Konva.Ring({
        x: originX,
        y: originY,
        innerRadius: innerLineRadius + padding,
        outerRadius: outerLineRadius - padding,
        fill: fill,
        opacity: 0.75,
        stroke: 'white',
        strokeWidth: 2,
        listening: false,
        visible: false
      });

  return ring;
}

var numbers = createNumbers(outerRadius + outerPadding * 0.5);
layer.add(numbers);

var hand = createHand(patternOriginX, patternOriginY, outerRadius)
layer.add(hand);

var mirrorVerticalLine = createVerticalLine();
layer.add(mirrorVerticalLine);
var mirrorHorizontalLine = createHorizontalLine();
layer.add(mirrorHorizontalLine);

function createVerticalLine() {
    var startPoint = pointBeginning(0, outerRadius, patternOriginX, patternOriginY, 16);
    var endPoint = pointBeginning(8, outerRadius, patternOriginX, patternOriginY, 16);
    var line = new Konva.Line({
      points: [startPoint.x, startPoint.y, endPoint.x, endPoint.y],
      stroke: '#add8e6',
      strokeWidth: 4,
      opacity: 0.75,
      listening: false,
      visible: false
    });
    return line;
}

function createHorizontalLine() {
    var startPoint = pointBeginning(4, outerRadius, patternOriginX, patternOriginY, 16);
    var endPoint = pointBeginning(12, outerRadius, patternOriginX, patternOriginY, 16);
    var line = new Konva.Line({
      points: [startPoint.x, startPoint.y, endPoint.x, endPoint.y],
      stroke: '#add8e6',
      strokeWidth: 4,
      opacity: 0.75,
      listening: false,
      visible: false
    });
    return line;
}

var play = new Konva.RegularPolygon({
        x: patternOriginX,
        y: patternOriginY,
        sides: 3,
        radius: 24,
        fill: '#B5B5B5',
        stroke: '#B5B5B5',
        strokeWidth: 1,
        rotation: 90,
        visible: true,
        listening: false
      });
layer.add(play)  
var stopWidth = 38;
var stop = new Konva.Rect({
        x: patternOriginX - stopWidth/2,
        y: patternOriginY - stopWidth/2,
        width: stopWidth,
        height: stopWidth,
        fill: '#B5B5B5',
        stroke: '#B5B5B5',
        strokeWidth: 1,
        visible: false,
        listening: false
      });
layer.add(stop)


var positionGroup = createPositionGroup(stage.width() - 200,98, 0);
layer.add(positionGroup);

function createPositionGroup(x, y, beat) {
  var positionGroup = new Konva.Group();
  
  var size = 128 / 2
  var width = 16 / 2

  var text = new Konva.Text({
        x: x - size/2,
        y: y - size/2,
        text: beat.toString(),
        fontSize: 24,
        fill: '#DB3352',
        width: size,
        height: size,
        align: 'center',
        verticalAlign: 'middle'
      });
  positionGroup.add(text);

  var progress = (beat + 1) / 4
  var angle = progress * 360 - 90
  var radius = size / 2 
  var arc = new Konva.Arc({
        x: x,
        y: y,
        innerRadius: radius - width / 2,
        outerRadius: radius + width / 2,
        angle: angle,
        fill: '#AAAAAA',
        stroke: '#AAAAAA',
        strokeWidth: 1,
        rotation: -90,
        listening: false,
        visible: false
      });
  positionGroup.add(arc)

  return positionGroup;
}

function updatePosition(group, beat) {
  
  var bar = Math.floor(beat / 4)
  
  var progress = (beat % 4 + 1) / 4
  var angle = progress * 360

  var arc = group.getChildren(function(node){
   return node.getClassName() === 'Arc';
  });

  arc[0].visible(offset > 0);
  arc[0].angle(angle);

  var text = group.getChildren(function(node){
   return node.getClassName() === 'Text';
  }); 

  text[0].text(bar.toString())

}

var loadingText = new Konva.Text({
        x: stage.width() / 2 - 150,
        y: stage.height() / 2 - 100,
        text: localizedString('Loading') + '...',
        fontSize: 30,
        fill: 'black',
        width: 300,
        height: 100,
        verticalAlign: 'middle',
        align: 'center'
      });
layer.add(loadingText)

function updateLoading() {
  var isLoaded = buffersLoaded
  loadingText.visible(!isLoaded)
  layer.batchDraw();
}



function createPatternControl(originX, originY, innerRadius, outerRadius, fill, patternGroup, customPattern, filter, length, enableInteriorClick = false, enableExteriorClick = false, directClick, interiorClick) {
  var patternControl = new Konva.Group();

  var patternRing = createPatternRing(originX, originY, innerRadius, outerRadius, fill);
  patternRing.hitFunc(function(context) {
      context.beginPath();
      var innerArcRadius = enableInteriorClick ? 0 : innerRadius;
      var outerArcRadius = enableExteriorClick ? outerRadius + patternWidth : outerRadius;
      context.arc(0, 0, innerArcRadius, 0, Math.PI * 2, true);
      context.arc(0, 0, outerArcRadius, 0, Math.PI * 2, true);
      context.fillStrokeShape(this);
    })
  async function patternRingEvent(event) {
    await Tone.start();
    var point = this.getStage().getPointerPosition();
    var distance = Math.pow((point.x - this.x()),2) + Math.pow((point.y - this.y()),2)
    var interior = distance <= Math.pow(innerRadius, 2)
    var exterior = distance >= Math.pow(outerRadius, 2)
    if (interior) {
      interiorClick()
    } else {
      directClick()
    }
  }
  patternRing.on('click', patternRingEvent);
  patternRing.on('tap', patternRingEvent);
      
  patternControl.add(patternRing);

  // [0,4,8,12].forEach(function(step) { 
  //   var pulse = createPulse(originX, originY, innerRadius, outerRadius, step); 
  //   patternControl.add(pulse);
  // })

  var highlightRing = createHighlightRing(originX, originY, innerRadius, outerRadius, '#F0E6C3');
  highlightRing.visible(false);
  highlightRing.name('highlightRing');
  highlightRing.listening(false);
  patternControl.add(highlightRing);

  for (var i = 0; i < 32; i += 32 / length) {
    var step = createStepSegments(originX, originY, innerRadius, outerRadius, i, customPattern, filter, length);
    patternGroup.add(step);
  }

  return patternControl
}

var dragStart = {x: 0, y:0}
var dragDegree = 0;

function createStepSegments(originX, originY, innerRadius, outerRadius, step, pattern, filter, length) {
  var segmentDegree = 360/32;
  var rotation = -90 + step * segmentDegree;
  var segmentLength = step % 2 == 0 ? 360/16 : 360/length;
  var arc = new Konva.Arc({
        x: originX,
        y: originY,
        innerRadius: innerRadius,
        outerRadius: outerRadius,
        angle: segmentLength,
        stroke: noteColors[activeInstrument],
        strokeWidth: 0,
        rotation: rotation,
        // visible: false,
        draggable: true,
        dragBoundFunc: function() {
          var pos = this.getAbsolutePosition();
          return {x: pos.x, y: pos.y};
        }
      });
  arc.on('mouseover', function() {
    if (filter.indexOf(activeInstrument.toUpperCase()) == -1 ) { return; }
    if (disable32(step)) { return; };
    arc.strokeWidth(1);
    arc.stroke(noteColors[activeInstrument]);
    layer.batchDraw();
  });
  arc.on('mouseout', function() {
    if (filter.indexOf(activeInstrument.toUpperCase()) == -1) { return; }
    arc.strokeWidth(0);
    layer.batchDraw();
  });
  function arcEvent(){
    if (filter.indexOf(activeInstrument.toUpperCase()) == -1) { return; }
    if (disable32(step)) { return; };
    if (activeInstrument.length > 1) {
      var pointer = stage.getPointerPosition();
      var drag = distance(originX, originY, pointer.x, pointer.y);
      var travel = drag - innerRadius;
      var index = stepFor(travel);
      toggleStep(step, pattern, length, scale[index]);
    } else {
      toggleStep(step, pattern, length);
    }
    patternUpdated();
    updatePattern();
  }
  arc.on('click tap', arcEvent);
  arc.on('dragstart', function(){
    var note = pattern.value[step]
    if (note.length <= 1) { return }
    dragStart = stage.getPointerPosition();
    dragDegree = scale.indexOf(note);
  });
  arc.on ('dragmove', function(){
    var note = pattern.value[step]
    if (note.length <= 1) { return }
    var pointer = stage.getPointerPosition();
    var origin = distance(originX, originY, dragStart.x, dragStart.y);
    var drag = distance(originX, originY, pointer.x, pointer.y);
    var travel = drag - origin;

    var factor = patternWidth * 2 / scale.length
    var min = factor * -dragDegree;
    var max = factor * (scale.length - 1 - dragDegree);
    var normalized = Math.max(Math.min(max, travel),min);
    var newIndex = dragDegree + Math.round(normalized / factor);

    if (pattern.value[step] != scale[newIndex]){
      pattern.value[step] = scale[newIndex];
      patternUpdated();
      updatePattern();
    }
  });
  return arc
}

function distance(x1, y1, x2, y2) {
  return  Math.sqrt(Math.pow((x2 - x1),2) + Math.pow((y2 - y1),2));
}

// var semitones = [2,3,2,2,3,2,3];
function stepFor(travel) {
  var semitonesTotal = semitones.reduce(function(acc, val) { return acc + val; }, 0);
  var index = 0;
  for (var i = 0; i < semitones.length; i++) {
    var semitonesWithin = semitones.slice(0, i + 1).reduce(function(acc, val) { return acc + val; }, 0);
    var percent = semitonesWithin / semitonesTotal;
    var size = samplerWidth * percent;
    index = i;
    if (travel <= size) {
      break
    }
  }
  return index;
}

function sizeFor(index) {
  var semitonesWithin = semitones.slice(0, index + 1).reduce(function(acc, val) { return acc + val; }, 0)
  var semitonesTotal = semitones.reduce(function(acc, val) { return acc + val; }, 0);
  var percent = semitonesWithin / semitonesTotal;
  var size = samplerWidth * percent;
  return size;
}

function incrementalSizeFor(index) {
  var semitonesWithin = semitones[index]
  var semitonesTotal = semitones.reduce(function(acc, val) { return acc + val; }, 0);
  var percent = semitonesWithin / semitonesTotal;
  var size = samplerWidth * percent;
  return size;
}

function disable32(step) {
  var enable32 = ['H','O','C'];
  if (enable32.indexOf(activeInstrument.toUpperCase()) == -1) {
    return step % 2 == 1;
  }
  if (mirrorVertical.checked || mirrorHorizontal.checked) {
    return step % 2 == 1;
  }
  return false;
}

var mirrorHorizontal = document.getElementById('mirrorHorizontal');
mirrorHorizontal.addEventListener('click',
  function(event){
    mirrorHorizontalLine.visible(this.checked);
    layer.batchDraw();
  }, false)
var mirrorVertical = document.getElementById('mirrorVertical');
mirrorVertical.addEventListener('click',
  function(event){
    mirrorVerticalLine.visible(this.checked);
    layer.batchDraw();
  }, false)

var resetButton = document.getElementById('reset');
resetButton.addEventListener('click',
  function(event){
    loadPreset(emptyPreset());
    updatePattern();
  }, false)

function toggleStep(index, pattern, length, instrument=activeInstrument) {
  var currentStep = pattern.value[index];

  var currentAmplitude = pattern.amplitude[index] || 0;
  var amplitudeMax = 3;

  var isPitch = instrument.length > 1
  var amplitude, value;
  var duration = 1;
  switch (currentStep) {
    case instrument:
      if (isPitch) {
        var duration = pattern.duration[index];
        var newDuration = ++duration % 6;
        pattern.duration[index] = newDuration
        amplitude = newDuration == 0 ? 0 : 3;
      } else {
        amplitude = ++currentAmplitude % 4;
      }
    
      value = amplitude == 0 ? '-' : instrument;
  
      break;
    case '-':
    default:
      amplitude = isPitch ? 3 : 1;
      if (isPitch) {
        pattern.duration[index] = 1;
      }
      value = instrument;
      break;
  }

  pattern.amplitude[index] = amplitude;
  pattern.value[index] = value;


  if (mirrorVertical.checked) {
    var verticalIndex = reflectPatternVertical(index, value, amplitude, pattern, duration);
    if (mirrorHorizontal.checked) {
      reflectPatternHorizontal(verticalIndex, value, amplitude, pattern, duration);
    }
  }

  if (mirrorHorizontal.checked) {
    var horizontalIndex = reflectPatternHorizontal(index, value, amplitude, pattern, duration);
  }

  updatePattern();
}

function reflectPatternHorizontal(index, value, amplitude, pattern, duration) {
  var offset = index % 2 == 0 ? 30 : 31;
  var newIndex = (offset + 16 - index) % 32;
  pattern.amplitude[newIndex] = amplitude;
  pattern.value[newIndex] = value;
  pattern.duration[newIndex] = duration;
  return newIndex;
}

function reflectPatternVertical(index, value, amplitude, pattern, duration) {
  var offset = index % 2 == 0 ? 30 : 31;
  var newIndex = (offset - index) % 32;
  pattern.amplitude[newIndex] = amplitude;
  pattern.value[newIndex] = value;
  pattern.duration[newIndex] = duration;
  return newIndex;
}

function wrapMod(x, n) {
  return (x % n + n) % n
}

function createPatternRing(originX, originY, innerRadius, outerRadius, fill) {
  var ring = new Konva.Ring({
        x: originX,
        y: originY,
        innerRadius: innerRadius,
        outerRadius: outerRadius,
        fill: fill
      });

  return ring;
}

function createHighlightRing(originX, originY, innerRadius, outerRadius, fill) {
  var ring = new Konva.Group();
  
  var segmentDegree = 360/4;
  for (var i = 0; i < 4; i++) {
    var rotation = -90 + i * segmentDegree;
    var segmentFill = i % 2 == 0 ?  fill : pSBC(0.5, fill);
    var arc = new Konva.Arc({
        x: originX,
        y: originY,
        innerRadius: innerRadius,
        outerRadius: outerRadius,
        angle: segmentDegree,
        fill: segmentFill,
        rotation: rotation,
        listening: false
      });
    ring.add(arc);
  }

  return ring;
}

function createPulse(originX, originY, innerRadius, outerRadius, step) {
  var segmentDegree = 360/16
  var rotation = -90 + step * segmentDegree;
  var arc = new Konva.Arc({
        x: originX,
        y: originY,
        innerRadius: innerRadius,
        outerRadius: outerRadius,
        angle: segmentDegree,
        fill: '#FFF2C6',
        stroke: '#FFF2C6',
        strokeWidth: 1,
        rotation: rotation,
        listening: false
      });
    if (step == 0) {
      arc.stroke('#636363');
      arc.strokeWidth(1);
    }

    return arc
}

function createNumbers(radius) {
  var numbers = new Konva.Group();
  for (var i = 0; i < 4; i++) {
    if (i % 4 == 0) {
      var number0 = drawNumber(radius - patternWidth/4, 0, i)
      numbers.add(number0);
      var number4 = drawNumber(radius + patternWidth/4, 4, i)
      numbers.add(number4);
    } else {
      var numberLabel = drawNumber(radius, i % 4, i * 4)
      numbers.add(numberLabel)
    }
  }
  return numbers;
}

function drawNumber(radius, number, step) {
  var segment = Math.PI * 2 / 16 
  var dAlpha = - Math.PI / 2 + step * segment;
  var dx = Math.cos(dAlpha) * radius;
  var dy = Math.sin(dAlpha) * radius;
    
  var label = new Konva.Text({
    x: patternOriginX + dx,
    y: patternOriginY + dy,
    text: number.toString(),
    fontSize: 12,
    fill: '#636363',
    width: 20,
    height: 20,
    align: "center",
    verticalAlign: "middle",
    offsetX: 10,
    offsetY: 10,
    // visible: number % 4 == 0
  });
  return label
}

function updateNumbers(step) {
  var normalizedStep = Math.floor(step/2);
  var numberLabels = numbers.getChildren(function(node){
   return node.getClassName() === 'Text';
  });
  numberLabels.forEach( function(label) {
    var number = Number(label.text());
    if (number % 4 == 0) { 
      label.visible(true);
    } else { 
      label.visible(number <= normalizedStep);
    }
  })
}

function createHand(originX, originY, radius) {
  var segmentDegree = 360/16;
  var hand = new Konva.Arc({
        x: originX,
        y: originY,
        innerRadius: 0,
        outerRadius: radius,
        angle: segmentDegree,
        fill: '#FFF2C6', 
        rotation: -90,
        opacity: 0.5,
        listening: false
      });
  return hand
}

function updateHand(step) {
  var normalizedStep = Math.floor(step/2);
  var segmentDegree = 360/16
  var rotation = -90 + normalizedStep * segmentDegree;
  hand.rotation(rotation);
}

function selectButton(buttonGroup, data, fillColor, activeColor) {
  var nodes = buttonGroup.find('Circle')
  nodes.forEach(node => {
    node.fill(node.id() == data.selected ? activeColor : fillColor);
  })
  nodes = buttonGroup.find('Text')
  nodes.forEach(node => {
    node.fill(node.id() == data.selected ? 'white' : 'grey');
  })
  layer.batchDraw();
}

function selectLoop(index, players, loopUrls) {
  if (!playing(players, loopUrls)) { return; }

  for(var playerName in loopUrls) {
    var player = players.get(playerName)
    player.mute = playerName != index
  }
}

function playing(players, loopUrls) {
  for(var playerName in loopUrls) {
    var player = players.get(playerName)
    if (!player.mute) {
      return true;
    }
  }
  return false;
}

function toggleLoop(index, players, loopUrls) {
  Tone.context.resume()

  for(var playerName in loopUrls) {
    var player = players.get(playerName)
    if (playerName == index) {
      if (player.mute) {
        player.mute = false
        if (Tone.Transport.state != "started") {
          offset = Tone.now()
          Tone.Transport.start(offset)
        }
      } else {
        player.mute = true
      }
    } else {
      player.mute = true
    }
  }

  autoStopTransport();
  updatePattern();
}

function toggleSequence() {
  Tone.context.resume()
  if (Tone.Transport.state != "started") {
    offset = Tone.now()
    Tone.Transport.start(offset)
    play.visible(false)
    stop.visible(true)
  } else {
    offset = 0;
    Tone.Transport.stop();
    play.visible(true)
    stop.visible(false)
  }
  updatePattern()
}

function firstPlayer(players, loopUrls) {
    for(var playerName in loopUrls) {
      var player = players.get(playerName)
      if (player.mute) {
        return index
      }
    }
    return -1
}

function drawEmptyPattern(targetGroup, radius) {
  for (var i = 0; i < 16; i++) {
    var tick = createTick(patternOriginX, patternOriginY, radius, i)
    targetGroup.add(tick)
  }
}

function drawPattern(targetGroup, pattern, radius, step = 0) {
  targetGroup.destroyChildren()

  for (var i = 0; i < pattern.value.length; i++) {

    // if (i == step  && i % 2 == 0) {
    //   var normalizedStep = i / 2
    //   var activeSegment = createActiveSegment(patternOriginX, patternOriginY, radius - patternWidth / 2, radius + patternWidth / 2, normalizedStep);
    //   targetGroup.add(activeSegment);
    // }

    var note = pattern.value[i];
    var amplitude = pattern.amplitude[i] || 0;
    if (note == '-' && i % 2 == 0) {
      // var normalizedStep = i / 2
      // var tick = createTick(patternOriginX, patternOriginY, radius, normalizedStep)
      // targetGroup.add(tick)
    } else if (noteColors.hasOwnProperty(note)) {
      var noteColor = noteColors.getColor(note, amplitude);
      if (note.length > 1) {
        var duration = pattern.duration[i] || 1;
        var noteNode = createHarmonicNote(i, duration, noteColor, note, patternOriginX, patternOriginY, radius)
      } else {
        var noteNode = createNote(i, noteColor, patternOriginX, patternOriginY, radius, amplitude)
      }
      targetGroup.add(noteNode)
    }
  }

  // draw active step

  // do I need to draw the active step before the other pattern? 
  // do I need to skip the active step when drawing the other notes
  // consider 32nd notes

  layer.batchDraw();
}

function createActiveSegment(originX, originY, innerRadius, outerRadius, step) {
  var segmentDegree = 360/16
  var rotation = -90 + step * segmentDegree - segmentDegree/2
  var fillColor = step % 2 == 0 ? '#FFF2C6' : '#E3FF8F';
  var arc = new Konva.Arc({
        x: originX,
        y: originY,
        innerRadius: innerRadius,
        outerRadius: outerRadius,
        angle: segmentDegree,
        fill: fillColor,
        rotation: rotation
      });
  if (step == 0) {
    arc.stroke('#636363');
    arc.strokeWidth(1);
  }
  return arc
}

function createTick(originX, originY, radius, step) {
  var stroke = "#636363";
  var segmentDegree = 360/16
  var rotation = -90 + step * segmentDegree
  var tick = new Konva.Circle({
        x: originX,
        y: originY,
        radius: 3,
        stroke: stroke,
        strokeWidth: 1,
        rotation: rotation
      });
  tick.offsetX(-radius)
  return tick
}

function createNote(step, color, originX, originY, radius, amplitude) {
  var segmentDegree = 360/32;
  var rotation = -90 + step * segmentDegree;
  var angle = step % 2 == 0 ? 360/16 : 360/32;
  var innerRadius = radius - patternWidth/2;
  var outerRadius = radius + patternWidth/2;
  var note = new Konva.Arc({
    x: originX,
    y: originY,
    innerRadius: innerRadius,
    outerRadius: outerRadius,
    angle: angle,
    fill: color,
    stroke: 'rgba(255,255,255,0.5)',
    strokeWidth: 3,
    rotation: rotation,
    listening: false
  });
  
  return note
}

function createHarmonicNote(step, duration, color, label, originX, originY, radius) {
  var group = new Konva.Group()

  var scaleDegree = scale.indexOf(label);
  // var percent = (scaleDegree + 1) / scale.length;
  var innerRadius = radius - samplerWidth/2;
  // var outerRadius = innerRadius + samplerWidth * percent;
  var outerRadius = innerRadius + sizeFor(scaleDegree);

  var segmentDegree = 360/32;
  var rotation = -90 + step * segmentDegree;
  var angle = step % 2 == 0 ? 360/16 : 360/32;
  angle *= Math.pow(2, duration-1)
  var note = new Konva.Arc({
    x: originX,
    y: originY,
    innerRadius: innerRadius,
    outerRadius: outerRadius,
    angle: angle,
    fill: color,
    stroke: 'rgba(255,255,255,0.5)',
    strokeWidth: 1,
    rotation: rotation,
    listening: false
  });

  var segment = Math.PI * 2 / 32 
  var offset = step % 2 == 0 ? segment : segment / 2;
  var dAlpha = - Math.PI / 2 + step * segment + offset;
  var dx = Math.cos(dAlpha) * radius;
  var dy = Math.sin(dAlpha) * radius;

  var size = 48;

  var noteLabel = new Konva.Text({
    x: patternOriginX + dx,
    y: patternOriginY + dy,
    text: label,
    fontSize: 18,
    fontStyle: 'bold',
    fill: 'white',
    width: size,
    height: size,
    align: "center",
    verticalAlign: "middle",
    offsetX: size / 2,
    offsetY: size / 2,
    shadowColor: 'black',
    shadowBlur: 8,
    shadowOffset: { x: 2, y: 2 },
    shadowOpacity: 0.8,
  });

  group.add(note);
  group.add(noteLabel);


  for (var i = 0; i <= scaleDegree; i++) {
    var innerLineRadius = i == 0 ? innerRadius : innerRadius + sizeFor(i-1);
    var outerLineRadius = innerLineRadius + incrementalSizeFor(i);
    var line = new Konva.Arc({
      x: originX,
      y: originY,
      innerRadius: innerLineRadius,
      outerRadius: outerLineRadius,
      angle: angle,
      stroke: 'rgba(255,255,255,0.5)',
      strokeWidth: 2,
      rotation: rotation,
      listening: false
    });    
    group.add(line)
  }
  
  return group
}

function autoStopTransport() {
  if (!someLoop()) {
    Tone.Transport.stop();
    offset = 0;
  }
}

function someLoop() {
  return someBDSDLoop() || someHHLoop();
}

function someBDSDLoop() {
  for(var playerName in bdsdURLs) {
    var player = bdsdPlayers.get(playerName)
    if (!player.mute) {
      return true
    }
  }
  return false;
}

function someHHLoop() {
  for(var playerName in hhURLs) {
    var player = hhPlayers.get(playerName)
    if (!player.mute) {
      return true
    }
  }
  return false;
}

stage.add(layer);

var slider = document.getElementById("tempo");
var tempoInput = document.getElementById("tempoInput");
setTempo(90);
updateTempoDisplay(90);

function updateTempoDisplay(value) {
  slider.value = value;
  tempoInput.value = value;
}
      
slider.oninput = function() {
  tempoInput.value = this.value;
  setTempo(this.value);
}

tempoInput.oninput = function() {
  slider.value = this.value;
  setTempo(this.value);
}

function setTempo(value) {
  Tone.Transport.bpm.value = value;
}

var volumeSlider = document.getElementById("volume");
var volumeLabel = document.getElementById("volumeLabel");
setVolume(60);
updateVolumeDisplay(60);
      
volumeSlider.oninput = function() {
  updateVolumeLabel(this.value);
  setVolume(this.value);
}

function setVolume(value) {
  Tone.Master.volume.value = scaleMap(value, 0, 100, -32, 6);
}

function getVolume() {
  var value = Tone.Master.volume.value;
  return Math.round(scaleMap(value, -32, 6, 0, 100));
}

function updateVolumeDisplay(value) {
  volumeSlider.value = value;
  updateVolumeLabel(value);
}

function updateVolumeLabel(value) {
  volumeLabel.innerHTML = localizedString("Volume") + ": " + value;
}

function scaleMap(num, in_min, in_max, out_min, out_max) {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

var rhythmButtons = document.getElementsByClassName("rhythm");
Array.prototype.forEach.call(rhythmButtons, function(button){
  var instrument = button.dataset.instrument;
  button.addEventListener('click', 
    function() { 
      setActiveInstrument(instrument);
    }, 
    false
  );
})

export function setActiveInstrument(instrument) {
  activeInstrument = instrument;
  showSelectedButton();
  updateVoiceDisplay(getVoice());
  selectRing();
}

function showSelectedButton() {
  Array.prototype.forEach.call(rhythmButtons, function(button){
    var instrument = button.dataset.instrument;
    button.style.backgroundColor = activeInstrument.toUpperCase() == instrument.toUpperCase() ? noteColors[activeInstrument] : noteColors["_"];
  })
}

showSelectedButton();
selectRing();

function selectRing() {
  var controls = [innerPatternRing, outerPatternRing, samplerPatternRing];
  var filters = [innerFilter, outerFilter, samplerFilter];
  for (var i=0; i<controls.length; i++) {
    var control = controls[i];
    var filter = filters[i];
    var ring = control.findOne('.highlightRing');
    if (filter.includes(activeInstrument)) {
      ring.visible(true);
    } else {
      ring.visible(false);
    }
  }
  layer.batchDraw();
}

var bass90Button = document.getElementById("bass90");
bass90Button.addEventListener('click', 
  function() {
    rotateAnimation(outerCustomPattern, outerMidRadius - patternWidth / 2,
    function() {
      patternRotate(outerCustomPattern, 8)
      updatePattern();
    });
  }, 
  false
);

var hihat90Button = document.getElementById("hihat90");
hihat90Button.addEventListener('click', 
  function() {
    rotateAnimation(innerCustomPattern, innerMidRadius - patternWidth / 2,
    function() {
      patternRotate(innerCustomPattern, 8);
      updatePattern();
    });
  }, 
  false
);

var melody90Button = document.getElementById("melody90");
melody90Button.addEventListener('click', 
  function() {

    rotateAnimation(samplerCustomPattern, samplerMidRadius - patternWidth / 2,
    function() {
      patternRotate(samplerCustomPattern, 8);
      updatePattern();
    });
  }, 
  false
);

function patternRotate(pattern, count) {
  arrayRotate(pattern.value, count);
  arrayRotate(pattern.amplitude, count);
  arrayRotate(pattern.duration, count);
  patternUpdated();
}

function arrayRotate(arr, count) {
  arr.unshift.apply(arr, arr.splice(arr.length-count, count));
  return arr;
}

function rotateAnimation(pattern, radius, completion) {
  var slices = patternSliceGroup(pattern, radius);
  layer.add(slices);
  layer.batchDraw();

  var duration = 333;
  var sustain = 150;
  var rotation = 90;
  var anim = new Konva.Animation(function(frame) {
    var time = frame.time,
      timeDiff = frame.timeDiff,
      frameRate = frame.frameRate;
    if (time >= duration + sustain) {
      slices.destroy();
      anim.stop();
      completion();
    } else if (time > duration) {
      slices.rotation(rotation);
    } else {
      var angle = rotation * frame.time / duration;
      slices.rotation(angle);
    }

    
  }, layer);
  anim.start();
}

function patternSliceGroup(pattern, radius) {
  var sliceGroup = new Konva.Group({
    x: patternOriginX,
    y: patternOriginY
  });

  var originX = patternOriginX, originY = patternOriginY;
  for (var i = 0; i < 32; i++) {
    if (pattern.value[i] == '-' || pattern.amplitude[i] == 0) {
      continue;
    }
    var point = pointBeginning(i, radius, 0, 0);
    var strokeWidth = 8;
    var strokeColor = 'black';
    var line = new Konva.Line({
      points: [0, 0, point.x, point.y],
      stroke: strokeColor,
      strokeWidth: strokeWidth,
      opacity: 0.5,
      listening: false
    });
    sliceGroup.add(line);
  }
  return sliceGroup;  
}

var presetCounter = 1;
var presets = [];
var addPresetButton = document.getElementById("addPresetButton");
var presetList = document.getElementById("presetList");

addPresetButton.addEventListener('click', 
  function() {
    addPreset(capturePreset());
    updateVisibility()
  }, 
  false
);

function savePreset(id) {
  presets[id] = capturePreset();
}

function addPreset(preset) {
  if (presetList.childElementCount == 8) {
    deletePreset(presetCounter, presetList.lastChild)
  }
  presets[presetCounter] = preset;

  var entry = document.createElement('li');
  // entry.append(savePresetButton(presetCounter));
  var link = document.createElement('a');
  link.href = ''
  link.innerHTML = localizedString("Pattern") + " " + presetCounter;
  link.dataset.presetID = presetCounter
  entry.appendChild(link);
  link.addEventListener('click',
    function(event){
      var presetToLoad = presets[this.dataset.presetID];
      loadPreset(presetToLoad);
      updatePattern();
      event.preventDefault();
    }, false)
  entry.appendChild(deleteButton(presetCounter));
  entry.appendChild(sequenceButton(presetCounter));
  presetList.appendChild(entry);
  presetCounter += 1;
  updatePattern();
}

function savePresetButton(preset) {
  var button = document.createElement("BUTTON");
  button.className = "savePreset";
  button.innerHTML = saveSVG;
  button.addEventListener('click',
    (function(index) {
      return function() {
        savePreset(index);
      }
    })(preset),
    false
  );
  return button;
}

function deleteButton(preset) {
  var deleteButton = document.createElement("BUTTON");
  deleteButton.innerHTML = deleteSVG;
  deleteButton.className = "deletePreset";
  deleteButton.addEventListener('click',
    (function(index) {
      return function() {
        deletePreset(index, this.parentNode);
      }
    })(preset),
    false
  );
  return deleteButton;
}

function deletePreset(index, node) {
  node.parentNode.removeChild(node);
  delete presets[index];
  sequence = sequence.filter(function(i) {
      return i !== index;
  })
  currentSequence = -1;
  updateSequenceDisplay();
}

var sequenceDisplay = document.getElementById('sequenceDisplay');
function sequenceButton(preset) {
  var sequenceButton = document.createElement("BUTTON");
  sequenceButton.innerHTML = addSVG;
  sequenceButton.className = "sequencePreset level2";
  sequenceButton.addEventListener('click',
    (function(index) {
      return function() {
        sequence.length = Math.min(sequence.length, 7);
        sequence.push(preset);
        updateSequenceDisplay();
      }
    })(preset),
    false
  );
  return sequenceButton;
}

function updateSequenceDisplay() {
  var display = sequence.map(function(preset, index){
    var step = document.createElement("SPAN")
    step.innerHTML = preset;
    step.className = index == currentSequence ? 'active' : '';
    return step.outerHTML;
  })
  sequenceDisplay.innerHTML = display.join(",");
}

var sequenceControl = document.getElementById("sequenceControl");
sequenceControl.addEventListener('click', 
  function() {
    if (currentSequence >= 0) {
      currentSequence = -1;
      this.innerHTML = localizedString("Start");
    } else {
      currentSequence = 0;
      loadPreset(presets[sequence[currentSequence]]);
      updateSequenceDisplay();
      this.innerHTML = localizedString("Stop");
    }
  }, 
  false
);

function capturePreset() {
  var preset = {
      meta: captureMeta(),
      innerCustomPattern: patternFrom(innerCustomPattern),
      outerCustomPattern: patternFrom(outerCustomPattern),
      samplerCustomPattern: patternFrom(samplerCustomPattern)
  }
  return preset;
}

function captureMeta() {
  var scale = scaleSelect.value ?? "";
  var chordNote = chordSelect.value ?? "";
  return {
    tempo: Tone.Transport.bpm.value,
    volume: getVolume(),
    mute: {
      bassSnare: bassSnare.checked, 
      hiHat: hiHat.checked, 
      melody: melody.checked},
    chord: chordNote,
    scale: scale,
    voice: getVoice()
  }
}

export function loadPreset(preset) {
  loadPattern(preset.innerCustomPattern, innerCustomPattern);
  loadPattern(preset.outerCustomPattern, outerCustomPattern);
  loadPattern(preset.samplerCustomPattern, samplerCustomPattern);
  var meta = preset.meta ?? patternMeta();
  loadMeta(meta);
  patternUpdated();
  updatePattern();
}

function patternFrom(pattern) {
  var clone = {
    value: pattern.value.slice(),
    amplitude: pattern.amplitude.slice(),
    duration: pattern.duration.slice()
  }
  return clone
}

function metaFrom(meta) {
  return {
    tempo: meta.tempo,
    volume: meta.volume,
    mute: {
      bassSnare: meta.mute.bassSnare, 
      hiHat: meta.mute.hiHat, 
      melody: meta.mute.melody},
    chord: meta.chord,
    scale: meta.scale,
    voice: meta.voice
  }  
}

function loadPattern(pattern, target) {
  target.value = pattern.value.slice();
  target.amplitude = pattern.amplitude.slice();
  target.duration = pattern.duration.slice();
}

function loadMeta(meta) {
  setTempo(Math.round(meta.tempo));
  updateTempoDisplay(Math.round(meta.tempo));

  setVolume(meta.volume);
  updateVolumeDisplay(meta.volume);

  updateMuteGroupDisplay(meta.mute);

  updateChordDisplay(meta.chord);

  updateScale(meta.scale);

  setVoice(meta.voice);
  updateVoiceDisplay(meta.voice);
}


var sequenceClear = document.getElementById("sequenceClear");
sequenceClear.addEventListener('click', 
  function() {
    currentSequence = -1;
    sequence = [];
    sequenceControl.innerHTML = localizedString("Start");
    updateSequenceDisplay();
  }, 
  false
);



var rhythmPolygon = document.getElementById('rhythmPolygon');

rhythmPolygon.addEventListener('change', 
  function() {
    togglePolygon(rhythmPolygon.checked);
  }, 
  false
);

function togglePolygon(show) {
  if (show) {
      drawGuideSquare();
      drawPolygons()
    } else {
      guideSquare.destroy();
      destroyPolygons();
      polygons = Array(3).fill(new Konva.Shape())
      layer.batchDraw();
    }
}

var guideSquare = new Konva.Shape();

function drawGuideSquare() {
  var radius = innerRadius;
  var points = [];
  [0,8,16,24].forEach( function(i){
    var point = pointFor(i, radius, patternOriginX, patternOriginY);
    points.push(point.x, point.y);
  })

  guideSquare = new Konva.Line({
        points: points,
        fill: '#D9D9D9',
        strokeWidth: 0,
        closed: true,
        listening: false,
        opacity: 0.5
      });
  layer.add(guideSquare);
  layer.batchDraw();
}


var polygons = Array(3).fill(new Konva.Shape())

function drawPolygons() {
  destroyPolygons()

  polygons[0] = drawPolygon(innerCustomPattern, innerMidRadius - patternWidth / 2);
  polygons[1] = drawPolygon(outerCustomPattern, outerMidRadius - patternWidth / 2);  
  polygons[2] = drawPolygon(samplerCustomPattern, samplerMidRadius - patternWidth / 2);
  for (var i = 0; i < polygons.length; i++) {
    layer.add(polygons[i]);
  }
  
  layer.batchDraw();
}

function destroyPolygons() {
  for (var i = 0; i < polygons.length; i++) {
    polygons[i].destroy()
  }
}


function drawPolygon(pattern, radius) {
  var points = [];
  for (var i = 0; i < pattern.value.length; i++) {
    var note = pattern.value[i];
    if (note != '-') {
      var point = pointFor(i, radius, patternOriginX, patternOriginY);
      points.push(point.x, point.y);
    }
  }

  if (points.length == 0) {
    return new Konva.Shape();
  }

  var polygon = new Konva.Line({
        points: points,
        stroke: 'black',
        strokeWidth: 1,
        closed: true,
        listening: false
      });
  return polygon;
}

function pointFor(step, radius, originX, originY, base=32) {
  var segment = Math.PI * 2 / base;
  var dAlpha = - Math.PI / 2 + step * segment;
  var dx = Math.cos(dAlpha) * radius;
  var dy = Math.sin(dAlpha) * radius;

  return {
    x: originX + dx,
    y: originY + dy
  }  
}

function pointBeginning(step, radius, originX, originY, base=32) {
  var segment = Math.PI * 2 / base;
  var dAlpha = - Math.PI / 2 + step * segment;
  var dx = Math.cos(dAlpha) * radius;
  var dy = Math.sin(dAlpha) * radius;

  return {
    x: originX + dx,
    y: originY + dy
  }  
}

function encodePreset(pattern=outerCustomPattern, key=outerFilter) {
  return {a:encode(pattern.amplitude), v:encode(pattern.value, key), d: encode(pattern.duration, [], 6)}
}

function encode(pattern, filter=[], count=0) {
  if (filter.length > 0) {
    var pattern = pattern.map( function(note){ 
      return filter.indexOf(note) + 1 
    });
  }

  var size = codeableSize(filter, count)
  
  var chunks = chunk(pattern, 4);
  var encoded = chunks.map(function(chunk) { 
    var a = parseInt(chunk.join(''), size.base).toString(36)
    return a.padStart(size.length, 0);
  });

  return encoded.join('');
}



function decodePreset(v,a,d,filter) {
  if (!v || !a) return emptyPattern();
  return {
    value: decode(v, filter),
    amplitude: decode(a),
    duration: decode(d,[],6)
  }
}

function decode(string, filter=[], count=0) {

  var size = codeableSize(filter, count);
  var a = chop(string, size.length)
  var chunks = a.map( function (chunk) {
    var a = parseInt(chunk, 36).toString(size.base)
    return a.padStart(4, 0);
  })

  var ints = chunks.join('').split('')

  if (filter.length > 0) {
    ints = ints.map(function(index){ 
      return --index < 0 ? '-' : filter[index]; 
    })
  } else {
    ints = ints.map(function(index){ 
      return parseInt(index, 10); 
    })
  }

  return ints
}

function codeableSize(filter, count) {
  var size = Math.max(filter.length, count);
  return {
    length: size < 4 ? 2 : 3,
    base: size < 4 ? 4 : 8
  }
}

function chunk(array, size) {
  const chunked_arr = [];
  let index = 0;
  while (index < array.length) {
    chunked_arr.push(array.slice(index, size + index));
    index += size;
  } 
  return chunked_arr;
}

function chop(str, size){
      if (str == null || str.length == 0) return [];
      str = String(str);
      size = ~~size;
      return size > 0 ? str.match(new RegExp('.{1,' + size + '}', 'g')) : [str];
}

function patternUpdated() {
  // updatePatternURL()
}

function updatePatternURL() {
  var inner = encodePreset(innerCustomPattern, innerFilter);
  var outer = encodePreset(outerCustomPattern, outerFilter);
  var sampler = encodePreset(samplerCustomPattern, scale);
  var obj = {
    v1: inner.v,
    a1: inner.a,
    v2: outer.v,
    a2: outer.a,
    v3: sampler.v,
    a3: sampler.a,
    d3: sampler.d
  }
  var str = "";
  for (var key in obj) {
    if (str != "") {
        str += "&";
    }
    str += key + "=" + encodeURIComponent(obj[key]);
  }
  // var query = stateObj.entries.map(function() { return key + '=' + val  }).join('&')
  history.replaceState({}, "", '?' + str);
}

function queryString(preset) {
  var inner = encodePreset(preset.innerCustomPattern, innerFilter);
  var outer = encodePreset(preset.outerCustomPattern, outerFilter);
  var sampler = encodePreset(preset.samplerCustomPattern, scale);
  var obj = {
    v1: inner.v,
    a1: inner.a,
    v2: outer.v,
    a2: outer.a,
    v3: sampler.v,
    a3: sampler.a,
    d3: sampler.d
  }
  var str = "";
  for (var key in obj) {
    if (str != "") {
        str += "&";
    }
    str += key + "=" + encodeURIComponent(obj[key]);
  }

  return str
}

function loadPresetFromURL() {
  var urlParams = new URLSearchParams(window.location.search);
  var v1 = urlParams.get('v1');
  var a1 = urlParams.get('a1');
  var v2 = urlParams.get('v2');
  var a2 = urlParams.get('a2');
  var v3 = urlParams.get('v3');
  var a3 = urlParams.get('a3');
  var d3 = urlParams.get('d3');
  var urlPreset = {
    innerCustomPattern: decodePreset(v1, a1, '', innerFilter),
    outerCustomPattern: decodePreset(v2, a2, '', outerFilter),
    samplerCustomPattern: decodePreset(v3, a3, d3, scale)
  }
  loadPreset(urlPreset);
  updatePattern();
}

// var enableAllButton = document.getElementById("enableAll");
// enableAllButton.addEventListener('click', toggleAll, false);
var level = 0

function toggleAll() {
    level = ++level % 3
    updateVisibility()
    displaySetsFull()
}


function updateVisibility() {
  return;
  const levelText = ["Note Entry", "Sequencing", "Special Tools"][level]
  enableAllButton.innerText = localizedString(levelText);
  var controls = document.querySelectorAll(".level2")
  for (var i = 0; i < controls.length; i++) {
      controls[i].style.visibility = level >= 1 ? 'visible' : 'hidden';
  }
  controls = document.querySelectorAll(".level3")
  for (var i = 0; i < controls.length; i++) {
      controls[i].style.visibility = level >= 2 ? 'visible' : 'hidden';
  }
}

export function featureVisibility(featureClassNames) {
  mirrorVertical.checked = false;
  mirrorHorizontal.checked = false;
  mirrorVerticalLine.visible(false);
  mirrorHorizontalLine.visible(false);

  rhythmPolygon.checked = false;
  togglePolygon(rhythmPolygon.checked);
  
  var controls = document.querySelectorAll(".feature")
  for (var i = 0; i < controls.length; i++) {
    var visibility = 'hidden'
    if (featureClassNames.some(className => controls[i].classList.contains(className))) {
      visibility = 'visible'
    }
    controls[i].style.visibility = visibility;
  }
}

var setCounter = 1;
var sets = [];
var currentSetID = 0;
// var exportSetButton = document.getElementById("exportSetButton");

var saveSetButton = document.getElementById("saveSetButton");
var saveSetsList = document.getElementById("saveSetList");

function selectSaveSet(setID) {
  var options = saveSetsList.options
  for (var i=0; i<options.length; i++) {
    if (options[i].value == setID) {
      saveSetsList.selectedIndex = i
    }
  }
}

saveSetButton.onclick = function(){
  var setID = saveSetsList.options[saveSetsList.selectedIndex].value
  saveSet(setID)
  selectLoadSet(setID)
  displaySetsFull()
}

function saveSet(setID) {
  if (checkSetRange(setID)) {
      var set = {presets: clonePresets(), sequence: sequence.slice()}; 
      storeSet(set, setID);
    }
}

function clonePresets() {
  var newPresets = []
  var filtered = presets.filter(function (el) {
    return el != null
  })
  filtered.forEach( function(preset){
    newPresets.push(clonePreset(preset))
  })
  return newPresets
}

function clonePreset(preset) {
  var newPreset = {
      meta: metaFrom(preset.meta ?? patternMeta()),
      innerCustomPattern: patternFrom(preset.innerCustomPattern),
      outerCustomPattern: patternFrom(preset.outerCustomPattern),
      samplerCustomPattern: patternFrom(preset.samplerCustomPattern)
    }
  return newPreset;
}

function storeSet(set, setID) {
  sets[setID] = set;
  storeSets();  
}

function storeSets() {
  var filtered = sets.filter(function (el, i) {
    return (i != 0) && (el != null);
  });
  localStorage.setItem('sets', JSON.stringify(filtered));
}

// https://icons.getbootstrap.com
var saveSVG = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-square" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/></svg>';
var addSVG = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16"><path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/></svg>';
var deleteSVG = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16"><path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>';
var exportSVG = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right-square" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"/></svg>';

var loadSetButton = document.getElementById("loadSetButton");
var loadSetsList = document.getElementById("loadSetList");

function selectLoadSet(setID) {
  var options = loadSetsList.options
  for (var i=0; i<options.length; i++) {
    if (options[i].value == setID) {
      loadSetsList.selectedIndex = i
    }
  }
}

loadSetButton.onclick = function(){
  var setID = loadSetsList.options[loadSetsList.selectedIndex].value
  loadSetID(setID);
  updatePattern();
  updateSequenceDisplay();
  updateVisibility();
}

var setsFull = document.getElementById("setsFull");
function displaySetsFull() {
  if (level >= 1 && firstEmptySet() == -1) {
    setsFull.style.visibility = 'visible'
  } else {
    setsFull.style.visibility = 'hidden'
  }
}

function loadFirstEmptySet() {
  var index = firstEmptySet()
  if (index >= 0) {
    selectSaveSet(index);
    selectLoadSet(index);
  }
}

function firstEmptySet() {
  var index = -1
  for (var i=1; i <= 8; i++) {
    if ( typeof sets[i] === 'undefined' || sets[i].presets.length == 0) {
      index = i
      break;
    }
  }
  return index
}


function loadSetID(setID) {
  currentSetID = setID;
  var set = sets[setID];
  loadSet(set)
}

function loadSet(set){
  presetList.innerHTML = '';
  presetCounter = 1;
  presets = [];
  
  if (typeof set === 'object' && set.hasOwnProperty('presets') ) {
    loadPresets(set.presets);
  } else {
    loadPreset(emptyPreset());
  }

  if (typeof set === 'object' && set.hasOwnProperty('sequence') ) {
    sequence = set.sequence;
  } else {
    sequence = [];
  }
}

function loadDefaultSets() {
  var newSets = JSON.parse(localStorage.getItem('sets')) ?? [];
  newSets.unshift(sets[0]);
  sets = newSets;
}

function checkSetRange(setID){
  return (setID > 0 && setID <= 8)
}

function loadPresets(newPresets) {
  var filtered = newPresets.filter(function (el) {
    return el != null;
  });
  filtered.forEach( function(preset){
    addPreset(preset);
  }) 
  var first = filtered.shift();
  loadPreset(first ?? emptyPreset())
}

// exportSetButton.addEventListener('click', exportSetAction, false);

function exportSetAction() {
    var set = {presets: clonePresets(), sequence: sequence.slice()};
    var setString = exportSet(set);
    var sequenceString = exportSequence(set);
    
    var newUrl = document.location.origin + document.location.pathname + '?set=' + setString + '&seq=' + sequenceString;
    window.open(newUrl,'_blank');
}

function exportSet(set) {
  var filtered = set.presets.filter(function (el) {
    return el != null;
  });

  var encoded = filtered.map( shortEncode ) 
  var exportString = encoded.join('|')
  return exportString
}

function exportSequence(set) {
  return encodeURIComponent(JSON.stringify(set.sequence))
}

// 3 instruments + 3 amplitudes + off status = 10 options
// base 10 x 8 = base 62 x 5 -> 20 (x2)
// legacy pentatonic: 7 notes + 3 amplitudes + off status = 22 options
// 22^8: 54875873536
// 62^6: 56800235584
// new diatonic mode: 10 notes + 3 amplitudes + off status = 31 options
// 31^8: 852891037441
// 62^7: 3521614606208
// 1 extra character, 32 
// base 22 x 8 = base 62 x 6 -> 24
// 5 durations + off = 6 options
// base 6 x 8 = base 62 x 4  -> 16

function shortEncode(preset) {
  var inner = encodeValueAmplitudePattern(preset.innerCustomPattern, innerFilter);
  var inner62 = base62(inner, 5);

  var outer = encodeValueAmplitudePattern(preset.outerCustomPattern, outerFilter);
  var outer62 = base62(outer, 5);

  var sampler = encodeValueAmplitudePattern(preset.samplerCustomPattern, diatonicScale).map(function(value){ return value.toString(32) });
  var sampler62 = base62(sampler, 7, 32);

  var samplerDuration = encodeDurationPattern(preset.samplerCustomPattern);
  var samplerDuration62 = base62(samplerDuration, 4, 6);

  var meta = encodeMeta(preset);
  var meta62 = base62Meta(meta);

  var exportString = [inner62,outer62,sampler62,samplerDuration62,meta62].join(",");
  return exportString
}

function encodeValueAmplitudePattern(pattern, filter) {
  var encoded = []
  for(var i = 0; i < 32; i++){
    var note = pattern.value[i]
    var amplitude = pattern.amplitude[i]
    var index = filter.indexOf(note)
    var value = 0
    if (index != -1) {
      var value = index * 3 + amplitude
    }
    encoded.push(value)
  }
  return encoded
}

function encodeDurationPattern(pattern) {
  var encoded = []
  for(var i = 0; i < 32; i++){
    var duration = pattern.duration[i]
    encoded.push(duration)
  }
  return encoded
}

/*
meta {
    tempo: 90, // 20-180 -> oct x 3
    volume: 60, // 0-100 -> oct x 3
    mute: {bassSnare: true, hiHat: true, melody: true}, // 3 bits -> oct
    chord: "", // 5 values -> oct
    voice: "synth" // 3 values -> oct
  }
*/

var chordFilter = ['', 'A1', 'B1', 'D2', 'E2', 'G2'];
var voiceFilter = ['synth', 'rock', 'rnb'];

function encodeMeta(pattern) {
  var meta = pattern.meta ?? patternMeta();
  var encoded = [];
  encoded.push(meta.tempo.toString(8));
  encoded.push(meta.volume.toString(8));
  encoded.push(Number(meta.mute.bassSnare) << 0 | Number(meta.mute.hiHat) << 1 | Number(meta.mute.melody) << 2);
  encoded.push(chordFilter.indexOf(meta.chord));
  encoded.push(voiceFilter.indexOf(meta.voice));
  encoded.push(meta.scale == 'diatonic' ? 1: 0);
  return encoded
}

// tempo: < 200 
// volume: < 100 
// mutes: 8 (2 x 2 x 2)
// chordFilter: 6
// voice: 3
// 863 x8, 62^2 3844
// scale: 2
// 8632 x8, 62^3
// legacy length 6, scale length 7

function base62Meta(encoded) {
  var base62Encoded = [];
  base62Encoded.push(toBase62(parseInt(encoded[0], 8)).padStart(2, 0));
  base62Encoded.push(toBase62(parseInt(encoded[1], 8)).padStart(2, 0));
  base62Encoded.push(toBase62(parseInt(encoded.slice(2).join(''), 8)).padStart(3, 0));
  return base62Encoded.join('')
}

function base62(values, targetLength, base=10) {
  var chunks = chunk(values, 8);
  var encoded = chunks.map(function(chunk) { 
    var a = toBase62(parseInt(chunk.join(''), base))
    return a.padStart(targetLength, 0);
  });
  return encoded.join('')
}

function toBase62(n) {
  if (n === 0) {
    return '0';
  }
  var digits = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var result = ''; 
  while (n > 0) {
    result = digits[n % digits.length] + result;
    n = parseInt(n / digits.length, 10);
  }
  
  return result;
}

function importSetFromURL() {
  var urlParams = new URLSearchParams(window.location.search);
  var importString = urlParams.get("set") ?? ''
  if (importString.length > 0) {
    importSet(importString);

    var option = document.createElement("option");
    option.value = "0";
    option.text = "URL";
    loadSetsList.insertBefore(option, loadSetsList.firstChild)
  }
  var importSequenceString = urlParams.get("seq") ?? '';
  if (importSequenceString.length > 0) {
    sequence = JSON.parse(decodeURIComponent(importSequenceString)) ?? [];
    updateSequenceDisplay();
  }
}

function shouldImportSet() {
  var urlParams = new URLSearchParams(window.location.search);
  var importString = urlParams.get("set") ?? ''
  return importString.length > 0
}


function importSet(setString) {
  var importString = setString.replace(/\s/g,'')
  var presetStrings = importString.split("|")
  var newPresets = presetStrings.map(function(presetString){
    var patterns = presetString.split(",")
    
    var innerValues = parseBase62(patterns[0].split(''), 5);
    var innerPattern = decodeValueAmplitudePattern(innerValues, innerFilter);

    var outerValues = parseBase62(patterns[1].split(''), 5);
    var outerPattern = decodeValueAmplitudePattern(outerValues, outerFilter);

    if (patterns[2].length < 28) {
      var samplerValues = parseBase62(patterns[2].split(''), 6, 22).map(function(value){ return parseInt(value, 22).toString(10) });
      var samplerPattern = decodeValueAmplitudePattern(samplerValues, pentatonicScale);
    } else {
      var samplerValues = parseBase62(patterns[2].split(''), 7, 32).map(function(value){ return parseInt(value, 32).toString(10) });
      var samplerPattern = decodeValueAmplitudePattern(samplerValues, diatonicScale);
    }

    var durationValues = parseBase62(patterns[3].split(''), 4, 6).map(function(value) { return parseInt(value, 6); });
    samplerPattern.duration = durationValues;

    var metaValues = parseBase62Meta(patterns[4].split(''));
    var meta = decodeMeta(metaValues);

    return {
      meta: meta,
      innerCustomPattern: innerPattern,
      outerCustomPattern: outerPattern,
      samplerCustomPattern: samplerPattern}
  });

  currentSetID = 0;

  var set = {presets: newPresets};
  sets[0] = set;
  loadSet(set);
  updatePattern();
}

function parseBase62(string, originLength, base=10) {
  var chunks = chunk(string, originLength)
  var decoded = chunks.reduce(function(accumulator, chunk){
    var base62Values = fromBase62(chunk.join(''))
    var values = base62Values.toString(base).padStart(8, 0).split('')
    return accumulator.concat(values)
  }, [])
  return decoded
}

function parseBase62Meta(values) {
  var chunks = chunk(values, 2);
  var decoded = [];
  decoded.push(parseInt(fromBase62(chunks[0].join(''), 10)));
  decoded.push(parseInt(fromBase62(chunks[1].join(''), 10)));

  var octalString = chunks[2].join('')
  if (chunks.length > 3) {
    octalString = octalString.concat(chunks[3]);
    var octalValues = fromBase62(octalString).toString(8).padStart(4,0).split('');
  } else {
    var octalValues = fromBase62(octalString).toString(8).padStart(3,0).split('');
    octalValues.push(0);
  }

  return decoded.concat(octalValues);
}

function fromBase62(s) {
  var digits = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var result = 0;
  for (var i=0 ; i<s.length ; i++) {
    var p = digits.indexOf(s[i]);
    if (p < 0) {
      return NaN;
    }
    result += p * Math.pow(digits.length, s.length - i - 1);
  }
  return result;
}


function decodeValueAmplitudePattern(values, filter) {
  var pattern = emptyPattern();
  var amplitudeMax = 3
  for(var i = 0; i < 32; i++){
    var value = values[i];
    var noteValue = Math.floor((value-1)/amplitudeMax)
    var note = '-'
    var amplitude = 0
    if (value > 0) {
      note = filter[noteValue];
      amplitude = (value - 1) % amplitudeMax + 1;
    }
    pattern.value[i] = note;
    pattern.amplitude[i] = amplitude;
  }
  return pattern
}

function decodeMeta(values) {
  return {
    tempo: values[0], // 20-180 -> oct x 3
    volume: values[1], // 0-100 -> oct x 3
    mute: {bassSnare: Boolean(values[2] & (1 << 0)), hiHat: Boolean(values[2] & (1 << 1)), melody: Boolean(values[2] & (1 << 2))}, // 3 bits -> oct
    chord: chordFilter[values[3]], // 5 values -> oct
    voice: voiceFilter[values[4]], // 3 values -> oct
    scale: (values[5] ?? 0) == 1 ? 'diatonic' : 'pentatonic',
  }
}

importSetFromURL();
loadDefaultSets();
// loadFirstEmptySet();
if (shouldImportSet()) {
  selectLoadSet(0)
}
// displaySetsFull();