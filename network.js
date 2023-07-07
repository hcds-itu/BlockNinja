function addData(jsonObj, keys, values) {
    for (let i = 0; i < keys.Length; i++) {
        jsonObj[keys[i]] = values[i];
    }
}
function removeData(jsonObj) { 
    jsonObj = {}
}
function storeData(jsonObj) {
	fetch(url + "/store_data", {
		method: "POST",
		headers: {},
		body: jsonObj
	})
   .then(response => response.json())
   .then(response => console.log(JSON.stringify(response)))
}

module.exports = {
    addData,
    removeData,
    storeData
};