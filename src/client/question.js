import "./question.css";

const network = require("./network");
const jsonData = new network.JsonData();

const urlParams = new URLSearchParams(window.location.search);
const encodedJsonData = urlParams.get("data");
const decodedJsonString = decodeURIComponent(encodedJsonData);
const data = JSON.parse(decodedJsonString);

jsonData.jsonObj = data

console.log(JSON.stringify(data));

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
  