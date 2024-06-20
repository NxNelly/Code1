"use strict";
console.log("Pidgeon Story Start");
let choice1 = false;
let choice2 = false;
let answer1 = 0;
let q2;
let q3;
let q4;
let q5;
let q1 = prompt("It's a sunny Wednesday morning in the big city. You (a Pigeon) are sitting in your nest an are thinking about what you wanna do today. Should you go to the green PARK or will you go to the noise TRAIN STATION? I think I want to go to the...");
//First question Park of Trainstation?
console.log(q1);
function ParkOrTrain() {
    let input;
    if (q1 == "park" || q1 == "Park") {
        input = prompt("You get up and fly to the park. After flying around a bit you have two thing you are interested in doing there. On a nearby bench sits an old lady, maybe she got something to feed you with. On the other hand there is a bird bath beside the way, you really should get a bath soon because you are a little bit stinky and feel gross. Will you go get FOOD first or take a BATH? I will take the...");
        // Park
    }
    else {
        input = prompt("You get up and fly to the train station. Arriving there you land on a platform. On your left sits a man in a suite eating a sandwich and on your right is standing a train with open doors. Will you go to the man and hope that he will give you a piece of the sandwich or will you get onto the train and see where it will take you? I want to...  RIDE the train EAT sandwich "); // Trainstation
    }
}
function ParkOne() {
    switch (q2) {
        case 'food':
            q3 = prompt("You want to get food first so you fly to the old lady. Carefully you get near her. She looks at you, gripping her purse that she has in her hand, tight. She decides to give you FOOD or SHOO you away");
            break;
        case 'bath':
            q3 = prompt("You definitely need a bath first, you little stinky!! You fly down to the bird bath and refresh yourself. It feels good to be clean again. Now that you're done you think about what to do next. Should I STAY here a bit longer or FLY somewhere?I want to...");
            break;
        default:
            q3 = alert("something went wrong");
    }
}
