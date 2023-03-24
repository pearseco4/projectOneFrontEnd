
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
    "Middle Linebacker crosses the nuetral line, causing the Left Guard to react before the Quarterback snapped the ball. The foul occured in the field of play", "Right Tackle grabs an Edge Rusher approaching the Quarterback. The foul occured ", "Quarterback fails to initiate the play before the play clock expired. The foul occured ", "The Quarterback, in an attempt to avoid losing yards from a sack, throws a forward pass without a realistic chance of a receiver completing the pass. The play occured ", "The Left tackle grabs and holds an approaching outside linebacker. The foul occured ", "Edge rusher runs into Quarterback after the ball was thrown. The foul occured ", "Outside Linebacker performs a clean sack on the quarterback, but lands with their full bodyweight on the passer. The foul occured ", "A Wide Receiver taunts the oposing team's bench players after scoring a touchdown. The foul occured ", "the right gaurd flinches at the approaching outside linebacker before the quarterback snaps the ball. The foul occured ", "The Nosegaurd crosses the nuetral zone and makes contact with the Center before the ball is snapped. The foul occured ", "The Running Back grabs the face protection of an oposing player while carrying the football. The foul occured ", "The Cornerback hooks and holds a Wide Receiver's arm after the Quarterback releases the ball. The foul occured "
];
let scenarios = [
    {
        question: "Middle Linebacker crosses the nuetral line, causing the Left Guard to react before the Quarterback snapped the ball. The foul occured in the field of play",

        bothFoul: "N/A",
        offenseFoul: "N/A",
        defenseFoul: "Neutral Zone Infraction",
        unit: "Defense",
        penalty: "",
        result: ,
    }

    {"Right Tackle grabs an Edge Rusher approaching the Quarterback. The foul occured "} 
    
    {"Quarterback fails to initiate the play before the play clock expired. The foul occured "}

    {"The Quarterback, in an attempt to avoid losing yards from a sack, throws a forward pass without a realistic chance of a receiver completing the pass. The play occured "} 
    
    {"The Left tackle grabs and holds an approaching outside linebacker. The foul occured "} 
    
    {"Edge rusher runs into Quarterback after the ball was thrown. The foul occured "} 
    
    {"Outside Linebacker performs a clean sack on the quarterback, but lands with their full bodyweight on the passer. The foul occured "},

    {"A Wide Receiver taunts the oposing team's bench players after scoring a touchdown. The foul occured "}, 
    
    {"the right gaurd flinches at the approaching outside linebacker before the quarterback snaps the ball. The foul occured "}, 
    
    {"The Nosegaurd crosses the nuetral zone and makes contact with the Center before the ball is snapped. The foul occured "}, 
    
    {"The Running Back grabs the face protection of an oposing player while carrying the football. The foul occured "}, 
    
    {"The Cornerback hooks and holds a Wide Receiver's arm after the Quarterback releases the ball. The foul occured "}
];

// Shuffle Original Array of Scenarios
scenarios = scenarios.sort((a, b) => 0.5 - Math.random())

//Array: spot of the foul
let playingArea = [
    "It's 1st down", "It's 2nd down", "It's 3rd down", "It's 4th down"
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

//Randomize the 'scenarios' array and return an element.
// let random1 = scenarios[(Math.floor(Math.random() * (scenarios.length)))];
// console.log(random1);
//Randomize the 'playingArea' array and return an element
// let random2 = playingArea[(Math.floor(Math.random() * (playingArea.length)))];
// console.log(random2);


//assign question button field
let questBtn = document.getElementById("questBtn");
//assign output field
let outField = document.querySelector("h1")

questBtn.addEventListener('click', () => {
    questionIndex++
    updateUI()
})

function updateUI(){
    outField.innerText = scenarios[questionIndex]; // UPDATE: When you change scenarios from string to object => scenarios[questionIndex].question
}

updateUI()