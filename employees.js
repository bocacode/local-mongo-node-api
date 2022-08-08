import db from './mongoConnect.js'

const employees = db.collection('employees')

export const addEmployee = async (req, res) => {
  if (req.body.firstName && req.body.lastName && req.body.position) {
    try {
      const newEmployee = await employees.insertOne(req.body)
      res.send(newEmployee)
    } catch (err) {
      res.send('error adding employee to database')
      throw err
    }
  } else {
    res.send('REQUEST body needs to have a firstName, lastName and position field!')
  }
}
