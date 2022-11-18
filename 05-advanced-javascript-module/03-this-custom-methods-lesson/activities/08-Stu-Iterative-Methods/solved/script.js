var originalArray = [1, 3, 2, 5, 10];

// doubledArray is equal to a new array of numbers multiplied by 2 and returned by map(). map() will use an anonymous function as a condition. 
var doubledArray = originalArray.map(function(data) {
  // The anonymous function returns each number multiplied by 2. The returned result is added to a new array.
  return data * 2;
});

console.log(doubledArray);
console.log(originalArray);


// Iterate through the originalArray creating a new array which contains each element * 3
var tripledArray = originalArray.map(function(data) {
  return data * 3
});

// Iterate through the originalArray creating a new array of "odd" or "even" strings using the modulus operator (div by 2 is "even", remainder is "odd")
var oddOrEven = originalArray.map(function(num) {
  if (num % 2 === 0) {
    return 'even'
  } else {
    return 'odd'
  }
});
