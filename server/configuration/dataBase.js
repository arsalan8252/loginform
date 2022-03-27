const mongoose = require("mongoose");

const url = 'mongodb+srv://arsalan:arsalan@user.sqxt9.mongodb.net/registrationLogin?retryWrites=true&w=majority'

const db = () => {
  mongoose.connect(
    url,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (error, connection) => {
      if (!error) {
        console.log("database successfully connected");
      } else {
        console.log("error while connecting to database");
      }
    }
  );
};
db();
module.exports = db
