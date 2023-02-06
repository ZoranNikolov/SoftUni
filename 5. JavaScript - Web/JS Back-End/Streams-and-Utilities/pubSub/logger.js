const eventBus = require("./eventBus");

const log = (data) => {
	console.log(`Logger: ${data.url}`);
};

eventBus.subscribe("request", log);
