// script.js

// Select elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Add task
addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === '') return; // Ignore empty input

  const taskItem = document.createElement('li');
  taskItem.innerHTML = `
    <span>${taskText}</span>
    <div>
      <button class="complete-btn">✔</button>
      <button class="delete-btn">✖</button>
    </div>
  `;

  taskList.appendChild(taskItem);
  taskInput.value = ''; // Clear input
});

// Mark task as complete or delete task
taskList.addEventListener('click', (e) => {
  if (e.target.classList.contains('complete-btn')) {
    e.target.parentElement.parentElement.classList.toggle('complete');
  } else if (e.target.classList.contains('delete-btn')) {
    e.target.parentElement.parentElement.remove();
  }
});
