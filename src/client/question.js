const network = require('./network');
const jsonData = new network.JsonData();

const urlParams = new URLSearchParams(window.location.search);
const encodedJsonData = urlParams.get("data");
const decodedJsonString = decodeURIComponent(encodedJsonData);
const data = JSON.parse(decodedJsonString);

jsonData.jsonObj = data

console.log(JSON.stringify(data));