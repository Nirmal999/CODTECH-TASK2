let Bikers = angular.module("SmartBuyApp", ["SmartBuyCtrl", "SmartBuyfilters", "ngRoute", 
"ngSanitize", "ngQuill"]); 
 
Bikers.config([ 
  "$routeProvider",   "ngQuillConfigProvider",   function ($routeProvider, ngQuillConfigProvider) {     ngQuillConfigProvider.set(); 
 
    $routeProvider       .when("/", {         templateUrl: "./components/about.html", 
        controller: "aboutCtrl", 
      }) 
      .when("/categories", {         templateUrl: "./components/categories.html", 
        controller: "categoriesCtrl", 
      }) 
      .when("/bikes", { // Updated route for bikes 
        templateUrl: "./components/bikes.html", // Assuming you have a separate HTML file for managing bikes         controller: "bikeListCtrl", // Update the controller name accordingly 
      }) 
      .when("/bikes/new", { // Updated route for adding a new bike 
        templateUrl: "./components/NewBike.html", // Assuming you have a separate HTML file for adding a new bike         controller: "BikeAddCtrl", // Update the controller name accordingly 
      }) 
      .when("/bikes/details/:id", { // Updated route for bike details 
        templateUrl: "./components/bikedetail.html", // Assuming you have a separate HTML file for displaying bike details         controller: "bikeDetailCtrl", // Update the controller name accordingly 
      }) 
      .when("/bikes/edit/:id", { // Updated route for editing a bike 
        templateUrl: "./components/bikeedit.html", // Assuming you have a separate HTML file for editing a bike         controller: "bikeEditCtrl", // Update the controller name accordingly 
      }) 
      .otherwise({ templateUrl: "./components/404.html" }); 
  }, ]); 
 
Bikers.run(function ($rootScope, $http, $location) { 
  $http.get("json/about.json").then(function (res) { 
    $rootScope.aboutData = res.data; 
  }); 
  $http.get("json/categories.json").then(function (res) { 
    $rootScope.categories = res.data; 
  }); 
  $http.get("json/bikes.json").then(function (res) { // Updated JSON endpoint for bikes 
    $rootScope.bikes = res.data; // Assuming you have a JSON file named "bikes.json" for storing bike data 
  }); 
 
  $rootScope.$on("$locationChangeSuccess", function () {     console.log($location.path()); 
    $rootScope.page = $location.path(); 
  }); 
}); 
