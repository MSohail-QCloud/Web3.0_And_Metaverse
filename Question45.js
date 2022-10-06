// Cars: Write a function that stores information about a car in a Object.
//  The function should always receive a manufacturer and a model name. 
//  It should then accept an arbitrary number of keyword arguments. 
//  Call the function with the required information and two other name-value pairs,
//   such as a color or an optional feature. Print the Object that’s returned to make sure all the
//    information was stored correctly.


function car_data() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}

Car = car_data( "Civic", "White", 1500, );
console.log(Car)
