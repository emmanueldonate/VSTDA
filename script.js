var myApp = angular.module('myApp', []);

myApp.controller('mainController', function ($scope, $filter) {

var vm = this;

vm.todo = [];
vm.addNew = function() {

vm.todo.push(
  {
    todoText: vm.todoInput,
    priority: vm.priority
  });
}

vm.sort = function(sortInput) {
  console.log(sortInput);
  vm.todo = $filter ('orderBy') (vm.todo, sortInput);
}
});
