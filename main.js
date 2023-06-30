const offDef = document.getElementById("offDefFouls");
const unitCharged = document.getElementById("unitCharged");
const penaltyYards = document.getElementById("penYards");
const playRes = document.getElementById("playResult");
const form = document.querySelector("form");
const keyImg = document.querySelector(".keyImage");
const scoreDiv = document.querySelector(".score");
const blink = document.getElementById("mySubmitButton")

let questionIndex = 0;
let score = 0;

let bothFouls = [
  "Offside",
  "Pass Interference",
  "Holding",
  "Illegal Block",
  "Face Mask",
  "Horse collar",
  "Unnecessary Roughness",
  "Unsportsmanlike Conduct",
  "Taunting",
  "False Start",
  "Delay of Game",
  "Ineligible Player Downfield",
  "Intentional Grounding",
  "Encroachment",
  "Neutral Zone Infraction",
  "Roughing the passer",
];

let unit = ["Offense", "Defense", "Kicking Team", "Recieving/Blocking Team"];
let penYards = [
  "5 yards",
  "10 yards",
  "15 yards",
  "Ball is placed at the spot of the foul",
  "Ball is placed half the distance to the goal line",
  "Foul occured in the end zone",
  "Ball is placed at the 1 yard line",
  "15 yards, enforced on Kickoff",
];

let playResult = [
  "Automatic First Down",
  "Repeat Current Down",
  "Loss of down",
  "Safety",
  "Touchdown",
];

let curDowns = [
  "It's first down.",
  "It's second down.",
  "It's third down.",
  "It's fourth down.",
];

let scenarios = [
  {
    question:
      "The Middle Linebacker crosses the line of scrimmage, causing the Left Guard to react before the Quarterback snapped the ball. The foul occured in the field of play",
    bothFoul: "Neutral Zone Infraction",
    unit: "Defense",
    penalty: "5 yards",
    result: "Repeat Current Down",
  },
  {
    question:
      "The Right Tackle grabs an Edge Rusher approaching the Quarterback. The foul occured in the field of play",
    bothFoul: "Holding",
    unit: "Offense",
    penalty: "10 yards",
    result: "Repeat Current Down",
  },
  {
    question:
      "The Right Tackle grabs an Edge Rusher approaching the Quarterback. The foul occured in the end zone",
    bothFoul: "Holding",
    unit: "Offense",
    penalty: "Foul occured in the end zone",
    result: "Safety",
  },
  {
    question:
      "The Quarterback fails to initiate the play before the play clock expired. The foul occured in the field of play.",
    bothFoul: "Delay of Game",
    unit: "Offense",
    penalty: "5 yards",
    result: "Repeat Current Down",
  },
  {
    question:
      "The Quarterback, in an attempt to avoid losing yards from a sack, throws a forward pass without a realistic chance of a receiver completing the pass. The play occured in the field of play.",
    bothFoul: "Intentional Grounding",
    unit: "Offense",
    penalty: "10 yards",
    result: "Loss of down",
  },
  {
    question:
      "The Quarterback, in an attempt to avoid losing yards from a sack, throws a forward pass without a realistic chance of a receiver completing the pass. The play occured in the end zone.",
    bothFoul: "Intentional Grounding",
    unit: "Offense",
    penalty: "Foul occured in the end zone",
    result: "Safety",
  },
  {
    question:
      "The Left Tackle grabs and holds an approaching Outside Linebacker. The foul occured in the field of play.",
    bothFoul: "Holding",
    unit: "Offense",
    penalty: "10 yards",
    result: "Repeat Current Down",
  },
  {
    question:
      "The Left Tackle grabs and holds an approaching Outside Linebacker. The foul occured in the end zone.",
    bothFoul: "Holding",
    unit: "Offense",
    penalty: "Foul occured in the end zone",
    result: "Safety",
  },
  {
    question:
      "The Edge Rusher runs into Quarterback after the ball was thrown. The foul occured in the field of play.",
    bothFoul: "Roughing the passer",
    unit: "Defense",
    penalty: "15 yards",
    result: "Automatic First Down",
  },
  {
    question:
      "The Edge Rusher runs into Quarterback after the ball was thrown. The foul occured in the end zone.",
    bothFoul: "Rouging the passer",
    unit: "Defense",
    penalty: "15 yards",
    result: "Automatic First Down",
  },
  {
    question:
      "The Outside Linebacker performs a clean sack on the quarterback, but lands with their full bodyweight on the passer. The foul occured in the field of play.",
    bothFoul: "Roughing the passer",
    unit: "Defense",
    penalty: "15 yards",
    result: "Automatic First Down",
  },
  {
    question:
      "The Outside Linebacker performs a clean sack on the quarterback, but lands with their full bodyweight on the passer. The foul occured in the end zone.",
    bothFoul: "Roughing the passer",
    unit: "Defense",
    penalty: "15 yards",
    result: "Automatic First Down",
  },
  {
    question:
      "The Wide Receiver taunts the oposing team's bench players after scoring a touchdown.",
    bothFoul: "Taunting",
    unit: "Offense",
    penalty: "15 yards, enforced on Kickoff",
    result: "Touchdown",
  },
  {
    question:
      "The Right Gaurd flinches at the approaching Outside Linebacker before the Quarterback initiates the play. The foul occured in the field of play.",
    bothFoul: "False Start",
    unit: "Offense",
    penalty: "5 yards",
    result: "Repeat Current Down",
  },
  {
    question:
      "The Nose Gaurd crosses the nuetral zone and makes contact with the Center before the ball is snapped. The foul occured in the field of play.",
    bothFoul: "Encroachment",
    unit: "Defense",
    penalty: "5 yards",
    result: "Repeat Current Down",
  },
  {
    question:
      "The Running Back grabs the face protection of an oposing player while carrying the football. The foul occured in the end zone.",
    bothFoul: "Face Mask",
    unit: "Offense",
    penalty: "Foul occured in the end zone",
    result: "Safety",
  },
  {
    question:
      "The Running Back grabs the face protection of an oposing player while carrying the football. The foul occured in the field of play.",
    bothFoul: "Face Mask",
    unit: "Offense",
    penalty: "15 yards",
    result: "Repeat Current Down",
  },
  {
    question:
      "The Cornerback hooks and holds a Wide Receiver's arm after the Quarterback releases the ball. The foul occured in the field of play.",
    bothFoul: "Pass Interference",
    unit: "Defense",
    penalty: "Ball is placed at the spot of the foul",
    result: "Automatic First Down",
  },
  {
      question:
        "The Cornerback hooks and holds a Wide Receiver's arm after the Quarterback releases the ball. The foul occured in the end zone.",
      bothFoul: "Pass Interference",
      unit: "Defense",
      penalty: "Ball is placed at the 1 yard line",
      result: "Automatic First Down",
},
  {
      question:
        "The Cornerback hooks and holds a Wide Receiver's arm after the Quarterback releases the ball. The foul occured in the end zone.",
      bothFoul: "Pass Interference",
      unit: "Defense",
      penalty: "Ball is placed at the 1 yard line",
      result: "Automatic First Down",
},
];

scenarios = scenarios.sort((a, b) => 0.5 - Math.random());
scenarios.length = 9;

function shuffleDowns() {
  curDowns = curDowns.sort((a, b) => 0.5 - Math.random());
}


for (let i = 0; i < bothFouls.length; i++) {
  let both = bothFouls[i];
  let elBoth = document.createElement("option");
  elBoth.textContent = both;
  elBoth.value = both;
  offDef.appendChild(elBoth);
}

// UNITS
for (let i = 0; i < unit.length; i++) {
  let teamUnit = unit[i];
  let elUnit = document.createElement("option");
  elUnit.textContent = teamUnit;
  elUnit.value = teamUnit;
  unitCharged.appendChild(elUnit);
}

// PENALTY YARDS
for (let i = 0; i < penYards.length; i++) {
  let pen = penYards[i];
  let elPen = document.createElement("option");
  elPen.textContent = pen;
  elPen.value = pen;
  penaltyYards.appendChild(elPen);
}

// RESULT OF THE PLAY
for (let i = 0; i < playResult.length; i++) {
  let result = playResult[i];
  let elRes = document.createElement("option");
  elRes.textContent = result;
  elRes.value = result;
  playRes.appendChild(elRes);
}

let questBtn = document.getElementById("questBtn");
let outField = document.querySelector("#output");

let curField = document.querySelector("#curOutput");

questBtn.addEventListener("click", () => {
  questionIndex++;
  updateUI();
});

function updateUI() {
  shuffleDowns();
  curField.innerText = curDowns[0];
  outField.innerText = scenarios[questionIndex].question;

  let rightValues = [];
  let currentQuestion = scenarios[questionIndex];
  
  rightValues.push(
    currentQuestion.bothFoul,
    currentQuestion.unit,
    currentQuestion.penalty,
    currentQuestion.result
  );
  console.log(rightValues);
  return rightValues;
}

updateUI();

let currentQuestion = scenarios[questionIndex];

//add 'click' event listener to submit button
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const values = [];

  for (i = 0; i < e.target.getElementsByTagName("select").length; i++) {
    values.push(e.target.getElementsByTagName("select")[i].value);
  }

  console.log(values); //console log for debugging

  for (i = 0; i < updateUI().length; i++) {
    if (values[i] !== updateUI()[i]) {
      console.log(false);
      break;
    } else if (i === 3) {
      console.log(true);
      score++
      updateUI();
      scoreDiv.innerText = score;
    }
  }

  if (score === 2) {
    console.log("You Win");
    scoreDiv.innerText = "You Win!";
    buttonChange = document.getElementById("questBtn");
    buttonChange.style.backgroundColor = 'green';
    buttonChange.style.color = 'white';
  }
});

// blinking function
function startBlinking() {
    blinkInterval = setInterval(() => {
        if(blink.style.backgroundColor === "red") {
            blink.style.backgroundColor = "green";
        } else {
            blink.style.backgroundColor = "green";
        }

    }, 10);
}

// stopBlinking function
function stopBlinking() {
    clearInterval(blinkInterval);
    blink.style.backgroundColor = "";
}

// mouseover and mouseout event listeners to blinking buttons
blink.addEventListener("mouseover", startBlinking);
blink.addEventListener("mouseout", stopBlinking);
