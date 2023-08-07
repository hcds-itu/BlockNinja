
class JsonData {
    static jsonObj

    constructor() {
        JsonData.jsonObj = {};
    }

    static addData(keys, values) {
        console.log(values);
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

    static addQA(keys, values) {
        // set first indicators
        for (let i = 0; i < keys.length; i++) {
            let key = keys[i];
            JsonData.jsonObj[key] = values[i];
        }
    }

    static async storeData(url) {
        const response = await fetch(url + "/store_data", {
            method: "POST",
            body: JSON.stringify(JsonData.jsonObj),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
        });
        return response.json;
    }
}

module.exports = {
    JsonData
};