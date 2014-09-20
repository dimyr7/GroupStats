
var top_ten = getTopTen();
//getTopFriends();
var app = angular.module('stats', []);
var me = getMyInfo();

app.controller('user', function($scope) {
    $scope.username = me.name;
    $scope.propic_image = me.image_url;
});
app.controller('left', function($scope) {
    $scope.messages = [];
    for(var i = 0; i < top_ten.length && i < 10; ++i){
        $scope.messages[i] = {};
        $scope.messages[i].text = top_ten[i].text.length > 20 ? top_ten[i].text.substring(0,22)+"..." : top_ten[i].text;
        $scope.messages[i].name = top_ten[i].name;
        $scope.messages[i].group = (new Date(top_ten[i].created_at*1000).toString().substring(0,24)); 
    }
});

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


