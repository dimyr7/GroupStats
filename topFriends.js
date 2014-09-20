var oneWeekBack = new Date();
oneWeekBack.setDate(oneWeekBack.getDate()-7);
//get user me. save the ID
var x = 0; //number of groups counter
var y = 0; //page counter
var a = true;
while(a)
{
	//Get page of 10 groups one page at a time
	for (i=0;i<10;i++)
	{
		if(Date(group[i].updated_at)>=(oneWeekBack))
		{
			x++;
		}
		else
		{
			a=false;
			break;
		}
	}
	y++;
}
//Get single page of x groups

//create an array of messages
messArray = [];
for (i=0;i<x;i++)
{
	y = 0;
	a = true;
	while(a)
	{
		//Get messages of ith group with messages name = mess one page at a time
		for(h;h<20;h++)
		{
			if(Date(mess.response[h].created_at)>=(oneWeekBack))
			{
				if(mess.response[h].user_id!=(/*current user id*/)
				{
				//append message to array of messages messArray
				}
			}
			else
			{
				a = false;
				break;
			}
		}
		y++;
	}
}

var messCount = [];
for (i = 0;i<messArray;i++)
{
	messCount.push(messArray[i].name);
}

messCount.sort();












