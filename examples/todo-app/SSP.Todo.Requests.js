SSP.Todo.Requests = {
  setUp: function() {
    var self = this;
  },
  getTodoList : function() {
    if (localStorage.getItem('todo-list'))
      return JSON.parse(localStorage.getItem('todo-list'));  // return a []
    else
      localStorage.setItem('todo-list', '[]');
  },
  setTodoList : function(parameter) {
    if (localStorage.getItem('todo-list'))
      localStorage.setItem('todo-list', JSON.stringify(parameter)); // save changes
  }
}