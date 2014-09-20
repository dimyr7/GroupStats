//Get 1 page of 5 groups called groups
var name = ["","","","",""];
var message = [0,0,0,0,0];
for(i=0;i<5;i++)
{
	name[i] = groups.response[i].name;
	message[i] = groups.response[i].messages.count;
}
