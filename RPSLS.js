//This is a small little rock paper scissors lizard Spock game!
//requires installation at CLI of "$ [sudo] npm install prompt"

console.log("Welcome to my game of \nRock, Paper, Scissors, Lizard, Spock");
console.log("To begin, please enter your weapon of choice:");
console.log("You can enter the item or it's corresponding number:");
console.log("1-Rock; 2-Paper; 3-Scissors; 4-Lizard; 5-Spock;");
//commenting this out to try and use the prompt function (see below)
/*var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Choose your weapon wisely:\n", function(answer) {
    rl.pause();
    return answer;
}); */

//random weapon for computer
var computerChoice = Math.random();
if (computerChoice < 0.2) {
  computerChoice = 1; //Rock
} 
else if(computerChoice < 0.4) {
  computerChoice = 2; //Paper
} 
else if(computerChoice < 0.6) {
  computerChoice = 3; //Scissors
}
else if (computerChoice < 0.8) {
  computerChoice = 4; //Lizard
}
else {
  computerChoice = 5; //Spock
}

//the following prompt function is from https://github.com/flatiron/prompt
//requires installation at CLI of "$ [sudo] npm install prompt"
var prompt = require("prompt");
prompt.message = "Choose your weapon";
prompt.start ();
prompt.get('weapon', function(err, result) {
    var weapon = result.weapon * 1;
    compare(weapon, computerChoice);
});


var compare = function (choice1, choice2) {

if (choice2 === 1) {
    console.log("The computer chose: Rock");
}
else if (choice2 === 2) {
    console.log("The computer chose: Paper");
}
else if (choice2 === 3) {
    console.log("The computer chose: Scissors");
}
else if (choice2 === 4) {
    console.log("The computer chose: Lizard");
}
else {
    console.log("The computer chose: Spock");
}

//It's a tie
if (choice1 === choice2) {
      console.log("It's a tie! ... You've thwarted me this time young padawan!");
}
//Rock
else if (choice1 === "rock" || choice1 === 1) {
    if (choice2 === 2) {
        console.log("Paper covers rock! You lose!");
    }
    else if (choice2 === 3) {
        console.log("Rock crushes scissors!");
    }
    else if (choice2 === 4) {
        console.log("Rock crushes lizard! You just crushed a lizard, mad man!");
    }
    else { //choice2 === 5
        console.log("Spock vaporizes rock! You lose!");
    }
}
//Paper
else if (choice1 === "paper" || choice1 === 2) {
    if (choice2 === 1) {
        console.log("Paper covers rock. Weak choice, but rules are rules, you win!");
    }
    else if (choice2 === 3) {
        console.log("Scissors cut paper! You lose!");
    }
    else if (choice2 === 4) {
        console.log("Lizard eats paper! Hope it digests well! You lose!");
    }
    else { //choice2 === 5
        console.log("Paper disproves Spock! Shocking, but it still happened, you win!");
    }
}
//Scissors
else if (choice1 === "scissors" || choice1 === 3) {
    if (choice2 === 1) {
        console.log("Rock crushes scissors! You lose!");
    }
    else if (choice2 === 2){
        console.log("Scissors cut paper! You win!");
    }
    else if (choice2 === 4) {
        console.log("Scissors decapitates lizard! Poor lizard...You win!");
    }
    else { //choice2 === 5
        console.log("Spock smashes scissors! Spock smash! You lose!");
    }
}
//Lizard
else if (choice1 === "lizard" || choice1 === 4) {
    if (choice2 === 1) {
        console.log("Rock crushes lizard! Poor lizard! You lose!");
    }
    else if (choice2 === 2) {
        console.log("Lizard eats paper! Terrible diet. You win!");
    }
    else if (choice2 === 3) {
        console.log("Scissors decapitates lizard! So sad. You lose!");
    }
    else { //choice2 === 5
        console.log("Lizard poisons Spock! Why would you do that!? You win.");
    }
}
//Spock
else if (choice1 === "spock" || choice1 === 5) {
    if (choice2 === 1) {
        console.log("Spock vaporizes rock! Spock is awesome! You win!");
  }
    else if (choice2 === 2) {
        console.log("Paper disproves Spock! Spock was wrong? You lose!");
  }
    else if (choice2 === 3) {
        console.log("Spock smashes scissors! Spock smash! You win!");
  }
    else if (choice2 === 4) {
        console.log("Lizard poisons Spock. Spock's only weakness apparently. You lose.");
    }
}
else { //Something didn't work
    console.log("Something isn't right, sir.");
}}

/*
//debuggging::randomizes user input function "weapon" to test compare function
weapon = Math.floor((Math.random()*5)+1) //integer between 1 and 5
console.log(weapon) //gives "user choice"
console.log(computerChoice) //gives "opponents (computer's)" choice
compare(weapon, computerChoice) //invokes compare function
//debugging
*/