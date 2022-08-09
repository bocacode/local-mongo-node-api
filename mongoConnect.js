import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'
dotenv.config()

// If you'll be using the credentials then rename the credentials-example.js to credendials.js and add your info
//import { uri } from "./credentials.js"

// If you're connecgting to your local server on your laptop
// const uri = 'mongodb://localhost:27017'

// If you're using the .env file with a MONGO_URI entry
const uri = process.env.MONGO_URI

const client = new MongoClient(uri) // creating client mongo instance
const db = client.db('bocacode-test') // connecting to db = bocacod-test

export default db