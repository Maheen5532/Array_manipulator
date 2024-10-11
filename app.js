let array = [];

function displayArray() {
  const arrayDisplay = document.getElementById("display");
  arrayDisplay.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    const element = document.createElement("button");
    element.className = "array-item";
    element.textContent = array[i];
    arrayDisplay.appendChild(element);
  }
}
function addElement() {
  const arrayInput = document.getElementById("input").value;
  if (arrayInput) {
    array.push(arrayInput);
    displayArray();
    document.getElementById("input").value = "";
  }
}
function push() {
  array.push(prompt("Write element to push in array.."));
  displayArray();
  document.getElementById("result-message").textContent =
    "Push() array method add element in last.";
}
function pop() {
  array.pop();
  displayArray();
  document.getElementById("result-message").textContent =
    "Pop() array method remove element in last.";
}
function shift() {
  myArray.shift();
  displayArray();
  document.getElementById("result-message").textContent =
    "shift() array method remove element in start.";
}
function unshift() {
  array.unshift(prompt("Write element to unshift in array.."));
  displayArray();
  document.getElementById("result-message").textContent =
    "Unshift() array method add element in start.";
}
function slice() {
  const start = parseInt(prompt("Enter start index for slice:"));
  const end = parseInt(prompt("Enter end index for slice:"));
  const slicedArray = array.slice(start, end);
  alert("Sliced Array: " + slicedArray);
}

function splice() {
  const index = parseInt(prompt("Enter index to splice:"));
  const count = parseInt(prompt("Enter number of elements to remove:"));
  const removedItems = array.splice(index, count);
  alert("Removed items: " + removedItems);
  displayArray();
}