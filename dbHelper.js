const sqlite3 = require('sqlite3').verbose();

const DB_PATH = './db/guild.db';
const INIT_FLAG = "--init"


const main = (args) => {
	
	if (args.length === 3 && args[2] === INIT_FLAG) {
		init();
	}
	else {
		printHelp();
	}
};


// Creates and clears a new database
const init = () => {

	let db = new sqlite3.Database(DB_PATH,
		(error) => {
			if (error) {
					console.log("Error opening database");
					handleError(error);
			}
		}
	);
	
	db.run('DROP TABLE IF EXISTS members; ' +
		   'CREATE TABLE members(name text, last_played text, profile_pic text',

		(error) => {
			if (error) {
				console.log("Error dropping table");
				handleError(error);
			}
		}
	);

	db.close();
};


const printHelp = () => {

	console.log("To clear/ create a new database, " +
	            "use the flag " + INIT_FLAG
	);
};


const handleError = (error) => {
	console.error(error.message);
}


if (require.main === module) {
	main(process.argv);
}
