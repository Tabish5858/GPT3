import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const app = express();
const port = 3000;

// Connect to MongoDB

mongoose.connect('mongodb://localhost:27017/myapp');

// Define a Mongoose schema and model
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  dob: Date,
  age: Number,
  password: String,
});

const User = mongoose.model('User', userSchema);

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", async (req, res) => {
  const user = new User(req.body);
  console.log(req.body);
  try {
    await user.save();
    res.send("User saved successfully");
  } catch (err) {
    res.status(500).send("Error saving user");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});