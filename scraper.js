const cheerio = require('cheerio');
const puppeteer = require('puppeteer');


class GuildScraper {


	constructor(guildID) {

		this.NAME_SELECTOR = ".sc-fzoyTs";
		this.LAST_PLAYED_SELECTOR = ".cDHAWy";
		this.PIC_SELECTOR = ".kHDuQj";
		this.URL = 'https://stratz.com/guilds/' + guildID + '/members'; 
		console.log(this.URL);
	}


	getPageContent = async () => {
		
		try {
			const browser = await puppeteer.launch();
			const page = await browser.newPage();

			await page.goto(this.URL);
			await page.waitForSelector('[__typename=GuildMemberType]');

			const content = await page.content();

			await browser.close();
			return content;
		}
		catch(error) {
			console.log("Error scraping: " + error.message);
		}
	};
	

	// Return a JSON array of current members
	getMembers = async () => {

		const content = await this.getPageContent();
		const $ = cheerio.load(content);

		const memberz = ($('[__typename=GuildMemberType]'));
		let members = [];

		$('[__typename=GuildMemberType]').each((index, elem) => {
			members[index] = {
				name:       $(elem).find(this.NAME_SELECTOR).text(),
				lastPlayed: $(elem).find(this.LAST_PLAYED_SELECTOR).text(),
				profilePic: $(elem).find(this.PIC_SELECTOR).find("img").attr("src")
			};
		});

		return members;
	};
}

exports.GuildScraper = GuildScraper;
