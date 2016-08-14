var coffeeShops = [];

function CoffeeShop(name, min, max, cupHr, poundTG) {
  this.name = name;
  this.minCupHr = min;
  this.maxCupHr = max;
  this.avgCupHr = cupHr;
  this.avgPound = poundTG;
  this.custHr = []; //number of customers per hour
  this.cupHr = []; //number of cups per hour
  this.poundHr = []; //total amt of to go pounds per hour
  this.poundCup = []; //total amt of beans used per hour for cups
  this.bothPound = []; //total amt of beans for to go and cups
  this.empHr = []; //total number of employees needed per hour
  this.totalCust = 0; //sets value to 0 for total customers in a day
  this.totalCup = 0; //sets value to 0 for total cups sold in a day
  this.totalPoundTG = 0; //sets value to 0 for total pounds of beans to go in a day
  this.totalPoundDay = 0; //sets value to 0 for total pounds of beans per day
  coffeeShops.push(this);
};

randomCustHr: function() {
  for (var i = 0; i < time.length; i++) {
    this.custHr[i] = Math.floor(Math.random() * (this.maxCustHr - this.minCustHr) + this.minCustHr);
  }
},
cupHr: function() {
  for (var i = 0; i < time.length; i++) {
    this.cupHr[i] = parseFloat((this.cupHr[i] * this.avgCupHr).toFixed(1));
  }
},
poundHr: function() {
  for (var i = 0; i < time.length; i++) {
    this.poundHr[i] = parseFloat((this.custHr[i] * this.avgPound).toFixed(1));
  }
},
poundCup: function() {
  for (var i = 0; i < time.length; i++) {
    this.poundCup[i] = parseFloat((this.cupHr[i] / 16).toFixed(1));
  }
},
bothPound: function() {
  for (var i = 0; i < time.length; i++) {
    this.bothPound[i] = parseFloat((this.poundHr[i] + this.poundCup[i]).toFixed(1));
  }
},
empHr: function() {
  for (var i = 0; i < time.length; i++) {
    this.empHr[i] = Math.ceil(this.custHr[i] / 30);
  }
},
totalCustCalc: function() {
  for (var i = 0; i < time.length; i++) {
    this.totalCust += this.custHr [i];
  }
},
totalCupCalc: function() {
  for (var i = 0; i < time.length; i++) {
    this.totalCup[i] += this.cupHr [i];
    this.totalCup[i] = parseFloat(this.totalCup.toFixed(1));
  }
},
totalPoundTGCalc: function () {
  for (var i = 0; i < time.length; i++) {
    this.totalPoundTG += this.poundHr[i];
    this.totalPoundTG = parseFloat(this.totalPoundTG.toFixed(1));
  }
},
totalPoundDayCalc: function () {
  for (var i = 0; i < time.length; i++) {
    this.totalPoundDay += this.bothPound[i];
    this.totalPoundDay = parseFloat(this.totalPoundDay.toFixed(1));
  }
}
};


pikePlace.randomCustHr ();
pikePlace.cupHr ();
pikePlace.poundHr ();
pikePlace.poundCup ();
pikePlace.bothPound ();
pikePlace.empHr ();
pikePlace.totalCustCalc ();
pikePlace.totalCupCalc ();
pikePlace.totalPoundTGCalc ();
pikePlace.totalPoundDayCalc ();

// CoffeeShops.prototype.getRandNum = function(){
//   return Math.random() * 100;}

new CoffeeShop('pikePlace', 14, 35, 1.2, 0.34);
new CoffeeShop('capHill',12, 28, 3.2, 0.03);
new CoffeeShop('seaPub',9, 45, 2.6, 0.02);
new CoffeeShop('slu',5, 18, 1.3, 0.04);
new CoffeeShop('seaTac', 28, 44, 1.1, 0.41);
