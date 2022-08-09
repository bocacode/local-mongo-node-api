import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'
dotenv.config()
 
// import uri  from "./credentials.js"

// const uri = 'mongodb://localhost:27017'

const uri = process.env.MONGO_URI

const client = new MongoClient(uri) // creating client mongo instance
const db = client.db('bocacode-test') // connecting to db = bocacod-test

export default db