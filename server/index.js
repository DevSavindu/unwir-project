// const express = require('express');
// const app = express();
// const mongoose = require('mongoose');
// const cors = require('cors');
// const UserModel = require('./models/Users');

// // Connect to MongoDB Atlas
// const mongoURI = 'mongodb+srv://admin:admin123@cluster0.ko7q0id.mongodb.net/';
// mongoose.connect(mongoURI);

// const db = mongoose.connection;

// db.on('error', (error) => {
//   console.error('MongoDB connection error:', error);
// });

// db.once('open', () => {
//   console.log('Connected to MongoDB Atlas');
// });

// app.use(cors());
// app.use(express.json());

// app.get("/users", (req, res) => {
//   UserModel.find({})
//     .then(users => res.json(users))
//     .catch(err => res.json(err));
// });

// app.get('/getUser/:id', (req, res) => {
//   const id = req.params.id;
//   UserModel.findById({_id:id })
//     .then(users => res.json(users))
//     .catch(err => res.json(err));
// });

// app.put('/updateUser/:id', (req, res) =>{
//   const id = req.params.id;
//   UserModel.findByIdAndUpdate({_id:id}, {
//     name: req.body.name, 
//     email: req.body.email, 
//     age: req.body.age
//   })
//   .then(users => res.json(users))
//   .catch(err => res.json(err));
// });

// app.delete('/deleteUser/:id', (req, res) =>{
//   const id = req.params.id;
//   UserModel.findByIdAndDelete({_id:id })
//   .then(response => res.json(response))
//   .catch(err => res.json(err));
// });

// app.post("/createUser", (req, res) => {
//   const { name, email, age } = req.body;
//   UserModel.create({ name, email, age })
//     .then(users => res.json(users))
//     .catch(err => res.json(err));
// });

// app.listen(3001, () => {
//   console.log("Server is Running");
// });
