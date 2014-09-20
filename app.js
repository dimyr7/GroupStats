
var top_ten = getTopTen();
console.log(top_ten);
var app = angular.module('stats', []);
app.controller('user', ['$scope', function($scope) {
  $scope.username = 'btmoore95';
}]);
app.controller('M1', ['$scope', function($scope) {
  $scope.text = top_ten[0].text;
  $scope.name = top_ten[0].name;
  $scope.group = 'Lakehouse'; 
}]);
app.controller('M2', ['$scope', function($scope) {
  $scope.text = top_ten[1].text;
  $scope.name = 'Bill';
  $scope.group = '4TS'; 
}]);
app.controller('M3', ['$scope', function($scope) {
  $scope.text = top_ten[2].text;
  $scope.name = 'Dima';
  $scope.group = 'Lakehouse'; 
}]);
app.controller('M4', ['$scope', function($scope) {
  $scope.text = top_ten[3].text;
  $scope.name = 'Nate';
  $scope.group = 'Right Now'; 
}]);
app.controller('M5', ['$scope', function($scope) {
  $scope.text = top_ten[4].text;
  $scope.name = 'Jordyn';
  $scope.group = 'Fucked Up'; 
}]);
app.controller('M6', ['$scope', function($scope) {
  $scope.text = top_ten[5].text;
  $scope.name = 'Ellie';
  $scope.group = 'The OGs'; 
}]);
app.controller('M7', ['$scope', function($scope) {
  $scope.text = top_ten[6].text;
  $scope.name = 'Ben';
  $scope.group = 'Hackathon'; 
}]);
app.controller('M8', ['$scope', function($scope) {
  $scope.text = top_ten[7].text;
  $scope.name = 'Doug';
  $scope.group = 'Who is Doug'; 
}]);
app.controller('M9', ['$scope', function($scope) {
  $scope.text = top_ten[8].text;
  $scope.name = 'Fuck';
  $scope.group = 'nosleep'; 
}]);

