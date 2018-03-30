'use strict'

//Initialize all the variables
var parentWeeklyIncome = 200;
var goodAllowance = 5;
var rottenAllowance = 5;
var entertainment = 10;

var goodSaving, rottenSaving;

var parentBalance = 0;

var goodBalance = 0;
var rottenBalance = 0;

var rottenSnatch = 0;

var bills = 180; // I add all the expense together since there's no more mulitple pay buttons

// Initialize boolean triggers
var buySnackG = false;
var buyToyG = false;
var buyComicG = false;
var buyPuzzlegameG = false;

var buySnackR = false;
var buyToyR = false;
var buyComicR = false;
var buyBikeR = false;
var rottenSnatchCheck = false;
var rottenSnatch = 0;

// set up two triggers for the poping up questions to make sure the questions only show once
var question1check = false;
var question2check = false;

// Load the audios
var payAudio = new Audio('audio/cash_register.mp3');
var commonAudio = new Audio('audio/coin_insert.mp3');
var snatchAudio = new Audio('audio/rottenkid.wav');

// minus amount of the good kid's allowance
function goodAllowanceMinus() {
    goodAllowance -= 1;
    document.getElementById("goodAllowance").innerHTML = "$" + goodAllowance;
    updateParentBalance();
    checkNegative(goodAllowance, "goodAllowance");
}

// plus amount of the good kid's allowance
function goodAllowancePlus() {
    goodAllowance += 1;
    document.getElementById("goodAllowance").innerHTML = "$" + goodAllowance;
    updateParentBalance();
    checkNegative(goodAllowance, "goodAllowance");
}

// plus amount of the rotten kid's allowance
function rottenAllowancePlus() {
    rottenAllowance += 1;
    document.getElementById("rottenAllowance").innerHTML = "$" + rottenAllowance;
    updateParentBalance();
    checkNegative(rottenAllowance, "rottenAllowance");
}

// minus amount of the rotten kid's allowance
function rottenAllowanceMinus() {
    rottenAllowance -= 1;
    document.getElementById("rottenAllowance").innerHTML = "$" + rottenAllowance;
    updateParentBalance();
    checkNegative(rottenAllowance, "rottenAllowance");
}

// plus amount of the entertainment expense
function entertainmentPlus() {
    entertainment += 1;
    document.getElementById("entertainment").innerHTML = "$" + entertainment;
    updateParentBalance();
    checkNegative(entertainment, "entertainment");
}

// minus amount of the entertainment expense
function entertainmentMinus() {
    entertainment -= 1;
    document.getElementById("entertainment").innerHTML = "$" + entertainment;
    updateParentBalance();
    checkNegative(entertainment, "entertainment");
}

// update the value of parent's balance each time after user adjust any value of variable(allowance for good, allowance for rotten, entertainment)
function updateParentBalance() {
    parentBalance = parentWeeklyIncome - bills - goodAllowance - rottenAllowance - entertainment;
    document.getElementById("parentBalance").innerHTML = "$" + parentBalance;
    checkNegative(parentBalance, "parentBalance");
}

// check whether the value is negative, if yes, change color into red
function checkNegative(value, target) {
    if (value < 0) {
        document.getElementById(target).style.color = "#af301a";
    } else {
        document.getElementById(target).style.color = "#3c1fa5";
    }
}

// pay for this week
function payThisweek() {

    // only could pay when the balance is positive
    if (parentBalance >= 0) {

        document.getElementById("parentBalance").innerHTML = "$" + parentBalance;

        // show the text notification
        document.getElementById("parentCloud").style.color = "#3c1fa5";
        document.getElementById("parentCloud").innerHTML = "You've paid for this week,<br>let's check what happened among kids."
        document.getElementById("payThisweek").disabled = true;

        // change the icon
        document.getElementById("parentImage").src = "images/parentB.png"

        document.getElementById("goodAllowanceMinus").disabled = true;
        document.getElementById("goodAllowancePlus").disabled = true;

        document.getElementById("rottenAllowanceMinus").disabled = true;
        document.getElementById("rottenAllowancePlus").disabled = true;

        document.getElementById("entertainmentPlus").disabled = true;
        document.getElementById("entertainmentMinus").disabled = true;

        document.getElementById("resetButton").disabled = false;
        // activate kids' behavior
        rottenKid();
        goodKid();
        // play the sound
        if (!rottenSnatchCheck) {
            payAudio.play();
        } else {
            snatchAudio.play();
        }

    } else {

        document.getElementById("parentCloud").style.color = "#af301a";
        document.getElementById("parentCloud").innerHTML = "Oops! You can't pay <br> when your balance is negative!"

    }

    // show two questions
    if (rottenSnatchCheck && !question1check) {
        var question1 = document.createElement("p");
        question1.innerHTML = "<a href='#answer' onclick='highlight()'>Why does the rotten kid snatch money from his sibling?</a>";
        document.getElementById("question1").appendChild(question1);

        question1check = true;

    } else if (!rottenSnatchCheck && !question2check) {
        var question2 = document.createElement("p");
        question2.innerHTML = "<a href='#answer' onclick='highlight()'>Why doesn't the rotten kid snatch money from his sibling?</a>";
        document.getElementById("question2").appendChild(question2);

        question2check = true;
    }
}

// highlight the answer part when use click on questions (change color and put animation)
function highlight() {
    document.getElementById("answer").style.color = '#1d9612';
    document.getElementById("answer").style.fontWeight = "bold";
    document.getElementById("answer").style.border = "dotted green 1px";
    document.getElementById("answer").style.animation = "blinker 1s linear 3";
}

// control good kid's behavior
function goodKid() {

    // for the first week's probability calculation 
    if (goodAllowance > 2) {
        if (goodAllowance > 3) {
            if (goodAllowance > 5) {

                if (goodAllowance > 10) {
                    if (Math.random() > 0.3) {
                        buyPuzzlegameG = true;
                        goodAllowance -= 10;
                    }
                } else {
                    if (Math.random() > 0.5) {
                        buyComicG = true;
                        goodAllowance -= 5;
                    }
                }
            } else {
                if (Math.random() > 0.4) {
                    buyToyG = true;
                    goodAllowance -= 3;
                }
            }
        } else {
            if (Math.random() > 0.2) {
                buySnackG = true;
                goodAllowance -= 2;
            }
        }
    }
    // for the following turn's calculation
    if (goodBalance > 2) {
        if (goodBalance > 3) {
            if (goodBalance > 5) {

                if (goodBalance > 10) {
                    if (Math.random() > 0.3) {
                        buyPuzzlegameG = true;
                        goodBalance -= 10;
                    }
                } else {
                    if (Math.random() > 0.5) {
                        buyComicG = true;
                        goodBalance -= 5;
                    }
                }
            } else {
                if (Math.random() > 0.4) {
                    buyToyG = true;
                    goodBalance -= 3;
                }
            }
        } else {
            if (Math.random() > 0.2) {
                buySnackG = true;
                goodBalance -= 2;
            }
        }
    }
    // passing data
    goodSaving = goodAllowance;
    goodBalance = goodBalance + goodSaving;

    document.getElementById("goodSaving").innerHTML = "$" + goodSaving;
    document.getElementById("goodBalance").innerHTML = "$" + goodBalance;
}

// control rotten kid's behavior
function rottenKid() {
    // set up a local variable to store the value of how much money being snatched
    var snatch;
    // for the first week's calculation
    if (goodAllowance > 3) {
        if (goodAllowance > 5) {
            if (goodAllowance > 7) {
                if (goodAllowance > 10) {
                    if (Math.random() > 0.2) {
                        snatch = Math.round((goodAllowance * Math.random()));
                        goodAllowance -= snatch;
                        rottenAllowance += snatch;
                        rottenSnatchCheck = true;
                    }
                } else {
                    if (Math.random() > 0.4) {
                        snatch = Math.round((goodAllowance * Math.random()));
                        goodAllowance -= snatch;
                        rottenAllowance += snatch;
                        rottenSnatchCheck = true;
                    }
                }
            } else {
                if (Math.random() > 0.6) {
                    snatch = Math.round((goodAllowance * Math.random()));
                    goodAllowance -= snatch;
                    rottenAllowance += snatch;
                    rottenSnatchCheck = true;
                }
            }
        } else {
            if (Math.random() > 0.4) {
                snatch = Math.round((goodAllowance * Math.random()));
                goodAllowance -= snatch;
                rottenAllowance += snatch;
                rottenSnatchCheck = true;
            }
        }
    }
    // if the rotten kid gets punished! higher the probability of snatch
    if (rottenAllowance <= 0 && goodAllowance > 0) {
        if (Math.random() > 0.2) {
            snatch = Math.round((goodAllowance * Math.random()));
            goodAllowance -= snatch;
            rottenAllowance += snatch;
            rottenSnatchCheck = true;
        }

    }
    // control rotten kid's purchasing behavior
    if (rottenAllowance > 2) {
        if (rottenAllowance > 3) {
            if (rottenAllowance > 5) {

                if (rottenAllowance > 10) {
                    if (Math.random() > 0.3) {
                        buyBikeR = true;
                        rottenAllowance -= 10;
                    }
                } else {
                    if (Math.random() > 0.5) {
                        buyComicR = true;
                        rottenAllowance -= 5;
                    }
                }
            } else {
                if (Math.random() > 0.4) {
                    buyToyR = true;
                    rottenAllowance -= 3;
                }
            }
        } else {
            if (Math.random() > 0.2) {
                buySnackR = true;
                rottenAllowance -= 2;
            }
        }
    }
    // for the following week's calculation
    if (goodBalance > 10) {
        if (Math.random() > 0.2) {
            snatch = Math.round((goodBalance * Math.random()));
            goodBalance -= snatch;
            rottenAllowance += snatch;
            rottenSnatchCheck = true;
        }
    }
    // passing data
    rottenSaving = rottenAllowance;
    rottenSnatch = snatch;
    rottenBalance = rottenBalance + rottenAllowance;

    document.getElementById("rottenSaving").innerHTML = "$" + rottenSaving;
    document.getElementById("rottenBalance").innerHTML = "$" + rottenBalance;

    document.getElementById("rottenSnatch").style.color = "#af301a";
    document.getElementById("rottenSnatch").innerHTML = "$" + rottenSnatch;

    // replace icons to remind user what happened in this turn
    if (rottenSnatchCheck) {
        document.getElementById("rottenImage").src = "images/rottenB.png";
        document.getElementById("goodImage").src = "images/goodB.png";
    } else {
        document.getElementById("rottenSnatch").innerHTML = "$" + 0;
    }

    // draw icons to remind user what happened in this turn.
    if (buySnackG) {
        var SnackG = document.createElement("img");
        SnackG.src = "images/icon/snack.png";
        document.getElementById("goodCloud").appendChild(SnackG);
    }
    if (buyToyG) {
        var ToyG = document.createElement("img");
        ToyG.src = "images/icon/toy.png";
        document.getElementById("goodCloud").appendChild(ToyG);
    }
    if (buyComicG) {
        var ComicG = document.createElement("img");
        ComicG.src = "images/icon/comic.png";
        document.getElementById("goodCloud").appendChild(ComicG);
    }
    if (buyPuzzlegameG) {
        var PuzzleG = document.createElement("img");
        PuzzleG.src = "images/icon/puzzle.png";
        document.getElementById("goodCloud").appendChild(PuzzleG);
    }

    if (buySnackR) {
        var SnackR = document.createElement("img");
        SnackR.src = "images/icon/snack.png";
        document.getElementById("rottenCloud").appendChild(SnackR);
    }
    if (buyToyR) {
        var ToyR = document.createElement("img");
        ToyR.src = "images/icon/toy.png";
        document.getElementById("rottenCloud").appendChild(ToyR);
    }
    if (buyComicR) {
        var ComicR = document.createElement("img");
        ComicR.src = "images/icon/comic.png";
        document.getElementById("rottenCloud").appendChild(ComicR);
    }
    if (buyPuzzlegameG) {
        var BikeR = document.createElement("img");
        BikeR.src = "images/icon/bike.png";
        document.getElementById("rottenCloud").appendChild(BikeR);
    }

}

// 'go to next week' button, 
function reset() {
    
    // reset triggers, buttons and inherit left money from the last turn
    document.getElementById("payThisweek").disabled = false;

    document.getElementById("parentImage").src = "images/parentA.png";

    document.getElementById("goodAllowanceMinus").disabled = false;
    document.getElementById("goodAllowancePlus").disabled = false;

    document.getElementById("rottenAllowanceMinus").disabled = false;
    document.getElementById("rottenAllowancePlus").disabled = false;

    document.getElementById("entertainmentPlus").disabled = false;
    document.getElementById("entertainmentMinus").disabled = false;
    document.getElementById("resetButton").disabled = true;

    document.getElementById("rottenImage").src = "images/rottenA.png";
    document.getElementById("goodImage").src = "images/goodA.png";

    // passing data from last turn
    parentWeeklyIncome += parentBalance;

    rottenSnatch = 0;
    rottenSnatchCheck = false;

    document.getElementById("parentWeekly").innerHTML = "$" + parentWeeklyIncome;

    document.getElementById("goodCloud").innerHTML = '';
    document.getElementById("rottenCloud").innerHTML = '';
}
