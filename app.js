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
      if ((this.custHr[i] / 30) >= 1) {
        this.empHr[i] = 2;
      }
      else
        this.empHr[i] = 1;
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
