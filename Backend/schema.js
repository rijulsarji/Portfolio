const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  name: { type: String },
  description: { type: String },
  github: { type: String },
  website: { type: String },
  image: { type: String },
  color: { type: String },
});

const Projects = mongoose.model("Project", ProjectSchema);

module.exports = { Projects };
