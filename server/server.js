// const authRouter = require("./routes/auth.router.js");
// const router = require("./routes/sellerRoute.js");
const express = require("express");
const mongoose = require("mongoose");
// const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

require("dotenv").config({ path: "./.env" });
const port = process.env.PORT || 5000;

// use middleware
// use middleware
app.use(
  cors({
    origin: "http://localhost:5173", // Change this to the origin of your frontend application
    // origin: 'http://localhost:3001',
    credentials: true, // Enable credentials (cookies, authorization headers, etc.)
  })
);

app.use(express.json());
// app.use(cookieParser());

// app.use('/uploads', express.static(__dirname + '/uploads'));
// mongodb connection
const con = require("./db/connection.js");

const UserModel = require('./models/Users');


app.get("/users", (req, res) => {
  UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err));
});

app.get('/getUser/:id', (req, res) => {
  const id = req.params.id;
  UserModel.findById({_id:id })
    .then(users => res.json(users))
    .catch(err => res.json(err));
});

app.put('/updateUser/:id', (req, res) =>{
  const id = req.params.id;
  UserModel.findByIdAndUpdate({_id:id}, {
    name: req.body.name, 
    email: req.body.email, 
    age: req.body.age
  })
  .then(users => res.json(users))
  .catch(err => res.json(err));
});

app.delete('/deleteUser/:id', (req, res) =>{
  const id = req.params.id;
  UserModel.findByIdAndDelete({_id:id })
  .then(response => res.json(response))
  .catch(err => res.json(err));
});

app.post("/createUser", (req, res) => {
  const { name, email, age } = req.body;
  UserModel.create({ name, email, age })
    .then(users => res.json(users))
    .catch(err => res.json(err));
});

// using routes
//authentication route
// app.use(authRouter);
// app.use("/api/seller", require("./routes/sellerRoute.js"));
// app.use("/api/contactus", require("./routes/contactus.router.js"))

con
  .then((db) => {
    if (!db) return process.exit(1);

    // listen to the http server
    const server = app.listen(port, () => {
      console.log(`Server is running on port: http://localhost:${port}`);
    });

    app.on("error", (err) =>
      console.log(`Failed To Connect with HTTP Server : ${err}`)
    );
    // error in mondb connection
  })
  .catch((error) => {
    console.log(`Connection Failed...! ${error}`);
  });
