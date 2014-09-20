function getTopTen(){
	var gmurl = "https://api.groupme.com/v3/";
	var token = "?token=bcb9df401b470132915c464450d26530";
	var allGroups = [];
	var allMesseges = [];
	var finalMess = [];
	var finalGroup = [];
	var req = new XMLHttpRequest();
	req.open('GET', gmurl+"groups"+token, false);
	req.send(null);
	if(req.status==200){
		var s = JSON.parse(req.responseText);
		for(var i = 0; i < s.response.length; i++){
			allGroups.push(s.response[i].id);
		}
		
	}
	/*for(var i =0; i <allGroups.length; i++){
		console.log(allGroups[i]);
	}*/
	for(var i = 0; i < allGroups.length; i++){
		req.open('GET', gmurl+'groups/'+allGroups[i]+'/messages'+token, false);
		req.send(null);
		if(req.status==200){
			var s = JSON.parse(req.responseText);
			for(var j = 0; j < s.response.messages.length; j++){
				allMesseges.push(s.response.messages[j]);
			}
			//console.log("good");
		}
	}
	allMesseges.sort(function(a,b){
		return b.created_at-a.created_at;
	});
	for(var i = 0; i < allMesseges.length; i++){
		//console.log(allMesseges[i].text + (new Date(allMesseges[i].created_at*1000)));
	}
	for(var i = 0; i < 10; i++){
		finalMess[i]=allMesseges[i];
	}
	for(var i = 0; i < finalMess.length; i++){
		//console.log(finalGroup[i]);
	}
	return finalMess; 
};
/*
function getTopTenGroups(){
	var gmurl = "https://api.groupme.com/v3/";
	var token = "?token=bcb9df401b470132915c464450d26530";
	var mess = getTopTen();
	var allGroups = [];
	
	for(var i = 2; i < 3; i++){
		var req = new XMLHttpRequest();
		console.log("ID:"+mess[i].group_id);
		req.open('GET', gmurl+'groups/'+token+'&id='+mess[i].group_id , false);
		req.send(null);
		if(req.status==200){
			//console.log("good");

			var s =JSON.parse(req.responseText);
			console.log(mess[i].group_id + mess[i].text);
			console.log(JSON.stringify(s));
			//console.log(s.response.name);
			allGroups.push(s.response.created_at);
		}		
	}
	for(var i = 0; i < 10; i++){
		//console.log((new Date(allGroups[i])*1000));
	}

};*/