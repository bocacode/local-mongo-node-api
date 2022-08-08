import express from 'express'
import cors from 'cors'

import { addMovie, queryMovies, deleteMovie, updateMovie } from './movies.js'
import { addEmployee } from './employees.js'

const app = express()
app.use(cors())
app.use(express.json()) // for us to receive json in body for POST

const PORT = 4001

// movie routes
app.post('/add-movie', addMovie)
app.put('/update-movie', updateMovie)
app.delete('/delete-movie', deleteMovie)
app.get('/get-movies', queryMovies)

// employee routes
app.post('/add-employee', addEmployee)


app.get('/', (req, res) => res.send('Hey here is my API!!'))
app.listen(PORT, () => console.log('API running on ', PORT))
