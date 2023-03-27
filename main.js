
// referencing drop down options
const select = document.getElementById("offDefFouls");
const select1 = document.getElementById("offFouls");
const select2 = document.getElementById("defFouls");
const select3 = document.getElementById("unitCharged");
const select4 = document.getElementById("penYards");
const select5 = document.getElementById("playResult");
let questionIndex = 0;

//Array: fouls that BOTH offense and defense are eligible to commit 
let bothFouls = [
    "Offside", "Pass Interference", "Holding", "Illegal Block", "Face Mask", "Horse collar", "Unnecessary Roughness", "Unsportsmanlike Conduct", "Taunting", "N/A"
];
//Array: fouls that ONLY offense is eligible to commit
let offFouls = [
    "False Start", "Delay of Game", "Ineligible Player Downfield", "Intentional Grounding", "N/A"
];
//Array: fouls ONLY defense is eligible to commit
let defFouls = [
    "Encroachment", "Neutral Zone Infraction", "Roughing the passer", "N/A"
];
//Array: possible unitS being charged with a foul
let unit = [
    "Offense", "Defense", "Kicking Team", "Recieving/Blocking Team"
];
//Array: possible penalties
let penYards = [
    "5 yards", "10 yards", "15 yards", "Ball is placed at spot of the foul", "Ball is placed half the distance to the goal line", "Foul occured in the end zone", "Ball is placed at the 1 yard line"
];
//Array: result of the play 
let playResult = [
    "Automatic first Down", "Repeat current down", "Loss of down", "Safety", "Penalty enforced on kickoff", "Touchdown"
];
//Array: current down 
let curDown = [
    "It's first down,", "It's second down,", "It's third down,", "It's fourth down,"
];
// //Array: scenario prompts 
// let scenarios = [
//     "Middle Linebacker crosses the nuetral line, causing the Left Guard to react before the Quarterback snapped the ball. The foul occured in the field of play", "Right Tackle grabs an Edge Rusher approaching the Quarterback. The foul occured ", "Quarterback fails to initiate the play before the play clock expired. The foul occured ", "The Quarterback, in an attempt to avoid losing yards from a sack, throws a forward pass without a realistic chance of a receiver completing the pass. The play occured ", "The Left tackle grabs and holds an approaching outside linebacker. The foul occured ", "Edge rusher runs into Quarterback after the ball was thrown. The foul occured ", "Outside Linebacker performs a clean sack on the quarterback, but lands with their full bodyweight on the passer. The foul occured ", "A Wide Receiver taunts the oposing team's bench players after scoring a touchdown.", "the right gaurd flinches at the approaching outside linebacker before the quarterback snaps the ball. The foul occured ", "The Nosegaurd crosses the nuetral zone and makes contact with the Center before the ball is snapped. The foul occured ", "The Running Back grabs the face protection of an oposing player while carrying the football. The foul occured ", "The Cornerback hooks and holds a Wide Receiver's arm after the Quarterback releases the ball. The foul occured "
// ];
let scenarios = [
    {
    question: "Middle Linebacker crosses the nuetral line, causing the Left Guard to react before the Quarterback snapped the ball. The foul occured in the field of play",
    bothFoul: "N/A",
    offenseFoul: "N/A",
    defenseFoul: "Neutral Zone Infraction",
    unit: "Defense",
    penalty: "5 yards",
    result: "Repeat Current Down",
    },
    {
    question: "Right Tackle grabs an Edge Rusher approaching the Quarterback. The foul occured in the field of play", 
    bothFoul: "Holding",
    offenseFoul: "N/A",
    defenseFoul: "N/A",
    unit: "Offense",
    penalty: "10 yards",
    result: "Repeat Current Down",
    },
    {
    question: "Right Tackle grabs an Edge Rusher approaching the Quarterback. The foul occured in the End Zone", 
    bothFoul: "Holding",
    offenseFoul: "N/A",
    defenseFoul: "N/A",
    unit: "Offense",
    penalty: "Foul occured in the End Zone",
    result: "Safety",
    },
    {
    question: "Quarterback fails to initiate the play before the play clock expired. The foul occured in the field of play.",
    bothFoul: "N/A",
    offenseFoul: "False Start",
    defenseFoul: "N/A",
    unit: "Offense",
    penalty: "5 yards",
    result: "Repeat Current Down",
    },
    {
    question:"The Quarterback, in an attempt to avoid losing yards from a sack, throws a forward pass without a realistic chance of a receiver completing the pass. The play occured in the field of play.",
    bothFoul: "N/A",
    offenseFoul: "Intentional Grounding",
    defenseFoul: "N/A",
    unit: "Offense",
    penalty: "10 yards",
    result: "Loss of down",
    },
    {
    question:"The Quarterback, in an attempt to avoid losing yards from a sack, throws a forward pass without a realistic chance of a receiver completing the pass. The play occured in the End Zone.",
    bothFoul: "N/A",
    offenseFoul: "N/A",
    defenseFoul: "Intentional Grounding",
    unit: "Offense",
    penalty: "Foul occured in the End Zone",
    result: "Safety",
    },
    {
    question: "The Left Tackle grabs and holds an approaching Outside Linebacker. The foul occured in the field of play.",
    bothFoul: "Holding",
    offenseFoul: "N/A",
    defenseFoul: "N/A",
    unit: "Offense",
    penalty: "10 yards",
    result: "Repeat Current Down",
    },     
    {
    question: "The Left Tackle grabs and holds an approaching Outside Linebacker. The foul occured in the end zone.",
    bothFoul: "Holding",
    offenseFoul: "N/A",
    defenseFoul: "N/A",
    unit: "Offense",
    penalty: "Fould occured in the end zone",
    result: "Safety",
    }, 
    {
    question:"Edge rusher runs into Quarterback after the ball was thrown. The foul occured in the field of play.",
    bothFoul: "N/A",
    offenseFoul: "N/A",
    defenseFoul: "Roughing the passer",
    unit: "Defense",
    penalty: "15 yards",
    result: "Automatic first down",
    },    
    {
    question:"Edge rusher runs into Quarterback after the ball was thrown. The foul occured in the end zone.",
    bothFoul: "N/A",
    offenseFoul: "N/A",
    defenseFoul: "Rouging the passer",
    unit: "Defense",
    penalty: "15 yards",
    result: "Automatic first down",
    },     
    {
    question:"Outside Linebacker performs a clean sack on the quarterback, but lands with their full bodyweight on the passer. The foul occured in the field of play.",
    bothFoul: "N/A",
    offenseFoul: "N/A",
    defenseFoul: "Roughing the passer",
    unit: "Defense",
    penalty: "15 yards",
    result: "Automatic first down",
    },
    {
    question:"Outside Linebacker performs a clean sack on the quarterback, but lands with their full bodyweight on the passer. The foul occured in the End Zone.",
    bothFoul: "N/A",
    offenseFoul: "N/A",
    defenseFoul: "Roughing the passer",
    unit: "Defense",
    penalty: "15 yards",
    result: "Automatic first down",
    },
    {
    question:"A Wide Receiver taunts the oposing team's bench players after scoring a touchdown.",
    bothFoul: "Taunting",
    offenseFoul: "N/A",
    defenseFoul: "N/A",
    unit: "Offense",
    penalty: "15 yards, enforced on Kickoff",
    result: "Touchdown",
    },
    {
    question:"the right gaurd flinches at the approaching outside linebacker before the quarterback initiates the play. The foul occured in the field of play.",
    bothFoul: "N/A",
    offenseFoul: "N/A",
    defenseFoul: "False Start",
    unit: "Offense",
    penalty: "5 yards",
    result: "Repeat Current Down",
    }, 
    {
    question:"The Nosegaurd crosses the nuetral zone and makes contact with the Center before the ball is snapped. The foul occured in the field of play.",
    bothFoul: "N/A",
    offenseFoul: "N/A",
    defenseFoul: "Encroachment",
    unit: "Defense",
    penalty: "5 yards",
    result: "Repeat Current Down",
    },
    {
    question:"The Running Back grabs the face protection of an oposing player while carrying the football. The foul occured in the field of play.",
    bothFouls: "N/A",
    offenseFoul: "N/A",
    defenseFoul: "Neutral Zone Infraction",
    unit: "Defense",
    penalty: "15 yards",
    result: "Repeat Current Down",
    }, 
    {
    question:"The Running Back grabs the face protection of an oposing player while carrying the football. The foul occured in the field of play.",
    bothFouls: "Face Mask",
    offenseFoul: "N/A",
    defenseFoul: "N/A",
    unit: "Offense",
    penalty: "15 yards",
    result: "Repeat Current Down",
    }, 
    {
    question:"The Cornerback hooks and holds a Wide Receiver's arm after the Quarterback releases the ball. The foul occured in the field of play.",
    bothFouls: "Pass Interference",
    offenseFoul: "N/A",
    defenseFoul: "N/A",
    unit: "Defense",
    penalty: "Ball is placed at the spot of the foul",
    result: "Automatic first down",
    },
    {
    question:"The Cornerback hooks and holds a Wide Receiver's arm after the Quarterback releases the ball. The foul occured in the end zone.",
    bothFouls: "Pass Interference",
    offenseFoul: "N/A",
    defenseFoul: "N/A",
    unit: "Defense",
    penalty: "Ball is placed at the 1 yard line",
    result: "Automatic first down",
    },
];

// Shuffle Original Array of Scenarios
scenarios = scenarios.sort((a, b) => 0.5 - Math.random())

//shuffle curDown array (current down)
curDown = curDown.sort((a, b) => 0.5 - Math.random())
//console.log for debugging
console.log(curDown)

//forEach loop! BOTH FOULS
for(let i = 0; i < bothFouls.length; i++) {
    //iterate through the array
    let both = bothFouls[i];
    //assign current element in the loop to a letiable called 'both'
    let elBoth = document.createElement("option");
    //create an <option> element called 'elBoth'
    elBoth.textContent = both;
    //set the text content of the 'elBoth' element to the current element in the loop
    elBoth.value = both;
    //set the value attritube of 'elBoth' to the current element in the loop
    select.appendChild(elBoth);
}

//forEach loop! OFFENSIVE FOULS
for(let i = 0; i < offFouls.length; i++) {
    //iterate through the array
    let off = offFouls[i];
    //assign current element in the loop to a letiable called 'off'
    // console.log(off);
    //console log for debugging
    let elOff = document.createElement("option");
    //create an <option> element called 'elOff'
    elOff.textContent = off;
    //set the text content of the 'elBoth' element to the current element in the loop
    elOff.value = off;
    //set the value attritube of 'elBoth' to the current element in the loop
    select1.appendChild(elOff);
    //append the current value in the loop 
}

//forEach loop! DEFENSIVE FOULS
for(let i = 0; i < defFouls.length; i++) {
    //iterate through the array
    let def = defFouls[i];
    //assign current element in the loop to a letiable called 'def'
    // console.log(def);
    //console log for debugging
    let elDef = document.createElement("option");
    //create an <option> element called 'elDef'
    elDef.textContent = def;
    //set the text content of the 'elDef' element to the current element in the loop
    elDef.value = def;
    //set the value attritube of 'elDef' to the current element in the loop
    select2.appendChild(elDef);
    //append the current value in the loop 
}

//forEach loop! UNITS
for(let i = 0; i < unit.length; i++) {
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
    select3.appendChild(elUnit);
    //append the current value in the loop 
}

//forEach loop! YARDAGE PENALTY
for(let i = 0; i < penYards.length; i++) {
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
    select4.appendChild(elPen);
    //append the current value in the loop 
}

//forEach loop! RESULT OF THE PLAY
for(let i = 0; i < playResult.length; i++) {
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
    select5.appendChild(elRes);
    //append the current value in the loop 
}

//assign question button field
let questBtn = document.getElementById("questBtn");
//assign output field
let outField = document.querySelector("#output");

let curField = document.querySelector("#curOutput");

//add "click" eventListener to question button
questBtn.addEventListener('click', () => {
for (let i = 0; i < array.length; i++) {
    const element = array[index];
        questionIndex++
        updateUI()
}
})

//uptdate the h1 tags to show curDown and scenarios array
function updateUI(){
    curField.innerText = curDown[questionIndex]
    outField.innerText = scenarios[questionIndex].question; // UPDATE: When you change scenarios from string to object => scenarios[questionIndex].question    
}

updateUI()