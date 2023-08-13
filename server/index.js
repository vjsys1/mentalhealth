const express = require("express");
const mongoose = require("mongoose")

const app = express();
const bodyParser = require('body-parser')


//! DB connection 

let port = 5008 ;
const db = "mongodb+srv://imvj:Imvj941@cluster0.zjmoxkg.mongodb.net/calm?retryWrites=true&w=majority";
//SERVER STARTED
app.listen(port, () => {
    console.log(`Listening at port : ${port}`)
})
// const router = express.Router();
const cors = require('cors');

// models 
const contact = require("./models/contact");
const post = require("./models/post");

// const { posts } = require("moongose/models");

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.set("strictQuery", true)
mongoose.connect(db).then(() => { console.log("Connection successful") }).catch((err) => { if (err) console.log(err) })


app.use("contact",contact)
app.use("post",post)

//! routing to posts
const router = require("./routes/posts");
app.use("/newpost",router);
app.use("/",router);

//! routing to contact
const routers = require("./routes/contact");
app.use("/",routers);











