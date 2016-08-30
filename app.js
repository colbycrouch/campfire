var time = ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','8:00pm'];
var coffeeShops = [];
var dailyBean = 0;
var dailyEmp = 0;
var hourBean = [];
var hourEmp = [];
var beanTableEl = document.getElementById('bean');
var baristaTableEl = document.getElementById('barista');

function CoffeeShop(name, minCustHr, maxCustHr, avgCupHr, avgPound) {
  this.name = name;
  this.minCustHr = minCustHr;
  this.maxCustHr = maxCustHr;
  this.avgCupHr = avgCupHr;
  this.avgPound = avgPound;
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

CoffeeShop.prototype.calculations = function() {
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

function renderTableHeader(tableElement, colTwoHeader) {
  var trEl = document.createElement('tr');
  var thEl = [];
  thEl[0] = document.createElement('th');
  thEl[0].classList.add('colOne');
  thEl[1] = document.createElement('th');
  thEl[1].classList.add('colTwo');
  thEl[1].textContent = 'Totals';
  thEl[0].textContent = 'Locations';
  thEl.textContent = colTwoHeader;
  trEl.appendChild(thEl[0]);
  trEl.appendChild(thEl[1]);
  for (var i = 0; i < time.length; i++) {
    thEl[i + 2] = document.createElement('th');
    thEl[i + 2].textContent = time[i];
    trEl.appendChild(thEl[i + 2]);
  }
  tableElement.appendChild(trEl);
}

CoffeeShop.prototype.render = function(tableElement, total, hour) {
  var trEl = document.createElement('tr');
  var tdEl = [];
  for (var i = 0; i < time.length + 2; i++) {
    tdEl[i] = document.createElement('td');
  }
  tdEl[0].textContent = this.name;
  trEl.appendChild(tdEl[0]);
  tdEl[1].textContent = total;
  trEl.appendChild(tdEl[1]);
  for (i = 0; i < time.length; i++){
    tdEl[i + 2].textContent = hour[i];
    trEl.appendChild(tdEl [i + 2]);
  }
  tableElement.appendChild(trEl);
};

function totalCalc() {
  dailyBean = 0;
  dailyEmp = 0;
  hourBean = [];
  hourEmp = [];
  for (var i = 0; i < coffeeShops.length; i++) {
    dailyBean += coffeeShops[i].totalPoundDay;
    dailyEmp += coffeeShops[i].totalEmpHr;
  }
  dailyBean = parseFloat(dailyBean.toFixed(2));
  dailyEmp = parseFloat(dailyEmp.toFixed(2));
  for (i = 0; i < time.length; i++) {
    var tempBean = 0;
    var tempEmp = 0;
    for (var j = 0; j < coffeeShops.length; j++) {
      tempBean += (coffeeShops[j].bothPound[i]);
      tempEmp += (coffeeShops[j].empHr[i]);
    }
    hourBean.push(parseFloat(tempBean.toFixed(2)));
    hourEmp.push(parseFloat(tempEmp.toFixed(2)));
  }
}

function renderTotal(tableElement, dailyTotal, hourTotal) {
  var trEl = document.createElement('tr');
  trEl.classList.add('totalsRow');
  var tdEl = [];
  tdEl[0] = document.createElement('td');
  tdEl[0].textContent = 'Totals';
  trEl.appendChild(tdEl[0]);
  tdEl[1] = document.createElement('td');
  tdEl[1].textContent = dailyTotal;
  trEl.appendChild(tdEl[1]);
  for (var i = 0; i < time.length; i++) {
    tdEl[i + 2] = document.createElement('td');
    tdEl[i + 2].textContent = hourTotal[i];
    trEl.appendChild(tdEl[i + 2]);
  }
  tableElement.appendChild(trEl);
}

coffeeShops[0] = new CoffeeShop('Pike Place Market', 14, 35, 1.2, 0.34);
coffeeShops[1] = new CoffeeShop('Capitol Hill',12, 28, 3.2, 0.03);
coffeeShops[2] = new CoffeeShop('Seattle Public Library',9, 45, 2.6, 0.02);
coffeeShops[3] = new CoffeeShop('South Lake Union',5, 18, 1.3, 0.04);
coffeeShops[4] = new CoffeeShop('Sea-Tac Airport', 28, 44, 1.1, 0.41);

renderTableHeader(beanTableEl, 'Daily Location Totals');
renderTableHeader(baristaTableEl, 'Total Employee Hours');

function renderMaster (shopNum) {
  for (i = shopNum; i < coffeeShops.length; i++) {
    coffeeShops[i].calculations();
    coffeeShops[i].render(beanTableEl, coffeeShops[i].totalPoundDay, coffeeShops[i].bothPound);
    coffeeShops[i].render(baristaTableEl, coffeeShops[i].totalEmpHr, coffeeShops[i].empHr);
  }
  totalCalc();
  renderTotal(beanTableEl, dailyBean, hourBean);
  renderTotal(baristaTableEl, dailyEmp, hourEmp);
}
renderMaster(0);

var shopForm = document.getElementById('shopForm');

function genCoffeeShop(event) {
  event.preventDefault();
  var formName = event.target.name.value;
  var formMinCustHr = parseFloat(event.target.minCustHr.value);
  var formMaxCustHr = parseFloat(event.target.maxCustHr.value);
  var formAvgCupHr = parseFloat(event.target.avgCupHr.value);
  var formAvgPound = parseFloat(event.target.avgPound.value);
  if (!formName || !formMinCustHr || !formMaxCustHr || !formAvgCupHr || !formAvgPound) {
    alert('input correct data, or the form will not work');
    shopForm.reset();
    return;
  }
  coffeeShops.push(new CoffeeShop(formName, formMinCustHr, formMaxCustHr, formAvgCupHr, formAvgPound));
  beanTableEl.removeChild(document.getELementByClassName('totalsRow')[0]);
  baristaTableEl.removeChild(document.getElementsByClassName('totalsRow')[0]);
  renderMaster(coffeeShops.length - 1);      //Rerun the master render function
  shopForm.reset();
}

shopForm.addEventListener('submit', genCoffeeShop);
