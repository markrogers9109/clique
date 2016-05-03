
angular.module('app')
    .controller('pushCtrl', function pushCtrl(profileInfo) {
        var push = this;

        push.profileInfo = profileInfo;
    })
    .controller('profileCtrl', profileCtrl);
    function profileCtrl($scope, $window){
        $scope.message='hello';
        $scope.things_todo = [];
        $scope.get_todo = function() {
            var string =  $window.localStorage.things_todo;
            $scope.things_todo = string.split(',');
            $scope.keep_todo();
        };
        $scope.push_todo = function(item) {
            $scope.things_todo.push(item);
            $scope.inputModel = '';
            $scope.keep_todo();
        };
        $scope.read = function(input) {
            $scope.inputModel = input;
        };
        $scope.keep_todo = function() {
            $window.localStorage.things_todo = $scope.things_todo;
        };
        $scope.delete = function(index) {
            $scope.things_todo.splice(index, 1);
            $scope.keep_todo();
        };
        $scope.edit = function(index) {
            $scope.things_todo[index] = $scope.inputModel;
            $scope.keep_todo();
        };
}
