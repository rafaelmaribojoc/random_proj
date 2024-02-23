// const button = document.querySelector("button");

// button.addEventListener("click", clickedButton);

// function clickedButton() {
//   var buttonIsClicked = (button.textContent = "Tangina mo ba't mo kinlick!");

//   function clickMe() {
//     button.textContent = "Click me!";
//   }

//   if (buttonIsClicked === "Tangina mo ba't mo kinlick!") {
//     button.addEventListener("click", clickMe);
//   }  `
// }

let inputElement = document.querySelector("input");

function getUserInput(rafael) {
    rafael.placeholder = "Search";
    console.log(rafael.placeholder);
}

inputElement.addEventListener("input", getUserInput);
