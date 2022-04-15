// index.js
//const  { fetchMyIP , fetchMyGEO, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss');

const { nextISSTimesForMyLocation } = require('./iss');

const converFlyOverToDate = function(flyOver) {

  console.log(`The next ISS flyover times will be:`);
  for (const pass of flyOver) {

    //Another solution for refrence
    // let time = new Date(0);
    // time.setUTCSeconds(pass.risetime);
    
    let time = new Date(pass.risetime * 1000);
  
    console.log(`${time}. The ISS will be over head for ${pass.duration} seconds`);
   
  }
 
};

nextISSTimesForMyLocation((error, flyOver) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  converFlyOverToDate(flyOver);
});




///Original test code

// fetchMyIP((error, ipReturned) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   IP = ipReturned;
//   console.log('It worked! Returned IP:' , ipReturned);

// });

// fetchMyGEO(IP, (error, geoCoor) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned Coor:' , geoCoor);
// });

// fetchISSFlyOverTimes(coords, (error, flyOver) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned flyover:' , flyOver);
// });