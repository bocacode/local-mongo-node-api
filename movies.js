import movies from './mongoConnect.js'

export const queryMovies = async (req, res) => {
  const allMovies = await movies.find().toArray() // mongo needs it
  res.send(allMovies)
}

export const addMovie = async (req, res) => {
  const movieAdded = await movies.insertOne(req.body)
  res.send(movieAdded)
}

export async function updateMovie(req, res) {
  const movieUpdated = await movies.findOneAndUpdate(req.query, { $set: req.body })
  res.send(movieUpdated)
}

export async function deleteMovie(req, res) {
  const movieDeleted = await movies.findOneAndDelete(req.query)
  res.send(movieDeleted)
}
