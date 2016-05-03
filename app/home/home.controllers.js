angular.module('app')
    .controller('HomeCtrl',function($scope){
        $scope.message='this is home';
        $scope.array = [
            {first:'John', last:'Smith', age: 35, show: true},
            {first:'Steve', last:'Young', age: 48, show: false},
            {first:'Joe', last:'Montana', age: 59, show: true}
        ];
        $scope.change = function() {
            angular.forEach($scope.array,
                function(item) {
                if (item.show == true) {
                    item.show = false;
                } else {
                    item.show = true;
                }
            });
        }
});
