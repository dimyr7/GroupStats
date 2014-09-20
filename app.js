
var top_ten = getTopTen();
getTopFriends();
var app = angular.module('stats', []);
var me = getMyInfo();
app.controller('user', ['$scope', function($scope) {
  $scope.username = me.name;
}]);
app.controller('M1', ['$scope', function($scope) {
  $scope.text = top_ten[0].text.length>20?top_ten[0].text.substring(0,22)+"...":top_ten[0].text;
  $scope.name = top_ten[0].name;
  $scope.group = (new Date(top_ten[0].created_at*1000).toString().substring(0,24)); 
}]);
app.controller('M2', ['$scope', function($scope) {
  $scope.text = top_ten[1].text.length>20?top_ten[1].text.substring(0,22)+"...":top_ten[1].text;
  $scope.name = top_ten[1].name;
  $scope.group = (new Date(top_ten[1].created_at*1000).toString().substring(0,24));
}]);
app.controller('M3', ['$scope', function($scope) {
  $scope.text = top_ten[2].text.length>20?top_ten[2].text.substring(0,22)+"...":top_ten[2].text;
  $scope.name = top_ten[2].name;
  $scope.group = (new Date(top_ten[2].created_at*1000).toString().substring(0,24)); 
}]);
app.controller('M4', ['$scope', function($scope) {
  $scope.text = top_ten[3].text.length>20?top_ten[3].text.substring(0,22)+"...":top_ten[3].text;
  $scope.name = top_ten[3].name;
  $scope.group = (new Date(top_ten[3].created_at*1000).toString().substring(0,24));
}]);
app.controller('M5', ['$scope', function($scope) {
  $scope.text = top_ten[4].text.length>20?top_ten[4].text.substring(0,22)+"...":top_ten[4].text;
  $scope.name = top_ten[4].name;
  $scope.group = (new Date(top_ten[4].created_at*1000).toString().substring(0,24));
}]);
app.controller('M6', ['$scope', function($scope) {
  $scope.text = top_ten[5].text.length>20?top_ten[5].text.substring(0,22)+"...":top_ten[5].text;
  $scope.name = top_ten[5].name;
  $scope.group = (new Date(top_ten[5].created_at*1000).toString().substring(0,24));
}]);
app.controller('M7', ['$scope', function($scope) {
  $scope.text = top_ten[6].text.length>20?top_ten[6].text.substring(0,22)+"...":top_ten[6].text;
  $scope.name = top_ten[6].name;
  $scope.group = (new Date(top_ten[6].created_at*1000).toString().substring(0,24));
}]);
app.controller('M8', ['$scope', function($scope) {
  $scope.text = top_ten[7].text.length>20?top_ten[7].text.substring(0,22)+"...":top_ten[7].text;
  $scope.name = top_ten[7].name;
  $scope.group = (new Date(top_ten[7].created_at*1000).toString().substring(0,24));
}]);
app.controller('M9', ['$scope', function($scope) {
  $scope.text = top_ten[8].text.length>20?top_ten[8].text.substring(0,22)+"...":top_ten[8].text;
  $scope.name = top_ten[8].name;
  $scope.group = (new Date(top_ten[8].created_at*1000).toString().substring(0,24));
}]);



app.controller('F1', ['$scope', function($scope) {
  $scope.name = 'White Nick';
  $scope.nummess = '32,000';
  $scope.hpic = 'https://i.groupme.com/1280x1280.jpeg.994974e0a5c0013158ce22000b208f7b'; 
}]);
app.controller('F2', ['$scope', function($scope) {
  $scope.name = 'White Nick';
  $scope.nummess = '32,000';
  $scope.hpic = 'Lakehouse'; 
}]);
app.controller('F3', ['$scope', function($scope) {
  $scope.name = 'White Nick';
  $scope.nummess = '32,000';
  $scope.hpic = 'Lakehouse'; 
}]);
app.controller('F4', ['$scope', function($scope) {
  $scope.name = 'White Nick';
  $scope.nummess = '32,000';
  $scope.hpic = 'Lakehouse'; 
}]);
app.controller('F5', ['$scope', function($scope) {
  $scope.name = 'White Nick';
  $scope.nummess = '32,000';
  $scope.hpic = 'Lakehouse'; 
}]);
app.controller('F6', ['$scope', function($scope) {
  $scope.name = 'White Nick';
  $scope.nummess = '32,000';
  $scope.hpic = 'Lakehouse'; 
}]);
app.controller('F7', ['$scope', function($scope) {
  $scope.name = 'White Nick';
  $scope.nummess = '32,000';
  $scope.hpic = 'Lakehouse'; 
}]);
app.controller('F8', ['$scope', function($scope) {
  $scope.name = 'White Nick';
  $scope.nummess = '32,000';
  $scope.hpic = 'Lakehouse'; 
}]);


