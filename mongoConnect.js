import { MongoClient } from 'mongodb'

const uri = 'mongodb://localhost:27017'

const client = new MongoClient(uri, { monitorCommands: true }) // creating client mongo instance

client.on('commandStarted', event => console.debug(event))
client.on('commandSucceeded', event => console.debug(event))
client.on('commandFailed', event => console.debug(event))

const db = client.db('bocacode-test') // connecting to db = bocacode-test

export default db


// 1. add monitorcommands to read all events
// 2. export db - to reuse within each collection file
// 3. simplify index.js extracting functions 
// 4. add if conditional
// 5. add Try catch