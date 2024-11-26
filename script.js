
// Cache DOM elements
const form = document.getElementById("data-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const outputElement = document.getElementById("output");

// Retrieve form data
function getFormData() {
    return {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        message: messageInput.value.trim()
    };
}

// Save form data to localStorage
function saveDataToLocalStorage(data) {
    try {
        localStorage.setItem("name", data.name);
        localStorage.setItem("email", data.email);
        localStorage.setItem("message", data.message);
    } catch (error) {
        console.error("Error saving to localStorage:", error);
        throw new Error("Failed to save data.");
    }
}

// Display confirmation message
function displayConfirmation(data) {
    outputElement.innerHTML = `
        <p>Data saved successfully!</p>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong> ${data.message}</p>
    `;
}

// Add event listener to form
form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission

    const formData = getFormData();

    // Validate form data
    if (!formData.name || !formData.email || !formData.message) {
        outputElement.innerHTML = `<p>Please fill in all fields.</p>`;
        return;
    }

    // Process data
    try {
        saveDataToLocalStorage(formData);
        displayConfirmation(formData);
    } catch (error) {
        outputElement.innerHTML = `<p>Failed to save data. Please try again later.</p>`;
    }
});


//                          //


document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-todo-btn');
    const inputField = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    const cardFrontImage = document.querySelector('.card-front img');
  
    // Array of random image URLs
    const images = [
      'https://via.placeholder.com/300x200?text=Image+1',
      'https://via.placeholder.com/300x200?text=Image+2',
      'https://via.placeholder.com/300x200?text=Image+3',
      'https://via.placeholder.com/300x200?text=Image+4',
      'https://via.placeholder.com/300x200?text=Image+5'
    ];
  
    // Set a random image on page load
    if (cardFrontImage) {
      const randomImage = images[Math.floor(Math.random() * images.length)];
      cardFrontImage.src = randomImage;
      cardFrontImage.alt = "Random Card Image"; // Accessibility improvement
    }
  
    // Function to create a new to-do item
    const createTodoItem = (task) => {
      const listItem = document.createElement('li');
      listItem.className = 'todo-item';
  
      const textSpan = document.createElement('span');
      textSpan.textContent = task;
      textSpan.className = 'todo-text';
      listItem.appendChild(textSpan);
  
      // Edit button
      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.className = 'edit-btn';
      listItem.appendChild(editButton);
  
      // Delete button
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Remove';
      deleteButton.className = 'delete-btn';
      listItem.appendChild(deleteButton);
  
      // Add Edit functionality
      editButton.addEventListener('click', () => {
        const newTask = prompt('Edit your task:', textSpan.textContent);
        if (newTask && newTask.trim()) {
          textSpan.textContent = newTask.trim();
        }
      });
  
      // Add Remove functionality
      deleteButton.addEventListener('click', () => listItem.remove());
  
      return listItem;
    };
  
    // Add task when "Add" button is clicked
    addButton.addEventListener('click', () => {
      const task = inputField.value.trim();
      if (task) {
        const listItem = createTodoItem(task);
        todoList.appendChild(listItem);
        inputField.value = '';
      } else {
        alert('Please enter a valid task.'); // Feedback for empty input
      }
    });
  
    // Add task on Enter keypress
    inputField.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        addButton.click();
      }
    });
  });


//document.getElementById("data-form").addEventListener("submit", function (e) {
 // e.preventDefault(); // Prevent form submission

  // Get form data
 // const name = document.getElementById("name").value;
 // const email = document.getElementById("email").value;
 // const message = document.getElementById("message").value;

  // Save data to localStorage
 // localStorage.setItem("name", name);
 // localStorage.setItem("email", email);
 // localStorage.setItem("message", message);

  // Display confirmation
 // const output = document.getElementById("output");
 // output.innerHTML = `
 //     <p>Data saved successfully!</p>
 //     <p><strong>Name:</strong> ${name}</p>
 //     <p><strong>Email:</strong> ${email}</p>
 //     <p><strong>Message:</strong> ${message}</p>
 // `;
//});
