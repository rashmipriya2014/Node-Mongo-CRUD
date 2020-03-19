const  express =  require("express");
const app  =  express();
const  ejs   = require("ejs");
const routes = require("./routes/web");
var mongo = require('mongodb');
var mongoose = require('mongoose');
var db = mongoose.connection;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.use('/',routes);

app.use(express.static('./public'));

app.listen(3000,()=>console.log("Server is running "));