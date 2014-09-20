//GET /groups
//This returns the ith object's amount of messages.
//Leave at default to get 10 groups
var groups = $.get("https://api.groupme.com/v3/groups?token=YOUR_ACCESS_TOKEN"), {page:1, per_page:10};


var groupID = ["1","2","3","4","5","6","7","8","9","10"];
var topTenMesName = ["1","2","3","4","5","6","7","8","9","10"];
var topTenMesText = ["1","2","3","4","5","6","7","8","9","10"];
var topTenMesGroup = ["1","2","3","4","5","6","7","8","9","10"];
var topTenMesCA = [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
for (i=0;i<10;i++)
{
	groupID[i] = groups.response[i].id;
}


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
		if (topTenMesCA[d] > topTenMesCA[d+1]) /* For decreasing order use < */
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
 



























