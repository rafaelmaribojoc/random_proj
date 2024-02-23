const searchInputElement = document.getElementById("searchproduct");
const charRemainingIndicator = document.querySelector(
  ".form__char-indicator--remaining"
);

function countInputChar() {
  var searchInputValLength = searchInputElement.value.length;
  var searchInputMaxLength = searchInputElement.maxLength;
  var remainingCharacters = searchInputMaxLength - searchInputValLength;

  charRemainingIndicator.textContent = remainingCharacters;
}

searchInputElement.addEventListener("input", countInputChar);
