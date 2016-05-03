angular.module('app')
    .config(function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home',{
                url:'/home',
                templateUrl:'home/home.html',
                controller:"HomeCtrl"
            })
            .state('profile',{
                url:'/profile',
                templateUrl:'profile/profile.html',
                controller:"profileCtrl",
                controller: "pushCtrl"
            })
            .state('about',{
                url:'/about',
                templateUrl:'about/about.html',
                controller:"AboutCtrl"
            });
    })
    .service("profileInfo", function profileInfo() {
        var info = this;

        info.message = "User_Name";
    });
