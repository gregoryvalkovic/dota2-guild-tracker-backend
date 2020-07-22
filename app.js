const Scraper = require('./scraper').GuildScraper;

var scraper = new Scraper('45879');

(async () => {
	const members = await scraper.getMembers();
	console.log(members);
})();
