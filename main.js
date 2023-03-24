
// drop down options for off/def fouls 
var select = document.getElementById("offDefFouls");
// Fouls that BOTH offense and defense are eligible to commit 
var bothFouls = [
    "Offside", "Pass Interference", "Holding", "Illegal Block", "Facemask", "Horse Collar", "Unnecessary Roughness", "Unsportsmanlike Conduct", "N/A"
];
//fouls that only offense is eligible to commit
var offFouls = [
    "False Start", "Delay of Game", "Ineligible Player Downfield", "Intentional Grounding", "N/A"
];
//fouls only defense is eligible to commit
var defFouls = [
    "Encroachment", "Neutral Zone Infraction", "Roughing the passer", "N/A"
];
//possible units on the field being charged with a foul
var unit = [
    "Offense", "Defense", "Kicking Team", "Recieving/Blocking Team"
];
//possible penalties
var penYards = [
    "5 yards", "10 yards", "15 yards", "Ball is placed at spot of the foul", "Safety", "Ball is placed half the distance to the goalline"
];
//result of the play 
var playResult = [
    "Automatic First Down", "First Down", "Second Down", "Third Down", "Fourth Down", "Repeat First Down", "Repeat Second Down", "Repeat Third Down", "Repeat Fourth Down"
];

var scenarios = [
    "Middle Linebacker crosses the nuetral line, causing the left guard to react before the Quarterback snapped the ball", "Right tackle grabs an edge rusher appraoching the Quarterback", "Quarterback fails to initiate the play (snap the ball) before the play clock expired", "The Quarterback, in an attempt to avoid losing yards from a sack, throws a forward pass without a realistic chance of a receiver completing the pass", "the cornerback intercepts the ball", "The last tackle grabs and holds an approaching outside linebacker", "Edge rusher runs into Quarterback after the ball was thrown", "Outside Linebacker performs a clean sack on the quarterback, but lands with their full bodyweight on the passer", "A Wide Receiver taunts the oposing team's bench players after scoring a touchdown" 
];

var playingArea = [
    "in the Field of Play", "in their own endzone", "in the oponent's endzone"
]

//forEach loop! both fouls
for(var i = 0; i < bothFouls.length; i++) {
    //iterate through the array
    var both = bothFouls[i];
    //assign current element in the loop to a variable called 'both'
    var elBoth = document.createElement("option");
    //create an element called 'elBoth'
    elBoth.textContent = both;
    //set the text content of the 'elBoth' element to the current element in the loop
    elBoth.value = both;
    //set the value attritube of 'elBoth' to the current element in the loop
    select.appendChild(elBoth);
    //append the current value in the loop 
    console.log('both');
}



// //forEach loop! offensive fouls
// for(var i = 0; i < offFouls.length; i++) {
//     //iterate through the array
//     var both = offFouls[i];
//     //assign current element in the loop to a variable called 'both'
//     var elBoth = document.createElement("option");
//     //create an element called 'elBoth'
//     elBoth.textContent = both;
//     //set the text content of the 'elBoth' element to the current element in the loop
//     elBoth.value = both;
//     //set the value attritube of 'elBoth' to the current element in the loop
//     select.appendChild(elBoth);
//     //append the current value in the loop 
//     console.log('both');
// }

