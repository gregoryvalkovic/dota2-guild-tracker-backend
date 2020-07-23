#Dota 2 Guild Tracker

An API for getting info on how active the members of a Dota 2 guild are

Note: The guild id can be found by viewing your guilds page on stratz.com, the integer in the URL is the guild id

Plans for the API:

***Get members***

Returns an array of the guild members of a given guild

* URL:
	* /members?guild_id={id} - returns an array of members for the given guild
* Method: GET
* Param:
	* {id} = string value
* Success Response:
	```json
	[
		{
			"name"        : "MacGregorr",
			"lastPlayed"  : "4 hours ago"
			"profilePic   : "https://..."
		},
		{
			...
		}
	]
	```

***Get inactive members***

Returns an array of guild members that have not played in a given time

***Get private members***

Returns an array of the guild members that have not made their profile public. These users' last played time is not available
