function jonsScript() {
  console.log('here is Jons script')
  // console.log('module from myscript', module)
}

// module.export will only export the last function
// arrow function
const secondFunction = () => {
  console.log('here is my second function')
}

const car = {
  make: 'GMC',
  color: 'Metallic Blue',
  year: 2016,
  engine: 6.4,
  gasHogger: true
}

exports = { jonsScript, secondFunction, car }


