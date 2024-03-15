// index.js (or your backend server file)
const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
// const bodyParser = require("body-parser");
const userModel = require('./models/User');

require("dotenv").config();

const app = express();

const port = process.env.PORT || 8071;

app.use(express.json());
app.use(cors());
// app.use(bodyParser.json({limit: '10mb'}));
// app.use(bodyParser.urlencoded({extended:true, limit:'10mb'}));

const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{});

const connection = mongoose.connection;

connection.once("open", () =>{
    console.log("Mongodb Connection Success!");
})


// Route to fetch user details by email
app.get('/user/:email', (req, res) => {
  const email = req.params.email;
  userModel.findOne({ email: email })
    .then(user => {
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ error: "User not found" });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  userModel.findOne({ email: email })
    .then(user => {
      if (user) {
        if (user.password === password) {
          res.json("Success");
        } else {
          res.json("Password incorrect");
        }
      } else {
        res.json("No record existed");
      }
    });
});

app.post('/signup', (req, res) => {
  userModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err));
});

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
})