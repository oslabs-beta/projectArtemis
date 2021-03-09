const express = require('express');
const cors = require('cors');
const app = express();

const PORT = 3000;

// import routes

app.get('/', (req, res) => {
  res.send('hello world');
})

//parsing body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// bad route error handling
app.use((req, res) => {
  console.log('we are in a bad route');
  res.sendStatus(418);
});

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`The server is running on localhost ${PORT}`);
});
