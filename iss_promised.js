const request = require('request-promise-native');



const fetchMyIP = function() {
  return request('https://api.ipify.org?format=json');
};

const fetchMyGEO = function(body) {
  const IP = JSON.parse(body).ip;
  return request(`https://freegeoip.app/json/${IP}`);
};

const fetchISSFlyOverTimes = function(body) {
  const { latitude, longitude } = JSON.parse(body);
  return request(`https://iss-pass.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`);
};
const nextISSTimesForMyLocation = function() {
  
  return fetchMyIP()
    .then(fetchMyGEO)
    .then(fetchISSFlyOverTimes)
    .then((data) => {
      const {response} = JSON.parse(data);
      return response;
    });
};




module.exports = { nextISSTimesForMyLocation };









// const fetchMyIP = function(callback) {
//   const APIurl = "https://api.ipify.org?format=json";
//   request(APIurl, (reqError, response, IP) => {
//     if (reqError) {
//       callback(reqError, null);
//       return;
//     }
//     if (response.statusCode !== 200) {
//       callback(`Status Code ${response.statusCode}`, null);
//       return;
//     }
//     if (!JSON.parse(IP).ip) {
//       callback("No IP returned", null);
//       return;
//     }
//     callback(null, JSON.parse(IP).ip);
//   });
// };

// const fetchMyGEO = function(IP ,callback) {
//   const APIurl = `https://freegeoip.app/json/${IP}`;
//   request(APIurl, (reqError, response, geoCoor) => {
//     if (reqError) {
//       callback(reqError, null);
//       return;
//     }
//     if (response.statusCode !== 200) {
//       callback(`Status Code ${response.statusCode}`, null);
//       return;
//     }
//     const { latitude, longitude } = JSON.parse(geoCoor);
//     callback(null, { latitude, longitude });
//   });
// };


// const fetchISSFlyOverTimes = function(coords ,callback) {
//   const APIurl = `https://iss-pass.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`;
//   request(APIurl, (reqError, response, flyOver) => {
//     if (reqError) {
//       callback(reqError, null);
//       return;
//     }
//     if (response.statusCode !== 200) {
//       callback(`Status Code ${response.statusCode}`, null);
//       return;
//     }
//     callback(null,JSON.parse(flyOver).response);
//   });
// };

// const nextISSTimesForMyLocation = function(callback) {
//   let IP = ''; //23.16.13.120';
//   let coords = ''; //{ latitude: 48.4574, longitude: -123.3436 };


//   fetchMyIP((error, IP) => {
//     if (error) {
//       return callback(error, null);
//     }
//     fetchMyGEO(IP, (error, coords) => {
//       if (error) {
//         return callback(error, null);
//       }
//       fetchISSFlyOverTimes(coords, (error, flyOver) => {
//         if (error) {
//           return callback(error, null);
//         }

//         callback(null, flyOver);
//       });
//     });
//   });
// };

// module.exports = { nextISSTimesForMyLocation };
