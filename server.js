const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');

app.listen(8080, function () {
  console.log('listening on 8080');
});

app.use(cors());

// 정적 파일 서빙
app.use(express.json());
app.use(express.static(path.join(__dirname, 'my-app/build')));

// var indexRouter = require('./my-app/src/routes/index');
// app.use('/', indexRouter);

app.post('/test', (req, res) => {
  console.log(req.body);
});

module.exports = app;
