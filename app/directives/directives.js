

angular.module('app')
    .directive('brandDir', brandDir);
    function brandDir() {
        var directive = {
            restrict: 'E',
            templateUrl: 'templates/brand.html'
        };
        return directive;
    }



// function list() {
//     var directive = {
//         restrict: 'A',
//         templateUrl: 'templates/list.html'
//     };
//     return directive;
// }
