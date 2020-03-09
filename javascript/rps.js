var wins = 0;
var losses = 0;
var ties = 0;
var winsHTML = document.getElementById("wins");
var lossesHTML = document.getElementById("losses");
var tiesHTML = document.getElementById("ties");
var yoursHTML = document.getElementById("yourGuess");
var cpuHTML = document.getElementById("cpuGuess");
var computerChoices = ["r", "p", "s"];

document.onkeyup = (event) => {
    var ug = event.key;
    var cg = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    // only fires when user chooses r,p,s
    if (ug === "r" || ug === "p" || ug === "s") {
        
        // conditions for when user guesses r
        if (ug === "r") {
            if (cg === "r") {
                ties++;
            }
            if (cg === "p") {
                losses++;
            }
            if (cg === "s") {
                wins++;
            }
        }

        // conditions for when user guesses p
        if (ug === "p") {
            if (cg === "r") {
                wins++;
            }
            if (cg === "p") {
                ties++;
            }
            if (cg === "s") {
                losses++;
            }
        }

        // conditions for when user guesses s
        if (ug === "s") {
            if (cg === "r") {
                losses++;
            }
            if (cg === "p") {
                wins++;
            }
            if (cg === "s") {
                ties++;
            }
        }

        // inserting html after adding to wins losses and ties
        winsHTML.innerHTML = wins;
        lossesHTML.innerHTML = losses;
        tiesHTML.innerHTML = ties;
        cpuGuess.innerHTML = cg;
        yourGuess.innerHTML = ug;
    }

    if (wins === 10) {
        alert("You beat the computer!")
        wins = 0;
        losses = 0;
        ties = 0;
        location.reload();
    } else if (losses === 10) {
        alert("Better luck next time!");
        wins = 0;
        losses = 0;
        ties = 0;
        location.reload();
    } 
}