import { MongoClient } from 'mongodb'

// const uri = 'mongodb://localhost:27017'
const uri = 'mongodb+srv://jonathans:password!234@cluster0.whytnmo.mongodb.net/test'

const client = new MongoClient(uri, { monitorCommands: true }) // creating client mongo instance

client.on('commandStarted', event => console.debug(event))
client.on('commandSucceeded', event => console.debug(event))
client.on('commandFailed', event => console.debug(event))

const db = client.db('bocacode-test') // connecting to db = bocacode-test

export default db

// todo
/***
1. add monitorcommands to read all events
2. export db - to reuse within each collection file
3. simplify index.js extracting functions 
4. add if conditional
5. add Try catch
6. deploy to prod 
 */
