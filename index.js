const express = require('express')
const bodyParser = require("body-parser");
const mongoose = require('mongoose')
const app = express();

mongoose.set( "useNewUrlParser", true );
mongoose.set( "useFindAndModify", false );
mongoose.set( "useCreateIndex", true );
mongoose.set( "useUnifiedTopology", true );
mongoose.connect(
  "mongodb+srv://takwa:azerty123@@projet.lv9vm.mongodb.net/<dbname>?retryWrites=true&w=majority"
  );
mongoose.connection.on( "connected", () => {
	console.log( "DB Connected" );
} );
mongoose.connection.on( "error", ( err ) => {
	console.log( "DB Connection failed with - ", err );
} );

const voitureRouter= require('./routes/Voiture.routes')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/voiture', voitureRouter)
const port = 3000;
app.listen(port,()=>{
    console.log("serveur marche");
})
