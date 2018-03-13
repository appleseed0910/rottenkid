class Kids {
    constructor(allowance, balance = 0, boughtSnack, boughtToy) {
        this.boughtSnack = false;
        this.boughtToy = false;
        this.allowance = allowance;
        this.balance = balance;
    }

    buySnack() {
        if (this.balance >= 2) {
            if (Math.random() < .5) {
                this.balance = this.balance - 2;
                this.boughtSnack = true;
            }
        }
    }

    buyToy() {
        if (this.balance >= 3) {
            if (Math.random() < .5) {
                this.balance = this.balance - 3;
                this.boughtToy = true;
            }
        }
    }
}

class GoodKid extends Kids {
    constructor(allowance, balance, boughtSnack, boughtToy, boughtComic) {
        super(allowance, balance, boughtSnack, boughtToy);
        boughtComic = false;
    }
    
    buyComic(){
        if (this.balance >= 5) {
            if (Math.random() < .5) {
                this.balance = this.balance - 5;
                this.boughtComic = true;
            }
        }
        
    }

    show() {

        this.allowance = p1.costOngood;

        document.getElementById("weeklyGoodA").innerHTML = "$" + this.allowance;

        this.balance = this.balance + this.allowance;

        this.buyToy();
        this.buySnack();
        this.buyComic();

        document.getElementById("goodBalance").innerHTML = "$" + this.balance;

        if (this.boughtSnack && this.boughtToy) {
            document.getElementById("noteGood").style.color = "blue";
            document.getElementById("noteGood").innerHTML = "Yeah! I bought an ice cream and a toy car!"
        } else if (this.boughtSnack && !this.boughtToy) {
            document.getElementById("noteGood").style.color = "blue";
            document.getElementById("noteGood").innerHTML = "Yeah! I bought  an ice cream!"
        } else if (this.boughtToy && !this.boughtSnack) {
            document.getElementById("noteGood").style.color = "blue";
            document.getElementById("noteGood").innerHTML = "Yeah! I bought a toy car!"
        }
        
        if(this.boughtComic){
            document.getElementById("noteGood2").style.color = "#8105aa";
            document.getElementById("noteGood2").innerHTML = "New hero is coming! Let's save the world!"
        }

    }

    check() {
        rotten1.show();
        document.getElementById("goodcheckbutton").setAttribute("disabled", true);
        if(rotten1.snatchCheck){
            rottenSound.play();
        } else {
            commonSound.play();
        }
        
        coinGood = Math.round(this.balance/3);
        coinRotten = Math.round(rotten1.balance/3);
    }
}

class RottenKid extends Kids {
    constructor(allowance, balance, boughtSnack, boughtToy, snatchCheck,boughtBike) {
        super(allowance, balance, boughtSnack, boughtToy);
        this.snatchCheck = false;
        this.boughtSnack = false;
    }
    
    buyBike(){
        if (this.balance >= 10) {
            if (Math.random() < .3) {
                this.balance = this.balance - 10;
                this.boughtBike = true;
            }
        }
        
    }

    snatch() {

        if (good1.balance > 2) {
            if (good1.balance > 4) {
                if (Math.random() > 0.3) {
                    this.balance += 3;
                    good1.balance -= 3;
                    this.snatchCheck = true;
                }
            } else {
                if (Math.random() > 0.6) {
                    this.balance += 2;
                    good1.balance -= 2;
                    this.snatchCheck = true;
                }
            }
        }

    }

    show() {

        this.allowance = p1.costOnrotten;

        document.getElementById("weeklyRottenA").innerHTML = "$" + this.allowance;

        this.balance = this.balance + this.allowance;


        this.snatch();
        this.buyToy();
        this.buySnack();
        this.buyBike();



        document.getElementById("rottenBalance").innerHTML = "$" + this.balance;


        if (this.snatchCheck) {
            document.getElementById("goodBalance").innerHTML = "$" + good1.balance;
            document.getElementById("noteGood").style.color = "red";
            document.getElementById("noteGood").innerHTML = "Oh no... I'm so sad, but I can't tell mom..."
            document.getElementById("noteRotten").style.color = "#a01e1e";
            document.getElementById("noteRotten").innerHTML = "Yeah, you better not tell her!!"
        } else if (this.boughtSnack || this.boughtToy) {
            document.getElementById("noteRotten").style.color = "blue";
            document.getElementById("noteRotten").innerHTML = "Huh, not so bad."
        }
        
        if(this.boughtBike){
            document.getElementById("noteRotten2").style.color="#067a32";
            document.getElementById("noteRotten2").innerHTML = "I'm gonna name my new bike Snake, sounds cool."
        }

    }

    check() {
        
        commonSound.play();

        document.getElementById("rottencheckbutton").setAttribute("disabled", true);

        document.getElementById("next").disabled = false;

        document.getElementById("notification").innerHTML = "You've already finished the this turn, please click on the Next button to go into the next week."

    }

}
