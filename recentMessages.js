function getTopTen(){
	var gmurl = "https://api.groupme.com/v3/";
	var token = "?token=bcb9df401b470132915c464450d26530";
	var allGroups = [];
	var allMesseges = [];
	var finalMess = [];
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
			console.log("good");
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
		console.log(finalMess[i].text+(new Date(finalMess[i].created_at*1000)));
	}

});
/*
	$.getJSON(gmurl+"groups"+token, function(data){
		var allGroups = [];
		//console.log(data.response.length);
		for(var i = 0; i < data.response.length; i++){
			allGroups.push(data.response[i]);	
			//console.log(allGroups[i].id);
		}
		// Prints 1 group IDs
		/*for(var i = 0; i < allGroups.length; i++){
			console.log(allGroups[i].id);
		}
		
		console.log(getRecentMess(0));
		function getRecentMess(groupnum){
			$.getJSON(gmurl+"groups/"+allGroups[groupnum].id+"/messages"+token,  function(data2){	
				var allMesseges = [];
				for(var j = 0; j < data2.response.messages.length;j++){
					var temp = data2.response.messages[j];
					allMesseges.push(temp.text);
				}
				/*allMesseges.sort(function(a,b){
					return b[1]-a[1];
				});
				return allMesseges[0];
				//for(var j = 0; j < allMesseges.length; j++){
					//console.log(allMesseges.length);
					//console.log(allMesseges[0]+allMesseges[1]+allMesseges[2]);
				//}	
			});
		}		
		
	});

});
*/
/*
	$.get(url+"groups"+token, function(data){
		var groupID = [];
		for(var i = 0; i < data.response.length; i++){
			var group = data.response[i];
			groupID.push(group.group_id);
		}
		var messages = [];
		for(var i = 0; i < groupID.length; i++){
			//alert(groupID[i]);
			var str = url+"groups/"+groupID[i]+"/messages"+token;
			$.get(url+"groups/"+groupID[i]+"/messages"+token,  function(data2){
				for(var j = 0; j < data2.response.messages.length; j++){
					messages.push(data2.response.messages[j]);
				}
				console.log(i);
					//console.log("hello")
					messages.sort(function(a,b){
						return b.created_at - a.created_at;
					});
					for(var k = 0; k < messages.length; j++){
					var c = new Date(messages[j].created_at*1000);
					console.log(c);
					console.log(messages[k].text + messages[k].created_at);
					}
			});	

			
			
		}
		
	});
});



var groupID = ["1","2","3","4","5","6","7","8","9","10"];
var topTenMesName = ["1","2","3","4","5","6","7","8","9","10"];
var topTenMesText = ["1","2","3","4","5","6","7","8","9","10"];
var topTenMesGroup = ["1","2","3","4","5","6","7","8","9","10"];
var topTenMesCA = [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
for (i=0;i<10;i++)
{
	groupID[i] = groups.response[i].id;
}
ocu

//group_id = groupID[0];
//GET /groups/:group_id/messages !!LIMIT_PARAM = 10!!
var mess = "json OBJ";


for(int i=0;i<10;i++)
{
	topTenMesCA[i] = mess.messages[i].created_at;
	topTenMesName[i] = mess.messages[i].name;
	topTenMesText[i] = mess.messages[i].text;
	topTenMesGroup[i] = groups.response[0].name;
}

for(i=1;i<10;i++)
{
	//group_id = groupID[i];
	//GET /groups/:group_id/messages !!LIMIT_PARAM = 10!!
	var mess = "json obj";
	for (h=0;h<10;h++)
	{
		if (mess.messages[h].created_at<topTenMesCA[h])
		{
			topTenMesCA[h] = mess.messages[h].created_at;
			topTenMesName[h] = mess.messages[h].name;
			topTenMesText[h] = mess.messages[h].text;
			topTenMesGroup[h] = groups.response[i].name;
		}
	}
}
for (c = 0 ; c < ( n - 1 ); c++)
{
	for (d = 0 ; d < n - c - 1; d++)
	{
		if (topTenMesCA[d] > topTenMesCA[d+1]) /* For decreasing order use < 
		{
			swap = topTenMesCA[d];
			topTenMesCA[d] = topTenMesCA[d+1];
			topTenMesCA[d+1] = swap;
			
			swap = topTenMesName[d];
			topTenMesName[d] = topTenMesName[d+1];
			topTenMesName[d+1] = swap;
			
			swap = topTenMesText[d];
			topTenMesText[d] = topTenMesText[d+1];
			topTenMesText[d+1] = swap;
			
			swap = topTenMesGroup[d];
			topTenMesGroup[d] = topTenMesGroup[d+1];
			topTenMesGroup[d+1] = swap;
		}
	}
}
 
*/
