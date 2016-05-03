angular.module('app')
    .controller('AboutCtrl',function($scope, profileInfo){
        var about = this;
        about.profileInfo = profileInfo;
        $scope.message='this is about';
    });
