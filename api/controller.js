const properties = require('../package.json');
const distance = require('../service/distance');

const controllers = {
  about: (req, res) => {
    const aboutInfo = {name: properties, version: properties.version}
    res.json(aboutInfo);
  },
  getDistance: (req, res) => {
    distance.find(req, res, (err, dist) => {
      if (err) {
        res.send(err);
      }
      res.json(dist);
    });
  }
}

module.exports = controllers;