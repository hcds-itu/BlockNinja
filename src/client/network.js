
class JsonData {
    static jsonObj

    constructor() {
        this.jsonObj = {};
    }

    static addData(keys, values) {
        for (let i = 0; i < keys.Length; i++) {
            let key = keys[i];
            if (this.jsonObj.hasOwnProperty(key)) {
                this.jsonObj[key].push(values[i]);
            }
            else {
                this.jsonObj[key] = [];
            }
        }
    }

    static removeData() { 
        this.jsonObj = {}
    }

    static storeData(url) {
        fetch(url + "/store_data", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin" : url
            },
            body: this.jsonObj
        })
       .then(response => response.json())
       .then(response => console.log(JSON.stringify(response)))
    }   
}

module.exports = {
    JsonData
};