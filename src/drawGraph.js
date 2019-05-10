const climbingRoutes = require('../data/climbingRoutes.json')

var chart = bb.generate({
    data: {
      json: {
        routes: climbingRoutes.map(({ routes }) => routes),
        ascents: climbingRoutes.map(({ ascents }) => ascents),
      },
      // définir les axes y et y2
      axes: {
        routes: 'y',
        ascents: 'y2',
      },
      type: 'bar',
    },
    axis: {
      x: {
        type: 'category',
        categories: climbingRoutes.map(({ country }) => country)
      },
      // Nommer l'axe y
      y: {
        label: 'Routes',
      },
      // Montrer et nommer l'axe y2
      y2: {
        show: true,
        label: 'Ascents',
      }
    },
    bindto: chart,
  })