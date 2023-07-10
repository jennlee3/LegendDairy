const { Pool } = require('pg');

const PG_URI = 'postgres://hefhimyt:L_WkrMtmWgra1oY-2_UQmw-5JIoJeUeA@raja.db.elephantsql.com/hefhimyt';

const pool = new Pool({
  connectionString: PG_URI
});



module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
}; 








// const mongoose = require('mongoose');

// const MONGO_URI = 'mongodb+srv://jennlee3:testing123@cluster0.axkxbxp.mongodb.net/?retryWrites=true&w=majority';

// mongoose
//   .connect(MONGO_URI, {
//     // options for the connect method to parse the URI
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     // sets the name of the DB that our collections are part of
//     dbName: 'feedTracker',
//   })
//   .then(() => console.log('Connected to Mongo DB.'))
//   .catch((err) => console.log(err));

//   const Schema = mongoose.Schema;

//   const dailySchema = new Schema({
//     BreastMilk : Number,
//     Formula : Number,
//     SpitUp : Number
//   }) 

//   const Daily = mongoose.model('daily', dailySchema);

//   modules.export = {
//     Daily
//   }
