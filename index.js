import express from 'express'
import cors from 'cors'

import { addMovie, queryMovies, deleteMovie, updateMovie } from './movies.js'

const app = express()
app.use(cors())
app.use(express.json()) // for us to receive json in body for POST

const PORT = 4001

// CRUD
app.post('/add-movie', async (req, res) => {
  const result = await addMovie(req.body)
  res.send(result)
})

app.put('/update-movie', async (req, res) => {
  const result = await updateMovie(req.query, req.body)
  res.send(result)
})

app.delete('/delete-movie', async (req, res) => {
  const result = await deleteMovie(req.query)
  res.send(result)
})

app.get('/get-movies', async (req, res) => {
  const data = await queryMovies()
  res.send(data)
})

app.get('/', (req, res) => {
  res.send('Hey here is my API!!')
})

app.listen(PORT, () => {
  console.log('API running on ', PORT)
})
