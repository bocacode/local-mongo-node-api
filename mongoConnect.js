import { MongoClient } from 'mongodb'

const uri = 'mongodb://localhost:27017'

const client = new MongoClient(uri) // creating client mongo instance
const db = client.db('bocacode-test') // connecting to db = bocacod-test
const movies = db.collection('movie') // getting the movie collection

export default movies