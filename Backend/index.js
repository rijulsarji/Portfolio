const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: "./config.env" });

const app = express();
app.use(express.json());

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening to ${port}...`));

const dbURi = process.env.DATABASE;
mongoose
  .connect(dbURi)
  .then(() => console.log(`Connected to database...`))
  .catch((err) => console.log(`Error while connecting to database: ${err}`));

const { Projects } = require("./schema");

app.get("/", (req, res) => {
  res.send("redirect to /xyz :)");
});

app.post("/input-projects", (req, res) => {
  const data = new Projects(req.body);
  res.send(data);
  data
    .save()
    .then(() => console.log(`Project saved successfully`))
    .catch((err) => console.log(`Error while saving project: ${err}`));
});

app.get("/projects", (req, res) => {
  Projects.find()
    .then((response) => res.send(response))
    .catch((err) => console.log(`Error while retrieving projects: ${err}`));
});
