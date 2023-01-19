// Exercise 1
const songs = ['Creep', 'Everlong', 'Bulls On Parade', 'Song 2', 'What I Got'];

// use rest operator to initialise newSongs to songs array
const newSongs = [...songs];

// log the content of the newSongs (songs) array
console.log(newSongs);

// Exercise 2
const addition = (x, y, z) => {
  const array = [x, y, z];
  // sum the array by iterating through and combining elements a and b
  // into a single element as the sum a + b
  // 0 is the initialValue which begins at 0
  return array.reduce((a, b) => a + b, 0);
};
// log 6 to the console (1+2+3)
console.log(addition(1, 2, 3));

// use the spread operator to pass any number of arguments
const additionSpread = (...array) => {
  return array.reduce((a, b) => a + b, 0);
};

// log 6 to the console (1+2+3)
console.log(additionSpread(1, 2, 3));

// log 110 to the console (1+2+3+4+100)
console.log(additionSpread(1, 2, 3, 4, 100));
