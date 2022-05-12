'use strict';

function solveEquation(a, b, c) {
  let arr = [];
  const discriminant = b**2 - 4 * a * c;
  let discriminantRootX;
  let discriminantRootY;

  if (discriminant < 0) {
    arr = [];
  } else if (discriminant === 0) {
    discriminantRootX = -b / (2 * a);
    arr.push(discriminantRootX);
  } else {
    discriminantRootX = (-b + Math.sqrt(discriminant) ) / (2 * a);
    discriminantRootY = (-b - Math.sqrt(discriminant) ) / (2 * a);
    arr.push(discriminantRootX, discriminantRootY);
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {

  let totalAmount;
  let creditBody = amount - contribution;
  let monthlyPercent = percent / 12 / 100;
  let presentDate = new Date();
  let monthsInMileseconds = date.getTime() - presentDate.getTime()
  let monthsToPay = Math.floor(monthsInMileseconds / 2592000000);
    
  let monthlyPayment = creditBody * (monthlyPercent + (monthlyPercent / (((1 + monthlyPercent)**monthsToPay) - 1)));

  totalAmount = monthlyPayment * monthsToPay;
  console.log(+(totalAmount.toFixed(2)));
  return +(totalAmount.toFixed(2));
}
