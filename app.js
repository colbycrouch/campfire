var time = ['8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','8:00pm'];
var coffeeShop = [];
var beanTableEl = document.getElementById('bean');
var baristaTableEl = document.getElementById('barista');

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
  this.totalEmpHr = 0; //sets value to 0 for total employee hours per day & location
};

CoffeeShop.prototype.calc = function() {
  for (var i = 0; i < time.length; i++) {
    this.custHr[i] = Math.floor(Math.random() * (this.maxCustHr - this.minCustHr) + this.minCustHr);
    this.totalCust += this.custHr[i];
    this.cupHr[i] = parseFloat((this.custHr[i] * this.avgCupHr).toFixed(2));
    this.totalCup += this.cupHr[i];
    this.poundHr[i] = parseFloat((this.custHr[i] * this.avgPound).toFixed(2));
    this.totalPoundTG += this.poundHr[i];
    this.poundCup[i] = parseFloat((this.cupHr[i] / 16).toFixed(2));
    this.bothPound[i] = parseFloat((this.poundHr[i] + this.poundCup[i]).toFixed(2));
    this.totalPoundDay += this.bothPound[i];
    this.empHr[i] = Math.ceil((this.cupHr[i] + this.poundHr[i]) / 30);
    this.totalEmpHr += this.empHr[i];
  }
  this.totalCup = parseFloat(this.totalCup.toFixed(2));
  this.totalPoundTG = parseFloat(this.totalPoundTG.toFixed(2));
  this.totalPoundDay = parseFloat(this.totalPoundDay.toFixed(2));
};

function tableHeader(tableName) {
  var trEl = document.createElement('tr');
  var thEl = [];
  thEl[0] = document.createElement('th');
  thEl[1] = document.createElement('th');
  thEl[0].textContent = 'Locations';
  if (tableName === bean) {
    thEl[1].textContent = 'Daily Location Totals';
  } else {
    thEl[1].textContent = 'Total Employee Hours';
  }
  trEl.appendChild(thEl[0]);
  trEl.appendChild(thEl[1]);
  for (var i = 0; i < time.length; i++) {
    thEl[i + 2] = document.createElement('th');
    thEl[i + 2].textContent = time[i];
    trEl.appendChild(thEl[i + 2]);
  }
  if (tableName === bean) {
    beanTableEl.appendChild(trEl);
  } else {
    baristaTableEl.appendChild(trEl);
  }
}

CoffeeShop.prototype.render = function(tableName) {
  var trEl = document.createElement('tr');
  var tdEl = [];
  for (var i = 0; i < time.length + 2; i++) {
    tdEl[i] = document.createElement('td');
  }
  tdEl[0].textContent = this.name;
  trEl.appendChild(tdEl[0]);
  if (tableName === bean) {
    tdEl[1].textContent = this.totalPoundDay;
    trEl.appendChild(tdEl[1]);
    for ( i = 0; i < time.length; i++) {
      tdEl[i + 2].textContent = this.totalPoundDay[i];
      trEl.appendChild(tdEl[i + 2]);
    }
    beanTableEl.appendChild(trEl);
  } else {
    tdEl[1].textContent = this.totalEmpHr;
    trEl.appendChild(tdEl[1]);
    for ( i = 0; i < time.length; i++) {
      tdEl[i + 2].textContent = this.empHr[i];
      trEl.appendChild(tdEl[i + 2]);
    }
    baristaTableEl.appendChild(trEl);
  }
};

function tableTotal(tableName) {
  var trEl = document.createElement('tr');
  var tdEl = [];
  tdEl[0] = document.createElement('td');
  tdEl[0].textContent = 'Totals';
  trEl.appendChild(tdEl[0]);
  tdEl[1] = document.createElement('td');
  if (tableName === bean) {
    tdEl[1].textContent = parseFloat((coffeeShop[0].totalPoundDay + coffeeShop[1].totalPoundDay + coffeeShop[2].totalPoundDay + coffeeShop[3].totalPoundDay + coffeeShop[4].totalPoundDay).toFixed(2));
    trEl.appendChild(tdEl[1]);
    for (var i = 0; i < time.length; i++) {
      tdEl[i + 2] = document.createElement('td');
      var hrTotal = 0;
      for (var j = 0; j < coffeeShop.length; j++) {
        hrTotal += coffeeShop[j].bothPound[i];
      }
      tdEl[i + 2].textContent = parseFloat(hrTotal.toFixed(2));
      trEl.appendChild(tdEl[i + 2]);
    }
    beanTableEl.appendChild(trEl);
  } else {
    tdEl[1].textContent = parseFloat((coffeeShop[0].totalEmpHr + coffeeShop[1].totalEmpHr + coffeeShop[2].totalEmpHr + coffeeShop[3].totalEmpHr + coffeeShop[4].totalEmpHr).toFixed(2));
    trEl.appendChild(tdEl[1]);
    for ( i = 0; i < time.length; i++) {
      tdEl[i + 2] = document.createElement('td');
      hrTotal = 0;
      for ( j = 0; j < coffeeShop.length; j++) {
        hrTotal += coffeeShop[j].empHr[i];
      }
      tdEl[i + 2].textContent = parseFloat(hrTotal.toFixed(2));
      trEl.appendChild(tdEl[i + 2]);
    }
    baristaTableEl.appendChild(trEl);
  }
}


coffeeShop[0] = new CoffeeShop('pikePlace', 14, 35, 1.2, 0.34);
coffeeShop[1] = new CoffeeShop('capHill',12, 28, 3.2, 0.03);
coffeeShop[2] = new CoffeeShop('seaPub',9, 45, 2.6, 0.02);
coffeeShop[3] = new CoffeeShop('slu',5, 18, 1.3, 0.04);
coffeeShop[4] = new CoffeeShop('seaTac', 28, 44, 1.1, 0.41);

tableHeader(bean);
tableHeader(barista);
for (var i = 0; i < coffeeShop.length; i++) {
  coffeeShop[i].calc();
  coffeeShop[i].render(bean);
  coffeeShop[i].render(barista);
}
tableTotal(bean);
tableTotal(barista);
