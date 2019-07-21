const express = require("express");
const massive = require("massive");
require("dotenv").config();
const app = express();
const controller = require("./controller");
const { SERVER_PORT, CONNECTION_STRING } = process.env;

//creates an instance using massive
//taking data from HEROKU

massive(CONNECTION_STRING)
  .then(dbInstance => {
    console.log("connected to Heroku Db via Massive");
    app.set("db", dbInstance);
  })
  .catch(err => console.log(err));

app.get("/api/inventory", controller.getInventory);

app.use(express.json());

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}`);
});
