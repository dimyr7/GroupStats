var x = getParameterByName("access_token"); 
if (x == ""){
  window.location="https://oauth.groupme.com/oauth/authorize?client_id=HvgtfdoiyqVpz9fuHrBGrnb0vCmw0VXnMkXL1cG91NtoETFf";
}

logoutclick(){
  console.log("clicked");
  document.cookie = 'oath.groupme.com=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};
  var t = getSR();
  var top_ten = getTopTen();
  var top_friends = getTopFriends();
  var app = angular.module('stats', []);
  var me = getMyInfo();
app.controller('user', function($scope) {
    $scope.username = me.name;
    $scope.propic_image = me.image_url;
});
app.controller('left', function($scope) {
    $scope.messages = [];
    for(var i = 0; i < top_ten.length && i < 9; ++i){
        $scope.messages[i] = {};
        $scope.messages[i].text = top_ten[i].text.length > 18 ? top_ten[i].text.substring(0,18)+"..." : top_ten[i].text;
        $scope.messages[i].name = top_ten[i].name;
        $scope.messages[i].group = (new Date(top_ten[i].created_at*1000).toString().substring(0,24)); 
    }
});

app.controller('right',function($scope) {
  $scope.friends = [];
  for(var i = 0; i < top_friends.length && i < 8; ++i){
       $scope.friends[i] = {};
       $scope.friends[i].c = top_friends[i].c;
       $scope.friends[i].id = top_friends[i].id; 
       $scope.friends[i].pic = top_friends[i].pic; 

  }
});
