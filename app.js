
var top_ten = getTopTen();
var top_groups = getTopTenGroups();
//console.log(top_ten);
var app = angular.module('stats', []);
app.controller('user', ['$scope', function($scope) {
  $scope.username = 'btmoore95';
}]);
app.controller('M1', ['$scope', function($scope) {
  $scope.text = top_ten[0].text;
  $scope.name = top_ten[0].name;
  $scope.group = (new Date(top_ten[0].created_at*1000).toString().substring(0,24)); 
}]);
app.controller('M2', ['$scope', function($scope) {
  $scope.text = top_ten[1].text;
  $scope.name = top_ten[1].name;
  $scope.group = (new Date(top_ten[1].created_at*1000).toString().substring(0,24));
}]);
app.controller('M3', ['$scope', function($scope) {
  $scope.text = top_ten[2].text;
  $scope.name = top_ten[2].name;
  $scope.group = (new Date(top_ten[2].created_at*1000).toString().substring(0,24)); 
}]);
app.controller('M4', ['$scope', function($scope) {
  $scope.text = top_ten[3].text;
  $scope.name = top_ten[3].name;
  $scope.group = (new Date(top_ten[3].created_at*1000).toString().substring(0,24));
}]);
app.controller('M5', ['$scope', function($scope) {
  $scope.text = top_ten[4].text;
  $scope.name = top_ten[4].name;
  $scope.group = (new Date(top_ten[4].created_at*1000).toString().substring(0,24));
}]);
app.controller('M6', ['$scope', function($scope) {
  $scope.text = top_ten[5].text;
  $scope.name = top_ten[5].name;
  $scope.group = (new Date(top_ten[5].created_at*1000).toString().substring(0,24));
}]);
app.controller('M7', ['$scope', function($scope) {
  $scope.text = top_ten[6].text;
  $scope.name = top_ten[6].name;
  $scope.group = (new Date(top_ten[6].created_at*1000).toString().substring(0,24));
}]);
app.controller('M8', ['$scope', function($scope) {
  $scope.text = top_ten[7].text;
  $scope.name = top_ten[7].name;
  $scope.group = (new Date(top_ten[7].created_at*1000).toString().substring(0,24));
}]);
app.controller('M9', ['$scope', function($scope) {
  $scope.text = top_ten[8].text;
  $scope.name = top_ten[8].name;
  $scope.group = (new Date(top_ten[8].created_at*1000).toString().substring(0,24));
}]);

