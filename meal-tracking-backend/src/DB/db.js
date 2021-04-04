// import { MongoClient } from 'mongodb';

// const DB_NAME = 'meal-tracker';

// export const db = {
//     _dbClient: null,
//     connect: async function(url) {
//         const client = await MongoClient.connect(url, {
//             poolSize: 10,
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         this._dbClient = client;
//     }, 
//     getConnection: function() {
//         if (!this._dbClient) {
//             console.log('You need to call the connect() function first!');
//             process.exit(1);
//         }

//         return this._dbClient.db(DB_NAME);
//     },
// }

const mongoose = require('mongoose');
//import { mongoose } from 'mongoose';

const URI ="mongodb+srv://dbUser:dbUser@cluster0.l9hdt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI, {
     useUnifiedTopology: true,
     useNewUrlParser: true
  });
  console.log('db connected..!');
};

module.exports = connectDB; 