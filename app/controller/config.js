var app = angular.module('myApp', ["ngRoute","720kb.datepicker"]);

app.config(function ($routeProvider) {
    $routeProvider.when("/plan", {
        templateUrl: "app/view/plan.html"
        , controller: "planController"
    }).when("/report", {
        templateUrl: "app/view/report.html"
        , controller: "reportController"
    }).otherwise({
        redirectTo: '/plan'
    });
});