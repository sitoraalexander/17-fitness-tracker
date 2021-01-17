const express = require("express");
const path = require("path");
const logger = require("morgan");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;


const databaseUrl = "17-fitness-tracker";
const collections = ['17-fitness-tracker'];
 


app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(require("./routes/api-route"));
app.use(require("./routes/html-route"));

mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/17-fitness-tracker", { 
  
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});