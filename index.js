var app = angular.module('BruleApp', ['AppCtrls', "ngRoute", 'ngAnimate']);
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.config([
	"$routeProvider", //index in the array
	"$locationProvider", // index
	function($routeProvider, $locationProvider) {
		$routeProvider.when("/", { //route
			templateUrl: "views/index.html", //render
			controller: "AppCtrl" //provides data for that view
		}).when("/about", {
			templateUrl: "views/about.html"
		}).when("/brule", {
			templateUrl: "views/brule.html"
		}).when("/perseus", {
			templateUrl: "views/perseus.html",
			controller: "PageOne"
		}).when("/andromeda", {
			templateUrl: "views/andromeda.html"
		// }).when("/doughnut/:id", {
		// 	templateUrl: "views/doughtnut.html",
		// 	controller: "DoughnutShowCtrl"
		}).otherwise({
			templateUrl: "views/404.html"
		});

		$locationProvider.html5Mode(false).hashPrefix('!');
	}
]);

app.listen(process.env.PORT || 3000)