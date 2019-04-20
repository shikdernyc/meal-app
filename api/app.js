let express = require('express');
let bodyParser = require('body-parser');
let router = require('./routes');
const errorHandler = require('./handlers/error');

let app = express();
const PORT = process.env.PORT || 8000;

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(bodyParser.json());
app.use(router);
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
