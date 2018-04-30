console.log('js');

var app = angular.module('ToDoApp', []);

app.controller('TaskController', ['$http', function($http) {
    console.log('TaskController running');

    var self = this;

    self.newTask = {};

    self.addTask = function() {
        console.log('adding new task', self.newTask);
        $http({
            method: 'POST',
            url: '/task',
            data: self.newTask
        }).then(function(response) {
            console.log('successful post');
        }).catch(function (error) {
            console.log('error on post to /task', error);
        })
    };
}]);