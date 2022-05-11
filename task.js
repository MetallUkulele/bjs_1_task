function solveEquation(a, b, c) {
  let arr;
  let discriminant = b**2 - 4 * a * c;
  let discriminantRootX;
  let discriminantRootY;

  switch (discriminant) {
    case discriminant < 0:
      arr = [];
      break;
      
    case discriminant === 0:
      discriminantRootX = -b / (2*a); 
      arr = [discriminantRootX];
      break;

    case discriminant > 0:
      discriminantRootX = (-b + Math.sqrt(d)) / (2 * a);
      discriminantRootY = (-b - Math.sqrt(d)) / (2 * a);
      arr = [discriminantRootX, discriminantRootY];
      break;  
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
