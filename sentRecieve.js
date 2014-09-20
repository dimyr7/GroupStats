var oneDayBack = new Date();
oneDayBack.setDate(oneDayBack.getDate()-1);
var twoDayBack = new Date();
twoDayBack.setDate(twoDayBack.getDate()-1);
var threeDayBack = new Date();
threeDayBack.setDate(threeDayBack.getDate()-1);
var fourDayBack = new Date();
fourDayBack.setDate(fourDayBack.getDate()-1);
var fiveDayBack = new Date();
fiveDayBack.setDate(fiveDayBack.getDate()-1);

var oneSend = 0;
var twoSend = 0;
var threeSend = 0;
var fourSend = 0;
var fiveSend = 0;

var oneReceive = 0;
var twoReceive = 0;
var threeReceive = 0;
var fourReceive = 0;
var fiveReceive = 0;

//get user me. save the ID
var x = 0; //number of groups counter
var y = 0; //page counter
var a = true;
while(a)
{
	//Get page of 10 groups one page at a time
	for (i=0;i<10;i++)
	{
		if(Date(group[i].updated_at)>=(oneDayBack))
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

// get a single page of x groups

for (i=0;i<x;i++)
{
	y = 0;
	a = true;
	while(a)
	{
		//Get messages of ith group with messages name = mess one page at a time
		for(h;h<20;h++)
		{
			if(Date(mess.response[h].created_at)>=(oneDayBack))
			{
				if(mess.response[h].user_id!=(/*current user id*/)
				{
					oneSend++;
				}
				else
				{
					oneReceive++;
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

x = 0; //number of groups counter
y = 0; //page counter
a = true;
while(a)
{
	//Get page of 10 groups one page at a time
	for (i=0;i<10;i++)
	{
		if(Date(group[i].updated_at)>=(twoDayBack))
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

// get a single page of x groups

for (i=0;i<x;i++)
{
	y = 0;
	a = true;
	while(a)
	{
		//Get messages of ith group with messages name = mess one page at a time
		for(h;h<20;h++)
		{
			if(Date(mess.response[h].created_at)>=(twoDayBack))
			{
				if(mess.response[h].user_id!=(/*current user id*/)
				{
					twoSend++;
				}
				else
				{
					twoReceive++;
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

x = 0; //number of groups counter
y = 0; //page counter
a = true;
while(a)
{
	//Get page of 10 groups one page at a time
	for (i=0;i<10;i++)
	{
		if(Date(group[i].updated_at)>=(threeDayBack))
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

// get a single page of x groups

for (i=0;i<x;i++)
{
	y = 0;
	a = true;
	while(a)
	{
		//Get messages of ith group with messages name = mess one page at a time
		for(h;h<20;h++)
		{
			if(Date(mess.response[h].created_at)>=(threeDayBack))
			{
				if(mess.response[h].user_id!=(/*current user id*/)
				{
					threeSend++;
				}
				else
				{
					threeReceive++;
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

x = 0; //number of groups counter
y = 0; //page counter
a = true;
while(a)
{
	//Get page of 10 groups one page at a time
	for (i=0;i<10;i++)
	{
		if(Date(group[i].updated_at)>=(fourDayBack))
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

// get a single page of x groups

for (i=0;i<x;i++)
{
	y = 0;
	a = true;
	while(a)
	{
		//Get messages of ith group with messages name = mess one page at a time
		for(h;h<20;h++)
		{
			if(Date(mess.response[h].created_at)>=(fourDayBack))
			{
				if(mess.response[h].user_id!=(/*current user id*/)
				{
					fourSend++;
				}
				else
				{
					fourReceive++;
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

x = 0; //number of groups counter
y = 0; //page counter
a = true;
while(a)
{
	//Get page of 10 groups one page at a time
	for (i=0;i<10;i++)
	{
		if(Date(group[i].updated_at)>=(fiveDayBack))
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

// get a single page of x groups

for (i=0;i<x;i++)
{
	y = 0;
	a = true;
	while(a)
	{
		//Get messages of ith group with messages name = mess one page at a time
		for(h;h<20;h++)
		{
			if(Date(mess.response[h].created_at)>=(fiveDayBack))
			{
				if(mess.response[h].user_id!=(/*current user id*/)
				{
					fiveSend++;
				}
				else
				{
					fiveReceive++;
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


