const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./dataModel.js')
const controller = require('./controllers.js');

//const apiRouter = require('./routes/api');

const PORT = 3000;

// app.use(cors());
app.use(cors({ origin: true }));
app.use(express.json()); //req.body
app.use(express.urlencoded({ extended: true }));

/**
 * handle requests for static files
 */
app.use('/dist', express.static(path.resolve(__dirname, '../dist')));
// app.get('/', (req, res) => {
//   res.status(200).sendFile(path.join(__dirname,'../index.html'));
// });


//ROUTES


//get all entries
app.get('/', 
  controller.getInfo, (req, res) => {
  res.status(200).json(res.locals.info)
  });

//create an entry
app.post('/entry', 
  controller.addEntry,(req,res) => {
  res.status(200).json(res.locals.add);
});

//update an entry
app.patch('/:id',
  controller.updateEntry, (req, res) => {
    res.status(200).json(res.locals.update);
  });


//delete an entry
app.delete('/:id',
  controller.deleteEntry, (req, res) => {
    res.status(200).json(res.locals.removed);
  })



app.use('*', (req, res) => res.sendStatus(404));

app.use((err, req, res, next) => {
  const defaultErr =
  {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' }, 
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log('ERROR: ', errorObj.log);
  const errorStatus = errorObj.status || 500;
  return res.status(errorStatus).send(errorObj.message);
});



app.listen(PORT, () => {
  console.log('listening on 3000');
});

module.exports = app;