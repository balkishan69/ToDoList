// To-Do List JavaScript logic here

const taskInput = document.getElementById('task');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');
const completedList = document.getElementById('completedList');

// Function to create a new task item
function createTaskItem(taskText) {
    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');

    const taskTextElement = document.createElement('div');
    taskTextElement.textContent = taskText;
    taskTextElement.classList.add('task-text');
    taskItem.appendChild(taskTextElement);

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.classList.add('complete-button');
    taskItem.appendChild(completeButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
    taskItem.appendChild(deleteButton);

    return taskItem;
}

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const taskItem = createTaskItem(taskText);

    const completeButton = taskItem.querySelector('.complete-button');
    const deleteButton = taskItem.querySelector('.delete-button');

    completeButton.addEventListener('click', () => {
        taskItem.classList.add('completed');
        completedList.appendChild(taskItem);
    });

    deleteButton.addEventListener('click', () => {
        taskItem.remove();
    });

    taskList.appendChild(taskItem);
    taskInput.value = '';
}

// Add task when button is clicked
addTaskButton.addEventListener('click', addTask);

// Add task when Enter key is pressed
taskInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});
