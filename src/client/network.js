
class JsonData {
    static jsonObj

    constructor() {
        JsonData.jsonObj = {};
    }

    static addData(keys, values) {
        console.log(keys.length);
        for (let i = 0; i < keys.length; i++) {
            let key = keys[i];
            if (JsonData.jsonObj.hasOwnProperty(key)) {
                JsonData.jsonObj[key].push(values[i]);
            }
            else {
                JsonData.jsonObj[key] = [values[i]];
            }
        }
    }

    static removeData() { 
        this.jsonObj = {}
    }

    static storeData(url) {
        fetch(url + "/store_data", {
            method: "POST",
            body: JSON.stringify(JsonData.jsonObj)
        })
       .then(response => response.json())
       .then(response => console.log(JSON.stringify(response)))
    }   
}

module.exports = {
    JsonData
};