import "./question.css";

const url = "https://flask-bninja.ey.r.appspot.com";

const network = require("./network");
const jsonData = new network.JsonData();

const urlParams = new URLSearchParams(window.location.search);
const encodedJsonData = urlParams.get("data");
const decodedJsonString = decodeURIComponent(encodedJsonData);
const data = JSON.parse(decodedJsonString);

network.JsonData.jsonObj = data

function createLikertScale(containerClass, labels) {
    const likertContainers = document.querySelectorAll(`.${containerClass}`);
  
    likertContainers.forEach((container, index) => {
      // Create the ul element for the likert scale
      const likertList = document.createElement("ul");
      likertList.classList.add("likert");
  
      // Loop through the labels and create li elements with radio inputs and labels
      for (let i = labels.length - 1; i >= 0; i--) {
        const labelValue = labels[i].value;
        const labelText = labels[i].text;
  
        const listItem = document.createElement("li");
  
        const input = document.createElement("input");
        input.type = "radio";
        input.name = `likert-${index}`; // Use index to differentiate between likert scales
        input.value = labelValue;
  
        const label = document.createElement("label");
        label.textContent = labelText;
  
        listItem.appendChild(input);
        listItem.appendChild(label);
        likertList.appendChild(listItem);
      }
  
      // Append the likert scale to the container
      container.appendChild(likertList);
    });
}

// Call the function with the likert labels and values
const likertLabels = [
{ value: -3, text: "Strongly Disagree"},
{ value: -2, text: "Disagree"},
{ value: -1, text: "Slightly Disagree"},
{ value: 1, text: "Slightly Agree"},
{ value: 2, text: "Agree"},
{ value: 3, text: "Strongly Agree"},
];

createLikertScale("likertContainer", likertLabels);


// Submitting data

const button = document.getElementById("submit");
const err = document.getElementById("errorNotice");

button.addEventListener("click", () => {
    let keys = [1,2,3,4,5,6,7];
    let values = [];
    // score
    const score = document.getElementById("1").value;
    const scoreInt = parseInt(score);
    if (isNaN(scoreInt) || scoreInt < 0) {
      err.textContent = "Not a valid number in question 1";
      return
    }
    else {
      values.push(scoreInt);
    }
    // color
    const color = document.getElementById("2").value;
    values.push(color);
    // values from likerts    
    const likertContainers = document.querySelectorAll(".likertContainer")
    for (let i = 0; i < likertContainers.length; i++) {
        const container = likertContainers[i];
        const id = container.id;
        const selected = container.querySelector("input[type=\"radio\"]:checked")

        if (selected == null) {
            err.textContent = `Missing answer in statement ${id}`
            return
        }
        else {
          const likertSelectedValue = selected.value;
          values.push(likertSelectedValue)
        }
    }
    // opinion
    const opinion = document.getElementById("7").value
    if (opinion == "") {
      err.textContent = "Missing answer in question 7"
      return
    }
    else {
      values.push(opinion);
    }
    network.JsonData.addQA(keys,values);
    network.JsonData.storeData(url);
    window.location.href = "index.html";
});