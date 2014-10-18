'use script';

function createTask(){
  // body...
};

function updateTask(taskID){
  // body...
};

function deleteTask(taskID){
  // body...
};

function completeTask(taskID){
  // body...
};

function taskCounter(tasks){
  // body...
};

function buildTasksList(tasks) {
  // body...
};


var form, completeTaskButton, deleteTaskButton, updateTaskButton;

form = document.querySelector('.submit-task');
completeTaskButton = document.querySelector('.complete-task');
deleteTaskButton = document.querySelector('.delete-task');
updateTaskButton = document.querySelector('.update-task');


form.addEventListener('submit', function(e) {
  createTask(taskName);
  buildTasksList(tasks);
  // body...
});

completeTaskButton.addEventListener('click', function(e) {
  completeTask(taskID);
  buildTasksList(tasks);
  // body...
});

deleteTaskButton.addEventListener('click', function(e) {
  deleteTask(taskID);
  buildTasksList(tasks);
  // body...
});

updateTaskButton.addEventListener('click', function(e) {
  updateTask(taskID);
  buildTasksList(tasks);
  // body...
});