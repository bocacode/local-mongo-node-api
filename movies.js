import db from './mongoConnect.js'

const movies = db.collection('movie')

export const queryMovies = async (req, res) => {
  try {
    const allMovies = await movies.find().toArray() // toArray() mongo needs it

    res.send(allMovies)
  } catch (err) {
    throw err
  }
}

export const addMovie = async (req, res) => {
  if (req.body.name) {
    try {
      const movieAdded = await movies.insertOne(req.body)
      res.send(movieAdded)
    } catch (err) {
      throw err
    }
  } else {
    res.send('REQ sent without BODY name')
  }
}

export async function updateMovie(req, res) {
  if (req.query.name && req.body.name) {
    try {
      const movieUpdated = await movies.findOneAndUpdate(req.query, { $set: req.body })
      res.send(movieUpdated)
    } catch (err) {
      throw err
    }
  } else {
    res.send('REQ has not Query Params with NAME and/or BODY name')
  }
}

export async function deleteMovie(req, res) {
  if (req.query.name) {
    try {
      const movieDeleted = await movies.findOneAndDelete(req.query)
      res.send(movieDeleted)
    } catch (err) {
      throw err
    }
  } else {
    res.send('REQ has no NAME in query params')
  }
}
