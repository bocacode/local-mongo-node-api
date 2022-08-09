import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'
dotenv.config()

const uri = process.env.MONGO_URI
// uri = 'mongodb://localhost:27017'

const client = new MongoClient(uri) // creating client mongo instance
const db = client.db('bocacode-test') // connecting to db = bocacod-test

export default db