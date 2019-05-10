const R = require('ramda')
const data = require('./crag.json')
const writeJson = require('./writeJson')

const getContinents = R.path(['data', 'visible', 0, 'children'])

const continents = getContinents(data)

const getPays = R.prop('children')

const pays = R.flatten(continents.map(getPays))

//console.log(pays)

const filterCountries = feature => ({
    country: R.prop(['name'], feature),
    ascents: R.prop(['numberAscents'], feature),
    routes: R.prop(['numberRoutes'], feature),
    gearStyles: R.prop(['gearStyles'], feature)
  })

  const list = pays.map(filterCountries);

  writeJson('climbingRoutes.json', list)