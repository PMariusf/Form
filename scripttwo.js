// Create a new list item
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("todo-input").value.trim(); // Use correct ID and trim whitespace
  if (inputValue === '') {
    alert("You must write something!");
    return;
  }
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  document.getElementById("todo-list").appendChild(li); // Append to correct UL

  document.getElementById("todo-input").value = ""; // Clear input

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  addCloseFunctionality(); // Apply to new close buttons
}

// Add "close" functionality
function addCloseFunctionality() {
  var close = document.getElementsByClassName("close");
  for (var i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}

// Mouse click event on the "Add" button
document.getElementById("add-todo-btn").addEventListener('click', newElement); // Use correct ID

// Enter key press event on input field
document.getElementById("todo-input").addEventListener('keydown', function (event) {
  if (event.key === 'Enter' || event.keyCode === 13) {
    event.preventDefault(); // Prevent form submission
    newElement(); // Call the same function as button click
  }
});

