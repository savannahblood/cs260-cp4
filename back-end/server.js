const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb+srv://dbuser:lane2$@cs260.nf3rb.mongodb.net/mermanager?retryWrites=true&w=majority', {
  useNewUrlParser: true
});

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  username: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

app.post('/api/users', async (req, res) => {
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  });
  try {
    await user.save();
    console.log(user.firstName + " " + user.lastName);
    res.send(user);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get('/api/users', async (req, res) => {
  try {
    let users = await User.find();
    res.send(users);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/api/users/:id', async (req, res) => {
  try {
    await User.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.put('/api/users/:id', async (req, res) => {
  try {
    var user = await User.findOne({
      _id: req.params.id
    });
    firstName = req.body.firstName;
    lastName = req.body.lastName;
    email = req.body.email;
    username = req.body.username;
    password = req.body.password;

    user.save();
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(3000, () => console.log('Server listening on port 3000!'));
