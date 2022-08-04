import movies from './mongoConnect.js'

export const queryMovies = async () => {
  // movies.find().toArray((err, result) => {
  //   console.log(result)
  // })

  const allMovies = await movies.find().toArray()

  return allMovies
}

export const addMovie = async (body) => {
  const movieAdded = await movies.insertOne(body)
  return movieAdded
}

export async function updateMovie(query, body) {
  const movieUpdated = await movies.findOneAndUpdate(query, { $set: body })
  return movieUpdated
}

export async function deleteMovie(movieToDelete) {
  // movies.findOneAndDelete({ name: 'Frozen' }, (err, result) => {
  //   console.log(result)
  // })

  const movieDeleted = await movies.findOneAndDelete(movieToDelete)
  return movieDeleted
}
