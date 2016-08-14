var time = ['8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','8:00pm'];

var pikePlace = {
  id: 'pike place market',
  minCustHr: 14,
  maxCustHr: 35,
  avgCupHr: 1.2,
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
  randomCupHr: function() {
    for (var i = 0; i < time.length; i++) {
      this.cupHr[i] = parseFloat((this.cupHr[i] * this.avgCupHr).toFixed(2));
    }
  },
  randomPoundHr: function() {
    for (var i = 0; i < time.length; i++) {
      this.poundHr[i] = parseFloat((this.custHr[i] * this.avgPound).toFixed(2));
    }
  },
  randomPoundCup: function() {
    for (var i = 0; i < time.length; i++) {
      this.poundCup[i] = parseFloat((this.cupHr[i] / 16).toFixed(2));
    }
  },
  randomBothPound: function() {
    for (var i = 0; i < time.length; i++) {
      this.bothPound[i] = parseFloat((this.poundHr[i] + this.poundCup[i]).toFixed(2));
    }
  },
  randomEmpHr: function() {
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


pikePlace.randomCustHr ();
pikePlace.randomCupHr ();
pikePlace.randomPoundHr ();
pikePlace.randomPoundCup ();
pikePlace.randomBothPound ();
pikePlace.randomEmpHr ();
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
  avgCupHr: 3.2,
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
      this.totalPoundDayCalc += this.bothPound[i];
      this.totalPoundDayCalc = parseFloat(this.totalPoundDay.toFixed(1));
    }
  }
};

capHill.randomCustHr ();
capHill.cupHr ();
capHill.poundHr ();
capHill.poundCup ();
capHill.bothPound ();
capHill.empHr ();
capHill.totalCustCalc ();
capHill.totalCupCalc ();
capHill.totalPoundTGCalc ();
capHill.totalPoundDayCalc ();

var seaPub = {
  id: 'seattle public library',
  minCustHr: 9,
  maxCustHr: 45,
  avgCupHr: 2.6,
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
      this.totalPoundDayCalc += this.bothPound[i];
      this.totalPoundDayCalc = parseFloat(this.totalPoundDay.toFixed(1));
    }
  }
};

seaPub.randomCustHr ();
seaPub.cupHr ();
seaPub.poundHr ();
seaPub.poundCup ();
seaPub.bothPound ();
seaPub.empHr ();
seaPub.totalCustCalc ();
seaPub.totalCupCalc ();
seaPub.totalPoundTGCalc ();
seaPub.totalPoundDayCalc ();

var slu = {
  id: 'south lake union',
  minCustHr: 5,
  maxCustHr: 18,
  avgCupHr: 1.3,
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
      this.totalPoundDayCalc += this.bothPound[i];
      this.totalPoundDayCalc = parseFloat(this.totalPoundDay.toFixed(1));
    }
  }
};


slu.randomCustHr ();
slu.cupHr ();
slu.poundHr ();
slu.poundCup ();
slu.bothPound ();
slu.empHr ();
slu.totalCustCalc ();
slu.totalCupCalc ();
slu.totalPoundTGCalc ();
slu.totalPoundDayCalc ();

var seaTac = {
  id: 'seatac airport',
  minCustHr: 28,
  maxCustHr: 44,
  avgCupHr: 1.1,
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
      this.totalPoundDayCalc += this.bothPound[i];
      this.totalPoundDayCalc = parseFloat(this.totalPoundDay.toFixed(1));
    }
  }
};

seaTac.randomCustHr ();
seaTac.cupHr ();
seaTac.poundHr ();
seaTac.poundCup ();
seaTac.bothPound ();
seaTac.empHr ();
seaTac.totalCustCalc ();
seaTac.totalCupCalc ();
seaTac.totalPoundTGCalc ();
seaTac.totalPoundDayCalc ();
