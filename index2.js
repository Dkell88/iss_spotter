// index2.js

const { nextISSTimesForMyLocation  } = require('./iss_promised');

nextISSTimesForMyLocation()
  .then((passTimes) => {
    convertFlyOverToDate(passTimes);
  })
  .catch((error) => {
    console.log("There was a n error: ", error.message);
  });

const convertFlyOverToDate = function(flyOver) {

  console.log(`The next ISS flyover times will be:`);
  for (const pass of flyOver) {
    let time = new Date(pass.risetime * 1000);
    console.log(`${time}. The ISS will be over head for ${pass.duration} seconds`);
  }
};







// const { nextISSTimesForMyLocation } = require('./iss');



// nextISSTimesForMyLocation((error, flyOver) => {
//   if (error) {
//     return console.log("It didn't work!", error);
//   }
//   converFlyOverToDate(flyOver);
// });
