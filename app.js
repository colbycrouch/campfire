

var coffeeShops = [];

function coffeeShop(name, min, max, cupHr, poundTG) {
  this.shopName = name;
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

for (var i = 0; i < coffeeShop.length; i++) {
  coffeeShops[i].calculations();
  coffeeShops[i].render();
}

// var time = ['8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','8:00pm'];
//
// var pikePlace = {
//   id: 'pikePlaceMarket',
//   minCustHr: 14,
//   maxCustHr: 35,
//   avgCup: 1.2,
//   avgPound: 0.34,
//   custHr: [], //number of customers per hour
//   cupHr: [], //number of cups per hour
//   poundHr: [], //total amt of to go pounds per hour
//   poundCup: [], //total amt of beans used per hour for cups
//   bothPound: [], //total amt of beans for to go and cups
//   empHr: [], //total number of employees needed per hour
//   totalCust: 0, //sets value to 0 for total customers in a day
//   totalCup: 0, //sets value to 0 for total cups sold in a day
//   totalPoundTG: 0, //sets value to 0 for total pounds of beans to go in a day
//   totalPoundDay: 0, //sets value to 0 for total pounds of beans per day
//   ulEl: document.getElementById('pikePlaceMarket'),
//
//
//   randomCustHr: function() {
//     for (var i = 0; i < time.length; i++) {
//       this.custHr[i] = Math.floor(Math.random() * (this.maxCustHr - this.minCustHr) + this.minCustHr);
//     }
//   },
//   numCupHr: function() {
//     for (var i = 0; i < time.length; i++) {
//       this.cupHr[i] = parseFloat((this.custHr[i] * this.avgCup).toFixed(2));
//     }
//   },
//   numPoundHr: function() {
//     for (var i = 0; i < time.length; i++) {
//       this.poundHr[i] = parseFloat((this.custHr[i] * this.avgPound).toFixed(2));
//     }
//   },
//   numPoundCup: function() {
//     for (var i = 0; i < time.length; i++) {
//       this.poundCup[i] = parseFloat((this.cupHr[i] / 16).toFixed(2));
//     }
//   },
//   numBothPound: function() {
//     for (var i = 0; i < time.length; i++) {
//       this.bothPound[i] = parseFloat((this.poundHr[i] + this.poundCup[i]).toFixed(2));
//     }
//   },
//   numEmpHr: function() {
//     for (var i = 0; i < time.length; i++) {
//       this.empHr[i] = Math.ceil(this.custHr[i] / 30);
//     }
//   },
//   totalCustCalc: function() {
//     for (var i = 0; i < time.length; i++) {
//       this.totalCust += this.custHr[i];
//     }
//   },
//   totalCupCalc: function() {
//     for (var i = 0; i < time.length; i++) {
//       this.totalCup += this.cupHr[i];
//     }
//     this.totalCup[i] = parseFloat(this.totalCup.toFixed(2));
//   },
//   totalPoundTGCalc: function () {
//     for (var i = 0; i < time.length; i++) {
//       this.totalPoundTG += this.poundHr[i];
//     }
//     this.totalPoundTG = parseFloat(this.totalPoundTG.toFixed(2));
//   },
//   totalPoundDayCalc: function () {
//     for (var i = 0; i < time.length; i++) {
//       this.totalPoundDay += this.bothPound[i];
//     }
//     this.totalPoundDay = parseFloat(this.totalPoundDay.toFixed(2));
//   },
//
//   render: function() {
//     this.randomCustHr ();
//     this.numCupHr ();
//     this.numPoundHr ();
//     this.numPoundCup ();
//     this.numBothPound ();
//     this.numEmpHr ();
//     this.totalCustCalc ();
//     this.totalCupCalc ();
//     this.totalPoundTGCalc ();
//     this.totalPoundDayCalc ();
//
//
//     var liEl = [];
//     for (var i = 0; i < time.length; i++) {
//       liEl[i] = document.createElement('li');
//       liEl[i].textContent = time[i] + ': ' + this.bothPound[i] + ' lbs, [' + this.custHr[i] + ' customers, ' + this.cupHr[i] + ' cups (' + this.poundCup[i] + ' lbs), ' + this.poundHr[i] + ' lbs to-go, ' + this.empHr[i] + ' employees needed]';
//       this.ulEl.appendChild(liEl[i]);
//     }
//     liEl[5] = document.createElement('li');
//     liEl[5].textContent = 'Total customers at PPM: ' + this.totalCust;
//     this.ulEl.appendChild(liEl[5]);
//     liEl[6] = document.createElement('li');
//     liEl[6].textContent = 'Total cups sold at PPM: ' + this.totalCup;
//     this.ulEl.appendChild(liEl[6]);
//     liEl[7] = document.createElement('li');
//     liEl[7].textContent = 'Total to-go pound packages sold at PPM: ' + this.totalPoundTG;
//     this.ulEl.appendChild(liEl[7]);
//     liEl[8] = document.createElement('li');
//     liEl[8].textContent = 'Total pounds of beans needed at PPM: ' + this.totalPoundDay;
//     this.ulEl.appendChild(liEl[8]);
//   }
// };
// pikePlace.render();
//
// var capHill = {
//   id: 'capitolhill',
//   minCustHr: 12,
//   maxCustHr: 28,
//   avgCup: 3.2,
//   avgPound: 0.03,
//   custHr: [], //number of customers per hour
//   cupHr: [], //number of cups per hour
//   poundHr: [], //total amt of to go pounds per hour
//   poundCup: [], //total amt of beans used per hour for cups
//   bothPound: [], //total amt of beans for to go and cups
//   empHr: [], //total number of employees needed per hour
//   totalCust: 0, //sets value to 0 for total customers in a day
//   totalCup: 0, //sets value to 0 for total cups sold in a day
//   totalPoundTG: 0, //sets value to 0 for total pounds of beans to go in a day
//   totalPoundDay: 0, //sets value to 0 for total pounds of beans per day
//   ulEl: document.getElementById('capitolHill'),
//
//   randomCustHr: function() {
//     for (var i = 0; i < time.length; i++) {
//       this.custHr[i] = Math.floor(Math.random() * (this.maxCustHr - this.minCustHr) + this.minCustHr);
//     }
//   },
//   numCupHr: function() {
//     for (var i = 0; i < time.length; i++) {
//       this.cupHr[i] = parseFloat((this.custHr[i] * this.avgCup).toFixed(2));
//     }
//   },
//   numPoundHr: function() {
//     for (var i = 0; i < time.length; i++) {
//       this.poundHr[i] = parseFloat((this.custHr[i] * this.avgPound).toFixed(2));
//     }
//   },
//   numPoundCup: function() {
//     for (var i = 0; i < time.length; i++) {
//       this.poundCup[i] = parseFloat((this.cupHr[i] / 16).toFixed(2));
//     }
//   },
//   numBothPound: function() {
//     for (var i = 0; i < time.length; i++) {
//       this.bothPound[i] = parseFloat((this.poundHr[i] + this.poundCup[i]).toFixed(2));
//     }
//   },
//   numEmpHr: function() {
//     for (var i = 0; i < time.length; i++) {
//       this.empHr[i] = Math.ceil(this.custHr[i] / 30);
//     }
//   },
//   totalCustCalc: function() {
//     for (var i = 0; i < time.length; i++) {
//       this.totalCust += this.custHr [i];
//     }
//   },
//   totalCupCalc: function() {
//     for (var i = 0; i < time.length; i++) {
//       this.totalCup += this.cupHr [i];}
//     this.totalCup[i] = parseFloat(this.totalCup.toFixed(2));
//
//   },
//   totalPoundTGCalc: function () {
//     for (var i = 0; i < time.length; i++) {
//       this.totalPoundTG += this.poundHr[i];
//       this.totalPoundTG = parseFloat(this.totalPoundTG.toFixed(2));
//     }
//   },
//   totalPoundDayCalc: function () {
//     for (var i = 0; i < time.length; i++) {
//       this.totalPoundDay += this.bothPound[i];
//       this.totalPoundDay = parseFloat(this.totalPoundDay.toFixed(2));
//     }
//   },
//
//   render: function () {
//     this.randomCustHr ();
//     this.numCupHr ();
//     this.numPoundHr ();
//     this.numPoundCup ();
//     this.numBothPound ();
//     this.numEmpHr ();
//     this.totalCustCalc ();
//     this.totalCupCalc ();
//     this.totalPoundTGCalc ();
//     this.totalPoundDayCalc ();
//
//     var liEl = [];
//     for (var i = 0; i < time.length; i++) {
//       liEl[i] = document.createElement('li');
//       liEl[i].textContent = time[i] + ': ' + this.bothPound[i] + ' lbs, [' + this.custHr[i] + ' customers, ' + this.cupHr[i] + ' cups (' + this.poundCup[i] + ' lbs), ' + this.poundHr[i] + ' lbs to-go, ' + this.empHr[i] + ' employees needed]';
//       this.ulEl.appendChild(liEl[i]);
//     }
//     liEl[5] = document.createElement('li');
//     liEl[5].textContent = 'Total customers at CH: ' + this.totalCust;
//     this.ulEl.appendChild(liEl[5]);
//     liEl[6] = document.createElement('li');
//     liEl[6].textContent = 'Total cups sold at CH: ' + this.totalCup;
//     this.ulEl.appendChild(liEl[6]);
//     liEl[7] = document.createElement('li');
//     liEl[7].textContent = 'Total to-go pound packages sold at CH: ' + this.totalPoundTG;
//     this.ulEl.appendChild(liEl[7]);
//     liEl[8] = document.createElement('li');
//     liEl[8].textContent = 'Total pounds of beans needed at CH: ' + this.totalPoundDay;
//     this.ulEl.appendChild(liEl[8]);
//   }
// };
// capHill.render();
//
// var seaPub = {
//   id: 'seattle public library',
//   minCustHr: 9,
//   maxCustHr: 45,
//   avgCup: 2.6,
//   avgPound: 0.02,
//   custHr: [], //number of customers per hour
//   cupHr: [], //number of cups per hour
//   poundHr: [], //total amt of to go pounds per hour
//   poundCup: [], //total amt of beans used per hour for cups
//   bothPound: [], //total amt of beans for to go and cups
//   empHr: [], //total number of employees needed per hour
//   totalCust: 0, //sets value to 0 for total customers in a day
//   totalCup: 0, //sets value to 0 for total cups sold in a day
//   totalPoundTG: 0, //sets value to 0 for total pounds of beans to go in a day
//   totalPoundDay: 0, //sets value to 0 for total pounds of beans per day
//   ulEl: document.getElementById('seattlePublic'),
//
//   randomCustHr: function() {
//     for (var i = 0; i < time.length; i++) {
//       this.custHr[i] = Math.floor(Math.random() * (this.maxCustHr - this.minCustHr) + this.minCustHr);
//     }
//   },
//   numCupHr: function() {
//     for (var i = 0; i < time.length; i++) {
//       this.cupHr[i] = parseFloat((this.custHr[i] * this.avgCup).toFixed(2));
//     }
//   },
//   numPoundHr: function() {
//     for (var i = 0; i < time.length; i++) {
//       this.poundHr[i] = parseFloat((this.custHr[i] * this.avgPound).toFixed(2));
//     }
//   },
//   numPoundCup: function() {
//     for (var i = 0; i < time.length; i++) {
//       this.poundCup[i] = parseFloat((this.cupHr[i] / 16).toFixed(2));
//     }
//   },
//   numBothPound: function() {
//     for (var i = 0; i < time.length; i++) {
//       this.bothPound[i] = parseFloat((this.poundHr[i] + this.poundCup[i]).toFixed(2));
//     }
//   },
//   numEmpHr: function() {
//     for (var i = 0; i < time.length; i++) {
//       this.empHr[i] = Math.ceil(this.custHr[i] / 30);
//     }
//   },
//   totalCustCalc: function() {
//     for (var i = 0; i < time.length; i++) {
//       this.totalCust += this.custHr [i];
//     }
//   },
//   totalCupCalc: function() {
//     for (var i = 0; i < time.length; i++) {
//       this.totalCup += this.cupHr [i];
//       this.totalCup[i] = parseFloat(this.totalCup.toFixed(2));
//     }
//   },
//   totalPoundTGCalc: function () {
//     for (var i = 0; i < time.length; i++) {
//       this.totalPoundTG += this.poundHr[i];
//       this.totalPoundTG = parseFloat(this.totalPoundTG.toFixed(2));
//     }
//   },
//   totalPoundDayCalc: function () {
//     for (var i = 0; i < time.length; i++) {
//       this.totalPoundDay += this.bothPound[i];
//       this.totalPoundDay = parseFloat(this.totalPoundDay.toFixed(2));
//     }
//   },
//   render: function () {
//     this.randomCustHr ();
//     this.numCupHr ();
//     this.numPoundHr ();
//     this.numPoundCup ();
//     this.numBothPound ();
//     this.numEmpHr ();
//     this.totalCustCalc ();
//     this.totalCupCalc ();
//     this.totalPoundTGCalc ();
//     this.totalPoundDayCalc ();
//
//     var liEl = [];
//     for (var i = 0; i < time.length; i++) {
//       liEl[i] = document.createElement('li');
//       liEl[i].textContent = time[i] + ': ' + this.bothPound[i] + ' lbs, [' + this.custHr[i] + ' customers, ' + this.cupHr[i] + ' cups (' + this.poundCup[i] + ' lbs), ' + this.poundHr[i] + ' lbs to-go, ' + this.empHr[i] + ' employees needed]';
//       this.ulEl.appendChild(liEl[i]);
//     }
//     liEl[5] = document.createElement('li');
//     liEl[5].textContent = 'Total customers at SPL: ' + this.totalCust;
//     this.ulEl.appendChild(liEl[5]);
//     liEl[6] = document.createElement('li');
//     liEl[6].textContent = 'Total cups sold at SPL: ' + this.totalCup;
//     this.ulEl.appendChild(liEl[6]);
//     liEl[7] = document.createElement('li');
//     liEl[7].textContent = 'Total to-go pound packages sold at SPL: ' + this.totalPoundTG;
//     this.ulEl.appendChild(liEl[7]);
//     liEl[8] = document.createElement('li');
//     liEl[8].textContent = 'Total pounds of beans needed at SPL: ' + this.totalPoundDay;
//     this.ulEl.appendChild(liEl[8]);
//   }
// };
// seaPub.render();
//
// var slu = {
//   id: 'southLakeUnion',
//   minCustHr: 5,
//   maxCustHr: 18,
//   avgCup: 1.3,
//   avgPound: 0.04,
//   custHr: [], //number of customers per hour
//   cupHr: [], //number of cups per hour
//   poundHr: [], //total amt of to go pounds per hour
//   poundCup: [], //total amt of beans used per hour for cups
//   bothPound: [], //total amt of beans for to go and cups
//   empHr: [], //total number of employees needed per hour
//   totalCust: 0, //sets value to 0 for total customers in a day
//   totalCup: 0, //sets value to 0 for total cups sold in a day
//   totalPoundTG: 0, //sets value to 0 for total pounds of beans to go in a day
//   totalPoundDay: 0, //sets value to 0 for total pounds of beans per day
//   ulEl: document.getElementById('southLakeUnion'),
//
//   randomCustHr: function() {
//     for (var i = 0; i < time.length; i++) {
//       this.custHr[i] = Math.floor(Math.random() * (this.maxCustHr - this.minCustHr) + this.minCustHr);
//     }
//   },
//   numCupHr: function() {
//     for (var i = 0; i < time.length; i++) {
//       this.cupHr[i] = parseFloat((this.custHr[i] * this.avgCup).toFixed(2));
//     }
//   },
//   numPoundHr: function() {
//     for (var i = 0; i < time.length; i++) {
//       this.poundHr[i] = parseFloat((this.custHr[i] * this.avgPound).toFixed(2));
//     }
//   },
//   numPoundCup: function() {
//     for (var i = 0; i < time.length; i++) {
//       this.poundCup[i] = parseFloat((this.cupHr[i] / 16).toFixed(2));
//     }
//   },
//   numBothPound: function() {
//     for (var i = 0; i < time.length; i++) {
//       this.bothPound[i] = parseFloat((this.poundHr[i] + this.poundCup[i]).toFixed(2));
//     }
//   },
//   numEmpHr: function() {
//     for (var i = 0; i < time.length; i++) {
//       this.empHr[i] = Math.ceil(this.custHr[i] / 30);
//     }
//   },
//   totalCustCalc: function() {
//     for (var i = 0; i < time.length; i++) {
//       this.totalCust += this.custHr [i];
//     }
//   },
//   totalCupCalc: function() {
//     for (var i = 0; i < time.length; i++) {
//       this.totalCup += this.cupHr [i];
//       this.totalCup[i] = parseFloat(this.totalCup.toFixed(2));
//     }
//   },
//   totalPoundTGCalc: function () {
//     for (var i = 0; i < time.length; i++) {
//       this.totalPoundTG += this.poundHr[i];
//       this.totalPoundTG = parseFloat(this.totalPoundTG.toFixed(2));
//     }
//   },
//   totalPoundDayCalc: function () {
//     for (var i = 0; i < time.length; i++) {
//       this.totalPoundDay += this.bothPound[i];
//       this.totalPoundDay = parseFloat(this.totalPoundDay.toFixed(2));
//     }
//   },
//   render: function () {
//     this.randomCustHr ();
//     this.numCupHr ();
//     this.numPoundHr ();
//     this.numPoundCup ();
//     this.numBothPound ();
//     this.numEmpHr ();
//     this.totalCustCalc ();
//     this.totalCupCalc ();
//     this.totalPoundTGCalc ();
//     this.totalPoundDayCalc ();
//
//     var liEl = [];
//     for (var i = 0; i < time.length; i++) {
//       liEl[i] = document.createElement('li');
//       liEl[i].textContent = time[i] + ': ' + this.bothPound[i] + ' lbs, [' + this.custHr[i] + ' customers, ' + this.cupHr[i] + ' cups (' + this.poundCup[i] + ' lbs), ' + this.poundHr[i] + ' lbs to-go, ' + this.empHr[i] + ' employees needed]';
//       this.ulEl.appendChild(liEl[i]);
//     }
//     liEl[5] = document.createElement('li');
//     liEl[5].textContent = 'Total customers at SLU: ' + this.totalCust;
//     this.ulEl.appendChild(liEl[5]);
//     liEl[6] = document.createElement('li');
//     liEl[6].textContent = 'Total cups sold at SLU: ' + this.totalCup;
//     this.ulEl.appendChild(liEl[6]);
//     liEl[7] = document.createElement('li');
//     liEl[7].textContent = 'Total to-go pound packages sold at SLU: ' + this.totalPoundTG;
//     this.ulEl.appendChild(liEl[7]);
//     liEl[8] = document.createElement('li');
//     liEl[8].textContent = 'Total pounds of beans needed at SLU: ' + this.totalPoundDay;
//     this.ulEl.appendChild(liEl[8]);
//   }
// };
// slu.render();
//
// var seaTac = {
//   id: 'seaTacAirport',
//   minCustHr: 28,
//   maxCustHr: 44,
//   avgCup: 1.1,
//   avgPound: 0.41,
//   custHr: [], //number of customers per hour
//   cupHr: [], //number of cups per hour
//   poundHr: [], //total amt of to go pounds per hour
//   poundCup: [], //total amt of beans used per hour for cups
//   bothPound: [], //total amt of beans for to go and cups
//   empHr: [], //total number of employees needed per hour
//   totalCust: 0, //sets value to 0 for total customers in a day
//   totalCup: 0, //sets value to 0 for total cups sold in a day
//   totalPoundTG: 0, //sets value to 0 for total pounds of beans to go in a day
//   totalPoundDay: 0, //sets value to 0 for total pounds of beans per day
//   ulEl: document.getElementById('seaTacAirport'),
//
//   randomCustHr: function() {
//     for (var i = 0; i < time.length; i++) {
//       this.custHr[i] = Math.floor(Math.random() * (this.maxCustHr - this.minCustHr) + this.minCustHr);
//     }
//   },
//   numCupHr: function() {
//     for (var i = 0; i < time.length; i++) {
//       this.cupHr[i] = parseFloat((this.custHr[i] * this.avgCup).toFixed(2));
//     }
//   },
//   numPoundHr: function() {
//     for (var i = 0; i < time.length; i++) {
//       this.poundHr[i] = parseFloat((this.custHr[i] * this.avgPound).toFixed(2));
//     }
//   },
//   numPoundCup: function() {
//     for (var i = 0; i < time.length; i++) {
//       this.poundCup[i] = parseFloat((this.cupHr[i] / 16).toFixed(2));
//     }
//   },
//   numBothPound: function() {
//     for (var i = 0; i < time.length; i++) {
//       this.bothPound[i] = parseFloat((this.poundHr[i] + this.poundCup[i]).toFixed(2));
//     }
//   },
//   numEmpHr: function() {
//     for (var i = 0; i < time.length; i++) {
//       this.empHr[i] = Math.ceil(this.custHr[i] / 30);
//     }
//   },
//   totalCustCalc: function() {
//     for (var i = 0; i < time.length; i++) {
//       this.totalCust += this.custHr [i];
//     }
//   },
//   totalCupCalc: function() {
//     for (var i = 0; i < time.length; i++) {
//       this.totalCup += this.cupHr [i];
//       this.totalCup[i] = parseFloat(this.totalCup.toFixed(2));
//     }
//   },
//   totalPoundTGCalc: function () {
//     for (var i = 0; i < time.length; i++) {
//       this.totalPoundTG += this.poundHr[i];
//       this.totalPoundTG = parseFloat(this.totalPoundTG.toFixed(2));
//     }
//   },
//   totalPoundDayCalc: function () {
//     for (var i = 0; i < time.length; i++) {
//       this.totalPoundDay += this.bothPound[i];
//       this.totalPoundDay = parseFloat(this.totalPoundDay.toFixed(2));
//     }
//   },
//   render: function () {
//     this.randomCustHr ();
//     this.numCupHr ();
//     this.numPoundHr ();
//     this.numPoundCup ();
//     this.numBothPound ();
//     this.numEmpHr ();
//     this.totalCustCalc ();
//     this.totalCupCalc ();
//     this.totalPoundTGCalc ();
//     this.totalPoundDayCalc ();
//
//     var liEl = [];
//     for (var i = 0; i < time.length; i++) {
//       liEl[i] = document.createElement('li');
//       liEl[i].textContent = time[i] + ': ' + this.bothPound[i] + ' lbs, [' + this.custHr[i] + ' customers, ' + this.cupHr[i] + ' cups (' + this.poundCup[i] + ' lbs), ' + this.poundHr[i] + ' lbs to-go, ' + this.empHr[i] + ' employees needed]';
//       this.ulEl.appendChild(liEl[i]);
//     }
//     liEl[5] = document.createElement('li');
//     liEl[5].textContent = 'Total customers at STA: ' + this.totalCust;
//     this.ulEl.appendChild(liEl[5]);
//     liEl[6] = document.createElement('li');
//     liEl[6].textContent = 'Total cups sold at STA: ' + this.totalCup;
//     this.ulEl.appendChild(liEl[6]);
//     liEl[7] = document.createElement('li');
//     liEl[7].textContent = 'Total to-go pound packages sold at STA: ' + this.totalPoundTG;
//     this.ulEl.appendChild(liEl[7]);
//     liEl[8] = document.createElement('li');
//     liEl[8].textContent = 'Total pounds of beans needed at STA: ' + this.totalPoundDay;
//     this.ulEl.appendChild(liEl[8]);
//   }
// };
// seaTac.render();
