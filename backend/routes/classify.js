const Router = require('express').Router();
const { classify } = require('../services/classifier');

const uploadLocation = `${__dirname.substr(
  0,
  __dirname.lastIndexOf('/')
)}/uploads`;

Router.route('/').post(async function(req, res, next) {
  const imageFile = req.files.image;
  const location = `${uploadLocation}/${imageFile.name}`;
  imageFile.mv(location, function(err) {
    if (err) return res.status(500).json({ error: err });
  });
  try {
    const result = await classify(imageFile.name, false);
    // console.log(result);
    res.status(200).json(result);
  } catch (error) {
    // console.log(error);
    throw error;
  }
});

module.exports = Router;
