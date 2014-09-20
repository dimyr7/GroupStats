
var top_ten = getTopTen();
console.log(top_ten);
var app = angular.module('stats', []);
app.controller('user', ['$scope', function($scope) {
  $scope.username = 'btmoore95';
}]);
app.controller('M1', ['$scope', function($scope) {
  $scope.text = top_ten[0].text;
  $scope.name = 'Ben';
  $scope.group = 'Lakehouse'; 
}]);
app.controller('M2', ['$scope', function($scope) {
  $scope.text = 'Hi, EAT SHIT BITCH';
  $scope.name = 'Bill';
  $scope.group = '4TS'; 
}]);
app.controller('M3', ['$scope', function($scope) {
  $scope.text = "Hi, weird sex things...";
  $scope.name = 'Dima';
  $scope.group = 'Lakehouse'; 
}]);
app.controller('M4', ['$scope', function($scope) {
  $scope.text = "Poop...Poop...poop";
  $scope.name = 'Nate';
  $scope.group = 'Right Now'; 
}]);
app.controller('M5', ['$scope', function($scope) {
  $scope.text = "WTF, Guys what even?";
  $scope.name = 'Jordyn';
  $scope.group = 'Fucked Up'; 
}]);
app.controller('M6', ['$scope', function($scope) {
  $scope.text = "I DONT KNOW ANYMORE";
  $scope.name = 'Ellie';
  $scope.group = 'The OGs'; 
}]);
app.controller('M7', ['$scope', function($scope) {
  $scope.text = "...it is 5:55am";
  $scope.name = 'Ben';
  $scope.group = 'Hackathon'; 
}]);
app.controller('M8', ['$scope', function($scope) {
  $scope.text = "Now it is 6am :(";
  $scope.name = 'Doug';
  $scope.group = 'Who is Doug'; 
}]);
app.controller('M9', ['$scope', function($scope) {
  $scope.text = "GOOD MORNING";
  $scope.name = 'Fuck';
  $scope.group = 'nosleep'; 
}]);

