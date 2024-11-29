////document.addEventListener('DOMContentLoaded', () => {
   // const addButton = document.getElementById('add-todo-btn');
   // const inputField = document.getElementById('todo-input');
   // const todoList = document.getElementById('todo-list');
   // const cardFrontImage = document.querySelector('.card-front img');
  
    //// Array of random image URLs
    //const images = [
    //  'https://via.placeholder.com/300x200?text=Image+1',
    //  'https://via.placeholder.com/300x200?text=Image+2',
    //  'https://via.placeholder.com/300x200?text=Image+3',
     // 'https://via.placeholder.com/300x200?text=Image+4',
     // 'https://via.placeholder.com/300x200?text=Image+5'
   // ];
  
    //// Set a random image on page load
   //if (cardFrontImage) {
    //  const randomImage = images[Math.floor(Math.random() * images.length)];
    //  cardFrontImage.src = randomImage;
     // cardFrontImage.alt = "Random Card Image"; // Accessibility improvement
    //}
  
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

