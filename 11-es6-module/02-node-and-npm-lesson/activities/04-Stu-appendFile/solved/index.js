// import fs module
const fs = require('fs');

// appendFile parameters are path, data and a callback, err contains an error if it fails
// mark log.txt as read-only to throw error
fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
  // if there was an error then log it, otherwise log Commit logged
  err ? console.error(err) : console.log('Commit logged!')
);
