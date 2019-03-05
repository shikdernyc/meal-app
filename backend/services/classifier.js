const axios = require('axios');

const classify = async function(location, isUrl) {
  try {
    let response = await axios.post('http://classifier:8084/api/classify', {
      location,
      isUrl
    });
    // console.log(response['data']);
    return response['data'];
  } catch (error) {
    throw error;
  }
};

module.exports = { classify };
