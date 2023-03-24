
// referencing drop down options
const select = document.getElementById("offDefFouls");
const select1 = document.getElementById("offFouls");
const select2 = document.getElementById("defFouls");
const select3 = document.getElementById("unitCharged");
const select4 = document.getElementById("penYards");
const select5 = document.getElementById("playResult");
// //assign problem field
// let problemField = document.getElementById("problemField");



//Array: fouls that BOTH offense and defense are eligible to commit 
let bothFouls = [
    "Offside", "Pass Interference", "Holding", "Illegal Block", "Facemask", "Horse Collar", "Unnecessary Roughness", "Unsportsmanlike Conduct", "N/A"
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
    "5 yards", "10 yards", "15 yards", "Ball is placed at spot of the foul", "Safety", "Ball is placed half the distance to the goalline"
];
//Array: result of the play 
let playResult = [
    "Automatic First Down", "First Down", "Second Down", "Third Down", "Fourth Down", "Repeat First Down", "Repeat Second Down", "Repeat Third Down", "Repeat Fourth Down"
];
//Array: scenario prompts 
let scenarios = [
    "Middle Linebacker crosses the nuetral line, causing the Left Guard to react before the Quarterback snapped the ball", "Right Tackle grabs an Edge Rusher approaching the Quarterback", "Quarterback fails to initiate the play (snap the ball) before the play clock expired", "The Quarterback, in an attempt to avoid losing yards from a sack, throws a forward pass without a realistic chance of a receiver completing the pass", "The Left tackle grabs and holds an approaching outside linebacker", "Edge rusher runs into Quarterback after the ball was thrown", "Outside Linebacker performs a clean sack on the quarterback, but lands with their full bodyweight on the passer", "A Wide Receiver taunts the oposing team's bench players after scoring a touchdown", "the right gaurd flinches at the outside linebacker before the quarterback snaps the ball", "The Nosegaurd crosses the nuetral zone and makes contact with the Center before the ball is snapped", "The Running Back grabs the face protection of an oposing player while carrying the football", "The Cornerback hooks and holds a Wide Receiver's arm after the Quarterback releases the ball"
];

//Array: spot of the foul
let playingArea = [
    "in the Field of Play", "in their own endzone", "in the oponent's endzone"
]

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
    //assign current element in the loop to a letiable called 'result'
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

// forEach loop! Populating the output field 
// for (let i = 0; i < scenarios.length; i++) {
//     //iterate through the array
//     let newQuestion = document.createElement("p");
//     //create a (<p>) paragraph element called newQuestion
//     newQuestion.textContent = scenarios[i];
//     //set the text content of newQuestion the current element in the scenarios array
//     problemField.appendChild(newQuestion);
//     //append the current value in the loop
//     shuffle();

//   }

// let index = 0 //increment index later 

// function shuffle() {
//     scenarios = scenarios.sort((a, b) => 0.5 - Math.random());
// }
// shuffle()

