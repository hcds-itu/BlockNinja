
class JsonData {
    static jsonObj

    constructor() {
        JsonData.jsonObj = {};
    }

    static addData(keys, values) {
        // set first indicators
        let keyColor = values[0];
        let gameTry = values[1].toString();
        if (!JsonData.jsonObj.hasOwnProperty(keyColor)) {
            JsonData.jsonObj[keyColor] = {}
        }
        if (!JsonData.jsonObj[keyColor].hasOwnProperty(gameTry)) {
            JsonData.jsonObj[keyColor][gameTry] = {}
        }
        
        for (let i = 2; i < keys.length; i++) {
            let key = keys[i];
            JsonData.jsonObj[keyColor][gameTry][key] = values[i];
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
    }   
}

module.exports = {
    JsonData
};