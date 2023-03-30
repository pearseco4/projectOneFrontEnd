// referencing drop down options
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

//Array: fouls that both offense and defense are eligible to commit
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
//Array: possible unitS being charged with a foul
let unit = ["Offense", "Defense", "Kicking Team", "Recieving/Blocking Team"];
//Array: possible penalties
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
//Array: result of the play
let playResult = [
  "Automatic First Down",
  "Repeat Current Down",
  "Loss of down",
  "Safety",
  "Touchdown",
];
//Array: current down
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

// Shuffle Original Array of Scenarios
scenarios = scenarios.sort((a, b) => 0.5 - Math.random());
scenarios.length = 9;

//shuffle curDowns array (current down)
function shuffleDowns() {
  curDowns = curDowns.sort((a, b) => 0.5 - Math.random());
}

//forEach loop! BOTH FOULS
for (let i = 0; i < bothFouls.length; i++) {
  //iterate through the array
  let both = bothFouls[i];
  //assign current element in the loop to a letiable called 'both'
  let elBoth = document.createElement("option");
  //create an <option> element called 'elBoth'
  elBoth.textContent = both;
  //set the text content of the 'elBoth' element to the current element in the loop
  elBoth.value = both;
  //set the value attritube of 'elBoth' to the current element in the loop
  offDef.appendChild(elBoth);
}

// //forEach loop! OFFENSIVE FOULS
// for(let i = 0; i < offFouls.length; i++) {
//     //iterate through the array
//     let off = offFouls[i];
//     //assign current element in the loop to a letiable called 'off'
//     // console.log(off);
//     //console log for debugging
//     let elOff = document.createElement("option");
//     //create an <option> element called 'elOff'
//     elOff.textContent = off;
//     //set the text content of the 'elBoth' element to the current element in the loop
//     elOff.value = off;
//     //set the value attritube of 'elBoth' to the current element in the loop
//     offensiveFouls.appendChild(elOff);
//     //append the current value in the loop
// }

// //forEach loop! DEFENSIVE FOULS
// for(let i = 0; i < defFouls.length; i++) {
//     //iterate through the array
//     let def = defFouls[i];
//     //assign current element in the loop to a letiable called 'def'
//     // console.log(def);
//     //console log for debugging
//     let elDef = document.createElement("option");
//     //create an <option> element called 'elDef'
//     elDef.textContent = def;
//     //set the text content of the 'elDef' element to the current element in the loop
//     elDef.value = def;
//     //set the value attritube of 'elDef' to the current element in the loop
//     defensiveFouls.appendChild(elDef);
//     //append the current value in the loop
// }

//forEach loop! UNITS
for (let i = 0; i < unit.length; i++) {
  //iterate through the array
  let teamUnit = unit[i];
  //assign current element in the loop to a letiable called 'off'
  // console.log(teamUnit);
  //console log for debugging
  let elUnit = document.createElement("option");
  //create an <option> element called 'elOff'
  elUnit.textContent = teamUnit;
  //set the text content of the 'elBoth' element to the current element in the loop
  elUnit.value = teamUnit;
  //set the value attritube of 'elBoth' to the current element in the loop
  unitCharged.appendChild(elUnit);
  //append the current value in the loop
}

//forEach loop! YARDAGE PENALTY
for (let i = 0; i < penYards.length; i++) {
  //iterate through the array
  let pen = penYards[i];
  //assign current element in the loop to a letiable called 'off'
  // console.log(pen);
  //console log for debugging
  let elPen = document.createElement("option");
  //create an <option> element called 'elOff'
  elPen.textContent = pen;
  //set the text content of the 'elPen' element to the current element in the loop
  elPen.value = pen;
  //set the value attritube of 'elPen' to the current element in the loop
  penaltyYards.appendChild(elPen);
  //append the current value in the loop
}

//forEach loop! RESULT OF THE PLAY
for (let i = 0; i < playResult.length; i++) {
  //iterate through the array
  let result = playResult[i];
  //assign current element in the loop to a variable called 'result'
  // console.log(result);
  //console log for debugging
  let elRes = document.createElement("option");
  //create an <option> element called 'elOff'
  elRes.textContent = result;
  //set the text content of the 'elBoth' element to the current element in the loop
  elRes.value = result;
  //set the value attritube of 'elBoth' to the current element in the loop
  playRes.appendChild(elRes);
  //append the current value in the loop
}

//assign question button field
let questBtn = document.getElementById("questBtn");
//assign output field
let outField = document.querySelector("#output");

let curField = document.querySelector("#curOutput");

//add "click" eventListener to question button
questBtn.addEventListener("click", () => {
  // const element = array[index];
  questionIndex++;
  updateUI();
});

//update the h1 tags to show curDowns and scenarios array
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

  //create an array for inputed values
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

//create blinking function
function startBlinking() {
    blinkInterval = setInterval(() => {
        if(blink.style.backgroundColor === "red") {
            blink.style.backgroundColor = "green";
        } else {
            blink.style.backgroundColor = "green";
        }

    }, 10);
}
//create stopBlinking function
function stopBlinking() {
    clearInterval(blinkInterval);
    blink.style.backgroundColor = "";
}

//add mouseover and mouseout event listeners to blinking buttons
blink.addEventListener("mouseover", startBlinking);
blink.addEventListener("mouseout", stopBlinking);


// keyImg.addEventListener("click", () => {
//   console.log("clicked");
//   let keyDropDownDiv = document.querySelector(".keyDropDown");
//   keyDropDownDiv.classList.toggle("hide");

//   let offense = `
//         <p>C</p>
//         <p>OG</p>
//         <p>OT</p>
//         <p>WR</p>
//         <p>QB</p>
//         <p>HB</p>
//         <p>TE</p>
//     `

//   let defense = `
//         <p>DT</p>
//         <p>DE</p>
//         <p>MLB</p>
//         <p>OLB</p>
//         <p>CB</p>
//         <p>S</p>
//     `

//   let specialTeams = `
//         <p>K</p>
//         <p>P</p>
//         <p>H</p>
//         <p>LS</p>
//         <p>KR</p>
//         <p>PR</p>
//     `

//   keyDropDownDiv.innerHTML = dropDownInfo;
// });