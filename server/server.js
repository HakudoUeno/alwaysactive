<<<<<<< HEAD
 const express = require('express');
const path = require('path');

const PORT = 3000;

const router = require('./routes/router');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, '../build')));

  app.get('/', (req, res) => res.status(200).sendFile(path.join(__dirname, '../build/index.html')));
}

// app.get('/', (req, res) => {
//   (
//     res.status(200).sendFile(path.join(__dirname, '../client/index.html'))
//   );
// });

app.use('/test', router);

app.use((req, res) => {
  res.sendStatus(404);
});

app.use((err, req, res) => {
  console.log(err);
  res.status(500).json(err);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
=======
 const express = require('express');
const path = require('path');

const PORT = 3000;

const router = require('./routes/router');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, '../build')));

  app.get('/', (req, res) => res.status(200).sendFile(path.join(__dirname, '../build/index.html')));
}

// app.get('/', (req, res) => {
//   (
//     res.status(200).sendFile(path.join(__dirname, '../client/index.html'))
//   );
// });

app.use('/', router);

app.use((req, res) => {
  res.sendStatus(404);
});

app.use((err, req, res) => {
  console.log(err);
  res.status(500).json(err);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
>>>>>>> 19f7e4df52f4e16f41f0eebf4ba5f28d5f3fe820
