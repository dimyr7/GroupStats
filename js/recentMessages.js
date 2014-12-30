
function getTopGroups(){
	var gmurl = "https://api.groupme.com/v3/";
	var token = "?token="+getParameterByName("access_token");
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
};
function getMyInfo(){
	var gmurl = "https://api.groupme.com/v3/";
	var token = "?token="+getParameterByName("access_token");
	var req = new XMLHttpRequest();
	req.open('GET', gmurl+"users/me"+token, false);
	req.send(null);
	if(req.status==200){
		var s = JSON.parse(req.responseText);
		return s.response;
	}
}
function getTopTen(){
	var gmurl = "https://api.groupme.com/v3/";
	var token = "?token="+getParameterByName("access_token");
	var allMesseges = [];
	var finalMess = [];
	var allGroups = [];
	var req = new XMLHttpRequest();
	var me = getMyInfo();
	req.open('GET', gmurl+"groups"+token, false);
	req.send(null);
	if(req.status==200){
		var s = JSON.parse(req.responseText);
		for(var i = 0; i < s.response.length; i++){
			allGroups.push(s.response[i].id);
		}
		
	}
	for(var i = 0; i < allGroups.length; i++){
		req.open('GET', gmurl+'groups/'+allGroups[i]+'/messages'+token, false);
		req.send(null);
		if(req.status==200){
			var s = JSON.parse(req.responseText);
			for(var j = 0; j < s.response.messages.length; j++){
				if(s.response.messages[j].text == undefined){
					continue;
				}
				if(me.id!=s.response.messages[j].user_id){
					allMesseges.push(s.response.messages[j]);
				}

			}
		}
	}
	allMesseges.sort(function(a,b){
		return b.created_at-a.created_at;
	});
	for(var i = 0; i < 10; i++){
		finalMess[i]=allMesseges[i];
	}
	return finalMess; 
};
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
};

function getTopFriends(){
	var gmurl = "https://api.groupme.com/v3/";
	var token = "?token="+getParameterByName("access_token");
	var allMesseges = [];
	var me = getMyInfo();
	var req = new XMLHttpRequest();
	var topGroups = getTopGroups();
	var counter = {};
	for(var i = 0; i < 5; i++){
		req.open('GET',gmurl+"groups/"+topGroups[i].id+"/messages"+token+"&limit=100", false);
		req.send(null);
		if(req.status==200){
			var s = JSON.parse(req.responseText);
			for(var j = 0; j < s.response.messages.length; j++){
				if(me.id==s.response.messages[j].user_id){

				}
				else if(s.response.messages[j].name=="GroupMe"){

				}
				else {
					allMesseges.push(s.response.messages[j])
					if(counter[s.response.messages[j].user_id] == undefined){
						counter[s.response.messages[j].user_id]=0;
					}
					counter[s.response.messages[j].user_id]++;
				}
			}
		} 
	}
	var array = [];
	$.each(counter, function(index,value){
		array.push({id:index, c: value});
	});
	
	array.sort(function(a,b){
		return b.c-a.c;
	});
	//console.log(allMesseges.length);
	for(var i = 0; i < array.length; i++){
		for(var j = 0; j < allMesseges.length; j++){
			//console.log(array);
			//console.log(allMesseges[j].user_id);
			if(array[i].id==allMesseges[j].user_id){
				array[i].id=allMesseges[j].name;
				array[i].pic=allMesseges[j].avatar_url;
				break;
			}
		}
	}
	//console.log(array);
	return array;
}

function getSR(){
	var gmurl = "https://api.groupme.com/v3/";
	var token = "?token="+getParameterByName("access_token");
	var req = new XMLHttpRequest();
	var rer = new XMLHttpRequest();
	var d = new Date();
	//console.log(d.toString());
	var day = [new Date(), new Date(), new Date(), new Date(), new Date()];
	day[0].setDate(day[0].getDate()-1);
	day[1].setDate(day[1].getDate()-2);
	day[2].setDate(day[2].getDate()-3);
	day[3].setDate(day[3].getDate()-4);
	day[4].setDate(day[4].getDate()-5);
	var send = [0,0,0,0,0];
	var receive = [0,0,0,0,0];
	var me = getMyInfo();	
	var req = new XMLHttpRequest();
	var groupID = [];
	req.open('GET', gmurl+"groups"+token+"&per_page=50", false);
	req.send(null);
	if(req.status==200){
		var s = JSON.parse(req.responseText);
		for(var i = 0; i < s.response.length; i++){
			groupID.push(s.response[i]);
		}
	}
	groupID.sort(function(a,b){
		return b.messages.count-a.messages.count;
	});
	for(var i = 0; i < groupID.length; i++){
		req.open('GET', gmurl+'groups/'+groupID[i].group_id+'/messages'+token+'&limit=100', false);
		req.send(null);
		if(req.status=200){
			var t = JSON.parse(req.responseText);
			//console.log(t);
			//console.log(t.response.messages.length);
			for(var j = 0; j < t.response.messages.length; j++){
				if(t.response.messages[j]==undefined){continue;}
				var temp = t.response.messages[j];
				//console.log(temp);	
				if((new Date(temp.created_at*1000)) >=day[0]){
					if(temp.user_id==me.id){
						send[0]=send[0]+1;
					}
					else{
						receive[0]++;
					}
				}
				if((new Date(temp.created_at*1000)) >=day[1]){
					if(temp.user_id==me.id){
						send[1]++;
					}
					else{
						receive[1]++;
					}
				}
				if((new Date(temp.created_at*1000)) >=day[2]){
					if(temp.user_id==me.id){
						send[2]++;
					}
					else{
						receive[2]++;
					}
				}
				if((new Date(temp.created_at*1000)) >=day[3]){
					if(temp.user_id==me.id){
						send[3]++;
					}
					else{
						receive[3]++;
					}
				}
				if((new Date(temp.created_at*1000)) >=day[4]){
					if (temp.user_id==me.id) {
						send[4]++;
					}
					else{
						receive[4]++;
					}
				}
			}
		}
	}
	var x = {s:send,r:receive};
	return x;
}