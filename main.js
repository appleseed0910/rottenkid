"use strict"

/*
Reference

Sound effect "cash register" source link:
https://freesound.org/people/kiddpark/sounds/201159/
(under Creative Commons license)

https://freesound.org/people/LittleRobotSoundFactory/sounds/270303/
https://freesound.org/people/LittleRobotSoundFactory/sounds/270341/

*/

//Declare all the stablevariables
let housing = 46;
let food = 60;
let transportation = 48;
let healthcare = 10;
let clothing = 16;

/**
  Even though the variables I declare here are stable, I don't want to use const.
  They are consts under one certain circumstance - 1970s US family income and expenditure.
  The slots of these variables should be changeable to fit the other set of system.
**/


//Declare three objects
let p1;
let good1;
let rotten1;

let commonSound;
let goodSound;
let rottenSound;

//© Can Stock Photo / kanate
let cashImg;
let coinImg;
let cashImgArry;
let coinImgArry1;
let coinImgArry2;
let payNum = 7;
let coinGood = 0;
let coinRotten = 0;

var yImg=6;
let imgFlag=0;
let imgReachedEnd=0;

function preload() {

    soundFormats('mp3', 'wav');
    commonSound = loadSound('audio/cash_register.mp3');
    goodSound = loadSound('audio/goodkid.wav');
    rottenSound = loadSound('audio/rottenkid.wav');

    cashImg = loadImage('images/cash.png');
    coinImg = loadImage('images/coin.png');
}

function setup() {

    p1 = new Parents();
    good1 = new GoodKid();
    rotten1 = new RottenKid();


    var canvas = createCanvas(innerWidth, 300);
    canvas.parent('sketch-holder');

    cashImgArry = [];
    coinImgArry1 = [];
    coinImgArry2 = [];
    
//    // draw a tack of cash
//    for (var i = 0; i < payNum; i++) {
//        cashImgArry[i] = image(cashImg, width / 3 * 0.5 + 10 * i, 6 * i);
//    }
    //alert(cashImgArry[1])

}

function draw() {

    background(255);

    //alert(cashImgArry[6]);
    
    for (var i = 1; i <= payNum; i++) {
        
        if(i==payNum && imgFlag==1){
         image(cashImg, width / 3 * 0.5 + 10 * i, ((yImg++)*7) + 1);           
         //imgReachedEnd=0;
        }else if(yImg>=25){
            yImg=6;
            image(cashImg, width / 3 * 0.5 + 10 * payNum, 183); 
            imgFlag=0;
            imgReachedEnd=1;
        }else{
        image(cashImg, width / 3 * 0.5 + 10 * i, 6*i);    
            if(imgReachedEnd==1){
                image(cashImg, width / 3 * 0.5 + 10 * payNum, 183); 
                //imgReachedEnd=0;
            }
        }
        
        
    }
    


    // draw coins for good
    for (var i = 0; i < coinGood; i++) {
        if ( i<=5 ){
            coinImgArry1[i] = image(coinImg, width / 3 * 1.5 + 20 * i, 8 * i);
        } else {
            coinImgArry1[i] = image(coinImg, width / 3 * 1.5-250 + 20 * i, 8 * (i-5));
        }
    }

    // draw coins for rotten
    for (var i = 0; i < coinRotten; i++) {
        if ( i<=5 ){
            coinImgArry2[i] = image(coinImg, width / 3 * 2.5 + 20 * i, 8 * i);
        } else {
            coinImgArry2[i] = image(coinImg, width / 3 * 2.5-250 + 20 * i, 8 * (i-5));
        }
    }

}

function reset() {
    // inherit previous balance to the new turn
    // clear the text part
    p1.weeklyIncome = p1.balanceParents + 200;
    p1.other = p1.weeklyIncome - housing - food - transportation - healthcare - clothing;
    document.getElementById("weeklyIncome").innerHTML = "$" + p1.weeklyIncome;
    document.getElementById("parentsBalance").innerHTML = "";

    good1.allowance = p1.costOngood + good1.balance;
    document.getElementById("weeklyGoodA").innerHTML = "";
    document.getElementById("noteGood").innerHTML = "";
    document.getElementById("noteGood2").innerHTML = "";
    document.getElementById("goodBalance").innerHTML = "";

    rotten1.allowance = p1.costOnrotten + rotten1.balance;
    document.getElementById("weeklyRottenA").innerHTML = "";
    document.getElementById("noteRotten").innerHTML = "";
    document.getElementById("noteRotten2").innerHTML = "";
    document.getElementById("rottenBalance").innerHTML = "";

    // reset buttons    
    document.getElementById("payHousingbutton").disabled = false;
    document.getElementById("payFoodbutton").disabled = false;
    document.getElementById("payTransportationbutton").disabled = false;
    document.getElementById("payHealthcarebutton").disabled = false;
    document.getElementById("payClothingbutton").disabled = false;
    document.getElementById("payOtherbutton").disabled = false;
    document.getElementById("pcheckbutton").disabled = false;
    document.getElementById("goodcheckbutton").disabled = false;
    document.getElementById("rottencheckbutton").disabled = false;
    document.getElementById("next").disabled = true;

    payNum = 7;

}
