import db from './mongoConnect.js'

const movies = db.collection('movie') // getting the movie collection

export const queryMovies = async (req, res) => {
  const allMovies = await movies.find().toArray()
  res.send(allMovies)
}

export const addMovie = async (req, res) => {
  await movies.insertOne(req.body)
  const allMovies = await movies.find().toArray()
  res.send(allMovies)
}

export async function updateMovie(req, res) {
  await movies.findOneAndUpdate(req.query, { $set: req.body })
  const movieUpdated = await movies.find(req.query).toArray()
  res.send(movieUpdated)
}

export async function deleteMovie(req, res) {
  await movies.findOneAndDelete(req.query)
  const allMovies = await movies.find().toArray()
  res.send(allMovies)
}
