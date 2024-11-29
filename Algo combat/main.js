class guerrier {
    constructor(nom, pv, attaque, precision) {
        this.nom = nom;
        this.pv = pv;
        this.attaque = attaque;
        this.precision = precision;
    }

}
let Bruno = new guerrier("Bruno", 15, 2, 0)
let Taco = new guerrier("Taco", 10, 3, 0)

while (Bruno.pv > 0 && Taco.pv > 0) {


preci;
console.log(preci(Bruno.precision, Taco.precision));
console.log("au tour de bruno");
bruTour;
console.log(bruTour(Bruno.precision, Taco.precision));
preci;
console.log(preci(Bruno.precision, Taco.precision));
console.log("au tour de taco");
tacoTour;
console.log(tacoTour(Taco.precision, Bruno.precision));
/*if (Bruno.precision > Taco.precision) {
    Taco.pv = Taco.pv -2;
    console.log("Bruno attaque, Taco perd 2 PV, il lui reste : " + Taco.pv + "PV");
    Bruno.pv = Bruno.pv -3;
    console.log("Taco attaque, Bruno perd 3 PV, il lui reste : " + Bruno.pv + "PV");
}
else {
    Bruno.pv = Bruno.pv -3;
    console.log("Taco attaque, Bruno perd 3 PV, il lui reste : " + Bruno.pv + "PV");
    Taco.pv = Taco.pv -2;
    console.log("Bruno attaque, Taco perd 2 PV, il lui reste : " + Taco.pv + "PV");
} */


if (Bruno.pv <=0 && Taco.pv <=0) {
    console.log("Egalité")
     }
    
    else if  (Taco.pv <= 0) {
    console.log("Bruno a gagné");
}
else if  (Bruno.pv <=0 ) {
   console.log("Taco a gagné");
}
 
}

function preci (preB, preT) {
preB = Math.random();
preT = Math.random();
Bruno.precision = preB;
Taco.precision = preT;
return "Precision de Bruno = " + preB + " Precision de Taco = " + preT;
}




function bruTour (Brun, Tac){
    if (Brun > Tac) {
        Taco.pv = Taco.pv -2;
        return "Bruno attaque, Taco perd 2 PV, il lui reste : " + Taco.pv + "PV";
        
    }
    else
    return "rien";
}

function tacoTour (Ta, Bru){
    if (Ta > Bru){
    Bruno.pv = Bruno.pv -3;
    return "Taco attaque, Bruno perd 3 PV, il lui reste : " + Bruno.pv + "PV";
    
    }
    else {
        return "rien";
    }
}

