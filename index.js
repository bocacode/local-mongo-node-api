import express from 'express'
import cors from 'cors'

import { addMovie, queryMovies, deleteMovie, updateMovie } from './movies.js'

const app = express()
app.use(cors())
app.use(express.json()) // for us to receive json in body for POST

// const process.env.PORT = 4001
app.listen(process.env.PORT, () => console.log('API running on ', process.env.PORT))

app.post('/add-movie', addMovie)

app.put('/update-movie', updateMovie)

app.delete('/delete-movie', deleteMovie)

app.get('/get-movies', queryMovies)

app.get('/', (req, res) => {
  res.send('Hey here is my API!!')
})

