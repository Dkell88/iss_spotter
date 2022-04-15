// index.js
const { fetchMyIP , fetchMyGEO } = require('./iss');
let IP = '23.16.13.120';

fetchMyIP((error, ipReturned) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  IP = ipReturned;
  console.log('It worked! Returned IP:' , ipReturned);

});


fetchMyGEO(IP, (error, geoCoor) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned Coor:' , geoCoor);
});