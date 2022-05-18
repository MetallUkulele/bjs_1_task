'use strict';

function solveEquation(a, b, c) {
  let arr = [];
  const discriminant = b**2 - 4 * a * c;
  let discriminantRootX;
  let discriminantRootY; 

  if (discriminant > 0) {
    discriminantRootX = (-b + Math.sqrt(discriminant) ) / (2 * a);
    discriminantRootY = (-b - Math.sqrt(discriminant) ) / (2 * a);
    arr.push(discriminantRootX, discriminantRootY);
  } else if (discriminant === 0) {
    discriminantRootX = -b / (2 * a);
    arr.push((-b / (2 * a)));
  } 

  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {

  if (typeof percent !== 'number') {    
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  }

  if (typeof contribution !== 'number') {    
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  }

  if (typeof amount !== 'number') {    
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }
  
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
