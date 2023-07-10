const db = require('./dataModel.js');

const controller = {};

//when receive return data from fetch request from FEnd save returned data ID in variable and assign unique ID to each DOM element

controller.getInfo = (req, res, next) => {
  const queryText = `SELECT * from dailyintake;`;
  //console.log('hi');
  db.query(queryText)
  .then(data => {
    //console.log(data)
    res.locals.info = data.rows
    return next();    
  })
  .catch((err => {
    return next({log: 'unable to get info'});
  }))
}

controller.addEntry = (req, res, next) => {
  const {date, time, breastmilk, formula, spitup} = req.body;
  console.log(req.body);
  const queries = [date, time, breastmilk, formula, spitup];
  const queryText = `INSERT INTO dailyintake (date, time, breastmilk, formula, spitup) 
  VALUES ($1, $2, $3, $4, $5) RETURNING *;`;
  db.query(queryText, queries)
    .then(data => {
      // console.log("hello")
      // console.log(data + "returned");
      res.locals.add = data.rows[0];
      return next();
    })
    .catch((err => {
      return next({log: 'unable to add entry'});
    }))
  
  // list all columns then VALUES and the corresponding values to those cloumns
  // in req.body the keys would be the columns and the values the VALUES
  // INSERT INTO dailyIntake (pills, grams, liquids) VALUES (4, 60, water)

  // db.query('INSERT INTO dailyIntake', params, callback){
}

controller.updateEntry = (req, res, next) => {
  console.log('updating?')
  const id = req.params.id;
  console.log({id})
  const { date, time, breastmilk, formula, spitup } = req.body;
  const queries = [date, time, breastmilk, formula, spitup, id];
  const queryText = `UPDATE dailyintake SET date = $1,
  time = $2, breastmilk = $3, formula = $4, spitup = $5
  WHERE dailyintake.id = $6 RETURNING *;`;
  db.query(queryText, queries)
  .then(data => {
    console.log(data);
    res.locals.update = data.rows[0];
    return next();
  })
  .catch((err => {
    return next({log: 'unable to update'});
  }))
}


controller.deleteEntry = (req, res, next) => {
  console.log("deleting?")
  const id = req.params.id;
  //const {ident} = req.body;
  console.log(id);
  const query = [id];
  const queryText = `DELETE FROM dailyintake WHERE dailyintake.id = $1 RETURNING *;`;
  db.query(queryText, query) 
  .then(data => {
    console.log(data);
    res.locals.removed = data.rows;
    return next();
  })
  .catch((err => {
    return next({log: 'unable to delete'})
  }))
}


module.exports = controller;