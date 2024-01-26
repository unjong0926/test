const path = require('path');

exports.main = async (req, res) => {
  res.sendFile(path.join(__dirname, '../../my-app/build/index.html'));
};
