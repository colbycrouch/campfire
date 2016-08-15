var time = ['8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','8:00pm'];

var pikePlace = {
  id: 'pike place market',
  minCustHr: 14,
  maxCustHr: 35,
  avgCup: 1.2,
  avgPound: 0.34,
  custHr: [], //number of customers per hour
  cupHr: [], //number of cups per hour
  poundHr: [], //total amt of to go pounds per hour
  poundCup: [], //total amt of beans used per hour for cups
  bothPound: [], //total amt of beans for to go and cups
  empHr: [], //total number of employees needed per hour
  totalCust: 0, //sets value to 0 for total customers in a day
  totalCup: 0, //sets value to 0 for total cups sold in a day
  totalPoundTG: 0, //sets value to 0 for total pounds of beans to go in a day
  totalPoundDay: 0, //sets value to 0 for total pounds of beans per day
  //totalEmp: 0, // want to make this function to tell you based on total sales if you can afford that many hours based on a 18 percent labor model

  randomCustHr: function() {
    for (var i = 0; i < time.length; i++) {
      this.custHr[i] = Math.floor(Math.random() * (this.maxCustHr - this.minCustHr) + this.minCustHr);
    }
  },
  numCupHr: function() {
    for (var i = 0; i < time.length; i++) {
      this.cupHr[i] = parseFloat((this.custHr[i] * this.avgCup).toFixed(2));
    }
  },
  numPoundHr: function() {
    for (var i = 0; i < time.length; i++) {
      this.poundHr[i] = parseFloat((this.custHr[i] * this.avgPound).toFixed(2));
    }
  },
  numPoundCup: function() {
    for (var i = 0; i < time.length; i++) {
      this.poundCup[i] = parseFloat((this.cupHr[i] / 16).toFixed(2));
    }
  },
  numBothPound: function() {
    for (var i = 0; i < time.length; i++) {
      this.bothPound[i] = parseFloat((this.poundHr[i] + this.poundCup[i]).toFixed(2));
    }
  },
  numEmpHr: function() {
    for (var i = 0; i < time.length; i++) {
      this.empHr[i] = Math.ceil(this.custHr[i] / 30);
    }
  },
  totalCustCalc: function() {
    for (var i = 0; i < time.length; i++) {
      this.totalCust += this.custHr[i];
    }
  },
  totalCupCalc: function() {
    for (var i = 0; i < time.length; i++) {
      this.totalCup += this.cupHr[i];
    }
    this.totalCup[i] = parseFloat(this.totalCup.toFixed(2));
  },
  totalPoundTGCalc: function () {
    for (var i = 0; i < time.length; i++) {
      this.totalPoundTG += this.poundHr[i];
    }
    this.totalPoundTG = parseFloat(this.totalPoundTG.toFixed(2));
  },
  totalPoundDayCalc: function () {
    for (var i = 0; i < time.length; i++) {
      this.totalPoundDay += this.bothPound[i];
    }
    this.totalPoundDay = parseFloat(this.totalPoundDay.toFixed(2));
  },
};


pikePlace.randomCustHr ();
pikePlace.numCupHr ();
pikePlace.numPoundHr ();
pikePlace.numPoundCup ();
pikePlace.numBothPound ();
pikePlace.numEmpHr ();
pikePlace.totalCustCalc ();
pikePlace.totalCupCalc ();
pikePlace.totalPoundTGCalc ();
pikePlace.totalPoundDayCalc ();

// create element // var resultsEl = document.getElementsById ('results')

//create content //var contentEl = document.createElement('ul');
//  content.El.textContent = 'hello world';

//append to parent // resultsEl.appendChild(contentEl)

var capHill = {
  id: 'capitol hill',
  minCustHr: 12,
  maxCustHr: 28,
  avgCup: 3.2,
  avgPound: 0.03,
  custHr: [], //number of customers per hour
  cupHr: [], //number of cups per hour
  poundHr: [], //total amt of to go pounds per hour
  poundCup: [], //total amt of beans used per hour for cups
  bothPound: [], //total amt of beans for to go and cups
  empHr: [], //total number of employees needed per hour
  totalCust: 0, //sets value to 0 for total customers in a day
  totalCup: 0, //sets value to 0 for total cups sold in a day
  totalPoundTG: 0, //sets value to 0 for total pounds of beans to go in a day
  totalPoundDay: 0, //sets value to 0 for total pounds of beans per day
  //totalEmp: 0, // want to make this function to tell you based on total sales if you can afford that many hours based on a 18 percent labor model

  randomCustHr: function() {
    for (var i = 0; i < time.length; i++) {
      this.custHr[i] = Math.floor(Math.random() * (this.maxCustHr - this.minCustHr) + this.minCustHr);
    }
  },
  numCupHr: function() {
    for (var i = 0; i < time.length; i++) {
      this.cupHr[i] = parseFloat((this.custHr[i] * this.avgCup).toFixed(2));
    }
  },
  numPoundHr: function() {
    for (var i = 0; i < time.length; i++) {
      this.poundHr[i] = parseFloat((this.custHr[i] * this.avgPound).toFixed(2));
    }
  },
  numPoundCup: function() {
    for (var i = 0; i < time.length; i++) {
      this.poundCup[i] = parseFloat((this.cupHr[i] / 16).toFixed(2));
    }
  },
  numBothPound: function() {
    for (var i = 0; i < time.length; i++) {
      this.bothPound[i] = parseFloat((this.poundHr[i] + this.poundCup[i]).toFixed(2));
    }
  },
  numEmpHr: function() {
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
      this.totalCup += this.cupHr [i];
      this.totalCup[i] = parseFloat(this.totalCup.toFixed(2));
    }
  },
  totalPoundTGCalc: function () {
    for (var i = 0; i < time.length; i++) {
      this.totalPoundTG += this.poundHr[i];
      this.totalPoundTG = parseFloat(this.totalPoundTG.toFixed(2));
    }
  },
  totalPoundDayCalc: function () {
    for (var i = 0; i < time.length; i++) {
      this.totalPoundDay += this.bothPound[i];
      this.totalPoundDay = parseFloat(this.totalPoundDay.toFixed(2));
    }
  }
};


capHill.randomCustHr ();
capHill.numCupHr ();
capHill.numPoundHr ();
capHill.numPoundCup ();
capHill.numBothPound ();
capHill.numEmpHr ();
capHill.totalCustCalc ();
capHill.totalCupCalc ();
capHill.totalPoundTGCalc ();
capHill.totalPoundDayCalc ();

var seaPub = {
  id: 'seattle public library',
  minCustHr: 9,
  maxCustHr: 45,
  avgCup: 2.6,
  avgPound: 0.02,
  custHr: [], //number of customers per hour
  cupHr: [], //number of cups per hour
  poundHr: [], //total amt of to go pounds per hour
  poundCup: [], //total amt of beans used per hour for cups
  bothPound: [], //total amt of beans for to go and cups
  empHr: [], //total number of employees needed per hour
  totalCust: 0, //sets value to 0 for total customers in a day
  totalCup: 0, //sets value to 0 for total cups sold in a day
  totalPoundTG: 0, //sets value to 0 for total pounds of beans to go in a day
  totalPoundDay: 0, //sets value to 0 for total pounds of beans per day
  //totalEmp: 0, // want to make this function to tell you based on total sales if you can afford that many hours based on a 18 percent labor model

  randomCustHr: function() {
    for (var i = 0; i < time.length; i++) {
      this.custHr[i] = Math.floor(Math.random() * (this.maxCustHr - this.minCustHr) + this.minCustHr);
    }
  },
  numCupHr: function() {
    for (var i = 0; i < time.length; i++) {
      this.cupHr[i] = parseFloat((this.custHr[i] * this.avgCup).toFixed(2));
    }
  },
  numPoundHr: function() {
    for (var i = 0; i < time.length; i++) {
      this.poundHr[i] = parseFloat((this.custHr[i] * this.avgPound).toFixed(2));
    }
  },
  numPoundCup: function() {
    for (var i = 0; i < time.length; i++) {
      this.poundCup[i] = parseFloat((this.cupHr[i] / 16).toFixed(2));
    }
  },
  numBothPound: function() {
    for (var i = 0; i < time.length; i++) {
      this.bothPound[i] = parseFloat((this.poundHr[i] + this.poundCup[i]).toFixed(2));
    }
  },
  numEmpHr: function() {
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
      this.totalCup += this.cupHr [i];
      this.totalCup[i] = parseFloat(this.totalCup.toFixed(2));
    }
  },
  totalPoundTGCalc: function () {
    for (var i = 0; i < time.length; i++) {
      this.totalPoundTG += this.poundHr[i];
      this.totalPoundTG = parseFloat(this.totalPoundTG.toFixed(2));
    }
  },
  totalPoundDayCalc: function () {
    for (var i = 0; i < time.length; i++) {
      this.totalPoundDay += this.bothPound[i];
      this.totalPoundDay = parseFloat(this.totalPoundDay.toFixed(2));
    }
  }
};

seaPub.randomCustHr ();
seaPub.numCupHr ();
seaPub.numPoundHr ();
seaPub.numPoundCup ();
seaPub.numBothPound ();
seaPub.numEmpHr ();
seaPub.totalCustCalc ();
seaPub.totalCupCalc ();
seaPub.totalPoundTGCalc ();
seaPub.totalPoundDayCalc ();

var slu = {
  id: 'south lake union',
  minCustHr: 5,
  maxCustHr: 18,
  avgCup: 1.3,
  avgPound: 0.04,
  custHr: [], //number of customers per hour
  cupHr: [], //number of cups per hour
  poundHr: [], //total amt of to go pounds per hour
  poundCup: [], //total amt of beans used per hour for cups
  bothPound: [], //total amt of beans for to go and cups
  empHr: [], //total number of employees needed per hour
  totalCust: 0, //sets value to 0 for total customers in a day
  totalCup: 0, //sets value to 0 for total cups sold in a day
  totalPoundTG: 0, //sets value to 0 for total pounds of beans to go in a day
  totalPoundDay: 0, //sets value to 0 for total pounds of beans per day
  //totalEmp: 0, // want to make this function to tell you based on total sales if you can afford that many hours based on a 18 percent labor model

  randomCustHr: function() {
    for (var i = 0; i < time.length; i++) {
      this.custHr[i] = Math.floor(Math.random() * (this.maxCustHr - this.minCustHr) + this.minCustHr);
    }
  },
  numCupHr: function() {
    for (var i = 0; i < time.length; i++) {
      this.cupHr[i] = parseFloat((this.custHr[i] * this.avgCup).toFixed(2));
    }
  },
  numPoundHr: function() {
    for (var i = 0; i < time.length; i++) {
      this.poundHr[i] = parseFloat((this.custHr[i] * this.avgPound).toFixed(2));
    }
  },
  numPoundCup: function() {
    for (var i = 0; i < time.length; i++) {
      this.poundCup[i] = parseFloat((this.cupHr[i] / 16).toFixed(2));
    }
  },
  numBothPound: function() {
    for (var i = 0; i < time.length; i++) {
      this.bothPound[i] = parseFloat((this.poundHr[i] + this.poundCup[i]).toFixed(2));
    }
  },
  numEmpHr: function() {
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
      this.totalCup += this.cupHr [i];
      this.totalCup[i] = parseFloat(this.totalCup.toFixed(2));
    }
  },
  totalPoundTGCalc: function () {
    for (var i = 0; i < time.length; i++) {
      this.totalPoundTG += this.poundHr[i];
      this.totalPoundTG = parseFloat(this.totalPoundTG.toFixed(2));
    }
  },
  totalPoundDayCalc: function () {
    for (var i = 0; i < time.length; i++) {
      this.totalPoundDay += this.bothPound[i];
      this.totalPoundDay = parseFloat(this.totalPoundDay.toFixed(2));
    }
  }
};


slu.randomCustHr ();
slu.numCupHr ();
slu.numPoundHr ();
slu.numPoundCup ();
slu.numBothPound ();
slu.numEmpHr ();
slu.totalCustCalc ();
slu.totalCupCalc ();
slu.totalPoundTGCalc ();
slu.totalPoundDayCalc ();

var seaTac = {
  id: 'seatac airport',
  minCustHr: 28,
  maxCustHr: 44,
  avgCup: 1.1,
  avgPound: 0.41,
  custHr: [], //number of customers per hour
  cupHr: [], //number of cups per hour
  poundHr: [], //total amt of to go pounds per hour
  poundCup: [], //total amt of beans used per hour for cups
  bothPound: [], //total amt of beans for to go and cups
  empHr: [], //total number of employees needed per hour
  totalCust: 0, //sets value to 0 for total customers in a day
  totalCup: 0, //sets value to 0 for total cups sold in a day
  totalPoundTG: 0, //sets value to 0 for total pounds of beans to go in a day
  totalPoundDay: 0, //sets value to 0 for total pounds of beans per day
  //totalEmp: 0, // want to make this function to tell you based on total sales if you can afford that many hours based on a 18 percent labor model

  randomCustHr: function() {
    for (var i = 0; i < time.length; i++) {
      this.custHr[i] = Math.floor(Math.random() * (this.maxCustHr - this.minCustHr) + this.minCustHr);
    }
  },
  numCupHr: function() {
    for (var i = 0; i < time.length; i++) {
      this.cupHr[i] = parseFloat((this.custHr[i] * this.avgCup).toFixed(2));
    }
  },
  numPoundHr: function() {
    for (var i = 0; i < time.length; i++) {
      this.poundHr[i] = parseFloat((this.custHr[i] * this.avgPound).toFixed(2));
    }
  },
  numPoundCup: function() {
    for (var i = 0; i < time.length; i++) {
      this.poundCup[i] = parseFloat((this.cupHr[i] / 16).toFixed(2));
    }
  },
  numBothPound: function() {
    for (var i = 0; i < time.length; i++) {
      this.bothPound[i] = parseFloat((this.poundHr[i] + this.poundCup[i]).toFixed(2));
    }
  },
  numEmpHr: function() {
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
      this.totalCup += this.cupHr [i];
      this.totalCup[i] = parseFloat(this.totalCup.toFixed(2));
    }
  },
  totalPoundTGCalc: function () {
    for (var i = 0; i < time.length; i++) {
      this.totalPoundTG += this.poundHr[i];
      this.totalPoundTG = parseFloat(this.totalPoundTG.toFixed(2));
    }
  },
  totalPoundDayCalc: function () {
    for (var i = 0; i < time.length; i++) {
      this.totalPoundDay += this.bothPound[i];
      this.totalPoundDay = parseFloat(this.totalPoundDay.toFixed(2));
    }
  }
};

seaTac.randomCustHr ();
seaTac.numCupHr ();
seaTac.numPoundHr ();
seaTac.numPoundCup ();
seaTac.numBothPound ();
seaTac.numEmpHr ();
seaTac.totalCustCalc ();
seaTac.totalCupCalc ();
seaTac.totalPoundTGCalc ();
seaTac.totalPoundDayCalc ();
