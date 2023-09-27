// Selecting elements
const taskInput = document.getElementById('task');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText === '') return; // Don't add empty tasks
    
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        ${taskText}
        <button class="delete-btn">X</button>
    `;
    
    taskList.appendChild(listItem);
    taskInput.value = ''; // Clear the input field
    
    // Delete task when the delete button is clicked
    const deleteButton = listItem.querySelector('.delete-btn');
    deleteButton.addEventListener('click', function () {
        listItem.remove();
    });
}

// Event listener for adding tasks
addTaskButton.addEventListener('click', addTask);
taskInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
