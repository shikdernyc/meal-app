require('dotenv').config();
let express = require('express');
let bodyParser = require('body-parser');
let router = require('./routes');
const errorHandler = require('./handlers/error');
const {connectToDB} = require('./models')

const PORT = process.env.PORT || 8000;

let app = express();

connectToDB().then(()=>{
  console.log("Successfully connected to Database")
}).catch(error=>{
  console.log("Unable to connect to database")
  console.log(error)
});


app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

app.use("/api", router);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
