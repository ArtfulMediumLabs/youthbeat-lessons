
window.addEventListener('load', function () {
    const lessonElement = document.getElementById("lessons");
    const lessonElements = document.querySelectorAll(".lesson")
    var pageControl = createPageControl(lessonElements.length);
    lessonElement.appendChild(pageControl);
})
  
function createPageControl(length) {
    const pageControl = document.createElement("div");
    pageControl.id = "pageControl"
    for(let i = 0; i < length; i++) {
        const a = document.createElement("a");
        const text = document.createTextNode(i);
        a.appendChild(text);
        a.href = "#" + i;
        a.dataset.lessonIndex = i;
        a.addEventListener('click', function() {
            loadLesson(this.dataset.lessonIndex)
        }, false);
        pageControl.appendChild(a);
        pageControl.appendChild(document.createTextNode("\u00A0"));
    }
    return pageControl
}

function loadLesson(index) {
    const lessonElements = document.querySelectorAll(".lesson")
    for (let i = 0; i < lessonElements.length; i++) {
        let lesson = lessonElements[i]
        if (i == index) {
            lesson.classList.remove("hide")
        } else {
            lesson.classList.add("hide")
        }
    }

    let pattern  = lessonPatterns[index] ?? emptyPreset()
    loadPreset(pattern)
    updatePattern();
}

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

const lessonPatterns = []
lessonPatterns[1] = bassPattern;
lessonPatterns[2] = bassPattern;
lessonPatterns[3] = bassPattern;
lessonPatterns[4] = bassSnarePattern;
lessonPatterns[5] = bassSnareGapPattern;
lessonPatterns[6] = bassSnareLongGapPattern;
lessonPatterns[7] = bassSnareLongGapPattern;
lessonPatterns[8] = bassSnareLongGapPattern;
lessonPatterns[9] = bassSnareLongGapPattern;
lessonPatterns[10] = bassSnareLongGapPattern;