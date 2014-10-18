SSP.Todo = {
  setUp: function() {
    var self = this;

    self.buildTasksList(self.Requests.getTodoList()); // accessing module in another file 
    self.submitTask();
  },
  submitTask : function() {
    var self = this,
        form = document.querySelector('#todo-form'),
        taskNameInput = document.querySelector('#new-todo');

    form.addEventListener('submit', function(e) {
      e.preventDefault();

      if (taskNameInput.value.trim().length > 0) {
        var todoList = SSP.Todo.Requests.getTodoList(),
            data = {};

        data.id = todoList.length + 1; 
        data.taskName = taskNameInput.value;
        taskNameInput.value = '';
        todoList.push(data);

        self.Requests.setTodoList(todoList); // save changes (accessing module in another file)
        self.buildTasksList(self.Requests.getTodoList()); // build todo list again and accessing module in another file 
      }else{
        taskNameInput.value = '';
      }
    }, false);
  },
  buildTasksList : function(todoElements){
    var self = this,
        main = document.querySelector('#main'),
        previousTodoContainer = document.querySelector('#todo-list');
        todoContainer = document.createElement('ul'),
        todoElements = todoElements.reverse(),
        todoItem = ' ';

    if (previousTodoContainer)
      previousTodoContainer.remove();

    todoContainer.setAttribute('id', 'todo-list');

    for (var i = 0; i < todoElements.length; i++) {
      if (todoElements[i].checked){
        todoItem += '<li class="completed">';
        todoItem += '<div>';
        todoItem += '<input class="toggle" type="checkbox" data-id='+ todoElements[i].id +' checked>';
      }else{
        todoItem += '<li>';
        todoItem += '<div>';
        todoItem += '<input class="toggle" type="checkbox" data-id='+ todoElements[i].id +'>';
      }

      todoItem += '<label>'+ todoElements[i].taskName +'</label>';
      todoItem += '<button class="destroy" data-id='+ todoElements[i].id +'></button>';
      todoItem += '</div>';
      todoItem += '</li>';
    };

    todoContainer.innerHTML = todoItem ;
    main.insertBefore(todoContainer, document.querySelector('#main label'));

    self.todoCounter(todoElements);
    self.onDeleteTask();
    self.onCompleteTask();
  },
  onDeleteTask : function() {
    var self = this,
        deleteTaskBtn = document.querySelectorAll('.destroy');
    
    for (var i = 0; i < deleteTaskBtn.length; i++) {
      deleteTaskBtn[i].addEventListener('click', function(e){

        var todoList = SSP.Todo.Requests.getTodoList();
       
        for (var i = 0; i < todoList.length; i++) {
          if (todoList[i].id === parseInt(e.currentTarget.getAttribute('data-id'))) {
            todoList.splice([i], 1);
            break;
          };
        };
        self.Requests.setTodoList(todoList); // save changes (accessing module in another file)
        self.buildTasksList(todoList); // accessing module in another file 
      }); 
    };
  },
  onCompleteTask : function() {
    var self = this,
        todoList = SSP.Todo.Requests.getTodoList(),
        checkbox = document.querySelectorAll('.toggle');

    for (var i = 0; i < checkbox.length; i++) {
      checkbox[i].addEventListener('click', function(e) {
        var task = e.currentTarget.parentNode.parentNode;

        if (this.checked){
          for (var i = 0; i < todoList.length; i++) {
            if (todoList[i].id === parseInt(e.currentTarget.getAttribute('data-id')))
              todoList[i].checked = true;
          };
          
          task.classList.add('completed');
        }else{
          for (var i = 0; i < todoList.length; i++) {
            if (todoList[i].id === parseInt(e.currentTarget.getAttribute('data-id')))
              todoList[i].checked = false;
          };

          task.classList.remove('completed');
        }

        self.Requests.setTodoList(todoList); // save changes (accessing module in another file)
      });
    };
  },
  todoCounter : function(todoList){
    var display = document.querySelector('#todo-count strong'),
        counter = 0;

    for (var i = 0; i < todoList.length; i++) {
      if (todoList[i].checked)
        counter--;
      else
        counter++;
    };
    display.innerHTML = (counter < 0)? 0 : counter;
  }
}