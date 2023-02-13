const { MongoClient } = require("mongodb");
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

// Database Name
const dbName = "catShelter";

async function main() {
	// Use connect method to connect to the server
	console.log("Connecting to db...");
	await client.connect();
	console.log("Connected successfully to server");
	const db = client.db(dbName);
	const collection = db.collection("cats");

	// the following code examples can be pasted here...
	const cats = await collection.find().toArray();
	console.log(cats);

	return "done.";
}

main()
	.then(console.log)
	.catch(console.error)
	.finally(() => client.close());
