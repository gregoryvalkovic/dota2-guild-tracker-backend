const express = require('express');
const Scraper = require('./scraper').GuildScraper;
const GAMBOYS_ID = require('./constants').constants.GAMBOYS_ID;
const app = express();


app.get('/api/members',
	async (req, res) => {
		const scraper = new Scraper(GAMBOYS_ID);
		const members = await scraper.getMembers();
		res.send(members);
	}
);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
