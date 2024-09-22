const express = require("express");
const db = require("./db");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hello from server");
  console.log("hello from server");
});



const personRoutes = require('./routers/personRoutes')
app.use('/person',personRoutes)
const menuRoutes = require('./routers/menuRoutes');
app.use('/menu',menuRoutes);
app.listen(8080, () => {
  console.log("server is started on 8080");
});
