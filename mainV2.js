'use strict'

var parentWeeklyIncome = 200;
var goodAllowance = 5;
var rottenAllowance = 5;
var entertainment = 10;

var goodSaving, rottenSaving;

var parentBalance = 0;

var goodBalance = 0;
var rottenBalance = 0;

var rottenSnatch = 0;

var bills = 180;

var buySnackG = false;
var buyToyG = false;
var buyComicG = false;
var buyPuzzlegameG = false;

var question1check = false;
var question2check = false;

var payAudio = new Audio ('audio/cash_register.mp3');
var commonAudio = new Audio ('audio/coin_insert.mp3');
var snatchAudio = new Audio ('audio/rottenkid.wav');


var buySnackR = false;
var buyToyR = false;
var buyComicR = false;
var buyBikeR = false;
var rottenSnatchCheck = false;
var rottenSnatch = 0;



function goodAllowanceMinus() {
    goodAllowance -= 1;
    document.getElementById("goodAllowance").innerHTML = "$" + goodAllowance;
    updateParentBalance();
    checkNegative(goodAllowance, "goodAllowance");
}

function goodAllowancePlus() {
    goodAllowance += 1;
    document.getElementById("goodAllowance").innerHTML = "$" + goodAllowance;
    updateParentBalance();
    checkNegative(goodAllowance, "goodAllowance");
}

function rottenAllowancePlus() {
    rottenAllowance += 1;
    document.getElementById("rottenAllowance").innerHTML = "$" + rottenAllowance;
    updateParentBalance();
    checkNegative(rottenAllowance, "rottenAllowance");
}

function rottenAllowanceMinus() {
    rottenAllowance -= 1;
    document.getElementById("rottenAllowance").innerHTML = "$" + rottenAllowance;
    updateParentBalance();
    checkNegative(rottenAllowance, "rottenAllowance");
}

function entertainmentPlus() {
    entertainment += 1;
    document.getElementById("entertainment").innerHTML = "$" + entertainment;
    updateParentBalance();
    checkNegative(entertainment, "entertainment");
}

function entertainmentMinus() {
    entertainment -= 1;
    document.getElementById("entertainment").innerHTML = "$" + entertainment;
    updateParentBalance();
    checkNegative(entertainment, "entertainment");
}


function updateParentBalance() {
    parentBalance = parentWeeklyIncome - bills - goodAllowance - rottenAllowance - entertainment;
    document.getElementById("parentBalance").innerHTML = "$" + parentBalance;
    checkNegative(parentBalance, "parentBalance");
}

function checkNegative(value, target) {
    if (value < 0) {
        document.getElementById(target).style.color = "#af301a";
    } else {
        document.getElementById(target).style.color = "#3c1fa5";
    }
}

function payThisweek() {

    if (parentBalance >= 0) {

        document.getElementById("parentBalance").innerHTML = "$" + parentBalance;

        document.getElementById("parentCloud").style.color = "#3c1fa5";
        document.getElementById("parentCloud").innerHTML = "You've paid for this week,<br>let's check what happened among kids."
        document.getElementById("payThisweek").disabled = true;

        document.getElementById("parentImage").src = "images/parentB.png"

        document.getElementById("goodAllowanceMinus").disabled = true;
        document.getElementById("goodAllowancePlus").disabled = true;

        document.getElementById("rottenAllowanceMinus").disabled = true;
        document.getElementById("rottenAllowancePlus").disabled = true;

        document.getElementById("entertainmentPlus").disabled = true;
        document.getElementById("entertainmentMinus").disabled = true;
        document.getElementById("resetButton").disabled = false;


        rottenKid();
        goodKid();
        
        if(!rottenSnatchCheck){
            payAudio.play();
        } else {
            snatchAudio.play();
        }
        

    } else {

        document.getElementById("parentCloud").style.color = "#af301a";
        document.getElementById("parentCloud").innerHTML = "Oops! You can't pay <br> when your balance is negative!"

    }

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

function highlight(){
    document.getElementById("answer").style.color='#1d9612';
    document.getElementById("answer").style.fontWeight = "bold";
    document.getElementById("answer").style.border = "dotted green 1px";
    document.getElementById("answer").style.animation = "blinker 1s linear 3";
    
}

function goodKid() {

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

    goodSaving = goodAllowance;
    goodBalance = goodBalance + goodSaving;

    document.getElementById("goodSaving").innerHTML = "$" + goodSaving;
    document.getElementById("goodBalance").innerHTML = "$" + goodBalance;



}

function rottenKid() {

    var snatch;

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

    if (rottenAllowance <= 0 && goodAllowance > 0) {
        if (Math.random() > 0.2) {
            snatch = Math.round((goodAllowance * Math.random()));
            goodAllowance -= snatch;
            rottenAllowance += snatch;
            rottenSnatchCheck = true;
        }

    }

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

    if (goodBalance > 10) {
        if (Math.random() > 0.2) {
            snatch = Math.round((goodBalance * Math.random()));
            goodBalance -= snatch;
            rottenAllowance += snatch;
            rottenSnatchCheck = true;
        }
    }

    rottenSaving = rottenAllowance;
    rottenSnatch = snatch;
    rottenBalance = rottenBalance + rottenAllowance;

    document.getElementById("rottenSaving").innerHTML = "$" + rottenSaving;
    document.getElementById("rottenBalance").innerHTML = "$" + rottenBalance;

    document.getElementById("rottenSnatch").style.color = "#af301a";
    document.getElementById("rottenSnatch").innerHTML = "$" + rottenSnatch;

    if (rottenSnatchCheck) {
        document.getElementById("rottenImage").src = "images/rottenB.png";
        document.getElementById("goodImage").src = "images/goodB.png";
    } else {
        document.getElementById("rottenSnatch").innerHTML = "$" + 0;
    }

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

function reset() {

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

    parentWeeklyIncome += parentBalance;

    rottenSnatch = 0;
    rottenSnatchCheck = false;

    document.getElementById("parentWeekly").innerHTML = "$" + parentWeeklyIncome;


    document.getElementById("goodCloud").innerHTML = '';
    document.getElementById("rottenCloud").innerHTML = '';



}
