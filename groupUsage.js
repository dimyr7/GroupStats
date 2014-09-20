function getTopGroups(){
	var gmurl = "https://api.groupme.com/v3/";
	var token = "?token=bcb9df401b470132915c464450d26530";
	var topGroups = [];
	var req = new XMLHttpRequest();
	req.open('GET', gmurl+"groups"+token+"&per_page=50", false);
	req.send(null);
	if(req.status==200){
		var s = JSON.parse(req.responseText);
		for(var i = 0; i < s.response.length; i++){
			topGroups.push(s.response[i]);
		}
	}
	topGroups.sort(function(a,b){
		return b.messages.count-a.messages.count;
	});
	return topGroups;
	/*for(var i = 0; i < 5; i++){
		console.log(topGroups[i].messages.count);
	}*/
	//console.log($.urlParam(token));
};


/*
$.urlParam = function(name){
    	var results = new RegExp('[\?&amp;]' + name + '=([^&amp;#]*)').exec(window.location.href);
    	return results[1] || 0;
	}
*/


/*
//Get 1 page of 5 groups called groups
var name = ["","","","",""];
var message = [0,0,0,0,0];
for(i=0;i<5;i++)
{
	name[i] = groups.response[i].name;
	message[i] = groups.response[i].messages.count;
}
*/