// Create the route module and name it routeApp
var app = angular.module('routeApp',['ngRoute']);

// Config the routes
app.config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl: 'pages/home.html',
            controller: 'routeCtrl',
            controllerAs: 'rc'
        })
        .when('/about', {
            templateUrl: 'pages/about.html',
            controller: 'aboutController',
            controllerAs: 'ac'
        })
        .when ('/contact', {
            templateUrl: 'pages/contact.html',
            controller: 'contactController',
            controllerAs: 'cc'
        })
        .otherwise ({
            redirectTo: '/'
        })
});

// Create the controllers for the different pages below
app.controller('routeCtrl', function() {
   this.message = 'lorem ipsum';
}).controller('aboutController', function() {
    this.message = 'about page111';
}).controller('contactController', function() {
    this.message = 'contact page111';
});
