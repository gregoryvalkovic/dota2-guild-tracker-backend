const Scraper = require('./scraper').GuildScraper;

var scraper = new Scraper('45879');
console.log(scraper.getMembers());
