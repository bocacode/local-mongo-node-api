import { MongoClient } from 'mongodb'
 
// import { uri } from ""

const uri = 'mongodb://localhost:27017'

const client = new MongoClient(uri) // creating client mongo instance
const db = client.db('bocacode-test') // connecting to db = bocacod-test

export default db