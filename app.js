const http = require('http');
const Scraper = require('./scraper').GuildScraper;

var scraper = new Scraper('45879');


// Do this every six hours and store in database
// Then requests to API will pull from local database
(async () => {
	const members = await scraper.getMembers();
	console.log(members);
})();
