const cheerio = require('cheerio');
const puppeteer = require('puppeteer');


class GuildScraper {

	constructor(guildID) {
		this.URL = 'https://stratz.com/guilds/' + guildID + '/members'; 
	}


	getPageContent = async() => {
		const browser = await puppeteer.launch();
		const page = await browser.newPage();

		await page.goto(URL);
		await page.waitForSelector('[__typename=GuildMemberType]');

		const content = page.content();

		await browser.close();
		return content;
	};


	// Return a JSON array of current members
	getMembers = () => {

		const $ = cheerio.load(this.getPageContent());
		return $('[__typename=GuildMemberType]').html();

	};
}

exports.GuildScraper = GuildScraper;
