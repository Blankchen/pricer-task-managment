const express = require('express');
const cors = require("cors");
const routes = require('./routes/task');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
  origin: '*'
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// middleware
app.use(express.static("build"));

routes(app); //register the route

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});