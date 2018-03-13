class Parents {
    constructor(weeklyIncome, balanceParents, costOnentertainment, costOngood, costOnrotten, other) {
        this.weeklyIncome = 200;
        this.balanceParents = this.weeklyIncome;
        this.costOnentertainment = 10;
        this.costOngood = 5;
        this.costOnrotten = 5;
        this.other = this.balanceParents - housing - food - transportation - healthcare - clothing;
        this.balanceParents = this.weeklyIncome;
    }

    //Housing Pay button
    payHousing() {
        this.balanceParents = this.weeklyIncome;
        this.balanceParents = this.balanceParents - housing;
        document.getElementById("parentsBalance").innerHTML = "$" + this.balanceParents;
        document.getElementById("payHousingbutton").setAttribute("disabled", true);
        commonSound.play();
        payNum--;
        imgFlag=1;
    }
    //Food Pay button
    payFood() {

        this.balanceParents = this.balanceParents - food;
        document.getElementById("parentsBalance").innerHTML = "$" + this.balanceParents;
        document.getElementById("payFoodbutton").setAttribute("disabled", true);
        commonSound.play();
        payNum--;
        imgFlag=1;
    }
    //Transportation Pay button
    payTransportation() {

        this.balanceParents = this.balanceParents - transportation;
        document.getElementById("parentsBalance").innerHTML = "$" + this.balanceParents;
        document.getElementById("payTransportationbutton").setAttribute("disabled", true);
        commonSound.play();
        payNum--;
        imgFlag=1;
    }
    //Healthcare Pay button
    payHealthcare() {

        this.balanceParents = this.balanceParents - healthcare;
        document.getElementById("parentsBalance").innerHTML = "$" + this.balanceParents;
        document.getElementById("payHealthcarebutton").setAttribute("disabled", true);
        commonSound.play();
        payNum--;
        imgFlag=1;
    }
    //Clothing Pay button
    payClothing() {

        this.balanceParents = this.balanceParents - clothing;
        document.getElementById("parentsBalance").innerHTML = "$" + this.balanceParents;
        document.getElementById("payClothingbutton").setAttribute("disabled", true);
        commonSound.play();
        payNum--;
        imgFlag=1;
    }
    //Other fee Pay button
    payOther() {

        this.other = this.costOnentertainment + this.costOngood + this.costOnrotten;
        this.balanceParents = this.balanceParents - this.other;
        document.getElementById("parentsBalance").innerHTML = "$" + this.balanceParents;
        document.getElementById("payOtherbutton").setAttribute("disabled", true);
        commonSound.play();
        payNum--;
        imgFlag=1;
    }
    // Entertainment +
    plusEntertainment() {
        if (this.costOnentertainment >= 0 && (this.costOnentertainment < this.other - this.costOngood - this.costOnrotten)) {
            this.costOnentertainment++;
            document.getElementById("entertainment").innerHTML = "$" + this.costOnentertainment;
        }
    }
    // Entertainment -
    minusEntertainment() {
        if (this.costOnentertainment > 0 && (this.costOnentertainment <= this.other - this.costOngood - this.costOnrotten)) {
            this.costOnentertainment--;
            document.getElementById("entertainment").innerHTML = "$" + this.costOnentertainment;
        }

    }
    // Good kid allowance +
    plusGood() {
        if (this.costOngood >= 0 && this.costOngood < this.other - this.costOnentertainment - this.costOnrotten) {
            this.costOngood++;
            document.getElementById("costForgood").innerHTML = "$" + this.costOngood;
        }
    }
    // Good kid allowance -
    minusGood() {
        if (this.costOngood > 0 && this.costOngood <= this.other - this.costOnentertainment - this.costOnrotten) {
            this.costOngood--;
            document.getElementById("costForgood").innerHTML = "$" + this.costOngood;
        }
    }
    // Rotten kid allowance +
    plusRotten() {
        if (this.costOnrotten >= 0 && this.costOnrotten < this.other - this.costOnentertainment - this.costOngood) {
            this.costOnrotten++;
            document.getElementById("costForrotten").innerHTML = "$" + this.costOnrotten;
        }
    }
    // Rotten kid allowance -
    minusRotten() {
        if (this.costOnrotten > 0 && this.costOnrotten <= this.other - this.costOnentertainment - this.costOngood) {
            this.costOnrotten--;
            document.getElementById("costForrotten").innerHTML = "$" + this.costOnrotten;
        }
    }
    // Check button
    check() {

        good1.show();
        document.getElementById("pcheckbutton").setAttribute("disabled", true);
        if (good1.boughtSnack || good1.boughtToy) {
            goodSound.play();
        } else {
            commonSound.play();
        }
        
        coinGood = Math.round(this.costOngood/3);
        

    }

}
