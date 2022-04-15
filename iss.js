/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */

const request = require('request');
const fetchMyIP = function(callback) {
  
  const APIurl = "https://api.ipify.org?format=json";
  //const APIurl = "https://api.ipify.org";

  request(APIurl, (reqError, response, IP) => {
    //console.log(response.statusCode);
    if (reqError) {
      callback(reqError, null);
      return;
    }
    if (response.statusCode !== 200) {
      callback(`Status Code ${response.statusCode}`, null);
      return;
    }
    if (!JSON.parse(IP).ip) {
      callback("No IP returned", null);
      return;
    }
    callback(null, JSON.parse(IP).ip);
  });
};

const fetchMyGEO = function(IP ,callback) {
  
  console.log(IP);
  const APIurl = `https://freegeoip.app/json/${IP}`;

  console.log(APIurl);

  request(APIurl, (reqError, response, geoCoor) => {
    //console.log(response.statusCode);
    if (reqError) {
      callback(reqError, null);
      return;
    }
    if (response.statusCode !== 200) {
      callback(`Status Code ${response.statusCode}`, null);
      return;
    }
    // if (!JSON.parse(IP).ip) {
    //   callback("No IP returned", null);
    //   return;
    // }
    const { latitude, longitude } = JSON.parse(geoCoor);

    callback(null, { latitude, longitude });
  });
};




module.exports = { fetchMyIP , fetchMyGEO};
