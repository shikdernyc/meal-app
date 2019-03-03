const { User } = require('../models');

let create = async function(username, password) {
  try {
    let user = await User.create({ username, password });
    return user;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  create
};
